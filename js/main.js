function FormatAndShowOutput(values, part) {
   switch (part) {
     case 1:
      document.getElementById('ConversionOutput').textContent =
        (values[0]) + " in base " + Number(values[1]) + " is " +
        (values[3]) + " in base " + Number(values[2]);
     break;
     case 2:
       document.getElementById('ConversionOutput').textContent =
          values[2] + " has a binary rep of: " + values[0] +
          " and a two's complement rep: " + values[1];
       break;
     case 3:
        document.getElementById('ConversionOutput').textContent = values[0] +
          " is represented in 32 bits by the following " + values[1];
        break;
     default:
        alert("WTF HAVE YOU DONE!!!");
        break;
   }
}
