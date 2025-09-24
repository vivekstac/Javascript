const url = "https://api.restful-api.dev/objects";

async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data, "ss");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    console.log("data success");
  }
}

getData();
