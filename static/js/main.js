function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../../assets/whats-up.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}

let whatsupContent;

var listItemString = $('#whatsupItem').html();
var index = 0;

function loadWhatsupContent(whatsup) {
    let listItem = '<li id="' + index + '" class="whatsup-list-template">';
    listItem += '<img class="whatsup-image" id="whatsupImage" src=\"' + whatsup.image + '\">';
    listItem += '<div style="flex-direction: column;">';
    listItem += '<div class="whatsup-title">' + whatsup.title + '</div>';
    listItem += '<div class="whatsup-description">' + whatsup.description + '</div>';
    listItem += '</div>';

    document.getElementById('whatsupList').innerHTML += listItem;
    index++;
}

loadJSON(function(text) {
    whatsupContent = JSON.parse(text)
    whatsupContent.forEach(loadWhatsupContent);
    $('li').click(function() {
        window.open(whatsupContent[this.id].link, '_blank');
    });
});