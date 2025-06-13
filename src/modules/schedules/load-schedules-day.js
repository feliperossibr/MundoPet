import { scheduleFetchByDay } from "../../services/schedule-fetch-bay-day.js";
import { hoursLoad } from "../modal/hours-load.js";
import { showSchedules } from "./show-schedules.js";

const dateModal = document.querySelector("#date-modal");
const dateFilter = document.querySelector("#date");

export async function loadSchedulesDay() {
  try {
    if (!dateModal || !dateFilter) {
      console.warn("Elementos #date-modal ou #date não encontrado.");
      return;
    }

    const dateMod = dateModal.value;
    const dateFil = dateFilter.value;

    const result = await scheduleFetchByDay(dateFil);
    const dailySchedules = Array.isArray(result) ? result : [];

    showSchedules(dailySchedules);
    hoursLoad(dateMod, dailySchedules);

  } catch (error) {
    alert("Erro ao carregar os agendamentos do dia.");
    console.error("Erro em loadSchedulesDay:", error);
  }
}
