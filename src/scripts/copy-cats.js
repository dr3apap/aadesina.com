function handleCopyCat(){
const COPYCATS_CTL = document.querySelectorAll('[data-copy-code="true"]');

function Copy(e){
const copyCtl = e.currentTarget;
const textArea = Object.assign(document.createElement('textarea'), {

           value:copyCtl.previousElementSibling.firstChild.textContent,       
           className:'sr-only'
    });
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);

    const LABEL = copyCtl.querySelector('.sr-only');
    LABEL.textContent = 'Copied!';
    copyCtl.dataset.copied = true;
    setTimeout(() => {
        LABEL.textContent = 'Copy to clipboard'
        copyCtl.dataset.copied = false;
    }, 500);
};

    COPYCATS_CTL.forEach(copyCtl => copyCtl.addEventListener('click', Copy));

}

document.addEventListener('DOMContentLoaded', handleCopyCat);