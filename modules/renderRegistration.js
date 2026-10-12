export const renderRegistration = () => {
    const containerEl = document.querySelector('.container')

    containerEl.innerHTML = `<h3>Регистрация</h3>
        <br />
        <div class="login-form">
          <input type="text" id="login-input" class="input" 
          placeholder="Логин" />
          <input type="text" id="name-input" class="input" placeholder="Имя" />
          <input
            type="password"
            id="password-input"
            class="input"
            placeholder="Пароль"
        />
        <button class="button" id="login-button">Зарегистрироваться</button>`
}
