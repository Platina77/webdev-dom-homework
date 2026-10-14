import { renderLogin } from './renderLogin.js'
import { renderRegistration } from './renderRegistration.js'

export const authLinkRender = () => {
    const addFormEl = document.querySelector('.add-form')

    addFormEl.innerHTML = `<a href="#" class="link-tologin link-main">Чтобы добавить комментарий, авторизуйтесь</a> <br>
    <a href="#" class="link-toreg link-main">Либо зарегистрируйся</a>`

    const linkToLogin = document.querySelector('.link-tologin')
    const linkToReg = document.querySelector('.link-toreg')

    linkToLogin.addEventListener('click', (event) => {
        event.preventDefault()
        renderLogin()
    })

    linkToReg.addEventListener('click', (event) => {
        event.preventDefault()
        renderRegistration()
    })
}
