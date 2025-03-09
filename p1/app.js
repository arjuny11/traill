
    // const subject = {
    //     math:50,
    //     english:35,
    //     science:45,
    //     allSubjcet : function(){
    //         return this.math + this.english + this.science;
    //     }
    // }
    // let marks = subject.allSubjcet();
    // console.log("5" * "2");
    // document.getElementById("demo").innerHTML= marks;
  //  convert a string into array 
  let nam = "arjun";
  const arr = nam.split(" ");
  let txt = " ";
  for( let i = 0 ; i < arr.length; i++){
    txt += arr[i] 
    + "<br>"
  }
  document.getElementById("demo").innerHTML=txt;