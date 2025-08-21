// Fetching sample data from a public API
fetch("https://jsonplaceholder.typicode.com/todos/1")
//.then(res => console.log(res));
   .then(response => response.json()) // convert response to JSON
      .then(data => {
        console.log("Fetched data:", data); // use the data
      })
     .catch(error => {
       console.error("Error fetching data:", error);
     });
