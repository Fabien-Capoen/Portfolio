function dynamic_color(){
    // $('.caseDamier').mouseenter(function (){
    //     $(this).css("background-color", randomcolor ())
    // })
    $('.caseDamier').click(function (){
        $(this).css("background-color", randomcolor ())
    })
    $('.caseDamier').each(function (){
        $(this).css("background-color", randomcolor ())
    })
}

function randomcolor () {
    let r = Math.floor (Math.random()*256); 
    let g = Math.floor (Math.random()*256); 
    let b = Math.floor (Math.random()*256); 
    let a = Math.random();
    let rgb = `rgba( ${r}, ${g}, ${b}, ${a})`;
    return rgb;
}