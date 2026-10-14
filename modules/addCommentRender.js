import { userName } from './auth.js'

export const addCommentRender = () => {
    const addFormEl = document.querySelector('.add-form')

    addFormEl.innerHTML = `<input
          type="text"
          class="add-form-name"
          value="${userName}" readonly
        />
        <textarea
          type="textarea"
          class="add-form-text"
          placeholder="Введите ваш коментарий"
          rows="4"
        ></textarea>
        <div class="add-form-row">
          <button class="add-form-button">Написать</button>
        </div>`
}
