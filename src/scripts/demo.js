let initialTouchPos = null
let lastTouchPos = null;
let rafPending = false;
let diff = 0;

let sliderWidth = 0;
let defaultWidth = 0;
let DEFAULT_STATE = defaultWidth;
let currentState = diff;
const demosCtl = document.querySelectorAll('.demos-slider--ctl');
const demoSlider = document.querySelector('.demos-slider');
const demosCard = document.querySelectorAll('.demos-slider--card');
const demosWrapper = document.querySelector('.demos-wrapper')
const demosAccordionCtl= document.querySelectorAll('.demo--accordion__ctl');

const demosAccordion = document.querySelectorAll('.demo--accordion');

function closeAccordion(){
    demosAccordion.forEach((detailEl) =>{
        if (detailEl.open){
            detailEl.removeAttribute("open");

        }
    });
}

function carouselWithButton(){
    const steps = Math.round(sliderWidth / defaultWidth); 
    let currentState = 0;
    demosCtl[1].addEventListener('click', () =>{
            currentState+=1;
            addCtl(0); 
            demoSlider.style.transform = `translateX(-${((sliderWidth - defaultWidth)  / steps) * currentState}px)`;
            if(currentState == steps){
                demosCtl[1].classList.add('hidden');
                return;
            }
        });
        demosCtl[0].addEventListener('click', () =>{
              currentState-=1
              demoSlider.style.transform = `translateX(-${((sliderWidth - defaultWidth)  / steps) * currentState}px)`
              addCtl(1)
            if(currentState < 1){
              demosCtl[0].classList.add('hidden');
        }
        });

        function addCtl(indx){
            if(demosCtl[indx].classList.contains('hidden')){
              demosCtl[indx].classList.remove('hidden');
             }
        }
}

function gestureStart({pageX, touches, hespointerId, targetTouches}){
        //evt.preventdefault();
        if(touches && touches.length > 1) return; // more than one touhes let touch move handle that
        initialTouchPos = copyTouch(targetTouches, pageX);
        demosCard.forEach((el) => {
        //el.addEventListener('mousemove', gestureMove);
        //el.addEventListener('mouseup', gestureEnd);
    });
        // if(window.PointerEvent){
        //    target.setPointerCapture(pointerId);
        // } 
        }
           
    function gestureMove({touches, pageX}){
        if(!initialTouchPos) return;
        lastTouchPos = copyTouch(touches, pageX);
        rafPending = true;

        window.requestAnimationFrame(nextState);
}

function addListeners(){
demosCard.forEach(el => {
    if(window.PointerEvent){
        el.addEventListener('pointerdown', gestureStart);
        el.addEventListener('pointermove', gestureMove);
        el.addEventListener('pointerup', gestureEnd);
         ;
    } else {
        el.addEventListener('touchstart', gestureStart);
        el.addEventListener('touchmove', gestureMove);
        el.addEventListener('touchend', gestureEnd);
         ;
        //el.addEventListener('mousedown', gestureStart);
       };
       });
       demosAccordionCtl.forEach((accordionCtl) => {
        document.addEventListener('click', closeAccordion);
       })

    }

function gestureEnd({touches}){
    //evt.preventDefault();
    if(touches && touches.length > 0) return;
    // if(window.PointerEvent){
    //     target.releasePointerCapture(pointerId);
    // }

    rafPending = false;
    diff = 0;
    initialTouchPos = null;
    }

    function copyTouch(touches, pageX){
        if(touches && touches.length > 0){
       return {
                x:touches[0].pageX,
       }
        } else{
            return {
                x:pageX
            }
        }
    }


    function dispatch(){
        const LEFT_SIDE = 'leftSide';
        const RIGHT_SIDE = 'rightSide';
    diff = lastTouchPos.x - initialTouchPos.x; 
    if(diff < 0){
        return LEFT_SIDE;
    } 
        return RIGHT_SIDE;
}

function nextState(){
    if(!rafPending) return
   if(dispatch() == 'leftSide'){
     if(Math.abs(currentState + diff) > (sliderWidth - defaultWidth)) return;
        currentState+=diff
        demoSlider.style.transform = `translate(${currentState}px)`;
        
    } else if(dispatch() == 'rightSide'){
       if(currentState + diff > 0) {
       return;
       }
       currentState+=diff;
        demoSlider.style.transform = `translate(${currentState}px)`;
        
    }      
   rafPending = false;
 
}

    

function init(){
 defaultWidth = demosWrapper.clientWidth;
 sliderWidth = demoSlider.clientWidth;
 addListeners();
 carouselWithButton();
}


  document.addEventListener("DOMContentLoaded", init);         