import { commentRender } from './commentRender.js'
import { updateComments } from './users.js'

export const fetchAndRenderComment = () => {
    return fetch('https://wedev-api.sky.pro/api/v1/Platina77/comments')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            updateComments(data.comments)
            commentRender()
        })
}
