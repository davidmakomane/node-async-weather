
import { WeatherData, NewsPost } from "./types";

const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=-28.7282&longitude=24.7499&current=temperature_2m,wind_speed_10m,weather_code";
const newsURL = "https://dummyjson.com/posts";

async function getWeather(): Promise<WeatherData> {
    const response = await fetch(weatherURL);

    if (!response.ok) {
        throw new Error("Weather request failed");
    }

    const data = await response.json();

    return {
        temperature: data.current.temperature_2m,
        windSpeed: data.current.wind_speed_10m,
        weatherCode: data.current.weather_code
    };
}
async function getNews(): Promise<NewsPost[]> {
    const response = await fetch(newsURL);

    if (!response.ok) {
        throw new Error("News request failed");
    }

    const data = await response.json();

    return data.posts;
}

async function startDashboard() {
    try {
        const [weather, news] = await Promise.all([
            getWeather(),
            getNews()
        ]);

        console.log("WEATHER:", weather);
        console.log("NEWS:", news.slice(0, 5));

    } catch (error) {
        console.log("Error:", error);
    }
}

startDashboard();
