// variables
const btn = document.querySelector("#maps-btn");
const canvas = document.querySelector("#map");
let map;

// intitalizing the map
function getMap() {
  map = new Microsoft.Maps.Map("#myMap", {
    credentials:
      "AoNNaJmBT7XvRv-VLkaKVQiS9C39_myEBATdBoAP1WwmlQG9ZXSIQwbW_QMi_Yph",
  });
}

// checking if geolocation is supported
btn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(locateSuccess, locateFail);
  } else {
    locateFail();
  }
});

function locateSuccess(pos) {
  alert("Geoloction is supported and working.");

  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;

  map.setView({
    center: new Microsoft.Maps.Location(lat, long),
    zoom: 15,
  });
  
}

function locateFail() {
  alert("Geoloction is not supported.");
}
