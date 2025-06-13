import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

const hours = document.querySelector("#hours");

export function hoursLoad(date, dailySchedules) {
  if (!hours) return;

  hours.innerHTML = "<option hidden>00:00</option>";

  const unavailableHours = Array.isArray(dailySchedules)
    ? dailySchedules.map(schedule => dayjs(schedule.when).format("HH:mm"))
    : [];

  const opening = openingHours.map(hour => {
    const [scheduleHour] = hour.split(":");
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const available = unavailableHours.includes(hour) || isHourPast;

    return { hour, available };
  });

  opening.forEach(({ hour, available }) => {
    if (hour === "08:00" || hour === "13:00" || hour === "18:00") {
      hourTitle({
        "08:00": "Manhã",
        "13:00": "Tarde",
        "18:00": "Noite"
      }[hour]);
    }

    const option = document.createElement("option");
    option.disabled = available;
    option.value = hour;
    option.textContent = hour;

    hours.append(option);
  });
}

function hourTitle(content) {
  const title = document.createElement("option");
  title.textContent = content;
  title.disabled = true;
  title.classList.add("title-option"); // opcional: estilizar no CSS
  hours.append(title);
}
