$(document).ready(function() {

    for(var i=0;i<15;i++) {
        $('#table').append("<tr>");
        for (var j = 0; j < 15; j++) {
            $('#table').find('tr').last().append("<td></td>");
        }
        $('#table').append("</tr>");
    }

    $("td").hover(function() {
        $(this).addClass("red");
    });

    $("#clear").on("click",function() {
        $("td").removeClass("red");
    });



});