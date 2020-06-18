document.getElementById("button").addEventListener('click', loadText);

function loadText() {

    //create an object
    var xhr = new XMLHttpRequest();

    //OPEN - type, url/file. async

    xhr.open('GET', 'https://covid19.mathdro.id/api/countries/kenya', true);

    xhr.onload = function() {
        if (this.status == 200) {
            var covid = JSON.parse(this.responseText);

            var output = '';

            output += '<ul>' +
                '<li>' + covid.confirmed.value + '</li>' +
                '</ul>';

            document.getElementById("conf").innerHTML = output;

            var reco = '';

            reco += '<ul>' +
                '<li>' + covid.recovered.value + '</li>' +
                '</ul>';

            document.getElementById("reco").innerHTML = reco;

            var death = '';

            death += '<ul>' +
                '<li>' + covid.deaths.value + '</li>' +
                '</ul>';

            document.getElementById("kifo").innerHTML = death;





            // document.getElementById('covid').innerHTML = this.responseText;

        }
    }

    xhr.send();
    // xhr.onload = function() {
    //         if (this.status == 200) {
    //             var covid = JSON.parse(this.responseText);

    //             var output = '';

    //             for (var i in covid) {

    //                 output += '<ul>' +
    //                     '<li>' + covid.recovered.value + '</li>' +
    //                     '</ul>';

    //             }
    //             document.getElementById("reco").innerHTML = output;

    //             // document.getElementById('covid').innerHTML = this.responseText;

    //         }
    //     }
    //     // sends request
    // xhr.send();



}







// $(function() {

//     $.ajax({
//         type: 'GET',
//         url: 'https://covid19.mathdro.id/api',
//         success: function(data) {
//             $.each(data, function(i, data) {

//                 $data.append('<li> ' + data + ' </li>')
//             })
//         }
//     });
// });