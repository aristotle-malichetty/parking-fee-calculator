# Parking Fee Calculator

A simple, offline-capable web app for calculating parking fees based on entry date and time.

## Features

- **Entry Date & Time:** Select the date and time (12-hour format) when the customer entered.
- **Custom Time Picker:** Hour, minute, and AM/PM dropdowns for easy time selection.
- **Fee Calculation:**  
  - First 15 minutes: Free (grace period)  
  - Next 45 minutes (up to 60 minutes total): $5  
  - After 60 minutes: $2 per additional 30-minute block  
  - Maximum per 24 hours: $35
- **Real-time Updates:** Fee updates automatically as you change the entry time.
- **Clear Button:** Reset all fields for the next customer.
- **Mobile-friendly:** Responsive design for easy use on any device.
- **Offline Capable:** Works without an internet connection.

## How to Use

1. Open `index.html` in any modern web browser.
2. Select the entry date and time.
3. The fee will calculate automatically.
4. Use the "Clear" button to reset for the next customer.

## Files

- `index.html` — HTML structure
- `style.css` — CSS styles
- `app.js` — JavaScript logic

## Deployment

Upload all three files to your static hosting (e.g., Cloudflare Pages, GitHub Pages) to deploy the app.

## License

MIT
