$(function () {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/yursem@meta.ua", 
            method: "POST",
            data: {
                message: $('#name').val(),
                email: $('#email').val(),
                text: $('#text').val()
            },
            dataType: "json"
        }).done(function() { 
            $('form').html('<h1>Дякую!!</h1>')
        }).fail(function(xhr, err) {
            $('form').html(xhr.statusText);
        });        
    })
});


function initMap() {
     var Bohorodchany = {
         lat: 48.813002,
         lng: 24.532259
     };
     var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 10,
         center: Bohorodchany
     });
     var marker = new google.maps.Marker({
         position: Bohorodchany,
         map: map
     });
 }
 
 
 $(document).ready(function () {

    $('.btn-vertical-slider').on('click', function () {
        
        if ($(this).attr('data-slide') == 'next') {
            $('#myCarousel').carousel('next');
        }
        if ($(this).attr('data-slide') == 'prev') {
            $('#myCarousel').carousel('prev')
        }

    });
});