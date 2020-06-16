$(function() {

    var $data = $("#rrecover")
    $.ajax({
        type: 'GET',
        url: 'https://covid19.mathdro.id/api',
        success: function(data) {
            $.each(data, function(i, data) {

                $data.append('<li> ' + data + ' </li>')
            })
        }
    });
});