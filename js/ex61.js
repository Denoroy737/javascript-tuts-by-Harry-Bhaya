console.log("Hey I got The page ");
setInterval(time , 1000) 

function time() {
    const time = new Date();
    document.getElementById("Time").innerText = time.toLocaleTimeString();
}

