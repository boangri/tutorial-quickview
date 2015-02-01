$(document).ready(function(){
    //$(".container").html('<a class="btn-quickview" href="http://www.xland.ru/sw"><span>Quick View</span></a>');
    var n = 1;
    $.each($('.container'), function(){
        if (console.log) {
            console.log(n);
        } else {
            alert(n);
        }
        $(this).html('<a class="btn-quickview" href="http://www.xland.ru/sw"><span>Quick View '+n+'</span></a>');
        n++;
    });
    
});
