import { renderLogin } from './renderLogin.js'

export const authLinkRender = () => {
    const addFormEl = document.querySelector('.add-form')

    addFormEl.innerHTML = `<a href="#" class="link-tologin">Чтобы добавить комментарий, авторизуйтесь</a>`

    const linkToLogin = document.querySelector('.link-tologin')

    linkToLogin.addEventListener('click', (event) => {
        event.preventDefault()
        renderLogin()
    })
}
