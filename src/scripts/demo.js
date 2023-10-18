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
    })
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

    initialTouchPos = getGesturePointFromEvt(evt)
  }

  function gestureMove(evt) {
    if (!initialTouchPos) return
    lastTouchPos = getGesturePointFromEvt(evt)
    if (rafPending) return
    rafPending = true
    console.log(
      `The current transition value is: ${window
        .getComputedStyle(demoSlider)
        .getPropertyValue('transform')} and Diff is:${diff}`
    )
    window.requestAnimationFrame(nextState)
  }

  function addListeners() {
    if (window.PointerEvent) {
      // POinter Event is catch all (mouse, touch, stylus, ...) so we choose it
      // Add pointer event on all the element we want to listen for
      demosCard.forEach((el) => {
        el.addEventListener('pointerdown', gestureStart)
        el.addEventListener('pointermove', gestureMove)
        el.addEventListener('pointerup', gestureEnd)
      })
    } else if (window.TouchEvent) {
      // Just do touch;
      demosCard.forEach((el) => {
        el.addEventListener('touchstart', gestureStart)
        el.addEventListener('touchmove', gestureMove)
        el.addEventListener('touchend', gestureEnd)
      })
    }
    carouselWithButton()
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
    diff = initialTouchPos.x - lastTouchPos.x
    if (diff < 0) {
      return {
        action: actions.left,
      }
    }
    if (diff > 0) {
      return {
        action: actions.right,
      }
    }
  }

  function nextState() {
    if (!rafPending) return
    var transformStyle
    const { action } = dispatchAction()
    switch (action) {
      case 'LEFT_SIDE':
        diff = initialTouchPos.x - lastTouchPos.x
        if (Math.abs(currentState + diff) >= sliderWidth - defaultWidth) return
        currentState += diff
        transformStyle = `translateX(${currentState}px)`
        demoSlider.style.webkitTransform = transformStyle
        demoSlider.style.MozTransform = transformStyle
        demoSlider.style.msTransform = transformStyle
        demoSlider.style.transform = transformStyle
        rafPending = false
      case 'RIGHT_SIDE':
        diff = initialTouchPos.x - lastTouchPos.x
        if (currentState + diff > 0) return
        currentState += diff
        transformStyle = `translateX(${currentState}px)`
        demoSlider.style.webkitTransform = transformStyle
        demoSlider.style.MozTransform = transformStyle
        demoSlider.style.msTransform = transformStyle
        demoSlider.style.transform = transformStyle
        rafPending = false
      default:
        rafPending = false
    }
  }

  function init() {
    defaultWidth = demosWrapper.clientWidth
    sliderWidth = demoSlider.clientWidth
    addListeners()
  }

  document.addEventListener('DOMContentLoaded', init)
})()
