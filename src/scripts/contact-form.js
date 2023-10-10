function processContactData() {
  const contactForm = document.querySelector('#contact')
  const contactFormCta = document.querySelector('.contact--cta')
  const url = contactForm.action

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const contactData = new FormData(e.target)
    // const body = {
    //     fullname:contactData.get('fullname'),
    //     email:contactData.get('email'),
    //     company:contactData.get('company'),
    //     purpose:contactData.get('fulltime') && 'fulltime' || contactData.get('parttime') && 'parttime' || contactData.get('contract') && 'contract' || contactData.get('other') && 'other',
    //     message:contactData.get('message'),
    //     };

    const contactPayload = {
      body: JSON.stringify({
        fullname: contactData.get('fullname'),
        email: contactData.get('email'),
        company: contactData.get('company'),
        purpose:
          (contactData.get('fulltime') && 'fulltime') ||
          (contactData.get('parttime') && 'parttime') ||
          (contactData.get('contract') && 'contract') ||
          (contactData.get('other') && 'other'),
        message: contactData.get('message'),
      }),
      //headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      method: 'POST',
    }

    const response = await fetch(url, contactPayload)
    console.log(response.status)

    // const feedBack = document.createElement('p');
    // if(response.status == '200' || response.status == '201'){
    //     feedBack.style = 'text-text-fluid--2 text-text-1 bg-surface-2';
    //     feedBack.textContent('Thank you for contacing me. Looking forward to working with you!');
    //     contactFormCta.insertAdjacentElement('afterend', feedBack);
    //     contactForm.reset();
    // } else{
    //     feedBack.style = 'text-text-fluid--2 text-text-1 bg-surface-2';
    //     feedBack.textContent('Sorry something went wrong, please submit the form again');
    //     contactFormCta.insertAdjacentElement('afterend', feedBack);
    // }
  })
}

document.addEventListener('DOMContentLoaded', processContactData)
