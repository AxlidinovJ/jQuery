$(document).ready(function(){
    
    $('#hide').click(function(){
        $('#name').hide(1000);
    });


    $("#show").click(function(){
        $('#name').show(1000);
    });

    $('#toggle').click(function(){
        $("#name").toggle(1000);
    });

    $('#dbclck').dblclick(function(){
        $('#name2').toggle(1000);
    });

    $("#fadein").click(function(){
        $('#name').fadeIn(1000);
    });

    $("#fadeout").click(function(){
        $("#name").fadeOut(1000);
    });

    $("#fadetoggle").click(function(){
        $("#name").fadeToggle(1000);
    });

    $("#fadeto").click(function(){
        $("#name").fadeTo(1000,0.3);
    });

    $("#slideup").click(function(){
        $("#name").slideUp(1000);
    });

    $("#slidedown").click(function(){
        $("#name").slideDown(1000);
    });

    $("#slidetoggle").click(function(){
        $("#name").slideToggle(1000);
    });


    $("#animateBtn").click(function(){
        $("#animate").animate({
            height: '3000px',
            width: '100%',
        },'5000');
    });

    $("#animate").click(function(){
        $(this).stop();
    });

    // $('*').click(function(){
    //     $(this).hide(3000);
    // });


});