// API key: IIMr3waPpdOKznPvpyy5r3tNLTtNxOJ0KtZk3Xef
// API URL: https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${apiKey}


// import {
//     Ripple,
//     initTE,
//   } from "tw-elements";
  
//   initTE({ Ripple });
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
