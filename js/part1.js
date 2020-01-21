function ConversionPart1() {

    var UnsignedInt = (document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);

var outputValue=convertFromBase10(convertToBase10(UnsignedInt,UnsignedIntBaseFrom),UnsignedIntBaseTo);
  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
function convertToBase10(UnsignedInt,UnsignedIntBaseFrom){
var outputValue;
var nextDig=0;
UnsignedInt+="";
  while (UnsignedInt.length!=0){
    nextDig=UnsignedInt.substring(0,1);
    if (nextDig=="A"){
      nextDig=10;
    }
    if (nextDig=="B"){
      nextDig=11;
    }if (nextDig=="C"){
      nextDig=12;
    }if (nextDig=="D"){
      nextDig=13;
    }if (nextDig=="E"){
      nextDig=14;
    }if (nextDig=="F"){
      nextDig=15;
    }
    if (outputValue==null){
      outputValue=nextDig;
    }else{
    outputValue=parseInt(outputValue*UnsignedIntBaseFrom)+parseInt(nextDig);
  }
    UnsignedInt=UnsignedInt.substring(1,UnsignedInt.length);
  }
  return outputValue;
}
function convertFromBase10(base10, UnsignedIntBaseTo){
  var val;
  var nextDig;
  while (base10>0){
    nextDig=parseInt(base10 % UnsignedIntBaseTo);
    base10=parseInt(base10 / UnsignedIntBaseTo);
    if (nextDig==10){
      nextDig="A";
    }
    if (nextDig==11){
      nextDig="B";
    }
    if (nextDig==12){
      nextDig="C";
    }
    if (nextDig==13){
      nextDig="D";
    }
    if (nextDig==14){
      nextDig="E";
    }
    if (nextDig==15){
      nextDig="F";
    }
    if (val==null){
      val=nextDig;
    }else{
    val=nextDig+""+val;
  }
}
  return val;
}
