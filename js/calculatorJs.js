$(document).ready(function () {

   $(".calcField").keyup(function(){
       var summ = 0;
       $(document).find(".calcField").each(function(){
           var currentVal = 0;
           var elementVal = parseFloat($(this).val().trim());
           if( elementVal != "" && !isNaN(elementVal) && elementVal != null && elementVal != undefined) {
             currentVal = elementVal;
           }
           summ += currentVal;
       });
       $("#result").html(summ);
   });


});

$(document).ready(function () {

    $(".currentValOne").keyup(function () {
        var minus = 0;
        $(document).find(".currentValOne").each(function () {
            var currentVal = 0;
            var elementVal = parseInt($(this).val().trim());
            if( elementVal != "" && !isNaN(elementVal) && elementVal != null && elementVal != undefined) {
                currentVal = elementVal;
            }
            minus += currentVal;

        });
        $("#resultation").html(minus);
    });

} );


//function limitText(limitField, limitCount, limitNum) {
//    if (limitField.value.length > limitNum) {
//        limitField.value = limitField.value.substring(0, limitNum);
//    } else {
//        limitCount.value = limitNum - limitField.value.length;
//    }
//}

