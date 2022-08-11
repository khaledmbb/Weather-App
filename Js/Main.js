const countryList = {
  "AF": "Afghanistan",
  "AL": "Albania",
  "DZ": "Algeria",
  "AS": "American Samoa",
  "AD": "Andorra",
  "AO": "Angola",
  "AI": "Anguilla",
  "AQ": "Antarctica",
  "AG": "Antigua and Barbuda",
  "AR": "Argentina",
  "AM": "Armenia",
  "AW": "Aruba",
  "AU": "Australia",
  "AT": "Austria",
  "AZ": "Azerbaijan",
  "BS": "Bahamas (the)",
  "BH": "Bahrain",
  "BD": "Bangladesh",
  "BB": "Barbados",
  "BY": "Belarus",
  "BE": "Belgium",
  "BZ": "Belize",
  "BJ": "Benin",
  "BM": "Bermuda",
  "BT": "Bhutan",
  "BO": "Bolivia (Plurinational State of)",
  "BQ": "Bonaire, Sint Eustatius and Saba",
  "BA": "Bosnia and Herzegovina",
  "BW": "Botswana",
  "BV": "Bouvet Island",
  "BR": "Brazil",
  "IO": "British Indian Ocean Territory (the)",
  "BN": "Brunei Darussalam",
  "BG": "Bulgaria",
  "BF": "Burkina Faso",
  "BI": "Burundi",
  "CV": "Cabo Verde",
  "KH": "Cambodia",
  "CM": "Cameroon",
  "CA": "Canada",
  "KY": "Cayman Islands (the)",
  "CF": "Central African Republic (the)",
  "TD": "Chad",
  "CL": "Chile",
  "CN": "China",
  "CX": "Christmas Island",
  "CC": "Cocos (Keeling) Islands (the)",
  "CO": "Colombia",
  "KM": "Comoros (the)",
  "CD": "Congo (the Democratic Republic of the)",
  "CG": "Congo (the)",
  "CK": "Cook Islands (the)",
  "CR": "Costa Rica",
  "HR": "Croatia",
  "CU": "Cuba",
  "CW": "Curaçao",
  "CY": "Cyprus",
  "CZ": "Czechia",
  "CI": "Côte d'Ivoire",
  "DK": "Denmark",
  "DJ": "Djibouti",
  "DM": "Dominica",
  "DO": "Dominican Republic (the)",
  "EC": "Ecuador",
  "EG": "Egypt",
  "SV": "El Salvador",
  "GQ": "Equatorial Guinea",
  "ER": "Eritrea",
  "EE": "Estonia",
  "SZ": "Eswatini",
  "ET": "Ethiopia",
  "FK": "Falkland Islands (the) [Malvinas]",
  "FO": "Faroe Islands (the)",
  "FJ": "Fiji",
  "FI": "Finland",
  "FR": "France",
  "GF": "French Guiana",
  "PF": "French Polynesia",
  "TF": "French Southern Territories (the)",
  "GA": "Gabon",
  "GM": "Gambia (the)",
  "GE": "Georgia",
  "DE": "Germany",
  "GH": "Ghana",
  "GI": "Gibraltar",
  "GR": "Greece",
  "GL": "Greenland",
  "GD": "Grenada",
  "GP": "Guadeloupe",
  "GU": "Guam",
  "GT": "Guatemala",
  "GG": "Guernsey",
  "GN": "Guinea",
  "GW": "Guinea-Bissau",
  "GY": "Guyana",
  "HT": "Haiti",
  "HM": "Heard Island and McDonald Islands",
  "VA": "Holy See (the)",
  "HN": "Honduras",
  "HK": "Hong Kong",
  "HU": "Hungary",
  "IS": "Iceland",
  "IN": "India",
  "ID": "Indonesia",
  "IR": "Iran (Islamic Republic of)",
  "IQ": "Iraq",
  "IE": "Ireland",
  "IM": "Isle of Man",
  "IL": "Israel",
  "IT": "Italy",
  "JM": "Jamaica",
  "JP": "Japan",
  "JE": "Jersey",
  "JO": "Jordan",
  "KZ": "Kazakhstan",
  "KE": "Kenya",
  "KI": "Kiribati",
  "KP": "Korea (the Democratic People's Republic of)",
  "KR": "Korea (the Republic of)",
  "KW": "Kuwait",
  "KG": "Kyrgyzstan",
  "LA": "Lao People's Democratic Republic (the)",
  "LV": "Latvia",
  "LB": "Lebanon",
  "LS": "Lesotho",
  "LR": "Liberia",
  "LY": "Libya",
  "LI": "Liechtenstein",
  "LT": "Lithuania",
  "LU": "Luxembourg",
  "MO": "Macao",
  "MG": "Madagascar",
  "MW": "Malawi",
  "MY": "Malaysia",
  "MV": "Maldives",
  "ML": "Mali",
  "MT": "Malta",
  "MH": "Marshall Islands (the)",
  "MQ": "Martinique",
  "MR": "Mauritania",
  "MU": "Mauritius",
  "YT": "Mayotte",
  "MX": "Mexico",
  "FM": "Micronesia (Federated States of)",
  "MD": "Moldova (the Republic of)",
  "MC": "Monaco",
  "MN": "Mongolia",
  "ME": "Montenegro",
  "MS": "Montserrat",
  "MA": "Morocco",
  "MZ": "Mozambique",
  "MM": "Myanmar",
  "NA": "Namibia",
  "NR": "Nauru",
  "NP": "Nepal",
  "NL": "Netherlands (the)",
  "NC": "New Caledonia",
  "NZ": "New Zealand",
  "NI": "Nicaragua",
  "NE": "Niger (the)",
  "NG": "Nigeria",
  "NU": "Niue",
  "NF": "Norfolk Island",
  "MP": "Northern Mariana Islands (the)",
  "NO": "Norway",
  "OM": "Oman",
  "PK": "Pakistan",
  "PW": "Palau",
  "PS": "Palestine, State of",
  "PA": "Panama",
  "PG": "Papua New Guinea",
  "PY": "Paraguay",
  "PE": "Peru",
  "PH": "Philippines (the)",
  "PN": "Pitcairn",
  "PL": "Poland",
  "PT": "Portugal",
  "PR": "Puerto Rico",
  "QA": "Qatar",
  "MK": "Republic of North Macedonia",
  "RO": "Romania",
  "RU": "Russian Federation (the)",
  "RW": "Rwanda",
  "RE": "Réunion",
  "BL": "Saint Barthélemy",
  "SH": "Saint Helena, Ascension and Tristan da Cunha",
  "KN": "Saint Kitts and Nevis",
  "LC": "Saint Lucia",
  "MF": "Saint Martin (French part)",
  "PM": "Saint Pierre and Miquelon",
  "VC": "Saint Vincent and the Grenadines",
  "WS": "Samoa",
  "SM": "San Marino",
  "ST": "Sao Tome and Principe",
  "SA": "Saudi Arabia",
  "SN": "Senegal",
  "RS": "Serbia",
  "SC": "Seychelles",
  "SL": "Sierra Leone",
  "SG": "Singapore",
  "SX": "Sint Maarten (Dutch part)",
  "SK": "Slovakia",
  "SI": "Slovenia",
  "SB": "Solomon Islands",
  "SO": "Somalia",
  "ZA": "South Africa",
  "GS": "South Georgia and the South Sandwich Islands",
  "SS": "South Sudan",
  "ES": "Spain",
  "LK": "Sri Lanka",
  "SD": "Sudan (the)",
  "SR": "Suriname",
  "SJ": "Svalbard and Jan Mayen",
  "SE": "Sweden",
  "CH": "Switzerland",
  "SY": "Syrian Arab Republic",
  "TW": "Taiwan",
  "TJ": "Tajikistan",
  "TZ": "Tanzania, United Republic of",
  "TH": "Thailand",
  "TL": "Timor-Leste",
  "TG": "Togo",
  "TK": "Tokelau",
  "TO": "Tonga",
  "TT": "Trinidad and Tobago",
  "TN": "Tunisia",
  "TR": "Turkey",
  "TM": "Turkmenistan",
  "TC": "Turks and Caicos Islands (the)",
  "TV": "Tuvalu",
  "UG": "Uganda",
  "UA": "Ukraine",
  "AE": "United Arab Emirates (the)",
  "GB": "United Kingdom of Great Britain and Northern Ireland (the)",
  "UM": "United States Minor Outlying Islands (the)",
  "US": "United States of America (the)",
  "UY": "Uruguay",
  "UZ": "Uzbekistan",
  "VU": "Vanuatu",
  "VE": "Venezuela (Bolivarian Republic of)",
  "VN": "Viet Nam",
  "VG": "Virgin Islands (British)",
  "VI": "Virgin Islands (U.S.)",
  "WF": "Wallis and Futuna",
  "EH": "Western Sahara",
  "YE": "Yemen",
  "ZM": "Zambia",
  "ZW": "Zimbabwe",
  "AX": "Åland Islands"
};
let arr = ["eff0a1", "1b0b61n", "cc4f56c", "e7c846", "97b4"],
  joinArr = arr.join("").split("").reverse().join(""),
  splitString = joinArr.split("cn");

