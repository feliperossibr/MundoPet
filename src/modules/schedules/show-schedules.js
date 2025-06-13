import dayjs from "dayjs";

const morning = document.querySelector("#morning");
const afternoon = document.querySelector("#afternoon")
const night = document.querySelector("#night");

export function showSchedules(dailySchedules) {
  try {
    if (!morning || !afeternoon || !night) {
      console.warn("Elementos de períodos não encontrados no DOM.");
      return;
    }

    morning.innerHTML = "";
    afternoon.innerHTML = "";
    night.innerHTML = ""; 

    if (!Array.isArray(dailySchedules)) {
      console.warn("dailySchedules não é uma lista.");
      return;
    }

    dailySchedules.forEach(schedule => {
      const item = document.createElement("li");
      item.id = schedule.id;

      const time = dayjs(schedule.when).format("HH:mm");
      const hour = dayjs(schedule.when).hour();

      item.innerHTML = `
      <div>
          <strong class="hour">${time}</strong>
          <strong>${schedule.pet}</strong>
          <span>/ ${schedule.tutor}</span>
        </div>
        <span class="service-desc">${schedule.desc}</span>
        <button class="remove">Remover agendamento</button>
      `;

      if(hour < 12){
        morning.appendChild(item);
      } else if(hour >= 12 && hour < 18) {
        afternoon.appendChild(item);
      } else {
        night.appendChild(item);
      }
    });
    
  } catch (error) {
    alert("Não foi possível exibir os agendamentos");
    console.error("Erro em showSchedules:", error);
  }
}