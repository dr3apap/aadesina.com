;(function (document) {
  const commentResponseCtl = document.querySelectorAll('.comment--ctl')
  const commentForm = document.querySelector('#comments--form-wrapper')
  const comments = document.querySelector('.comments')
  const cancelReplyCtl = document.querySelector('.comments--cancel')

  function handleReply() {
    let click = false
    commentResponseCtl.forEach((comment) => {
      comment.addEventListener('click', (e) => {
        if (click) {
          return
        } else {
          click = !click
          cancelReplyCtl.classList.remove('hidden')
        }
        const removedCommentForm = comments.removeChild(commentForm)
        e.currentTarget
          .closest('.comments--comment')
          .insertAdjacentElement('afterend', removedCommentForm)
        cancelReplyCtl.addEventListener('click', (e) => {
          const canceledCommentForm =
            e.currentTarget.parentElement.parentElement.removeChild(
              removedCommentForm
            )
          comments.appendChild(canceledCommentForm)
          e.currentTarget.classList.add('hidden')
          click = click ? !click : click
        })
      })
    })
  }

  document.addEventListener('DOMContentLoaded', handleReply)
})(document)

