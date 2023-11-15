//API key: IIMr3waPpdOKznPvpyy5r3tNLTtNxOJ0KtZk3Xef
//API URL: https://developer.nps.gov/api/v1


// JavaScript for search button and autocomplete function
var availableStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
  'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
  'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah',
  'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

var resultsBox = document.querySelector('.result-box');
var inputBox = document.getElementById('input-box');

inputBox.onkeyup = function () {
  var result = [];
  var input = inputBox.value;
  if (input.length) {
      result = availableStates.filter((states) => {
          return states.toLowerCase().includes(input.toLowerCase());
      });
      console.log(result);
  }
  display(result);

  if(!result.length){
      resultsBox.innerHTML = '';
  }
}

function display(result){
  var content = result.map((list)=>{
      return '<li onclick=selectInput(this)>' + list + '</li>';
  });

  resultsBox.innerHTML = '<ul>' + content.join('') + '</ul>';
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = '';
}
