import dayjs from "dayjs";
import { api } from "./api.js";

export async function scheduleFetchByDay(date) {
  try {
    const response = await fetch(`${api.url}/schedules`);
    
    if (!response.ok) {
      throw new Error("Erro ao buscar dados da API");
    }

    const data = await response.json();
    console.log("Todos os agendamentos recebidos:", data);

    const dailySchedules = data.filter(schedule =>
      dayjs(schedule.when).isSame(dayjs(date), "day")
    );

    return dailySchedules;
    
  } catch (error) {
    alert("Não foi possível buscar os agendamentos do dia selecionado");
    console.error("Erro no fetch:", error);
    return [];
  }
}