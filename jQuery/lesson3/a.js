$('.square').
    css({'background-color': 'green',
                    'height': '100px',
                    'width': '100px',
                    'margin-top': '100px',
                    'margin-bottom': '100px'})

$('.square').click( () => {
    $('.square').hide(800)
})

$('.article p').css({'display': 'none'})
$('.active').click( () => {
    $('.article p').slideDown(800);
})
