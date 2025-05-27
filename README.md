#  Nationality Predictor

This is a simple web application that predicts the likely country of origin for a given name using the [Nationalize.io API](https://nationalize.io/). It also uses the browser’s `Intl.DisplayNames` to convert country codes to full country names.

## How It Works

1. User inputs a name.
2. On clicking the search button, the app:
   - Sends a request to `https://api.nationalize.io/?name=NAME`.
   - Fetches the top predicted country code and probability.
   - Converts the country code (e.g., `US`) to a full country name (e.g., `United States`) using `Intl.DisplayNames`.
   - Displays the result with the confidence percentage.

## Tech Stack

- HTML
- CSS
- JavaScript (ES6)
- [Nationalize.io API](https://nationalize.io/)
- `Intl.DisplayNames` API (built into modern browsers)

## Features

-  Predicts nationality based on name
-  Displays the top match and its probability
-  Converts country code to full name in English
-  Handles errors and empty inputs gracefully


##  Project Structure

```bash
├── index.html
├── style.css
└── script.js

## How to Run
Clone/download this repo

Open index.html in your browser

Enter a name and see the prediction!