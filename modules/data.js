const appContainer = document.getElementById("weather-app-container");

let loading = false;
export async function getData(location) {
    if (loading) {return};
    try {
        loading = true;
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=PBQU6E38AF4XTKZTWAKNB2R47`);
        let data = await response.json();
        renderCard(data);
    } catch(err) {
        console.err(err);
    }
    loading = false;
};

function buildWeatherCard(data) {
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const temp = document.createElement("p");

    title.textContent = data.address;

    description.textContent = data.description;

    temp.textContent = `Tempature: ${data.currentConditions.temp}`;

    container.appendChild(title);
    container.appendChild(description);
    container.appendChild(temp);

    return container;
}

function parseData(data) {
    const address = data.address;
    const currentConditions = data.currentConditions;
    const description = data.description;
    return {address, currentConditions, description};
}

function renderCard(data) {
    let parsedData = parseData(data);
    let card = buildWeatherCard(parsedData);

    appContainer.innerHTML = "";
    appContainer.appendChild(card);
}