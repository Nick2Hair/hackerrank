
var input = 6;




function stairCase(input) {
    var space="";
    var hash = "";
    var hspace="";

    for(var i=input; i>0; i--) { 
        var space="";

        for(var j=i; j>1; j--) {
            space+=" ";
        }
        hash+="#";
        hspace = space+hash;
        console.log(hspace);
        
    }
}


stairCase(input);

//Complete