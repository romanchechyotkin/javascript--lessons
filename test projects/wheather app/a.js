const link = 'http://api.weatherstack.com/current?access_key=f53b140b537e9b3b86281e9afb393703'
const root = document.getElementById('box')

let store = {
    city: 'Minsk',
    feelslike: 0,
    cloudcover: 0,
    temperature: 0,
    humidity: 0,
    observationTime: '00:00 PM',
    pressure: 0,
    uvIndex: 0,
    visibility: 0,
    isDay: 'yes',
    description: '',
    windSpeed: 0
}


const fetchData = async () => {
    const result = await fetch(`${link}&query=${store.city}`)
    const data = await result.json()

    const {
        current: { 
            feelslike, 
            cloudcover, 
            temperature, 
            humidity,
            observation_time: observationTime,
            pressure,
            uv_inedx: uvIndex, 
            visibility, 
            is_day: isDay, 
            weather_descriptions: description,
            wind_speed: windSpeed
        }
    } = data

    store = {
        ...store,
        feelslike,
        cloudcover,
        temperature,
        humidity,
        observationTime,
        pressure,
        uvIndex,
        visibility,
        isDay,
        description: description[0],
        windSpeed
    }

    renderElement()
}


const markup = () => {
    const {
        city,
        description,
        observationTime,
        temperature
    } = store


    return `
        <div class='container'>
            <div class='top'>
                <div class='city'>
                    <div class='city-subtitle'>Wheather today</div>
                    <div class='city-title' id='city'>
                        <span>${city}</span>
                    </div>
                </div>
            </div>

            <div class='city-info'>
                <div class='top-left'>
                    <img src='${getImage(description)}' class='icon' alt='icon'>
                    <div class='description'>${description}</div>
                </div>
                <div class='top-right'>
                    <div class='city-info__subtitle'>as of ${observationTime}</div>
                    <div class='city-info__title'>${temperature}</div>
                </div>
            </div>
            <div id='properties'></div>
        </div>
    `
}

const getImage = (description) => {
    if(description === 'Light Rain Shower'){
        return 'rain.jpg'
    }
}

const renderElement = () => {
    root.innerHTML = markup()
}



fetchData()
