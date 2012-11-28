$(document).ready(function () {
    $("#too").click(function () {
        for (var i = 1; i <= 5; i++) {

            // оператор + соединяет строки

            alert("Из шляпы достали " + i + " кролика!")

        }
    });
    var currentColor = "#000000";

//   $("#our-color-switcher").mouseover( function() {
//        currentColor = $(this).css("background-color");
//        $(this).css("background-color", "green");
//    });
//    $("#our-color-switcher").mouseout( function() {
//        $(this).css("background-color", currentColor);
//     });

    $("#our-color-switcher").mouseover(function () {
        $(this).parent().parent().find("input").each(function () {
            $(this).slideDown(1000);
//            $(this).show();
        });
    });
    $("#our-color-switcher").click(function () {
        $(this).parent().parent().find("input").each(function () {
            $(this).val("gf[hkgnkdgfop");
            var maxLeng = $(this).attr("maxlength");
            alert(maxLeng);
            $(this).attr("maxlength", "100");
            $(this).removeAttr("maxlength");
            $(this).slideUp(1000);

        })
    });
    $("#our-color-switcher").click(function () {
        var val = $(this).html();
        console.log(val);
    });
});


//function showCount() {
// var input = document.getElementById("countable-field");
// document.getElementById('result').innerHTML = input.value.length;
//}
//input.oncut = input.onkeyup = input.oninput = showCount;
//input.onpropertychange = function () {
//  if (event.propertyName == "value") showCount();
//};


//$(document).ready(function () {
//    $('textarea').limit('100', '#charsleft');
//});

$(document).ready(function () {
//     validate required fields
    if($("#calculable-field") != undefined && $("#calculable-field").length > 0
         && $("#calculable-field").attr("maxlength") != undefined
         && $("#counter-element") != undefined && $("#counter-element").length > 0  ) {
                $("#counter-element").html($("#calculable-field").attr("maxlength"));
     } else {
         $("#counter-element-label").css("display", "none");
         $("#counter-element").css("display", "none");
     }

    $("#calculable-field").keyup(function() {
       var maxSymbols = parseInt($(this).attr("maxlength").trim());
       var currentFieldLength = parseInt($(this).val().trim().length);
        if(currentFieldLength > maxSymbols) {
            console.log("error: field length bigger than max symbols");
        } else {
            $("#counter-element").html(parseInt(maxSymbols - currentFieldLength).toString());
        }
    });
});


//  var too = document.getElementById("too");
//too.onclick = function() {
//
//    for(var i=1; i<=5; i++) {
//
//        // оператор + соединяет строки
//
//        alert("Из шляпы достали "+i+" кролика!")
//
//    }
//
//};




