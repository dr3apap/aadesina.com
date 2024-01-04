//const circularEl = document.querySelector('.circular-text');
//console.log(circularEl);
//let textLength = 1; // using Ch for font size which is 10px
//let radius = "1ch";
//let radian = 360 / text.length;
//let circularText = Math.sin(radian *  1/2(Math.PI))
//let origin = circularEl.clientWidth / 2;

const heroQuote  = {...(await (await fetch(`https://api.api-ninjas.com/v1/quotes?category=inspirational`, {
    headers:{
        'X-Api-Key':import.meta.env.INSPIRATIONAL_QUOTE,
    },})).json())[0]};
    const date = new Date();
    const year = date.getFullYear();
    const today = date.getDate();
    const month = date.getMonth()+1;
    const todayDate = `${year}-${month}-${today}`;
    const { url:heroImageSrc, title:heroImageAlt } = (await (await fetch(`https://api.nasa.gov/planetary/apod?api_key=${import.meta.env.NASA_API_KEY}&start_date=${todayDate}&end_date=${todayDate}`)).json())[0]
export default {...heroQuote, heroData:{heroImageSrc, heroImageAlt} };
