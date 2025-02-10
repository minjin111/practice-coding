chrome.runtime.onInstalled.addListener(() => {
    console.log("Practice Coding Extension Installed!");
});

chrome.action.onClicked.addListener(() => {
    chrome.notifications.create({
        type: "basic",
        iconUrl: "icon.png",
        title: "WhatsApp Alert",
        message: "New WhatsApp message! Click to open chat.",
        buttons: [{ title: "Open WhatsApp" }],
        priority: 2
    });
});

chrome.notifications.onButtonClicked.addListener((notificationId, buttonIndex) => {
    if (buttonIndex === 0) {
        chrome.tabs.create({ url: "https://wa.me/+60195690546" });
    }
});
