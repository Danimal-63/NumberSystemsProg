
function ConversionPart3() {
  var floatToConvert = (document.getElementById("3_Float").value);
  if(floatToConvert==0){
    output32BitScientificNotation=00000000000000000000000000000000
  }else{
    var count=0;
    var start =0;
    while (count<floatToConvert.length && floatToConvert.substring(count,count+1)!="."){
      count=count+1;
    }
    if (floatToConvert<0){
      var start=1;
    }
    var topDec=convertFromBase10(floatToConvert.substring(start,count+1),2);
    if (floatToConvert<0){
      var sign=1;
      topDec=twosComp3(topDec);
    }else{
      var sign=0;
    }
    var bottomDecToConvert=0+(floatToConvert.substring(count,floatToConvert.length));
    var bottomDecConvert="*";
    while (bottomDecToConvert!=0 && bottomDecConvert.length<(24-topDec.length)){
      bottomDecToConvert=bottomDecToConvert*2;
      if (bottomDecConvert=="*"){
        bottomDecConvert=(""+bottomDecToConvert).substring(0,1);
        bottomDecToConvert=(""+bottomDecToConvert)-bottomDecConvert;
      }else{
        bottomDecConvert=(""+bottomDecToConvert).substring(0,1);
        bottomDecToConvert=(""+bottomDecToConvert)-bottomDecConvert;
      }
    }
    var expo = (topDec.length)-1;
    count=0;
    if (topDec==0){
      while (count<bottomDecConvert.length && bottomDecConvert.substring(count,count+1)!=1){
        count=count+1;
      }
      expo=(count+1)*-1;
    }
    if (bottomDecConvert!="*"){
      var combo=topDec+''+bottomDecConvert;
    }else{
      var combo=topDec;
    }
    var nextDig = combo.substring(0,1);
    while (nextDig!=1){
      combo=combo.substring(1,combo.length);
      nextDig=combo.substring(0,1);
    }
    combo=combo.substring(1,combo.length);
    expo=expo+128;
    var expo = convertFromBase10(expo,2);
    while (expo.length<8){
      expo=0+""+expo;
    }
    while (combo.length!=23){
      combo=combo+""+0;
    }
    var output32BitScientificNotation = combo+""+expo+''+sign;

  }
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}

function twosComp3(base2){
  while(base2.length<24){
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

// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
