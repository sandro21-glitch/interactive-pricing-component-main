
const price = document.getElementById('price')
const slider = document.getElementById('slider')
const checkbox = document.getElementById('checkbox')
const views = document.getElementById('views')




slider.addEventListener('input', () => {
    const sliderValue = slider.value
    pricing(sliderValue)
})
checkbox.addEventListener('input', () => {
    const sliderValue = slider.value
    pricing(sliderValue)
})


function pricing(value) {
    let pricing = 8;
    if(value < 0 || value <= 20){
        pricing = 8
        views.innerText = '10K Pageviews'
    }else if (value > 20 && value <= 40){
        pricing = 12
        views.innerText = '50K Pageviews'
    }else if(value > 40 && value <= 60){
        pricing = 16
        views.innerText = '100K Pageviews'
    }else if(value > 60 && value <= 80){
        pricing = 24
        views.innerText = '500K Pageviews'
    }else if(value > 80 && value <= 100){
        pricing = 36
        views.innerText = '1M Pageviews'
    }


    if(checkbox.checked){
        const total = pricing - pricing * 0.25;
        price.innerText = `$${total}.00`
    }else {
        price.innerText = `$${pricing}.00`
    }
}



