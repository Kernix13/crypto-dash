# Crypto Currency Dashboard using React

React project using the coingecko API that shows different crypto coins and associated data for each coin.

## Features

- HTTP requests using async fetch call inside useEffect
- Environment variables
- Limit selector
- Filter coin results
- Sort coin results
- Routing with React Rounter v7 in declarative mode for each coin result
- Loading spinner
- Chart data for each coin

## Technologies Used

| Tool                                                 | Version |
| :--------------------------------------------------- | :------ |
| [npm](https://www.npmjs.com/)                        | 10.9.3  |
| [react](https://react.dev/)                          | 19.2.6  |
| [react-dom](https://www.npmjs.com/package/react-dom) | 19.2.6  |
| [vite](https://vite.dev/)                            | 8.0.12  |

## Installation and Usage

1. Clone this repo:

   ```bash
   git clone https://github.com/Kernix13/crypto-dash.git
   cd crypto-dash
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Create a `.env` file in the project root.

   ```sh
   cp .env.example .env
   ```

4. Add the replacement env-vars to the `.env` file then delete `.env.example`. Make sure to keep the prefix `VITE_`. NOTE: The endpoint is not private so having a `.env` is unnecessary for this project at this time:

   ```env
   VITE_API_URL=coingecko_endpoint
   ```

5. Start the development server:

   ```sh
   npm run dev
   ```

6. <kbd>CTRL</kbd> + click the link `http://localhost:5173/` in the terminal to open up `localhost` on port `5173`:

   ```sh
   Local:   http://localhost:5173/
   ```

## Project Structure

<!--
├── LICENSE
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
 -->

```python
/
├── README.md
├── .github/                # GitHub Issue and PR templates (later)
├── .env.example            # Template for required environment variables in .env
├── .eslint.config.js       # Rules for ESLint
├── .gitignore              # Specific files and folders Git should ignore
├── .gitattributes          # Enforces consistent line endings
├── index.html              # Main HTML page
├── package.json            # Dependencies and scripts
├── vite.config.js          # Config file for Vite bundler
├── public/
│   └── favicon.ico         # Site favicon linked in index.html
├── src/
│   └── components/
│       ├── CoinCard.jsx
│       ├── FilteredCoins.jsx
│       ├── LimitSelector.jsx
│       └── SortSelector.jsx
│   └── pages/
│       ├── about.jsx
│       └── home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
```

## Next heading?
