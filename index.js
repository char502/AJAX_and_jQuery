//Ajax request to API with jQuery

// JSON - JavaScript Object notation

$(document).ready(function () {
    var url = 'http://hn.algolia.com/api/v1/search?query=javascript';
    $.getJSON(url, function (data) {
        // console.log(data instanceof Object);
        // if (Array.isArray(data.hits)) {
        //     console.log('This is an Array');
        // } else {
        //     console.log('This is not an Array')
        // }
        var allNews = data.hits; // 20 hits
        console.log(allNews);
        var eachNews = '';

        allNews.map(function (item, index, array) {
            $('.question').on('click', function () {
                eachNews += "<div>";
                eachNews += item.title;
                eachNews += "</div>";
                $('.answer').html(eachNews);
            });
        })
    });
});


// Ajax response, Object or Array?

// if an Object - use the forIn method, if it is an array might use the map method, therefore it is important to determine the type of data you are working with


// Display Ajax response in the browser


// Working with Geolocation Data
