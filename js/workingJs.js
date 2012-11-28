/**
 * Created with IntelliJ IDEA.
 * User: kolyan
 * Date: 29.10.12
 * Time: 23:07
 * To change this template use File | Settings | File Templates.
 */
function doAction() {
    console.log("start do action method");
    var firstArray = new Array("apple", "orange", "banana", "grape");
//    console.log(firstArray[0]);
//    console.log(firstArray[1]);

    for(var i = 0; i < firstArray.length; i++) {
        if(firstArray[i] != undefined) {
            console.log(firstArray[i]);
        } else {
            console.log("There is no such element");
        }
    }

    var j = 0;
    while (j < firstArray.length) {
        console.log(firstArray[j]);
        j++;
    }


    console.log("end of do action method")
}

function workWithDom () {
    console.log("start work with dom method");

//    console.log(document.getElementById("first").innerHTML);

    document.getElementById("first").innerHTML = "new String";

//    console.log(document.getElementById("first").innerHTML);

   var firstInput = document.getElementById("first-input").value;

   var secondInput = document.getElementById("second-input").value;
    document.getElementById("first-textarea").innerHTML = firstInput + " " + secondInput;
     document.getElementsByClassName("custom-style");

     document.getElementsByClassName("custom-style")[0].innerHTML;

    console.log("end work with dom method");
}
function showElementsValueByStyleName (styleName) {

    console.log("количество елементов " +  styleName + " на странице =  " + document.getElementsByClassName(styleName).length);

    for(var i = 0; i < document.getElementsByClassName(styleName).length; i++) {
        console.log(document.getElementsByClassName(styleName)[i].innerHTML);
    }

}
