import transformForecast from './../services/transformForecast';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity';
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

const setCity = payload => ({type:SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload });
const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });

const api_key = "f426645c2bea7c344f28c81c141fc8ca";

const url = "https://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        dispatch(setCity(payload));
        return fetch(url_forecast)
            .then(
                data => (data.json())
            ).then(
                weather_data => {
                    const forecastData = transformForecast(weather_data);
                    
                    dispatch(setForecastData({city:payload, forecastData}));
                }
            )
    }
}

export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {

            dispatch(getWeatherCity(city));

            const api_weather = getUrlWeatherByCity(city);
            fetch(api_weather).then( resolve => {
                return resolve.json();
            }).then(weather_data => {
                const weather = transformWeather(weather_data);

                dispatch(setWeatherCity({city, weather}));
            });
        })
    }
}