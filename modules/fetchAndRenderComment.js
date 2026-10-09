import { commentRender } from './commentRender.js'
import { updateComments } from './users.js'

export const fetchAndRenderComment = () => {
    return fetch('https://wedev-api.sky.pro/api/v2/Platina77/comments')
        .then((response) => {
            if (response.status === 500) {
                throw new Error('Сервер сломался')
            }
            return response.json()
        })
        .then((data) => {
            updateComments(data.comments)
            commentRender()
        })
}
