function calculateDays() {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), 0, 26); // 0 - январь, 26 - 26 число
    if (today > targetDate) {
        targetDate.setFullYear(today.getFullYear() + 1);
    }
    const timeDifference = targetDate - today;
    const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    document.getElementById('daysCounter').textContent = days;
}

calculateDays();
