import { api } from "./api.js";
import { loadSchedulesDay } from "../modules/schedules/load-schedules-day.js";

export async function newSchedule({ id, tutor, pet, desc, when }) {
  try {
    const response = await fetch(`${api.url}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, tutor, pet, desc, when: when.toISOString() }),
    });

    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }

    alert("Agendamento realizado com sucesso 🎉");

    await loadSchedulesDay();

  } catch (error) {
    alert("Não foi possível realizar o agendamento! Tente novamente!");
    console.log(error);
  }
}
