// CODIGO EM ANDAMENTO...

var str = '-... .-. ..- -. ---   -.. ---   .--. ';
function morseDecode(sstr){
  var word = '';
  var aux = '';
  for(var i in sstr){
    
      if((sstr[i] == ' ') && (sstr[i+1] == ' ') && (sstr[i+2] == ' ')){
        aux += ' ';
        continue;
      }
      
      if((sstr[i] == ' ') && (sstr[i+1] != ' ')){
        aux += morseCode[word];
        word = '';
        continue;
      }
      word += sstr[i];
  }
  return aux;
}

console.log(morseDecode(str));
