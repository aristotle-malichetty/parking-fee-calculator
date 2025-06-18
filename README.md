# Parking Fee Calculator

A quick, online-capable web app I vibecoded in under an hour for my friend who runs a parking garage. Built with vanilla HTML, CSS, and JavaScript using Cursor.

## What It Does

- **Entry Date & Time:** Select when the customer entered.
- **Custom Time Picker:** Hour, minute, and AM/PM dropdowns.
- **Fee Calculation:**  
  - First 15 minutes: Free (grace period)  
  - Next 45 minutes (up to 60 minutes total): $5  
  - After 60 minutes: $2 per additional 30-minute block  
  - Maximum per 24 hours: $35
- **Real-time Updates:** Fee updates as you change the entry time.
- **Clear Button:** Reset for the next customer.
- **Mobile-friendly:** Works on any device.

## How to Use

1. Open `index.html` in any modern web browser.
2. Select the entry date and time.
3. The fee calculates automatically.
4. Use the "Clear" button to reset.

## Files

- `index.html` — HTML structure
- `style.css` — CSS styles
- `app.js` — JavaScript logic

## Live Demo

Check it out at [https://parking.aristotle.me](https://parking.aristotle.me)

## License

MIT
