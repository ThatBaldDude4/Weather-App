import { getData, renderCard  } from "./modules/data.js";

const form = document.getElementById("weather-form");
const locationInput = document.getElementById("location-input");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let input = locationInput.value;
    if (!input) {return};

    let data = await getData(input);
    renderCard(data);
});