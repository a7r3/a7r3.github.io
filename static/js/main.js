let githubIcon = document.getElementById("github-id");
let linkedinIcon = document.getElementById("linkedin-id");
let telegramIcon = document.getElementById("telegram-id");

githubIcon.onclick = function() {
    window.open("https://github.com/a7r3");
};

linkedinIcon.onclick = function() {
    window.open("https://www.linkedin.com/in/arvindraj-thangaraj-434656164/");
};

telegramIcon.onclick = function() {
    window.open("https://t.me/I_Iz_N00b");
}

let navigateItem = function(event, tabItem) {
    let i = 0;
    let tabContent = document.getElementsByClassName("tab-container");

    for(i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    document.getElementById(tabItem).style.display = "block";

    let tabItems = document.getElementsByClassName("tab-item");

    for(i = 0; i < tabItems.length; i++) {
        tabItems[i].className = tabItems[i].className.replace(" active", "");
    }

    event.currentTarget.className += " active";
};

// Select 'About' as the default-selected tab
document.getElementById("defaultOpen").click();