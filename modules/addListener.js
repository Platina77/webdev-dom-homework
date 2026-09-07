import { comments } from './users.js'
import { commentRender } from './commentRender.js'

export const initCommentsListeners = () => {
    const addFormNameEl = document.querySelector('.add-form-name')
    const addFormTextEl = document.querySelector('.add-form-text')
    const addFormBtnEl = document.querySelector('.add-form-button')
    const commentsEl = document.querySelector('.comments')
    /* let addFormEl = document.querySelector(".add-form"); */

    addFormNameEl.addEventListener('blur', () => {
        if (addFormNameEl.value === '') {
            addFormNameEl.style.border = '1px solid red'
        }
    })

    addFormTextEl.addEventListener('blur', () => {
        if (addFormTextEl.value === '') {
            addFormTextEl.style.border = '1px solid red'
        }
    })

    addFormBtnEl.addEventListener('click', () => {
        if (addFormNameEl.value === '' || addFormTextEl.value === '') {
            addFormNameEl.style.border = '1px solid red'
            addFormTextEl.style.border = '1px solid red'
            alert(
                'Заполните поля: Введите ваше имя и/или Введите ваш коментарий',
            )
            return
        }

        comments.push({
            userName: addFormNameEl.value
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;'),
            commentDate: new Date().toLocaleString('ru-RU'),
            commentText: addFormTextEl.value
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;'),
            likes: 0,
            isLiked: false,
        })

        addFormNameEl.value = ''
        addFormTextEl.value = ''

        commentRender()
    })

    commentsEl.addEventListener('click', (event) => {
        const likeButton = event.target.closest('.like-button')
        if (likeButton) {
            event.stopPropagation()

            const commentElement = likeButton.closest('.comment')
            const index = Number(commentElement.dataset.index)
            /* const counter = document.querySelectorAll('.likes-counter') */
            const comment = comments[index]

            comment.isLiked = !comment.isLiked

            if (comment.isLiked) {
                ++comment.likes
            } else {
                --comment.likes
            }

            likeButton.classList.toggle('-active-like', comment.isLiked)

            const counterElement =
                commentElement.querySelector('.likes-counter')

            counterElement.textContent = comment.likes
            return
        }

        const commentElement = event.target.closest('.comment')

        if (!commentElement) {
            return
        }

        const index = Number(commentElement.dataset.index)
        const comment = comments[index]

        addFormNameEl.value = comment.userName
        addFormTextEl.value = comment.commentText
    })
}
