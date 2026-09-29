/* import { commentRender } from './modules/commentRender.js' */
import { initCommentsListeners } from './modules/addListener.js'
/* import { updateComments } from './modules/users.js' */
import { fetchAndRenderComment } from './modules/fetchAndRenderComment.js'

const commentsEl = document.querySelector('.comments')
commentsEl.textContent = 'Загрузка комментариев...'

fetchAndRenderComment()

/* fetch('https://wedev-api.sky.pro/api/v1/Platina77/comments', {
    method: 'get',
})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        updateComments(data.comments)
        commentRender()
    })
 */
initCommentsListeners()
