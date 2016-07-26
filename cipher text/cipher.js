
function initial() {
    var output="",realput;
    var myString = document.getElementById("cipherText").value;
    var cipherString=myString.toLowerCase()
    var key=document.getElementById("key").value;
    var keySum=(key%26);
    //console.log(keySum);
    cipherArray = Array.from(cipherString);
    console.log(cipherArray);
    for(var i in cipherArray){
        if(cipherArray[i]==" "){
            cipherArray[i]="-"
        }
    }
console.log(cipherArray);
    /* Factory function creating mapper object */
    function factory() {
        var temp = {};
        for (var i = 0; i < arguments.length; i++) {

            temp[arguments[i]] = i;
            //console.log(arguments[i]);
        }
        return temp;
    }

    /* Factory function creating mapper object */
    function factory2() {
        var temp2 = {};
        for (var i = 0; i < arguments.length; i++) {

            temp2[i] = arguments[i];
            //console.log(arguments[i]);
        }
        return temp2;
    }

    var p = factory('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    //console.log(p);
    var p2 = factory2('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    //console.log(p2);

    for (var i in cipherArray) {
        
        

        for (var j in p) {
            if (cipherArray[i] == j) {
                //console.log("find at -" + j + " no. :" + p[j]);
                var vp=p[j]+keySum;
                output+=p2[vp];
                realput=output; //taking copy of output string in realput because outside the i for block output is empty string
            }
           
        }
         if(cipherArray[i]=="-"){
            //output+="/"    
            output+=" "   
         }
        
    }
/*console.log(realput);*/
    document.getElementById("result").value=realput;
}



function second() {
    var output="",realput;
    var myString = document.getElementById("cipherText").value;
    var cipherString=myString.toLowerCase()
    var key=document.getElementById("key").value;
    var keySum=(key%26);
    //console.log(keySum);
    cipherArray = Array.from(cipherString);
    console.log(cipherArray);
    for(var i in cipherArray){
        if(cipherArray[i]==" "){
            cipherArray[i]="-"
        }
    }
console.log(cipherArray);
    /* Factory function creating mapper object */
    function factory() {
        var temp = {};
        for (var i = 0; i < arguments.length; i++) {

            temp[arguments[i]] = i;
            //console.log(arguments[i]);
        }
        return temp;
    }

    /* Factory function creating mapper object */
    function factory2() {
        var temp2 = {};
        for (var i = 0; i < arguments.length; i++) {

            temp2[i] = arguments[i];
            //console.log(arguments[i]);
        }
        return temp2;
    }

    var p = factory('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    //console.log(p);
    var p2 = factory2('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
    //console.log(p2);

    for (var i in cipherArray) {
        
        

        for (var j in p) {
            if (cipherArray[i] == j) {
                //console.log("find at -" + j + " no. :" + p[j]);
                var vp=p[j]-keySum;
                output+=p2[vp];
                realput=output; //taking copy of output string in realput because outside the i for block output is empty string
            }
           
        }
         if(cipherArray[i]=="-"){
            //output+="/"    
            output+=" "   
         }
        
    }
/*console.log(realput);*/
    document.getElementById("result").value=realput;
}