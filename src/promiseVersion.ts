
import { WeatherData, NewsPost } from "./types";

const weatherURL = "https://api.open-meteo.com/v1/forecast?latitude=-28.7282&longitude=24.7499&current=temperature_2m,wind_speed_10m,weather_code";

const newsURL = "https://dummyjson.com/posts";

// Fetch weather
function getWeather(): Promise<WeatherData> {
    return fetch(weatherURL)
        .then(res => {
            if (!res.ok) throw new Error("Weather request failed");
            return res.json();
        })
        .then(data => ({
            temperature: data.current.temperature_2m,
            windSpeed: data.current.wind_speed_10m,
            weatherCode: data.current.weather_code
        }));
}

// Fetch news
function getNews(): Promise<NewsPost[]> {
    return fetch(newsURL)
        .then(res => {
            if (!res.ok) throw new Error("News request failed");
            return res.json();
        })
        .then(data => data.posts);
}

// Promise chaining: weather then news
console.log("Starting Promise Dashboard...");

getWeather()
    .then(weather => {
        console.log("\nWEATHER");
        console.log(weather);

        return getNews();
    })
    .then(news => {
        console.log("\nLATEST NEWS");

        news.slice(0, 5).forEach(post => {
            console.log(post.title);
        });
    })
    .catch(error => {
        console.log("Error:", error.message);
    });

// Promise.all: run both requests together
Promise.all([getWeather(), getNews()])
    .then(([weather, news]) => {
        console.log("\nPROMISE ALL");
        console.log("Weather:", weather);
        console.log("News:", news.slice(0, 5));
    })
    .catch(error => console.log("Promise.all error:", error.message));

// Promise.race: get the first settled response
Promise.race([
    getWeather().then(data => ({ type: "Weather", data })),
    getNews().then(data => ({ type: "News", data }))
])
    .then(result => {
        console.log("\nPROMISE RACE");
        console.log("Fastest response:", result.type);
        console.log(result.data);
    })
    .catch(error => console.log("Promise.race error:", error.message));
