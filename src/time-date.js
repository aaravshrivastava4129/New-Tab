function updateTime() {
    const now = new Date();

    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    }).replace(" ", "");

    const date = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        weekday: "long"
    });

    document.querySelector(".time").textContent = time;
    document.querySelector(".date").textContent = date;
}

updateTime();
setInterval(updateTime, 1000);