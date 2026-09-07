import { comments } from './users.js'

export const commentRender = () => {
    let commentsEl = document.querySelector('.comments')
    commentsEl.innerHTML = comments
        .map(
            (comment, index) =>
                `<li class="comment" data-index=${index}>
          <div class="comment-header">
            <div>${comment.userName}</div>
            <div>${comment.commentDate}</div>
          </div>
          <div class="comment-body">
            <div class="comment-text">
              ${comment.commentText}
            </div>
          </div>
          <div class="comment-footer">
            <div class="likes">
              <span class="likes-counter">${comment.likes}</span>
              <button class="like-button ${comment.isLiked ? '-active-like' : ''}" data-index=${index}></button>
            </div>
          </div>
        </li>`,
        )
        .join('')
}
