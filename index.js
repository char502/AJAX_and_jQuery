//Ajax request to API with jQuery

// JSON - JavaScript Object notation

$(document).ready(function () {
    var url = 'http://hn.algolia.com/api/v1/search?query=javascript';
    $.getJSON(url, function (data) {
        console.log(data)
    })
})

// Ajax response, Object or Array?
