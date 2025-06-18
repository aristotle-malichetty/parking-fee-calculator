// Parking Fee Calculator JS
// Populate hour and minute dropdowns
const entryDateInput = document.getElementById('entry-date');
const hourSelect = document.getElementById('hour-select');
const minuteSelect = document.getElementById('minute-select');
const ampmSelect = document.getElementById('ampm-select');
const feeAmountDisplay = document.getElementById('fee-amount');
const clearButton = document.getElementById('clear-btn');
const errorMessage = document.getElementById('error-message');

for (let h = 1; h <= 12; h++) {
    const opt = document.createElement('option');
    opt.value = h.toString().padStart(2, '0');
    opt.textContent = h.toString().padStart(2, '0');
    hourSelect.appendChild(opt);
}
for (let m = 0; m < 60; m++) {
    const opt = document.createElement('option');
    opt.value = m.toString().padStart(2, '0');
    opt.textContent = m.toString().padStart(2, '0');
    minuteSelect.appendChild(opt);
}

function calculateFee() {
    const dateValue = entryDateInput.value;
    const hour = parseInt(hourSelect.value);
    const minute = parseInt(minuteSelect.value);
    const ampm = ampmSelect.value;
    if (!dateValue || isNaN(hour) || isNaN(minute)) {
        showError('Please select entry date and time');
        return;
    }
    let hour24 = hour;
    if (ampm === 'AM') {
        if (hour === 12) hour24 = 0;
    } else {
        if (hour !== 12) hour24 = hour + 12;
    }
    // Create entry date object
    const [year, month, day] = dateValue.split('-').map(Number);
    let entryDate = new Date(year, month - 1, day, hour24, minute, 0, 0);
    const now = new Date();
    if (entryDate > now) {
        showError('Entry date/time cannot be in the future');
        return;
    }
    let diffInMinutes = Math.floor((now - entryDate) / (1000 * 60));
    if (diffInMinutes <= 15) {
        feeAmountDisplay.textContent = '$0.00';
        hideError();
        return;
    }

    const minutesPerDay = 24 * 60;
    let totalFee = 0;
    let remainingMinutes = diffInMinutes;

    while (remainingMinutes > 0) {
        let dayMinutes = Math.min(remainingMinutes, minutesPerDay);
        let dayFee = 0;
        if (dayMinutes <= 15) {
            dayFee = 0;
        } else if (dayMinutes <= 60) {
            dayFee = 5;
        } else {
            dayFee = 5;
            let extraMinutes = dayMinutes - 60;
            let extraBlocks = Math.ceil(extraMinutes / 30);
            dayFee += extraBlocks * 2;
        }
        if (dayFee > 35) dayFee = 35;
        totalFee += dayFee;
        remainingMinutes -= minutesPerDay;
    }

    feeAmountDisplay.textContent = `$${totalFee.toFixed(2)}`;
    hideError();
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    feeAmountDisplay.textContent = '$0.00';
}

function hideError() {
    errorMessage.style.display = 'none';
}

function clearAll() {
    // Set to current date and time
    const now = new Date();
    entryDateInput.valueAsDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let period = hours >= 12 ? 'PM' : 'AM';
    let displayHour = hours % 12;
    if (displayHour === 0) displayHour = 12;
    hourSelect.value = displayHour.toString().padStart(2, '0');
    minuteSelect.value = minutes.toString().padStart(2, '0');
    ampmSelect.value = period;
    feeAmountDisplay.textContent = '$0.00';
    hideError();
}

entryDateInput.addEventListener('change', calculateFee);
hourSelect.addEventListener('change', calculateFee);
minuteSelect.addEventListener('change', calculateFee);
ampmSelect.addEventListener('change', calculateFee);
clearButton.addEventListener('click', clearAll);

// Set current date and time as default
(function setDefaultDateTime() {
    const now = new Date();
    entryDateInput.valueAsDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let period = hours >= 12 ? 'PM' : 'AM';
    let displayHour = hours % 12;
    if (displayHour === 0) displayHour = 12;
    hourSelect.value = displayHour.toString().padStart(2, '0');
    minuteSelect.value = minutes.toString().padStart(2, '0');
    ampmSelect.value = period;
})(); 