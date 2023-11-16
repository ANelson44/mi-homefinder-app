// API key: IIMr3waPpdOKznPvpyy5r3tNLTtNxOJ0KtZk3Xef
// API URL: https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${apiKey}


// JavaScript for search button and autocomplete function
var availableStates = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT',
  'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS',
  'KT', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN',
  'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
  'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT',
  'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

var resultsBox = document.querySelector('.result-box');
var inputBox = document.getElementById('state');

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

function submitState() {
  const stateCode = document.getElementById('state').value;
  localStorage.setItem('selectedState', stateCode);
  window.location.href = 'results.html';
}

function displayNationalParks() {
  const stateCode = localStorage.getItem('selectedState');
  const parksContainer = document.getElementById('parkCard')
  //var publicBathrooms = document.getElementById('publicBathrooms').checked;
  //var rvAccess = document.getElementById('rvAccess').checked;

  var apiKey = 'IIMr3waPpdOKznPvpyy5r3tNLTtNxOJ0KtZk3Xef';
  var npsUrl = `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${apiKey}`;

  fetch(npsUrl)
    .then(function(response){
      return response.json();
    })
    .then(function(apple){
      console.log('API Data:', apple);
      const parks = apple.data
      let cardHtml = '' 
      parks.forEach(park => {
        const parkName = park.fullName
        // cardHtml += `<li>${parkName}</li>` 
        cardHtml += `
        <div class="border-solid border-2 border-red-600">
          <div class="font-bold text-xl mb-2" id="parkName">Park Name: ${parkName}</div>
          <div class="font-bold text-l mb-2">State: ${park.states}</div>
        </div>
        `
      });
      console.log('Park Name: ', cardHtml);
      $('#parkList').html(cardHtml)
    })


}
if (window.location.pathname.includes('results.html')) {
  displayNationalParks();
}
