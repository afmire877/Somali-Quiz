// 10 questions
// show questions and options
// Easy to Hard 
// Each Question has points, total points displayed at the end and stars 


// Quiz Question and Answer Bank
var questionBank = {
	question1: [ "What continent is africa located in?" , "Asia", "Europe", "Africa"],
	question2: [ "What is the capital city of Somalia ?" , "Mogadishu", "Addis abba", "lagos"],
	question3: [ "What religon is predominate in Somalia?" , "Jewdaism", "Islam", "Sikhism"],
	question4: [ "When the country of Somalia formed?" , "1 July 1960", " 1 January 1964", "21 October 1967"],
	question5: [ "When was the Somalia Language first written?" , "In 1972", "In 1905", "In 1988"],
	question6: [ "What film was about somali pirates?" , "Captain Philips", "Black hawk Down", "Africa "],
	question7: [ "What was somalia Known as before the civil war?" , "The Switzerland of Africa", "the Pearl of Africa", "The Emerald of the Equator"],
	question8: [ "What africa located in?" , "Asia", "Europe", "Africa"],
	question9: [ "What continent is africa located in?" , "Aia", "Euro", "Africa"],
	question10: [ "africa located in?" , "A,a", "Europe", "Africa"],
}

var answers = document.getElementsByName("answers");
var labels = document.querySelectorAll('label');
var Qdisplay = document.querySelector("#question");
var form = document.getElementsByTagName('form');
var next = document.querySelector('#next');
var quiz = document.querySelector('#quiz');
var begin = document.querySelector('#begin');
const entries = Object.entries(questionBank);
var resultDisplay = document.querySelector('#resultDisplay');
var option1 = document.getElementById('#option1');
var option2 = document.getElementById('#option2'); 
var option3 = document.getElementById('#option3');  


begin.addEventListener('click', function(){
	quiz.style.display = 'block';
	begin.style.display = 'none';
	resultDisplay.style.display = 'none';

	// Display the question
	Qdisplay.textContent = entries[0][1][0];

	//displays the inputs the text in the label tags
	labels[0].childNodes[0].data = entries[0][1][1];
	labels[1].childNodes[0].data = entries[0][1][2];
	labels[2].childNodes[0].data = entries[0][1][3];

	//gives the radio buttons value 
	form[0].elements.answers[0].value = entries[0][1][1];
	form[0].elements.answers[1].value = entries[0][1][2];
	form[0].elements.answers[2].value = entries[0][1][3];

});

var count = 1;

next.addEventListener('click', function(){
		if(count < 10){
			Qdisplay.innerHTML = entries[count][1][0];
			labels[0].childNodes[0].data = entries[count][1][1];
			labels[1].childNodes[0].data = entries[count][1][2];
			labels[2].childNodes[0].data = entries[count][1][3];
			clearAllRadios();
			count++;	
		}else { 
			quiz.style.display = 'none';
			resultDisplay.style.display = 'none'

		}
	

});

 function clearAllRadios() {
    
    for (var i = 0; i < answers.length; i++) {
      if(answers[i].checked) answers[i].checked = false;
    }
  }

// function getRadioVal(form, name) {
//     var val;
//     // get list of radio buttons with specified name
//     var radios = form.elements[name];
    
//     // loop through list of radio buttons
//     for (var i=0, len=radios.length; i<len; i++) {
//         if ( radios[i].checked ) { // radio checked?
//             val = radios[i].value; // if so, hold its value in val
//             break; // and break out of for loop
//         }
//     }
//     return val; // return value of checked radio or undefined if none checked
// }





