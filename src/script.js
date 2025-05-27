// https://api.nationalize.io/?name=
const dataInput = document.getElementById("dataInput");
const submitBtn = document.querySelector('.search-btn');
const feedBackElement = document.querySelector(".result");

const getCountryNames = new Intl.DisplayNames(['en'], { type: 'region' });

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  feedBackElement.innerHTML = ""
  const queryName = dataInput.value.trim();
  if (queryName === "") {
    feedBackElement.textContent = "Please provide a name";
    return;
  }

  submitBtn.textContent = 'Fetching data...';
  submitBtn.setAttribute("disabled", true);

  try {
    const response = await fetch(`https://api.nationalize.io/?name=${queryName}`);
    const result = await response.json();

    const { name, country } = result;

    if (!country || country.length === 0) {
      feedBackElement.innerHTML = `Could not predict nationality for <span>${name}</span>`;
    } else {
      const { country_id, probability } = country[0]; 
      const countryName = getCountryNames.of(country_id); 

      feedBackElement.innerHTML = `<span>${name}</span> is likely from <span>${countryName}</span> with <span>${Math.round(probability * 100)}%</span> certainty.`;
    }
  } catch (e) {
     
    feedBackElement.textContent = "An error occurred. Please try again.";
  } finally {
    submitBtn.removeAttribute("disabled");
    submitBtn.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i>`;
  }
});

