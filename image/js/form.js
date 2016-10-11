$(function () {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/semk1104@gmail.com", 
            method: "POST",
            data: {
                message: $('#name').val(),
                text: $('#text').val()
            },
            dataType: "json"
        })
});