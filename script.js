
// Countdown function without a name
(function countdown(i) {
    document.getElementById('countdown').textContent = i;

    if (i > 0) {
        setTimeout(() => {
            countdown(i - 1);
        }, 1000);
    } else {
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('independenceDayMessage').style.display = 'block';
    }
})(10);
