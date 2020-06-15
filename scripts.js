$(document).ready(function() {
    $("h1").click(function() {
        alert("This is  header")
    });
});


$(function() {
    $.ajax({
        type: 'GET',
        url: 'https://covid19.mathdro.id/api',
        success: function(data) {
            console.log('success', data);
        }
    });
});