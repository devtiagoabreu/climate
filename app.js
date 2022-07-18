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
                    let local = data.name
                    let velVento = data.wind.speed
                                        
                    temperaturaValor.textContent = `${tempValor} °C`
                    temperaturaDescricao.textContent =  tempDescricao.toUpperCase()
                    localizacao.textContent = local
                    velocidadeVento.textContent = `${velVento} m/s`

                    //icones estáticos
                    //let staticIconCode = data.weather[0].icon
                    //const staticInconUrl = `http://openweathermap.org/img/wn/${staticIconCode}.png`
                    //console.log(staticInconUrl)

                    //icones animados
                    switch (data.weather[0].main) {
                        case 'Clear':
                            iconeAnimado.src = './animated/day.svg'
                            break;
                        case 'Clouds':
                            iconeAnimado.src = './animated/cloudy-day-1.svg'
                            break;
                        case 'Thunderstorm':
                            iconeAnimado.src = './animated/thunder.svg'
                            break;
                        case 'Drizzle':
                            iconeAnimado.src = './animated/rainy-2.svg'
                            break;
                        case 'Rain':
                            iconeAnimado.src = './animated/rainy-7.svg'
                            break;
                        case 'Snow':
                            iconeAnimado.src = './animated/snowy-6.svg'
                            break;
                        case 'Atmosphere':
                            iconeAnimado.src = './animated/weather.svg'
                            break;
                    
                        default:
                            break;
                    }

                } )
                .catch( error => {
                    console.log(error)
                } )
           
        } )
    }
})