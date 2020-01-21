function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);


    if (SignedDecimalInt>0){
      var outputValue=convertFromBase10(SignedDecimalInt,2)
      while(outputValue.length<32){
        outputValue=0+""+outputValue;
      }
      var outputValueTwosComplement=twosComp(outputValue)
    }else{
      SignedDecimalInt=SignedDecimalInt*-1;
      var outputValueTwosComplement=convertFromBase10(SignedDecimalInt,2)
      while(outputValueTwosComplement.length<32){
        outputValueTwosComplement=0+""+outputValueTwosComplement;
      }
      var outputValue = twosComp(outputValueTwosComplement);
      SignedDecimalInt=SignedDecimalInt*-1;
    }

    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
function twosComp(base2){
  while(base2.length<32){
    base2=0+""+base2;
  }
  var output=""
  var nextDig=""
  while (base2.length>0){
      nextDig=base2.substring(0,1);
      if (nextDig==1){
        nextDig=0
      }else{
        nextDig=1
      }
      if (output==null){
        output=nextDig;
      }else{
        output=output+nextDig;
      }
    base2=base2.substring(1,base2.length);
  }
  var count=output.length;
  do{
    nextDig=output.substring(count-1,count)
    if (nextDig==0){
      output=output.substring(0,count-1)+""+1+""+output.substring(count,output.length);
    }else{
      output=output.substring(0,count-1)+""+0+""+output.substring(count,output.length);
    }
    count=count-1;
  }while(nextDig!=0 && count>0)
    return output;
}
