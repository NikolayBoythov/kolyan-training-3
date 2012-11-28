$(document).ready(function(){

    $("form").submit(function(){
        $.post("../backend/addCredendtials.php",
            {first : $("#first").val().trim(), second: $("#second").val().trim()})
            .success(function(data) {
               $("#data-from-response").html(data);
            })
            .error(function(err){
               $("#error-data").html(err.responseText);
            });
      return false;
    });

$("#calc").click(function() {
    $.post("../backend/calculator.php",
        {"first-summand":$("#first-summand").html().trim(),"second-summand":$("#second-summand").html().trim()})
        .success(function(data) {
            $("#summ").html(data);
        })
        .error(function(err) {
            $("#summ").html(err.responseText);

        });
    return false;
});




});
$("#test").keyup(function () {
    $post.("../backend/calculator.php",
    {"test":$("#test").val().trim()})
        .success(function(data) {
        $("#result").html(data);
    })
        .error(function(err) {
        $("#result").html(err.responseText);
    });
    return false;
});


$("#toys").keyup(function () {
    $get.("../backend/calculator.php",
    {"toys":$("#toys").val().trim()})
        .success(function(data) {
        $("#result").html(data);
    })
        .error(function(err) {
        $("#resultat").html(err.responseText);
    });
    return false;
});