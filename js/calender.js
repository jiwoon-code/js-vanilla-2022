const makeCalendar = (date) => {
  const currentYear = new Date(date).getFullYear();
  const currentMonth = new Date(date).getMonth() + 1;
  const firstDay = new Date(date.setDate(1)).getDay();
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();
  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let calculateDay = "";

  for (let i = 0; i < firstDay; i++) {
    calculateDay += `<div class="emptyDay"></div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    calculateDay += `<div>${i}</div>`;
  }
  for (let i = limitDay; i < nextDay; i++) {
    calculateDay += `<div class="emptyDay"></div>`;
  }

  document.querySelector(`.dateBoard`).innerHTML = calculateDay;
  document.querySelector(
    `.dateTitle`
  ).innerText = `${currentYear}년 ${currentMonth}월`;
};

const date = new Date();

makeCalendar(date);

document.querySelector(`.prevDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
};

document.querySelector(`.nextDay`).onclick = () => {
  makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
};
