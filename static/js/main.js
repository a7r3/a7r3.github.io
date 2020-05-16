function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../../whats-up.json', true);
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
    var listItem = $('<li id=\'' + index + '\' class=\'whatsup-list-template\'>' + listItemString + '</li>');
    $('.whatsup-title', listItem).html(whatsup.title);
    $('.whatsup-description', listItem).html(whatsup.description);
    $('#whatsupImage', listItem).attr('src', whatsup.image);
    console.log(listItem.html)
    $('#whatsupList').append(listItem);
    index++;
}

loadJSON(function(text) {
    whatsupContent = JSON.parse(text)
    whatsupContent.forEach(loadWhatsupContent);
    $('li').click(function() {
        window.open(whatsupContent[this.id].link, '_blank');
    });
});