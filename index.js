import { addCommentRender } from './modules/addCommentRender.js'
import {
    initCommentsListeners,
    initLikesListeners,
} from './modules/addListener.js'
import { userToken } from './modules/auth.js'
import { authLinkRender } from './modules/authLinkRender.js'
import { fetchAndRenderComment } from './modules/fetchAndRenderComment.js'
import { renderCommentsPage } from './modules/renderCommentsPage.js'

if (userToken) {
    renderCommentsPage()
    addCommentRender()
    initCommentsListeners()
    initLikesListeners()
} else {
    authLinkRender()
}

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
