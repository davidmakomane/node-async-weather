
import { getWeather } from "./services/weatherService";
import { getNews } from "./services/newsService";

console.log("Starting Weather and News Dashboard...");

getWeather((error, weather) => {

    if (error) {
        console.log("Weather Error:", error.message);
        return;
    }

    console.log("\nWEATHER");
    console.log(weather);

    getNews((error, news) => {

        if (error) {
            console.log("News Error:", error.message);
            return;
        }

        console.log("\nLATEST NEWS");

        news?.slice(0, 5).forEach(post => {
            console.log(post.title);
        });

        console.log("\nDashboard completed!");
    });
});
