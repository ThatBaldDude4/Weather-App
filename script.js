import { getData, renderCard  } from "./modules/data.js";

const form = document.getElementById("weather-form");
const locationInput = document.getElementById("location-input");
const appContainer = document.getElementById("weather-app-container");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let input = locationInput.value;
    if (!input) {return};
    showLoading();
    let data = await getData(input);
    hideLoading();
    renderCard(data);
});

function showLoading() {
    appContainer.textContent = "";
    appContainer.textContent = "loading...";
}

function hideLoading() {
    appContainer.textContent = "";
}