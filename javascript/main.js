$(document).ready(function () {
    $('#formulario').on('submit', function (event) {
        event.preventDefault();
        setTimeout(function () {
            $('#successAlert').fadeIn();
            setTimeout(function () {
                $('#successAlert').fadeOut();
            }, 5000);
        }, 500);
    });
});
