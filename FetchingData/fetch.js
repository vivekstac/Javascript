const url = "https://api.restful-api.dev/objects";

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data, "ss");
  })
  .catch(err => {
    console.error("Error:", err);
  })
  .finally(() => console.log("data success"));
