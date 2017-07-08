
var gridnum;
function grid(gridsize) {
    for(var i=0;i<gridsize;i++) {
        $('#table').append("<tr>");
        for (var j = 0; j < gridsize; j++) {
            $('#table').find('tr').last().append("<td></td>");
        }
        $('#table').append("</tr>");
    }
}

$(document).ready(function() {
    grid(15);
    //When user hovers over divs, make them red!
    $("td").hover(function() {
        $(this).addClass("red");
    });

    //When the user clicks on clear, remove red color.
    $("#clear").on("click",function() {
        $("td").removeClass("red");
    });

    //When user clicks on gridsize
    $("#gridsize").on("click",function() {

        gridnum = prompt("Enter the gridsize between 1 to 100");
        while(gridnum>100 || gridnum<0 || isNaN(gridnum) && gridnum!=null) {
            gridnum = prompt("Wrong value! \n Enter the gridsize only between 1 and 100 \n OR \nclick cancel to return!");
        }
        while(gridnum=="" || gridnum==0){
            gridnum = prompt("Empty value is not accepted! \n Enter the gridsize only between 1 and 100 \n OR \nclick cancel to return!");
        }
        if(!isNaN(gridnum) && gridnum<=100 && gridnum>0 && gridnum!=null && gridnum!=""){
            $("tr, td").css({"display":"none"});
            grid(gridnum);
            $("td").hover(function() {
                $(this).addClass("red");
            });
        }
    });


});