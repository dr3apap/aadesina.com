;(function () {
  // Local variable/state;
  let initialTouchPos = null
  let lastTouchPos = null
  let rafPending = false
  let diff = 0
  const actions = {
    left: 'LEFT_SIDE',
    right: 'RIGHT_SIDE',
    neutral: 'NO_ACTION',
  }
  let sliderWidth = 0
  let defaultWidth = 0
  let DEFAULT_STATE = defaultWidth
  let currentState = diff

  // Elements listening for Events;
  const demosCtl = document.querySelectorAll('.demos-slider--ctl')
  const demoSlider = document.querySelector('.demos-slider')
  const demosCard = document.querySelectorAll('.demos-slider--card')
  const demosWrapper = document.querySelector('.demos-wrapper')
  const demosAccordionCtl = document.querySelectorAll('.demo--accordion__ctl')
  const demosAccordion = document.querySelectorAll('.demo--accordion')

  // Events Handlers
  function closeAccordion() {
      demosAccordion.forEach((detailEl) => {
    if (detailEl.open) {
      detailEl.removeAttribute('open')
    }
  });
  }

  function carouselWithButton() {
    const steps = Math.round(sliderWidth / defaultWidth)
    let currentState = 0
    demosCtl[1].addEventListener('click', () => {
      currentState += 1
      addCtl(0)
      demoSlider.style.transform = `translateX(-${
        ((sliderWidth - defaultWidth) / steps) * currentState
      }px)`
      if (currentState == steps) {
        demosCtl[1].classList.add('hidden')
        return
      }
    })
    demosCtl[0].addEventListener('click', () => {
      currentState -= 1
      demoSlider.style.transform = `translateX(-${
        ((sliderWidth - defaultWidth) / steps) * currentState
      }px)`
      addCtl(1)
      if (currentState < 1) {
        demosCtl[0].classList.add('hidden')
      }
    })

    function addCtl(indx) {
      if (demosCtl[indx].classList.contains('hidden')) {
        demosCtl[indx].classList.remove('hidden')
      }
    }
  }

  function gestureStart(evt) {
    evt.preventDefault()
    if (evt.touches && evt.touches.length > 1) return // more than one touhes let touch move handle that
    if (window.PointerEvent) {
      evt.target.setPointerCapture(evt.pointerId)
    }
    //else {
    //  document.addEventListener('mousemove', gestureMove, true)
    //  document.addEventListener('mouseup', gestureEnd, true)
    //}
    initialTouchPos = getGesturePointFromEvt(evt)
  }

  function gestureMove(evt) {
    if (!initialTouchPos) return
    lastTouchPos = getGesturePointFromEvt(evt)
    if (rafPending) return
    rafPending = true
    window.requestAnimationFrame(nextState)
  }

  function addListeners() {
    if (window.PointerEvent) {
      console.log(`Yeah there is pointer Event:${window.PointerEvent}`)
      // POinter Event is catch all (mouse, touch, stylus, ...) so we choose it
      // Add pointer event on all the element we want to listen for
      demosCard.forEach((el) => {
        el.addEventListener('pointerdown', gestureStart)
        el.addEventListener('pointermove', gestureMove)
        el.addEventListener('pointerup', gestureEnd)
      })
    } else if (window.TouchEvent) {
      console.log(`Yeah there is pointer Event:${window.TouchEvent}`)
      // Just do touch;
      demosCard.forEach((el) => {
        el.addEventListener('touchstart', gestureStart)
        el.addEventListener('touchmove', gestureMove)
        el.addEventListener('touchend', gestureEnd)
      })
    } else {
      carouselWithButton()
    }

    demosAccordion.forEach((accordionCtl) => {
      accordionCtl.addEventListener('click', closeAccordion)
    })
  }

  function gestureEnd(evt) {
    evt.preventDefault()
    if (evt.touches && evt.touches.length > 0) return
    rafPending = false
    diff = 0
    initialTouchPos = null

    if (window.PointerEvent) {
      evt.target.releasePointerCapture(evt.pointerId)
    }
  }

  function getGesturePointFromEvt(evt) {
    if (evt.touches) {
      const { touches } = evt.targetTouches
      return {
        x: touches[0].clientX,
        y: touches[0].clientY,
      }
    } else {
      return {
        x: evt.clientX,
        y: evt.clientY,
      }
    }
  }

  function dispatchAction() {
    // diff of last tocuch and initial touch equal to current
    // state
    diff = lastTouchPos.x - initialTouchPos.x
    if (diff < 0) {
      return {
        action: actions.left,
        diff,
      }
    }
    if (diff > 0) {
      return {
        action: actions.right,
        diff,
      }
    }
  }

  function nextState() {
    if (!rafPending) return
    const { diff, action } = dispatchAction()
    switch (action) {
      case 'LEFT_SIDE':
        if (Math.abs(currentState + diff) > sliderWidth - defaultWidth) return
        currentState += diff
        demoSlider.style.transform = `translate(${currentState}px)`
        rafPending = false
        return
      case 'RIGHT_SIDE':
        if (currentState + diff >= 0) return
        currentState += diff
        demoSlider.style.transform = `translate(${currentState}px)`
        rafPending = false
        return
      default:
        rafPending = false
        return
    }
  }

  function init() {
    defaultWidth = demosWrapper.clientWidth
    sliderWidth = demoSlider.clientWidth
    addListeners()
  }

  document.addEventListener('DOMContentLoaded', init)
})()
