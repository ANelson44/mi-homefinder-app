// API key: IIMr3waPpdOKznPvpyy5r3tNLTtNxOJ0KtZk3Xef
// API URL: https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${apiKey}


import {
    Ripple,
    initTE,
  } from "tw-elements";
  
  initTE({ Ripple });

function findNationalParks() {

  var stateCode = document.getElementById('state').value;
  //var publicBathrooms = document.getElementById('publicBathrooms').checked;
  //var rvAccess = document.getElementById('rvAccess').checked;

  var apiKey = 'IIMr3waPpdOKznPvpyy5r3tNLTtNxOJ0KtZk3Xef';
  var npsUrl = 'https://developer.nps.gov/api/v1/parks?stateCode=$' + stateCode + '&api_key=$' + apiKey;

  fetch(npsUrl)
    .then(response => response.json())
    .then(data => {
      console.log('API Data:', data);
     displayNationalParks(data.data, publicBathrooms, rvAccess);

  })
  .catch(error => console.error('Error fetching data:', error));
}
findNationalParks();