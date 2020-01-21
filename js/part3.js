
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
      //topDec=twosComp3(topDec);
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
    count=0;
    var expo = ((""+topDec).length)-1;
    if (bottomDecConvert!="*"){
      var combo=((topDec+"").substring(1,(topDec+"").length))+''+bottomDecConvert;
    }else{
      combo=(topDec+"".substring(1,(topDec+"").length));
  }
  var expo = ((topDec+"").substring(1,(topDec+"").length)).length;
  if (topDec==0){
    while (count<bottomDecConvert.length && bottomDecConvert.substring(count,count+1)!=1){
      count=count+1;
    }
    expo=(count+1)*-1;
  }
    expo=expo+127;
    var expo = convertFromBase10(expo,2);
    while (expo.length<8){
      expo=0+""+expo;
    }
    while (combo.length<23){
      combo=combo+""+0;
    }
    var output32BitScientificNotation = sign+""+expo+''+combo;

  }
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
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
