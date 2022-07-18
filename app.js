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

            
           
        } )
    }
})