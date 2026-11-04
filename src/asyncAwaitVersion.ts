
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


            } catch (error) {
                callback(error as Error);
            }
        });

    }).on("error", callback);
}
