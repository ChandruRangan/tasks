const api="94ae5c6d02ecda924a4d0093f7781b39";

var cityname = document.getElementById('cname');
var city = document.querySelector('#cityoutput');
var descrip = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');

function convertion(val){
    return (val - 273).toFixed(2);
}
function getdata(){  
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&appid='+api)
            .then(res => res.json())
            .then(data => {
   
                var nameval = data['name']
                var descrip = data['weather']['0']['description']
                var tempature = data['main']['temp']
                var wndspd = data['wind']['speed']
    
                city.innerHTML=`Weather of <span>${nameval}<span>`
                temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
                description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
                wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
    
            })
            .catch(err => alert('You entered Wrong city name'))
 }