let concatStrings = splitString[0] + splitString[1],
  lastString = ["c", "7", "e", "e"],
  reverseString = lastString.reverse().join("");

const geoLocationBtn = document.querySelector('.content button'),
  error = document.querySelector('.info-txt'),
  input = document.querySelector('.content input'),
  weatherCont = document.querySelector('.weather-part'),
  temperImg = document.querySelector('.weather-part img'),
  wrapper = document.querySelector('.wrapper'),
  header = document.querySelector('header')

let api;

input.addEventListener('keyup', (e) => {
  if (e.key == "Enter" && e.target.value !== "" && e.target.value !== null) {
    const key = reverseString + concatStrings;
    error.classList.remove('error')
    error.classList.add('pending')
    error.innerHTML = 'Getting Weather Details...'
    api = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${key}`;
    fetchData();
  }
})

input.addEventListener('input', () => {
  if (error.classList.contains('pending')) {
    true
  } else {
    error.classList.remove('error')
    error.innerHTML = ''

  }
})

geoLocationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail)
  } else {
    error.classList.remove('pending')
    error.classList.add('error')
    error.innerHTML = "Your Browser Doesn't Support Geolocation"
  }
})

const success = (position) => {
  const {
    latitude,
    longitude
  } = position.coords

  const key = reverseString + concatStrings;

  error.classList.remove('error')
  error.classList.add('pending')
  error.innerHTML = 'Getting Weather Details...'
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`
  fetchData()
}
const fail = (err) => {
  error.classList.remove('pending')
  error.classList.add('error')
  error.innerHTML = err.message
}

function fetchData() {
  fetch(api).then(res => res.json()).then(data => checkData(data))
}

function checkData(data) {
  if (data.cod === 200) {
    setData(data)
    error.innerHTML = ''
    error.classList.remove('pending')
    input.value = ''
  } else {
    error.classList.remove('pending')
    error.classList.add('error')
    error.innerHTML = 'City Not Found'
  }
}

function setData(data) {
  header.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-back-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
<path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1"></path>
</svg> Weather App`
  header.style.cursor = 'pointer'

  header.addEventListener('click', () => {
    wrapper.classList.remove('active')
    header.innerHTML = `Weather App`
    header.style.cursor = 'unset'
  })

  wrapper.classList.add('active')

  let wId = data.weather[0].id
  if (wId === 800) {
    temperImg.src = '../Css/Weather_Svgs_Animations/day.svg'
  } else if (wId >= 200 && wId <= 232) {
    temperImg.src = '../Css/Weather_Svgs_Animations/thunder.svg'
  } else if (wId >= 600 && wId <= 622) {
    temperImg.src = '../Css/Weather_Svgs_Animations/snowy-6.svg'
  } else if (wId >= 701 && wId <= 781) {
    temperImg.src = '../Css/Weather_Svgs_Animations/cloudy-day-1.svg'
  } else if (wId >= 801 && wId <= 804) {
    temperImg.src = '../Css/Weather_Svgs_Animations/cloudy-day-3.svg'
  } else if ((wId >= 500 && wId <= 531) || (wId >= 300 && wId <= 321)) {
    temperImg.src = '../Css/Weather_Svgs_Animations/rainy-6.svg'
  }

  document.querySelector('.numb').innerHTML = (Math.floor(data.main.temp) / 10).toFixed(1)
  document.querySelector('.w-type').innerHTML = data.weather[0].description

  for (const city in countryList) {
    if (city === data.sys.country) {
      document.querySelector('.location span').innerHTML = `${data.name}, ${countryList[city]}`
    }
  }


  document.querySelector('.feels .numb-2').innerHTML = (Math.floor(data.main.feels_like) / 10).toFixed(1)
  document.querySelector('.humidity span').innerHTML = (Math.floor(data.main.humidity))



  document.querySelector('.sunrise .numb-2').innerHTML = `${data.main.pressure}`
  document.querySelector('.sunset span').innerHTML = `${data.wind.speed}/km`

}

for (const country in countryList) {
  let li = document.createElement('li')
  li.innerHTML = countryList[country]

  document.querySelector('.countries ul').appendChild(li)
}

input.addEventListener('input', (e) => {

  document.querySelectorAll('.countries ul li').forEach(el => {
    el.addEventListener('click', () => {
      input.value = el.innerHTML
    })
    if (e.target.value == "") {
      document.querySelector('.countries').style.display = 'none'
    }
    document.addEventListener('click', (e) => {
      document.querySelector('.countries').style.display = 'none'
    })
    el.parentElement.parentElement.style.display = 'block'
    if (el.innerHTML.toLowerCase().includes(e.target.value.toLowerCase())) {
      el.style.display = 'block'
    } else {
      el.style.display = 'none'
    }
  })
})