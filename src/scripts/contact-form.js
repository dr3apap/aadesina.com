function processContactData() {
  const contactForm = document.querySelector('#contact')
  const contactFormCta = document.querySelector('.contact--cta')
  const url = contactForm.action
  console.log(url)
  async function handleContact(formData) {
    const res = await fetch('/.netlify/functions/contact-form', formData)
    console.log(res)
    const feedBack = document.createElement('p')
    if (res.status == '200' || res.status == '201') {
      feedBack.style = 'text-text-fluid--2 text-text-1 bg-surface-2'
      feedBack.textContent =
        'Thank you for contacing me. Looking forward to working with you!'
      contactFormCta.insertAdjacentElement('afterend', feedBack)
      contactForm.reset()
    } else {
      feedBack.style = 'text-text-fluid--2 text-text-1 bg-surface-2'
      feedBack.textContent =
        'Sorry something went wrong, please submit the form again'

      contactFormCta.insertAdjacentElement('afterend', feedBack)
    }
  }

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const contactData = new FormData(e.target)
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
      //headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    }

    handleContact(contactPayload)
  })
}
document.addEventListener('DOMContentLoaded', processContactData)
