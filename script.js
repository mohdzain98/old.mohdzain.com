( () =>{
    sentence = "Hello! My Name is Zain"
    let line = document.getElementById('line')
    const characters = sentence.split('');
    characters.forEach((char, index) => {
        setTimeout(() => {
        line.innerHTML = line.innerHTML + `${char}`
        if (index === characters.length - 1) {
            console.log('\n');
        }
        }, 80 * index);
    });
}
)()

let upd = document.getElementById("updatev")
let updh = document.getElementById("updateh")
let p = document.createElement("p")
let p1Text = document.createTextNode("Updated on :  12 Jan, 2024 Version : 1.9")
p.append(p1Text)
p.setAttribute('class','hidden-xs')
upd.appendChild(p)


let p2 = document.createElement("p")
let p2Text = document.createTextNode("Updated on : 12 Jan, 2024 Version 1.9")
p2.append(p2Text)
p2.setAttribute('class','visible-xs')
updh.appendChild(p2)


// Use a service like IPinfo to get location based on IP address

// Fetch IP information

const getWeather = async () =>{
    const apiKey = 'cbba8d8ab62d5a';
    const apiUrl = `https://ipinfo.io?token=${apiKey}`;
    let city=""
    const res = await fetch(apiUrl)
    const data = await res.json()
    city = data.city;
    const region = data.region;
    const country = data.country;
    console.log(`Location: ${city}, ${region}, ${country}`);
    let weather = await fetch(`http://api.weatherapi.com/v1/current.json?key=21831bf5e0864a159e3143900242702&q=${city}`)
    let weatherData = await weather.json()
    console.log(city)
    console.log(weatherData.current.temp_c)
    document.getElementById('city').innerHTML = city
    document.getElementById('temp').innerHTML = `${ weatherData.current.temp_c}°C`
}
  
getWeather()
