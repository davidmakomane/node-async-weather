
import https from "node:https";
import { NewsPost } from "../types";

export function getNews(
    callback: (error: Error | null, data?: NewsPost[]) => void
): void {

    const url = "https://dummyjson.com/posts";

    https.get(url, (res) => {
        let result = "";

        res.on("data", chunk => result += chunk);

        res.on("end", () => {
            try {
                if (res.statusCode !== 200) {
                    throw new Error("News request failed");
                }

                const data = JSON.parse(result);

                callback(null, data.posts);

            } catch (error) {
                callback(error as Error);
            }
        });

    }).on("error", callback);
}
