window.addEventListener("load", checkInternetConnection);


function checkInternetConnection() {
    const statusText = document.getElementById("statusText");
    const ipAddressText = document.getElementById("ipAdressText");
    const networkStrengthText = document.getElementById("networkStrengthText");

    statusText.textContent = "Checking...";

    // main if condition h only
    if (navigator.onLine) {
        console.log("broswer is online");
        fetch("https://api.ipify.org?format=json")
            .then((response) => response.json())
            .then((data) => {
                ipAddressText.textContent = data.ip;
                statusText.textContent = "connected"
                const connection = navigator.connection;
                const networkStrength = connection ? connection.downlink + "Mbps" : "unknown";
                networkStrengthText.textContent = networkStrength;
            })
            .catch(() => {
                statusText.textContent = "Disconnected";
                ipAddressText.textContent = "-";
                networkStrengthText.textContent = "-";
            })
    }
    else {
        statusText.textContent = "Disconnected";
        ipAddressText.textContent = "-";
        networkStrengthText.textContent = "-";
    }
}
