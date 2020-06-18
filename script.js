//Kenya
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

}

document.getElementById('button2').addEventListener('click', loadwords);

function loadwords() {
    var ug = new XMLHttpRequest();

    ug.open('GET', 'https://covid19.mathdro.id/api/countries/uganda', true);

    ug.onload = function() {
        if (this.status == 200) {
            var pand = JSON.parse(this.responseText);

            var output = '';

            output += '<ul>' +
                '<li>' + pand.confirmed.value + '</li>' +

                '</ul>'

            document.getElementById('con').innerHTML = output;

            var good = '';

            good += '<ul>' +
                '<li>' + pand.recovered.value + '</li>' +
                '</ul>'

            document.getElementById('rec').innerHTML = good;

            var bad = '';

            bad += '<ul>' +
                '<li>' + pand.deaths.value + '</li>' +
                '</ul>'

            document.getElementById('kif').innerHTML = bad;


        }

    }
    ug.send();

}

document.getElementById('button3').addEventListener('click', loadtaz);

function loadtaz() {
    var taz = new XMLHttpRequest();

    taz.open('GET', 'https://covid19.mathdro.id/api/countries/tanzania', true);

    taz.onload = function() {
        if (this.status = +200) {

            var mag = JSON.parse(this.responseText);

            var output = '';

            output += '<ul>' +
                '<li>' + mag.confirmed.value + '</li>' +
                '</ul>'


            document.getElementById('tho').innerHTML = output;

            var fuli = "";

            fuli += '<ul>' +
                '<li>' + mag.recovered.value + '</li>' +
                '</ul>'

            document.getElementById('nafu').innerHTML = fuli;

            var vifo = "";

            vifo += '<ul>' +
                '<li>' + mag.deaths.value + '</li>' +

                '</ul>'

            document.getElementById('bran').innerHTML = vifo;
        }
    }
    taz.send();
}