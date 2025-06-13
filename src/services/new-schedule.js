import { api } from "./api.js";

export async function newSchedule( { id, tutor, pet, desc, when}) {
  try {
    await fetch(`${api.url}/schedules`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id, tutor, pet, desc, when }),
    });

    alert("Agendamento realizado com sucesso 🎉");

  } catch (error) {
    alert("Não foi possível realizar o agendamento! Tente novamente!");
    console.log(error);
  }
}