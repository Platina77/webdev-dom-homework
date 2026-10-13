export let userToken = localStorage.getItem('userToken')

export const updateToken = (newToken) => {
    userToken = newToken
    localStorage.setItem('userToken', newToken)
}

export let userName = localStorage.getItem('userName')

export const updateName = (newName) => {
    userName = newName
    localStorage.setItem('userName', newName)
}
