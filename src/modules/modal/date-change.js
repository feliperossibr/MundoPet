import { loadSchedulesDay } from "../schedules/load-schedules-day.js";

const dateModal = document.querySelector("#date-modal");
const dateFilter = document.querySelector("#date");

dateFilter.onchange = (event) => {
  if (dateModal.value !== event.target.value) {
    dateModal.value = event.target.value;
    loadSchedulesDay();
  }
};

dateModal.onchange = (event) => {
  if (dateFilter.value !== event.target.value) {
    dateFilter.value = event.target.value;
    loadSchedulesDay();
  }
};