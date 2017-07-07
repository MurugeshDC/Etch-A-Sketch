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
    $("#gridsize").click(function() {
        var gridsize = prompt("Enter the grid size between 1 to 50");

        if (gridsize == null) {

        }
        else if(50>gridsize>0) {
            $("tr, td").css({"display":"none"});          //remove the initially loaded grids
            for(var i=0;i<gridsize;i++) {
                $('#table').append("<tr>");
                for (var j = 0; j < gridsize; j++) {
                    $('#table').find('tr').last().append("<td></td>");  //Load new grids with size 'gridsize'
                }
                $('#table').append("</tr>");
            }

            $("td").hover(function() {
                $(this).addClass("red");        //When user hovers over divs, make them red!
            });
        }
        else {
            gridsize = prompt("Enter the grid size between 1 to 50");

        }
    });




});