import { comments } from './users.js'

export const commentRender = () => {
    let commentsEl = document.querySelector('.comments')
    commentsEl.innerHTML = comments
        .map(
            (comment) =>
                `<li class="comment" data-index=${comment.id}>
          <div class="comment-header">
            <div>${comment.author.name}</div>
            <div>${comment.date}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.text}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index=${comment.id}></button>
            </div>
          </div>
        </li>`,
        )
        .join('')
}
