const obj = document.getElementById("timeDisplay");

function countDown() {
    const currTime = new Date();
    const gradTime = new Date("2026-07-01T00:00:00");
    const diff = gradTime - currTime;
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor(diff / (1000 * 60 * 60) % 24);
    let minutes = Math.floor(diff / (1000 * 60) % 60);
    let seconds = Math.floor(diff / (1000) % 60);
    obj.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    console.log(obj.innerHTML);
}

setInterval(countDown, 1000);


