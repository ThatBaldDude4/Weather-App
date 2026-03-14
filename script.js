import { getData } from "./modules/data.js";

const form = document.getElementById("weather-form");
const locationInput = document.getElementById("location-input");
const submitBtn = document.getElementById("submit-btn")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = locationInput.value;
    if (!input) {return};

    getData(input);
});