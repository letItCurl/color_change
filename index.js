var stringToColour = function(str) {
colors = [
        '#795548',
        '#607D8B',
        '#D50000',
        '#C51162',
        '#E91E63',
        '#9C27B0',
        '#7E57C2',
        '#512DA8',
        '#283593',
        '#1565C0',
        '#00ACC1',
        '#009688',
        '#388E3C',
        '#00796B',
        '#B38827',
        '#EF6C00',
        '#EF6C00'
    ];
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    b = a.map(function(color) {return color.substring(1) })
    return colour;
}

$('body').css('background-color', stringToColour("fdfgdggdg"));
