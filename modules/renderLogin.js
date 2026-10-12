import { addCommentRender } from './addCommentRender.js'
import { initCommentsListeners } from './addListener.js'
import { login } from './api.js'
import { updateName, updateToken } from './auth.js'
import { fetchAndRenderComment } from './fetchAndRenderComment.js'
import { renderCommentsPage } from './renderCommentsPage.js'

export const renderLogin = () => {
    const containerEl = document.querySelector('.container')

    containerEl.innerHTML = `<h3>Страница входа</h3>
        <br />
        <div class="login-form">
          <input type="text" id="login-input" class="input" placeholder="Логин" />
          <input
            type="password"
            id="password-input"
            class="input"
            placeholder="Пароль"
        />
        <button class="button" id="login-button">Войти</button>
        </div>`

    const loginInputEl = document.querySelector('#login-input')
    const passwordInputEl = document.querySelector('#password-input')
    const loginButtonEl = document.querySelector('#login-button')

    loginButtonEl.addEventListener('click', () => {
        login({
            login: loginInputEl.value,
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
            })
            .catch((error) => {
                alert(error.message)
            })
    })
}
