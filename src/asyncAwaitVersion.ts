
import https from "node:https";
import { WeatherData } from "../types";

export function getWeather(
    callback: (error: Error | null, data?: WeatherData) => void
): void {

    const url = "https://api.open-meteo.com/v1/forecast?latitude=-28.7282&longitude=24.7499&current=temperature_2m,wind_speed_10m,weather_code";

    https.get(url, (res) => {
        let result = "";

        res.on("data", chunk => result += chunk);

        res.on("end", () => {
            try {
                if (res.statusCode !== 200) {
                    throw new Error("Weather request failed");
                }

                const data = JSON.parse(result);

                callback(null, {
                    temperature: data.current.temperature_2m,
                    windSpeed: data.current.wind_speed_10m,
                    weatherCode: data.current.weather_code
                });

            } catch (error) {
                callback(error as Error);
            }
        });

    }).on("error", callback);
}
