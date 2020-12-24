// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 34.149502, lng: 73.199501 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
//sticky menu background
window.addEventListener('scroll', function()
{
  if(window.scrollY > 150){
    document.querySelector('#navbar').style.opacity= 0.9;
  }
  else{
    document.querySelector('#navbar').style.opacity=1;

  }
}
);

