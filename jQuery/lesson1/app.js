$('h1').css({'color': 'green'}) 

$('#open').click(() => {
    $('#message').html('Message')
})

$('#close').click(() => {
    location.reload()
})