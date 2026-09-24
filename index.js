import { commentRender } from './modules/commentRender.js'
import { initCommentsListeners } from './modules/addListener.js'
import { updateComments } from './modules/users.js'

fetch('https://wedev-api.sky.pro/api/v1/Platina77/comments', {
    method: 'get',
})
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        updateComments(data.comments)
        commentRender()
    })

initCommentsListeners()
