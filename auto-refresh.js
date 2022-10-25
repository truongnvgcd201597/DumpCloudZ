let counter = 1;
setInterval(() => {
    document.querySelector('h1').innerText = counter++;
    if (counter > 30) location.reload();
}, 30000);