export default function Controls({
  btnRain,
  btnFire,
  btnForest,
  btnCoffee,
  btnDarkModeOff,
  btnDarkModeOn,
  rainSlider,
  fireSlider,
  forestSlider,
  coffeeSlider,
  body,
  minutesDisplay,
  secondsDisplay,
  display,
  btnMinus,
  btnPlay,
  btnStop,
  btnPlus

}) {

  let dkModeStatus = 0 //0 = desligado, 1 = ligado

  function darkModeToggle() {
    btnDarkModeOn.classList.toggle('hide')
    btnDarkModeOff.classList.toggle('hide')
  }
  function dkModeOn() {
    body.classList.add("dkModeBg")
    dkModeStatus = 1
    btnRain.classList.add('dkMode', 'dkModeSvgColor')
    btnForest.classList.add('dkMode', 'dkModeSvgColor')
    btnFire.classList.add('dkMode', 'dkModeSvgColor')
    btnCoffee.classList.add('dkMode', 'dkModeSvgColor')
    fireSlider.classList.add('dkModeSlider')
    rainSlider.classList.add('dkModeSlider')
    forestSlider.classList.add('dkModeSlider')
    coffeeSlider.classList.add('dkModeSlider')
    btnPlay.classList.add('dkModeSvgColor')
    btnStop.classList.add('dkModeSvgColor')
    btnPlus.classList.add('dkModeSvgColor')
    btnMinus.classList.add('dkModeSvgColor')
    minutesDisplay.classList.add('dkModeDisplay')
    secondsDisplay.classList.add('dkModeDisplay')
    display.classList.add('dkModeDisplay')

    if (btnRain.classList.contains('on')){
      btnRain.classList.remove('dkMode')
    }
    if (btnForest.classList.contains('on')){
      btnForest.classList.remove('dkMode')
    }
    if (btnFire.classList.contains('on')){
      btnFire.classList.remove('dkMode')
    }
    if (btnCoffee.classList.contains('on')){
      btnCoffee.classList.remove('dkMode')
    }
    if (rainSlider.classList.contains('active')){
      rainSlider.classList.remove('dkModeSlider')
    }
    if (forestSlider.classList.contains('active')){
      forestSlider.classList.remove('dkModeSlider')
    }
    if (fireSlider.classList.contains('active')){
      fireSlider.classList.remove('dkModeSlider')
    }
    if (coffeeSlider.classList.contains('active')){
      coffeeSlider.classList.remove('dkModeSlider')
    }
    

  }
  function dkModeOff() {
    body.classList.remove("dkModeBg")
    dkModeStatus = 0
    btnRain.classList.remove('dkMode', 'dkModeSvgColor')
    btnForest.classList.remove('dkMode', 'dkModeSvgColor')
    btnFire.classList.remove('dkMode', 'dkModeSvgColor')
    btnCoffee.classList.remove('dkMode', 'dkModeSvgColor')
    fireSlider.classList.remove('dkModeSlider')
    rainSlider.classList.remove('dkModeSlider')
    forestSlider.classList.remove('dkModeSlider')
    coffeeSlider.classList.remove('dkModeSlider')
    btnPlay.classList.remove('dkModeSvgColor')
    btnStop.classList.remove('dkModeSvgColor')
    btnPlus.classList.remove('dkModeSvgColor')
    btnMinus.classList.remove('dkModeSvgColor')
    minutesDisplay.classList.remove('dkModeDisplay')
    secondsDisplay.classList.remove('dkModeDisplay')
    display.classList.remove('dkModeDisplay')

  }

  function rainOn() {
    if(dkModeStatus === 1) {
      btnRain.classList.remove('dkMode')
      btnForest.classList.add('dkMode')
      btnFire.classList.add('dkMode')
      btnCoffee.classList.add('dkMode')
      fireSlider.classList.add('dkModeSlider')
      rainSlider.classList.remove('dkModeSlider')
      forestSlider.classList.add('dkModeSlider')
      coffeeSlider.classList.add('dkModeSlider')

    }
    btnRain.classList.add('on')
    btnForest.classList.remove('on')
    btnFire.classList.remove('on')
    btnCoffee.classList.remove('on')
    rainSlider.classList.add('active')
    fireSlider.classList.remove('active')
    forestSlider.classList.remove('active')
    coffeeSlider.classList.remove('active')
    

  }
  function fireOn() {
    if(dkModeStatus === 1) {
      btnRain.classList.add('dkMode')
      btnForest.classList.add('dkMode')
      btnFire.classList.remove('dkMode')
      btnCoffee.classList.add('dkMode')
      fireSlider.classList.remove('dkModeSlider')
      rainSlider.classList.add('dkModeSlider')
      forestSlider.classList.add('dkModeSlider')
      coffeeSlider.classList.add('dkModeSlider')

    }
    btnFire.classList.add('on')
    btnForest.classList.remove('on')
    btnRain.classList.remove('on')
    btnCoffee.classList.remove('on')
    fireSlider.classList.add('active')
    rainSlider.classList.remove('active')
    forestSlider.classList.remove('active')
    coffeeSlider.classList.remove('active')
  }
  function forestOn() {
    if(dkModeStatus === 1) {
      btnRain.classList.add('dkMode')
      btnForest.classList.remove('dkMode')
      btnFire.classList.add('dkMode')
      btnCoffee.classList.add('dkMode')
      fireSlider.classList.add('dkModeSlider')
      rainSlider.classList.add('dkModeSlider')
      forestSlider.classList.remove('dkModeSlider')
      coffeeSlider.classList.add('dkModeSlider')

    }
    btnForest.classList.add('on')
    btnRain.classList.remove('on')
    btnFire.classList.remove('on')
    btnCoffee.classList.remove('on')
    forestSlider.classList.add('active')
    fireSlider.classList.remove('active')
    rainSlider.classList.remove('active')
    coffeeSlider.classList.remove('active')
  }
  function coffeeOn() {
    if(dkModeStatus === 1) {
      btnRain.classList.add('dkMode')
      btnForest.classList.add('dkMode')
      btnFire.classList.add('dkMode')
      btnCoffee.classList.remove('dkMode')
      fireSlider.classList.add('dkModeSlider')
      rainSlider.classList.add('dkModeSlider')
      forestSlider.classList.add('dkModeSlider')
      coffeeSlider.classList.remove('dkModeSlider')

    }
    btnCoffee.classList.add('on')
    btnForest.classList.remove('on')
    btnFire.classList.remove('on')
    btnRain.classList.remove('on')
    coffeeSlider.classList.add('active')
    fireSlider.classList.remove('active')
    forestSlider.classList.remove('active')
    rainSlider.classList.remove('active')
  }
  
  return {
    fireOn,
    forestOn,
    rainOn,
    coffeeOn,
    darkModeToggle,
    dkModeOn,
    dkModeOff
  }
}