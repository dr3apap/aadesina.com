;(function (document) {
  const commentResponseCtl = document.querySelectorAll('.comment--ctl')
  const commentForm = document.querySelector('#comments--form-wrapper')
  const commentsWrapper = document.querySelector('.comments')
  const cancelReplyCtl = document.querySelector('.comments--cancel')
  const commentsParentNode = commentsWrapper.querySelector('ul')

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
        const removedCommentForm = commentsWrapper.removeChild(commentForm)
        e.currentTarget
          .closest('.comments--comment')
          .insertAdjacentElement('afterend', removedCommentForm)
        cancelReplyCtl.addEventListener('click', (e) => {
          let canceledCommentForm
          canceledCommentForm =
            commentsParentNode.removeChild(removedCommentForm)
          commentsWrapper.appendChild(canceledCommentForm)
          e.currentTarget.classList.add('hidden')
          click = click ? !click : click
        })
      })
    })
  }

  document.addEventListener('DOMContentLoaded', handleReply)
})(document)
