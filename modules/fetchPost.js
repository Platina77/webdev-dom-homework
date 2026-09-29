export const fetchPost = (newComment) => {
    return fetch('https://wedev-api.sky.pro/api/v1/Platina77/comments', {
        method: 'post',
        body: JSON.stringify(newComment),
    }).then((response) => {
        console.log('POST status:', response.status)

        if (response.status === 500) {
            return fetchPost(newComment)
        }

        if (response.status === 400) {
            throw new Error('Введите корректные данные')
        }

        return response.json()
    })
}
