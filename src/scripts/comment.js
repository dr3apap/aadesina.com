import sanitizeHtml from 'sanitize-html';
import remarkGfm from 'remark-gfm';
import { comment } from 'postcss';
function proccessReaderComment() {
  const commentForm = document.querySelector('#comments--form');
  const commentFormCtl = document.querySelector('.comments--form__ctl');


// Grab the raw comment from the dom and pass it down to 
// middleware function for sanitization and verification of derogatories words;
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var form = new FormData(commentForm, commentFormCtl);
    var fullName = form.get("fullname");
    var email = form.get("email");
    var message = form.get("message");
    var subscribe = form.get("subscribe");
    //console.log(`subscribe fullName, email,message${subscribe, fullName,email,message}`, typeof subscribe);

    if (fullName.length > 0 && email.length > 0 && message.length > 0 && subscribe == 'on'){
        const { match , lines } = isCommentMarkDown(message);
        if (match){
          //console.table(`Subscribe value: ${subscribe} and match: ${match} lines:${lines}`);
            // var sanitizeComment = sanitizeHtml(remarkGfm(message));
            // console.log(sanitizeComment);
        } else {
            if(lines){
            // var sanitizeComment = commentSanitizer(message);
            // console.log(sanitizeComment);
            //console.table(lines, match);
            }
        }
        commentForm.reset();
    }

    
  });


  // After sanitizing the markdown and remarking it to html 
  // walk the html and extract the texts value to check for dergatory words and curse word.
  function commentSanitizer(node){
     var rawComment = [];
    return () => {
            rawComment.push(node.value);
    }
  }

// Get the raw comment and check if it's markdown or just ordinary texts;
function isCommentMarkDown(str){
    //var lines = /^((\w+?)\W\1+?(?:\n\r|\n|\r))$/.exec(str);
    var lines = str.split(/\r\n|\n|\r+?/g);
    var match = /^[#\-~!?`\[\]\*\+=\|\(\)\{\}\<\>\\]+?/.test(lines[1]);
    if (match){
    console.log(`comment from is commendmarkDown: ${lines}`);
        return {
            match,
            lines
        }
    }
        return {
            match,
            lines
        }
};

}


document.addEventListener('DOMContentLoaded', proccessReaderComment);