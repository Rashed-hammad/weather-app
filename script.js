let place = "Lebanon";
const tempp = document.querySelector(".temp");
const date = document.querySelector(".time_location span");
const loc = document.querySelector(".time_location p");
const weather = document.querySelector(".condition p");
const image = document.querySelector(".condition img");
const search = document.querySelector(".searchh");
const btn = document.querySelector(".btn");
const form = document.querySelector("form");

form.addEventListener("submit", searchLocation);
const fetchData = async (place) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=427134ea72024396a08230003242001&q=${place}&aqi=no`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  let locationName = data.location.name;
  let time = data.location.localtime;
  let temp = data.current.temp_c;
  let condition = data.current.condition.text;
  let imgg = data.current.condition.icon;
  loc.innerHTML = locationName;
  date.innerHTML = time;
  tempp.innerHTML = temp + "°C";
  weather.innerHTML = condition;
  image.src = imgg;
};
function searchLocation(e) {
  e.preventDefault();
  place = search.value;
  fetchData(place);
}
fetchData(place);
