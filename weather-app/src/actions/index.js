export const SET_CITY = 'SET_CITY';
export const setcity = (payload) => ({ type: SET_CITY, payload });

const apiKey = "0d397debf0a0ba538b12007efed4da21";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const fetchForecast = payload => {
    return dispatch => {
        const urlForecast = `${url}?q=${city}&appid=${apiKey}`;

        //activar en el estado una busqueda de datos
        fetch(urlForecast).then(
            data => (data.json())
        ).then(
            weatherData => {
                const forecastData = transformForecast(weatherData);
                this.setState({ forecastData })

                //modificar el estado con el resltado de la promise (fetch)
            }
        );
    }
};