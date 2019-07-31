import { urlForecast, apiKey } from '../constants/apiUrls';

const getUrlForecast = city => {
    return `${urlForecast}?q=${city}&appid=${apiKey}`;
}

export default getUrlForecast;