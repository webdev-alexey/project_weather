import { fetchWeather } from "./APIservice.js";
import { renderWidgetForecast, renderWidgetOther, renderWidgetToDay, showError } from "./render.js";

export const startWidget = async () => {
    const widget = document.createElement('div');
    widget.classList.add('widget');

    const dataWeather = await fetchWeather('Калининград');
    // console.log('dataWeather: ', dataWeather);

    if (dataWeather.success) {
        renderWidgetToDay(widget, dataWeather.data);
        renderWidgetOther(widget, dataWeather.data);
    } else{
        showError();
    }

    renderWidgetForecast(widget);
    return widget;
};
