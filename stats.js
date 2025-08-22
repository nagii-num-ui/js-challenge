// Find the country which has the highest income.
// Find the country which has the combined highest income
// Get all the users info (complete info) who has the email which ends with .gov
// Find the country name which has the maximum combined income for Female

const countryusersdata = require('C:/Users/v-knagendra/Documents/Js challenges/users-db.json');
//console.log(data);

// Find the country which has the highest income.
function findHighestIncome(countryusersdata) {
  let country = 0;
  let income = 0;

  for (let i = 1; i < countryusersdata.length; i++) {
    // check  the country highest income
    if (countryusersdata[i].income > income) {
      country = countryusersdata[i].country;
      income = countryusersdata[i].income;
    }
  }

  console.log("Country with highest income: " + country + " " +  income + " ");
}

findHighestIncome(countryusersdata);

// Find the country which has the combined highest income
function findCountryWithHighestCombinedIncome(usersList) {
  let incomePerCountry = {}; // Store total income per country

  // Loop through all users
  for (let i = 0; i < usersList.length; i++) {
    let user = usersList[i];
    let countryName = user.country;
    let incomeValue = user.income; // assume it's already a number

    // Add income to the country total
    if (incomePerCountry[countryName] !== undefined) {
      incomePerCountry[countryName] = incomePerCountry[countryName] + incomeValue;
    } else {
      incomePerCountry[countryName] = incomeValue;
    }
  }

  // Find the country with the maximum combined income
  let maximumIncome = 0;
  let countryWithMaximumIncome = '';

  for (let country in incomePerCountry) {
    if (incomePerCountry[country] > maximumIncome) {
      maximumIncome = incomePerCountry[country];
      countryWithMaximumIncome = country;
    }
  }

  return countryWithMaximumIncome; // only the country name
}

const topCountry = findCountryWithHighestCombinedIncome(countryusersdata);
console.log("Country with highest combined income: " + topCountry);


//Get all the users info (complete info) who has the email which ends with .gov
function findGovEmails(countryusersdata) {
  for (let i = 0; i < countryusersdata.length; i++) {
    // Check if the email ends with .gov
    if (countryusersdata[i].email.endsWith('.gov')) {
      console.log("User email ends with .gov: " + countryusersdata[i].email);
    }
  }
}

findGovEmails(countryusersdata);

// Find the country name which has the maximum combined income for Female
function findCountryWithMaximumFemaleIncome(countryusersdata) {
  let femaleIncomePerCountry = {}; // Store total female income per country

  // Loop through all users
  for (let i = 0; i < countryusersdata.length; i++) {
    let user = countryusersdata[i];

    // Only consider female users (gender = "Female")
    if (user.gender === 'Female') {
      let countryName = user.country;
      let incomeValue = user.income; // assume it's a number

      // Add income to the country total
      if (femaleIncomePerCountry[countryName] !== undefined) {
        femaleIncomePerCountry[countryName] = femaleIncomePerCountry[countryName] + incomeValue;
      } else {
        femaleIncomePerCountry[countryName] = incomeValue;
      }
    }
  }

  // Find the country with the maximum combined female income
  let maximumIncome = 0;
  let countryWithMaximumIncome = '';

  for (let country in femaleIncomePerCountry) {
    if (femaleIncomePerCountry[country] > maximumIncome) {
      maximumIncome = femaleIncomePerCountry[country];
      countryWithMaximumIncome = country;
    }
  }

  return countryWithMaximumIncome; // Only the country name
}

const topFemaleCountry = findCountryWithMaximumFemaleIncome(countryusersdata);
console.log("Country with maximum combined income for females: " + topFemaleCountry);









