import { loadSchedulesDay } from "./load-schedules-day.js";
import { deleteSchedules } from "../../services/delete-schedules.js";

const periods = document.querySelectorAll(".period");

periods.forEach(period => {
  period.onclick = async (event) => {
    if(event.target.classList.contains("remove")){
      const item = event.target.closest("li");
      const id = item.id;

      if(id){
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento? ⚠️");

        if(isConfirm){
          try {
            await deleteSchedules(id);
            await loadSchedulesDay();
          } catch (error) {
            alert("Ocorreu um erro ao cancelar ou atualizar os agendamentos.");
            console.error("Erro ao deletar ou recarregar agendamentos:", error);
          }
        }
      }
    }
  };
});