

function printPascal(){
  document.getElementById("pascal3").innerHTML = "";
  var rows = document.getElementById("line").value;
  var arr = computePascalDreieck(+rows);
  for(var i=0;i<arr.length;i++){
    var div = document.createElement('div');
    div.className ="divblock";
    for(var j=0;j<arr[i].length;j++){
      var span = document.createElement('span');
      span.innerHTML=arr[i][j];
      span.className ="block";
      div.appendChild(span);
    }
    document.getElementById("pascal3").appendChild(div);
  }
}
/*
         Function that takes number of rows as input.
         Output is a 2D array with the values.  
         I did not implement Pascal with two parameter as I thought the index can be use 
         in my for loop! an my function computePascalDreieck do take the number of line parameter
        */
        function computePascalDreieck(n){
            //2D array
            var arr = [];
            var tmp;
            for(var i=0;i<n;i++){
                //Each element in array is in turn an array
                // The index is the row number and the array values are the row values
                arr[i]=[];
                for(var j=0; j<=i; j++){
                    //If index is last element the value is always 1
                    if(j==i){
                        arr[i].push(1);
                    }else{
                        //The following line adds up the two numbers directly above this element.
                        tmp = (!!arr[i-1][j-1]?arr[i-1][j-1]:0)+(!!arr[i-1][j]?arr[i-1][j]:0);
                        arr[i].push(tmp);
                    }
                }
            }
            return arr;
        }  // Thanks and hope the new version is okay sir!