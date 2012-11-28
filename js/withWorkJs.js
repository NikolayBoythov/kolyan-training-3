

function doAction () {
    console.log("start do action method");
    var firstArray =new Array("pen", "book", "apple");
//    console.log(firstArray [0]);
//    console.log(firstArray[1]);

    for(var i = 0; i < firstArray.length; i++) {
        if(firstArray[i] != undefined) {
            console.log(firstArray[i]);
        }else{
            console.log("There is not such element");
        }
    }
    var j = 0;
    while (j < firstArray.length) {
        console.log (firstArray[j]);
        j++;
    }




    console.log("end of do action method")
}


function count_rabbits() {

    for(var i=1; i<=5; i++) {

        // оператор + соединяет строки

        alert("Из шляпы достали "+i+" кролика!")

    }

}
