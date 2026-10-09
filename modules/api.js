export const login = ({ login, password }) => {
    return fetch('URL', {
        method: 'POST',
        body: JSON.stringify({ login, password }),
    })
}
