# Weather and News Dashboard

## 1. Project Description

This project is a simple Weather and News Dashboard built using Node.js and TypeScript.

It retrieves current weather information for Kimberley using the Open-Meteo API and news-style posts using the DummyJSON API.

The project demonstrates three approaches to asynchronous programming:
- Callbacks
- Promises
- Async/Await

## 2. APIs Used

**Open-Meteo API**
- Provides current weather information.
- Returns temperature, wind speed and weather code.
- https://api.open-meteo.com/

**DummyJSON API**
- Provides sample news-style posts.
- Returns post titles, content and user information.
- https://dummyjson.com/posts

## 3. Technologies Used

- Node.js
- TypeScript
- JavaScript Fetch API
- Node.js HTTPS module
- Promises
- Async/Await
- tsx

## 4. Callback Implementation

The callback version uses callback functions to handle API responses.

The weather request runs first, followed by the news request.

This demonstrates how callbacks can be nested to handle asynchronous operations.

Run:

```bash
npm run callback
```

## 5. Promise Implementation

The Promise version uses:
- `.then()` to handle successful responses.
- `.catch()` to handle errors.
- `Promise.all()` to run weather and news requests together.
- `Promise.race()` to return the first settled request.

Run:

```bash
npm run promise
```

## 6. Async/Await Implementation

The Async/Await version uses:
- `async` to define asynchronous functions.
- `await` to wait for API responses.
- `try/catch` to handle errors.
- `Promise.all()` to retrieve weather and news simultaneously.

Run:

```bash
npm run async
```

## 7. Installation and Running the Project

### Requirements

- Node.js
- npm
- Git

### Clone the repository

```bash
git clone -b node-async-weather https://github.com/davidmakomane/node-async-weather.git
```

### Enter the project folder

```bash
cd node-async-weather
```

### Install dependencies

```bash
npm install
```

### Run the different versions

Callback:

```bash
npm run callback
```

Promise:

```bash
npm run promise
```

Async/Await:

```bash
npm run async
```

### Check TypeScript

```bash
npx tsc --noEmit
```

## 8. Sample Output

### Callback Version

```text
WEATHER AND NEWS DASHBOARD
WEATHER: {
  temperature: 24,
  windSpeed: 15,
  weatherCode: 1
}
NEWS:
His mother had always taught him
He was an expert but not in a discipline
...
```

### Promise Version

```text
WEATHER: {
  temperature: 24,
  windSpeed: 15,
  weatherCode: 1
}

PROMISE ALL:
...

FASTEST: News
...
```

### Async/Await Version

```text
WEATHER: {
  temperature: 24,
  windSpeed: 15,
  weatherCode: 1
}

NEWS:
...
```

*Note: Sample values are illustrative. Actual API results may differ depending on the time of the request.*

## 9. Project Structure

```text
weather-news-dashboard/
│
├── src/
│   ├── services/
│   │   ├── weatherService.ts
│   │   └── newsService.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── callbackVersion.ts
│   ├── promiseVersion.ts
│   └── asyncAwaitVersion.ts
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```
