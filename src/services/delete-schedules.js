import { api } from "./api.js";

export async function deleteSchedules(id) {
  try {
    await fetch(`${api.url}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Agendamento cancelado 🔴");

  } catch (error) {
    alert("Não foi possível cancelar o agendamento! Tente novamente!");
    console.log(error);
  }
}