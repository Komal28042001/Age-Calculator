/* -----------------------------
   DARK MODE SETUP
----------------------------- */

// Load saved theme or system preference
function applyTheme(mode) {
    if (mode === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
}

const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

applyTheme(savedTheme ? savedTheme : systemPrefersDark ? "dark" : "light");

// Toggle button
document.getElementById("themeToggle").addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    const newTheme = isDark ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.getElementById("themeToggle").textContent = isDark ? "🌙" : "☀️";
});

/* -----------------------------
   CALCULATOR
----------------------------- */
document.getElementById("calcBtn").addEventListener("click", () => {

    const d = parseInt(document.getElementById("day").value);
    const m = parseInt(document.getElementById("month").value);
    const y = parseInt(document.getElementById("year").value);

    if (!d || !m || !y) return;

    const today = new Date();
    const birth = new Date(y, m - 1, d);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
});
