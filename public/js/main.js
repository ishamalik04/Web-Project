const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;

  if (cityVal === "") {
    city_name.innerText = `Please write the name before you search`;
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=0c8ee34ce13f58cc507433eae869ae29`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp_real_val.innerHTML = arrData[0].main.temp;

      const tempMood = arrData[0].weather[0].main;

      if (tempMood == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas fa-sun' style='color: #eccc68'></i>";
      } else if (tempMood == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>";
      } else if (tempMood == "Clear") {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas fa-cloud' style='color: #f1f2f6'></i>";
      }
      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = `Please enter the city name properly`;
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
