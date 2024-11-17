function calculateDays() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), 1, 1);
    if (today.getMonth() > 1 || (today.getMonth() === 1 && today.getDate() > 1)) {
        targetDate.setFullYear(today.getFullYear() + 1);
    }
    const timeDifference = targetDate - today;
    const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    document.getElementById('daysCounter').textContent = days;
}

calculateDays();
