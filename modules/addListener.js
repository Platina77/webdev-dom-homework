import { comments } from './users.js'
import { commentRender } from './commentRender.js'
import { updateComments } from './users.js'

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

        const newComment = {
            name: addFormNameEl.value
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;'),

            text: addFormTextEl.value
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;'),
        }

        fetch('https://wedev-api.sky.pro/api/v1/Platina77/comments', {
            method: 'post',
            body: JSON.stringify(newComment),
        })
            .then((response) => {
                return response.json()
            })
            .then(() => {
                return fetch(
                    'https://wedev-api.sky.pro/api/v1/Platina77/comments',
                )
            })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                updateComments(data.comments)
                commentRender()
            })

        /* comments.push({
            author: {
                name: addFormNameEl.value
                    .replaceAll('<', '&lt;')
                    .replaceAll('>', '&gt;'),
            },
            date: new Date().toLocaleString('ru-RU'),
            text: addFormTextEl.value
                .replaceAll('<', '&lt;')
                .replaceAll('>', '&gt;'),
            likes: 0,
            isLiked: false, 
        })*/

        addFormNameEl.value = ''
        addFormTextEl.value = ''
    })

    commentsEl.addEventListener('click', (event) => {
        const likeButton = event.target.closest('.like-button')
        if (likeButton) {
            event.stopPropagation()

            const commentElement = likeButton.closest('.comment')
            const id = Number(commentElement.dataset.index)
            /* const counter = document.querySelectorAll('.likes-counter') */
            const comment = comments.find((comment) => comment.id === id)

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

        const id = Number(commentElement.dataset.index)

        const comment = comments.find((comment) => comment.id === id)

        addFormNameEl.value = comment.author.name
        addFormTextEl.value = comment.text
    })
}
