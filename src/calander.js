function createCalendar() {
    const now = new Date();

    const month = now.getMonth();
    const year = now.getFullYear();
    const today = now.getDate();

    const monthName = now.toLocaleDateString("en-US", {
        month: "long"
    });

    document.querySelector("#calendar-month").textContent = monthName;
    document.querySelector("#calendar-year").textContent = year;

    const daysContainer = document.querySelector("#calendar-days");

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    daysContainer.innerHTML = "";

    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("span");
        daysContainer.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {

        const dayElement = document.createElement("span");

        dayElement.textContent = day;

        if (day === today) {
            dayElement.classList.add("today");
        }

        daysContainer.appendChild(dayElement);
    }
}

createCalendar();