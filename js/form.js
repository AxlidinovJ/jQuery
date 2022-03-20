$(document).ready(function(){
    
    $("#oddi").click(function(){
        $("#a").attr('type','text');
        var j = $("#a").val();
        var m = $("#label").text();
        $("#label").text(parseInt(j)+parseInt(m));
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