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
  const demosCtl = document.querySelectorAll('.demos-carousel--slider__cta')
  const demoSlider = document.querySelector('.demos-carousel--slider')
  const demosCard = document.querySelectorAll('.demos-carousel--slider__card')
  const demosWrapper = document.querySelector('.demos-carousel')
  const demosAccordionCtl = document.querySelectorAll('.demo--accordion__ctl')
  const demosAccordion = document.querySelectorAll('.demo--accordion')

  // Events Handlers
  function closeAccordion() {
    demosAccordion.forEach((detailEl) => {
      if (detailEl.open) {
        detailEl.removeAttribute('open')
      }
    })
  }

  // Sliding button for tablet/desktop
  function carouselWithButton() {
    const steps = Math.round(sliderWidth / defaultWidth)
    let currentState = 0
    addCtl('left', 'add')
    addCtl('right', 'hide')
    demosCtl.forEach((demo) => {
      demo.addEventListener('click', (e) => {
        if (steps > currentState && currentState == 0) {
          currentState += 1
          demoSlider.style.transform = `translateX(-${
            ((sliderWidth - defaultWidth) / steps) * currentState
          }px)`
          addCtl('right', 'add')
          if (currentState == steps) addCtl('left', 'hide')
          return
        }
        //addCtl(0)

        if (currentState == steps && currentState > 0) {
          currentState -= 1
          demoSlider.style.transform = `translateX(${
            ((sliderWidth - defaultWidth) / steps) * currentState
          }px)`
          addCtl('left', 'add')
          if (currentState == 0) addCtl('right', 'hide')
          return
        }
      })
    })
  }
  function addCtl(ctlPosition, action) {
    if (ctlPosition == 'right') {
      if (action == 'hide') {
        demosCtl[1].classList.add('hidden')
      } else {
        demosCtl[1].classList.remove('hidden')
      }
    }
    if (ctlPosition == 'left') {
      if (action == 'hide') {
        demosCtl[0].classList.add('hidden')
      } else {
        demosCtl[0].classList.remove('hidden')
      }
    }
  }

  function gestureStart(evt) {
    //evt.preventDefault()
    //if (evt.touches && evt.touches.length > 1) return // more than one touhes let touch move handle that

    //parseInt(
    //.split(',')[4]
    //.trim()
    //)
    // console.log(
    //   `The current transition value is: ${window
    //     .getComputedStyle(demoSlider)
    //     .getPropertyValue('transform')} and currentState is:${currentState}`
    // )

    currentState =
      window.getComputedStyle(demoSlider).getPropertyValue('transform') !=
      'none'
        ? window
            .getComputedStyle(demoSlider)
            .getPropertyValue('transform')
            .split(',')[4]
            .trim()
        : 0

    //if (window.PointerEvent) {
    //  evt.target.setPointerCapture(evt.pointerId)
    //}

    initialTouchPos = getGesturePointFromEvt(evt)
    rafPending = !rafPending
  }

  function gestureMove(evt) {
    if (!initialTouchPos && !rafPending) return
    lastTouchPos = getGesturePointFromEvt(evt)
    nextState()
  }

  function addListeners() {
    if (window.PointerEvent) {
      // POinter Event is catch all (mouse, touch, stylus, ...) so we choose it
      // Add pointer event on all the element we want to listen for
      //demosCard.forEach((el) => {
      demoSlider.addEventListener('pointerdown', gestureStart)
      demoSlider.addEventListener('pointermove', gestureMove)
      demoSlider.addEventListener('pointerup', gestureEnd)
      //})
    } else if (window.TouchEvent) {
      // Just do touch;
      //demosCard.forEach((el) => {
      demoSlider.addEventListener('touchstart', gestureStart)
      demoSlider.addEventListener('touchmove', gestureMove)
      demoSlider.addEventListener('touchend', gestureEnd)
      // })
    }
    demosAccordion.forEach((accordionCtl) => {
      accordionCtl.addEventListener('click', closeAccordion)
    })
  }

  function gestureEnd(evt) {
    evt.preventDefault()
    if (evt.touches && evt.touches.length > 0) return
    if (window.PointerEvent) {
      evt.target.releasePointerCapture(evt.pointerId)
      initialTouchPos = null
      rafPending = false
    }

    initialTouchPos = null
    rafPending = false
  }

  function getGesturePointFromEvt(evt) {
    if (evt.touches) {
      const { touches } = evt.targetTouches
      return {
        x: touches[0].pageX,
        y: touches[0].pageY,
      }
    } else {
      return {
        x: evt.pageX,
        y: evt.pageY,
      }
    }
  }

  function dispatchAction() {
    diff = lastTouchPos.x - initialTouchPos.x
    console.log('Diff: ', diff)
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
    return { action: '' }
  }
  function nextState() {
    var transformStyle
    const { action, diff } = dispatchAction()
    currentState != 0 && (currentState = parseInt(currentState))
    console.log('Inside nextState:', currentState + diff, sliderWidth)
    switch (action) {
      case 'LEFT_SIDE':
        if (Math.abs((currentState += diff)) >= sliderWidth - defaultWidth)
          return
        //currentState += diff
        transformStyle = `translateX(${currentState}px)`
        demoSlider.style.webkitTransform = transformStyle
        demoSlider.style.MozTransform = transformStyle
        demoSlider.style.msTransform = transformStyle
        demoSlider.style.transform = transformStyle
      case 'RIGHT_SIDE':
        if ((currentState += diff) >= 0) return
        //currentState += diff
        transformStyle = `translateX(${currentState}px)`
        demoSlider.style.webkitTransform = transformStyle
        demoSlider.style.MozTransform = transformStyle
        demoSlider.style.msTransform = transformStyle
        demoSlider.style.transform = transformStyle
    }
  }

  function init() {
    defaultWidth = demosWrapper.clientWidth
    sliderWidth = demosCard.length * demosCard[0].clientWidth
    if (sliderWidth > defaultWidth) carouselWithButton()
    addListeners()
  }

  document.addEventListener('DOMContentLoaded', init)
})()
