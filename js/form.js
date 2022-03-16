$(document).ready(function(){
    
    $("#oddi").click(function(){
        $("#a").attr('type','text');

    });

    $("#ozgar").click(function(){
        $("#a").attr('type','password');
    });

    $("#rang").click(function(){
        $("#a").attr('type','color');
    });

    $("#calendar").click(function(){
        $("#a").attr('type','date');
    });

    
    $("#time").click(function(){
        $("#a").attr({
            'type':'time',
            // 'id':"jamshidbek",
        });
    });


});