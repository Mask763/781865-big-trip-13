import {createTripInfoTemplate} from "./view/trip-info.js";
import {createMenuTemplate} from "./view/menu.js";
import {createFilterTemplate} from "./view/filter.js";
import {createSortTemplate} from "./view/sort.js";
import {createEventEditTemplate} from "./view/event-edit.js";
import {createEventTemplate} from "./view/event.js";

const EVENT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const pageHeader = document.querySelector(`.page-header`);
const tripMain = pageHeader.querySelector(`.trip-main`);
const tripControls = tripMain.querySelector(`.trip-controls`);
const pageMain = document.querySelector(`.page-main`);
const tripEvents = pageMain.querySelector(`.trip-events`);

render(tripMain, createTripInfoTemplate(), `afterbegin`);
render(tripControls, createMenuTemplate(), `beforeend`);
render(tripControls, createFilterTemplate(), `beforeend`);
render(tripEvents, createSortTemplate(), `afterbegin`);

const tripEventsList = tripEvents.querySelector(`.trip-events__list`);

render(tripEventsList, createEventEditTemplate(), `afterbegin`);

for (let i = 0; i < EVENT_COUNT; i++) {
  render(tripEventsList, createEventTemplate(), `beforeend`);
}
