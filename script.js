const btn = document.getElementById("btn")

btn.addEventListener('click', ()=> {
    const temp = document.getElementById("temp");
    const main = document.getElementById("main");
    const description = document.getElementById("description");
    const city = document.getElementById("city");
    const country = document.getElementById("country");
    const input = document.getElementById("Input");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=38ecfa91763543ecbb95222766aa5bc6&units=metric`

//     axios.get(url)
// .then((res)=>{
//     console.log(res.data)
//     temp.innerHTML = res.data.main.temp + " °C"
//     main.innerHTML = res.data.weather[0].main
//     description.innerHTML = res.data.weather[0].description
//     city.innerHTML = res.data.name
//     country.innerHTML = res.data.sys.country

// })
// .catch((err)=> console.log(err))

fetch(url)
.then((response)=> response.json())
.then((data)=> {
    temp.innerHTML = data.main.temp + " °C"
    main.innerHTML = data.weather[0].description
    description.innerHTML = data.weather[0].description
    city.innerHTML = data.name
    country.innerHTML = data.sys.country
})





})

