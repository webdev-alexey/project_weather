import { renderWidgetForecast, renderWidgetOther, renderWidgetToDay } from "./render.js";

export const startWidget = () => {
    const widget = document.createElement('div');
    widget.classList.add('widget');

    renderWidgetToDay(widget);
    renderWidgetOther(widget);
    renderWidgetForecast(widget);
    return widget;
};
