import { apikey_openweathermap } from './varApp.js'

window.addEventListener('load', ()=> {  
    
    let latitude
    let longitude

    let temperaturaValor = document.getElementById('temperaturaValor')
    let temperaturaDescricao = document.getElementById('temperaturaDescricao')

    let localizacao = document.getElementById('localizacao')
    let iconeAnimado = document.getElementById('iconeAnimado')

    let velocidadeVento = document.getElementById('velocidadeVento')
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( position => {
            
            latitude = position.coords.latitude
            longitude = position.coords.longitude

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt&units=metric&appid=${apikey_openweathermap}`
            
            fetch(url)
                .then( response => { 
                    return response.json() 
                })
                .then(  data => {
                    let tempValor = Math.round(data.main.temp)
                    let tempDescricao = data.weather[0].description
                    
                    temperaturaValor.textContent = `${tempValor} °C`
                    temperaturaDescricao.textContent =  tempDescricao.toUpperCase()

                } )
                .catch( error => {
                    console.log(error)
                } )
           
        } )
    }
})