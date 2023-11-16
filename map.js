// JavaScript for map

function showMap(parkName, latitude, longitude) {
    const mapPageUrl = `map.html?name=${encodeURIComponent(parkName)}&lat=${latitude}&lng=${longitude}`;
    window.location.href = map.html;
}
