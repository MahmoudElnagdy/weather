let searchInput = document.getElementById('searchInput')
let searchBtn = document.getElementById('searchBtn')



searchBtn.addEventListener('click'   ,      function(){





    getWeather(searchInput.value)


}      )




getWeather('paris')



let data = []
async function  getWeather(city) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d5c8506fde5045b1913103551241512&q=${city}&days=3&aqi=no&alerts=no`)
    data = await response.json()
    
display()
    console.log(data)
}


  

 

 function display(){

    let cartona = `<div  height="200px" class="col-md-4">

    <div class="card">
      <div class="card-header header d-flex justify-content-center">
    
    <span>${data.location.localtime}</span>
      </div>
      <div class="card-body card-content   text-white">
        <h3 class="city  h4">${data.location.name}</h3>
        <h2 class="  fw-bold card-title  degree">${data.current.temp_c}°C</h2>
     <div class="card-content-img">
     
    <img  id="night" src="${data.current.condition.icon}"> 
     </div>
        
       <span class="clear d-block">${data.current.condition.text}</span>
      <div class="container">
        <div class="row">
  
          <div class="col-md-4">
  <img src="images/icon-umberella@2x.png">
  <span>20%</span>
  </div>
   <div class="col-md-4">
   <img src="images/icon-wind@2x.png">
    <span>${data.current.vis_km}km/h</span>
    </div>
  <div class="col-md-4">
  <img src="images/icon-compass@2x.png">
  <span>${data.current.wind_dir}</span>
  </div> 
  </div>
  </div>
  </div>
   </div>
  
  
  </div>
  
  <div height="200px" class="col-md-4 ">

  <div class="card">
    <div class="card-header headerr d-flex justify-content-center">
  <Span>${data.forecast.forecastday[1].date}</Span>
 
    </div>
    <div class="card-body card-caption text-center   text-white">
     <img src="${data.forecast.forecastday[1].day.condition.icon}">
     <h3 class="fw-bold">${data.forecast.forecastday[1].day.maxtemp_c}°C</h3>
     <p>${data.forecast.forecastday[1].day.mintemp_c}°C</p>
     <p class="condition ">${data.forecast.forecastday[1].day.condition.text}</p>
</div>
<br><br><br>
 </div>


</div>

<div  height="200px" class="col-md-4">

  <div class="card">
    <div class="card-header header d-flex justify-content-center">
  <Span>${data.forecast.forecastday[2].date}</Span>
 
    </div>
    <div class="card-body card-content last-day text-center   text-white">
     <img src="${data.forecast.forecastday[2].day.condition.icon}"">
     <h3 class="fw-bold">${data.forecast.forecastday[2].day.maxtemp_c}°C</h3>
     <p class="small-temp">${data.forecast.forecastday[2].day.mintemp_c}°C</p>
     <p class="clear">${data.forecast.forecastday[2].day.condition.text}</p>
</div>
 </div>


</div>




  
  `
  document.getElementById('rowData').innerHTML = cartona

 }


 