const settingsBtn = document.querySelector(".settings-btn");
const settingsPanel = document.querySelector(".settings-panel");
const hello = document.querySelector(".hello");
const okBtn = document.getElementById('ok-btn');
const nameInput = document.getElementById('name');

settingsBtn.addEventListener('click', () => {
    if (settingsPanel.style.visibility === 'visible') {
        settingsPanel.style.visibility = 'hidden';
    } else {
        settingsPanel.style.visibility = 'visible';
    }
});

okBtn.addEventListener('click', () => {
    const userName = nameInput.value;
    if (userName.trim().length === 0) {
        alert("Name can't be empty");
    } else {
        hello.textContent = `Hello ${userName}!!`;
    }
});