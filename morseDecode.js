/*-------------------------------------------------------------*
 *  ARRAY QUE DEFINE TODOS OS CODIGOS DO ALFABETO EM MORSE E
 *  ATRIBUI A ELES SUA RESPECTIVA TRADUÇÃO EM UM CARACTERE 
 *  DO ALFABETO COMUM LATINO
 
 *  (1) PARA EVENTUAL TESTE DO CODIGO: UM CONJUNTO DE LETRAS EM 
 *  MORSE É SEPARADO POR UM ESPAÇO EM BRANCO, JA UM CONJUNTO DE 
 *  PALAVRAS POR TRES ESPAÇOS EM BRANCO.
 
    (2) VOCE PODE RODAR ESSE CODIGO NO SCRATCHPAD (FIREFOX)
    E VISUALIZAR SEU RESULTADO NO CONSOLE DO PRÓPRIO FIREFOX.
 *-------------------------------------------------------------*/

// CRIAÇÃO DE UM ARRAY COM 32 CARACTERES 
var morseCode = new Array(32); 
morseCode['.-'] = 'a';
morseCode['-...'] = 'b';
morseCode['-.-.'] = 'c';
morseCode['-..'] = 'd';
morseCode['.'] = 'e';
morseCode['..-.'] = 'f';
morseCode['--.'] = 'g';
morseCode['....'] = 'h';
morseCode['..'] = 'i';
morseCode['.---'] = 'j';
morseCode['-.-'] = 'k';
morseCode['.-..'] = 'l';
morseCode['--'] = 'm';
morseCode['-.'] = 'n';
morseCode['---'] = 'o';
morseCode['.--.'] = 'p';
morseCode['--.-'] = 'q';
morseCode['.-.'] = 'r';
morseCode['...'] = 's';
morseCode['-'] = 't';
morseCode['..-'] = 'u';
morseCode['...-'] = 'v';
morseCode['.--'] = 'w';
morseCode['-..-'] = 'x';
morseCode['-.--'] = 'y';
morseCode['--..'] = 'z';
morseCode['.----'] = '1';
morseCode['..---'] = '2';
morseCode['...--'] = '3';
morseCode['....-'] = '4';
morseCode['.....'] = '5';
morseCode['-....'] = '6';
morseCode['--...'] = '7';
morseCode['---..'] = '8';
morseCode['----.'] = '9';
morseCode['-----'] = '0';

var str = '-... .-. ..- -. ---   -... .-. ..- -. ---'; // string qualquer com codigo morse

function morseDecode(sstr){
  var aux = ''; // variavel que retorna a string convertida
  var wordarr; // array com os codigos separados por espaços 
  wordarr = sstr.split(" "); // função para separação dos caracteres por espaço
  for(var i=0; i < wordarr.length ; i++){
    if(!wordarr[i] && !wordarr[i+1]){ // se for null, undefined ou espaço em branco e o proximo
      //caractere também tiver as mesmas condições, adiciona espaço em branco e repete iteração
      aux += " ";
      continue;
    }
    if(!wordarr[i]){ // se for null, undefined ou " ", repete a iteração
       continue;
    }
    aux += morseCode[wordarr[i]]; // soma o conjunto de caracteres convertidos a string
  }
  return aux;
}

console.log(morseDecode(str)); 
