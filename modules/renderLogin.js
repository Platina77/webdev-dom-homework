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
        console.log(loginInputEl.value, passwordInputEl.value)
    })
}
