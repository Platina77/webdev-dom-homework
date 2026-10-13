import { addCommentRender } from './addCommentRender.js'
import { initCommentsListeners, initLikesListeners } from './addListener.js'
import { registration } from './api.js'
import { updateName, updateToken } from './auth.js'
import { fetchAndRenderComment } from './fetchAndRenderComment.js'
import { renderCommentsPage } from './renderCommentsPage.js'

export const renderRegistration = () => {
    const containerEl = document.querySelector('.container')

    containerEl.innerHTML = `<h3>Регистрация</h3>
        <br />
        <div class="registration-form">
          <input type="text" id="login-input" class="input" 
          placeholder="Логин" />
          <input type="text" id="name-input" class="input" placeholder="Имя" />
          <input
            type="password"
            id="password-input"
            class="input"
            placeholder="Пароль"
        />
        <button class="button" id="registration-button">Зарегистрироваться</button></div>`

    const loginInputEl = document.querySelector('#login-input')
    const nameInputEl = document.querySelector('#name-input')
    const passwordInputEl = document.querySelector('#password-input')
    const registrationButtonEl = document.querySelector('#registration-button')

    registrationButtonEl.addEventListener('click', () => {
        registration({
            login: loginInputEl.value,
            name: nameInputEl.value,
            password: passwordInputEl.value,
        })
            .then((data) => {
                updateToken(data.user.token)
                updateName(data.user.name)

                renderCommentsPage()

                const commentsEl = document.querySelector('.comments')
                commentsEl.textContent = 'Загрузка комментариев...'

                fetchAndRenderComment()
                addCommentRender()
                initCommentsListeners()
                initLikesListeners()
            })
            .catch((error) => {
                alert(error.message)
            })
    })
}
