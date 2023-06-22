import { fetchForecast, fetchWeather } from "./APIservice.js";
import { renderWidgetForecast, renderWidgetOther, renderWidgetToDay, showError } from "./render.js";

export const startWidget = async () => {

    const city = 'Калининград';

    const widget = document.createElement('div');
    widget.classList.add('widget');

    const dataWeather = await fetchWeather(city);

    if (dataWeather.success) {
        renderWidgetToDay(widget, dataWeather.data);
        renderWidgetOther(widget, dataWeather.data);
    } else{
        showError(dataWeather.error);
    }

    const dataForecast = await fetchForecast(city);

    if (dataForecast.success) {
        renderWidgetForecast(widget, dataForecast.data);
    } else{
        showError(dataForecast.error);
    }

    return widget;
};
