export default function(){

  const rain = new Audio('assets/Chuva.wav')
  const coffee = new Audio('assets/Cafeteria.wav')
  const fire = new Audio('assets/Lareira.wav')
  const forest = new Audio('assets/Floresta.wav')

  const forestSlider = document.getElementById('forestSlider')
  const raintSlider = document.getElementById('rainSlider')
  const fireSlider = document.getElementById('fireSlider')
  const coffeeSlider = document.getElementById('coffeeSlider')

  forestSlider.oninput = function() {
    forest.volume = (forestSlider.value) / 100
  }
  fireSlider.oninput = function() {
    fire.volume = (fireSlider.value) / 100
  }
  rainSlider.oninput = function() {
    rain.volume = (rainSlider.value) / 100
  }
  coffeeSlider.oninput = function() {
    coffee.volume = (coffeeSlider.value) / 100
  }




function rainPlay(){
  rain.loop = true
  rain.play()
  fire.pause()
  forest.pause()
  coffee.pause()
  
}

function firePlay(){
  fire.loop = true
  fire.play()
  forest.pause()
  rain.pause()
  coffee.pause()
}

function forestPlay(){
  forest.loop = true
  forest.play()
  fire.pause()
  rain.pause()
  coffee.pause()
}

function coffeePlay(){
  coffee.loop = true
  coffee.play()
  fire.pause()
  rain.pause()
  forest.pause()
}



return {
  rainPlay,
  firePlay,
  forestPlay,
  coffeePlay
}
}