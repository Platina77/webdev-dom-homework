import { comments } from './users.js'
/* import { commentRender } from './commentRender.js'
import { updateComments } from './users.js' */
import { fetchAndRenderComment } from './fetchAndRenderComment.js'
import { fetchPost } from './fetchPost.js'
import { userName } from './auth.js'

export const initCommentsListeners = () => {
    const addFormNameEl = document.querySelector('.add-form-name')
    const addFormTextEl = document.querySelector('.add-form-text')
    const addFormBtnEl = document.querySelector('.add-form-button')

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

            /* forceError: true, */
        }

        addFormBtnEl.disabled = true
        addFormBtnEl.textContent = 'Добавление комментария...'

        fetchPost(newComment)
            .then(() => {
                return fetchAndRenderComment()
            })
            .then(() => {
                addFormNameEl.value = userName
                addFormTextEl.value = ''
            })
            .catch((error) => {
                if (!navigator.onLine) {
                    alert('Нет соединения с интернетом')
                    return
                }
                if (
                    error.message === 'Введите корректные данные' ||
                    error.message === 'Сервер сломался'
                ) {
                    alert(error.message)
                    return
                }
            })
            .finally(() => {
                addFormBtnEl.disabled = false
                addFormBtnEl.textContent = 'Написать'
            })
    })
}

export const initLikesListeners = () => {
    const addFormNameEl = document.querySelector('.add-form-name')
    const addFormTextEl = document.querySelector('.add-form-text')
    const commentsEl = document.querySelector('.comments')

    commentsEl.addEventListener('click', (event) => {
        const likeButton = event.target.closest('.like-button')

        if (likeButton) {
            event.stopPropagation()

            const commentElement = likeButton.closest('.comment')

            const id = commentElement.dataset.index
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

        const id = commentElement.dataset.index

        const comment = comments.find((comment) => comment.id === id)

        addFormNameEl.value = userName
        addFormTextEl.value = comment.text
    })
}
