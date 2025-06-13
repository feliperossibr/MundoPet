import dayjs from "dayjs";
import { newSchedule } from "../../services/new-schedule.js";
import { loadSchedulesDay } from "../schedules/load-schedules-day.js";

const dateFilter = document.querySelector("#date");

const form = document.querySelector("#form");
const modal = document.querySelector("#modal");
const footer = document.querySelector(".footer");

const tutorName = document.querySelector("#tutor-name");
const petName = document.querySelector("#pet-name");
const phone = document.querySelector("#phone");
const serviceDescription = document.querySelector("#description");
const dateModal = document.querySelector("#date-modal");
const hours = document.querySelector("#hours");

const today = dayjs(new Date()).format("YYYY-MM-DD");

dateFilter.value = today;
dateFilter.min = today;
dateModal.value = today;
dateModal.min = today;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const tutor = tutorName.value.trim();
    const pet = petName.value.trim();
    const desc = serviceDescription.value.trim();

    if(tutor === "" || pet === "" || desc === "") return alert("Preencha todos os campos!");

    const hourSelected = hours.value;

    if(hourSelected === "00:00" || !hourSelected) return alert("Selecione a hora!");

    const [hour] = hourSelected.split(":");
    const when = dayjs(dateModal.value).add(hour, "hour");

    const id = new Date().getTime().toString();

    await newSchedule({
      id,
      tutor,
      pet,
      desc,
      when,
    });

    await loadSchedulesDay();

    tutorName.value = "";
    petName.value = "";
    phone.value = "",
    serviceDescription.value = "";

    modal.style.display = "none";
    footer.style.display = "initial";

  } catch (error) {
    alert("Não foi possível realizar o agendamento!");
    console.log(error);
  }
}