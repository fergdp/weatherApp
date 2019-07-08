import { urlBaseWeather, apiKey } from './../constants/apiUrls';

const getUrlWeatherByCity = city => {
    return `${urlBaseWeather}?q=${city}&appid=${apiKey}`;
}

export default getUrlWeatherByCity;