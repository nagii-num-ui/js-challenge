const countryusersdata = require('C:/Users/v-knagendra/Documents/Js challenges/users-db.json');

function getPaginatedResult(pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const result = [];

  for (let i = startIndex; i < endIndex && i < countryusersdata.length; i++) {
    result[result.length] = countryusersdata[i]; 
  }

  return result;
}

const paginatedpages = getPaginatedResult(2, 20);
console.table(paginatedpages);

