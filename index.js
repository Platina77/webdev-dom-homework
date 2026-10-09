/* import { commentRender } from './modules/commentRender.js' */
/* import { addCommentRender } from './modules/addCommentRender.js' */
/* import { initCommentsListeners } from './modules/addListener.js' */
import { authLinkRender } from './modules/authLinkRender.js'
/* import { updateComments } from './modules/users.js' */
import { fetchAndRenderComment } from './modules/fetchAndRenderComment.js'

const commentsEl = document.querySelector('.comments')
commentsEl.textContent = 'Загрузка комментариев...'

fetchAndRenderComment().catch((error) => {
    if (!navigator.onLine) {
        alert('Нет соединения с интернетом')
        return
    }
    if (error.message === 'Сервер сломался') {
        alert(error.message)
        return
    }
})

authLinkRender()
/* addCommentRender() */
/* initCommentsListeners() */
