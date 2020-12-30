
var sentences;
var sentence;
function showFirstPara()
{
  sentences=[];
  for (var i = 1; i <= 6; i++)
  {
    sentence = document.getElementById("para_input_box_" + i).value;
    if (sentence.substring(0,3) === "Who" || sentence.substring(0,3) === "who" || sentence.substring(0,4) === "What" || sentence.substring(0,4) === "what")
      {
        sentence = sentence + "? ";
      } 
    else if(sentence.substring(0,1) != "")
      {
        sentence = sentence + ". ";
      }
      sentences.push(sentence);
      document.getElementById("first_para_display").innerHTML = sentences.join("");
 }
 
}

function showSecondPara()
{
  sentences=[];
  for (var i = 7; i <= 12; i++)
  {
    sentence = document.getElementById("para_input_box_" + i).value;
    if (sentence.substring(0,3) === "Who" || sentence.substring(0,3) === "who" || sentence.substring(0,4) === "What" || sentence.substring(0,4) === "what")
      {
        sentence = sentence + "? ";
      } 
    else if(sentence.substring(0,1) != "")
      {
        sentence = sentence + ". ";
      }
      sentences.push(sentence);
      document.getElementById("second_para_display").innerHTML = sentences.join("");
 }
}