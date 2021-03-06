$(document).ready(function(){
    $('input.fieldfocus,textarea.fieldfocus').fieldFocus();
    $(".show").colorbox({
        rel:'show',
        maxWidth:800, 
        maxHeight:600,
        close: "Закрыть",
        current: "Фото {current} из {total}", 
        previous: "Назад",
        next: "Вперед"
    });
    //$( "#datepicker" ).datepicker();
});

function setSearch(){
    $('form#search').submit();
}

function getDate(obj){
    $("#select_date").html('<input name="filter[event_date]" value="" id="datepicker" />');
    //$("#datepicker").focus(function(){ $("#datepicker").datepicker('show'); });
    $("#datepicker").datepicker();
    $("#datepicker").datepicker('show');
}

function sendLetter(){
    var email = $("#main_form_email").val();
    var msg = $("#main_form_msg").val();
    
    if(email == ''){
        $("#main_form_email").css('border', '1px solid #ff0000');
        return false;
    }
    
    if(!/^[a-zA-Z0-9](([a-z0-9\-_\+\&]?)+[a-z0-9])?\@((\w([a-zA-Z0-9\-_]+\w)?\.[a-z]{2,4})|(([01]?\d\d|2[0-4]\d|25[0-5])\.([01]?\d\d|2[0-4]\d|25[0-5])\.([01]?\d\d |2[0-4]\d|25[0-5])\.([01]?\d\d|2[0-4]\d|25[0-5]))|(localhost))$/i.test(email)){
        $("#main_form_email").css('border', '1px solid #ff0000');
        return false;
    }
    
    if(msg == ''){
        $("#main_form_msg").css('border', '1px solid #ff0000');
        return false;
    }
    
    xajax_sendLetter(email, msg);
    
    $("#right_send").fadeIn(2000, function(){
        $("#main_form_email").val("");
        $("#main_form_msg").val("");
        display('hide', 99);
        $("#right_send").css("display", "none");
        //$("#right_send").fadeOut(1000, function(){display('hide', 99);});
    });
   
    
    
    return true;
}