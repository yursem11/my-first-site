$(function () {
    $('#send').click(function(e) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/yursem@meta.ua", 
            method: "POST",
            data: {
                message: $('#name').val(),
                text: $('#texts').val()
            },
            dataType: "json"
        })
});