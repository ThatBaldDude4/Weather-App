let loading = false;
export async function getData(location) {
    if (loading) {return};
    try {
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=PBQU6E38AF4XTKZTWAKNB2R47`);
        let data = await response.json();
        loading = true;
        console.log(data)
    } catch(err) {
        console.err(err);
    }
    loading = false;
};

function buildWeatherCard(data) {
    
}