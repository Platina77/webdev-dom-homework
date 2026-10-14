export const login = ({ login, password }) => {
    return fetch('https://wedev-api.sky.pro/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ login, password }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Неверный логин или пароль')
        }
        return response.json()
    })
}

export const registration = ({ login, name, password }) => {
    return fetch('https://wedev-api.sky.pro/api/user', {
        method: 'POST',
        body: JSON.stringify({ login, name, password }),
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('Пользователь с таким логином уже существует')
        }
        return response.json()
    })
}
