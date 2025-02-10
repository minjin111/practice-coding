document.getElementById("openInstagram").addEventListener("click", () => {
    chrome.tabs.create({ url: "https://www.instagram.com/riki_dive00/" });
});

document.getElementById("openWhatsApp").addEventListener("click", () => {
    chrome.tabs.create({ url: "https://wa.me/+60195690546" });
});
