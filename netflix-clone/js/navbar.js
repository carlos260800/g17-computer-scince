const navbar = (data) => {
  let { genres } = data;
  let categoria1 = genres[0].name;
  let categoria2 = genres[1].name;
  document.getElementById("cat1").innerHTML = "<a href='#'> " + categoria1 + "</a>";
  document.getElementById("cat2").innerHTML = "<a href='#'> " + categoria2 + "</a>";
};

fetch(`${URL}/genre/movie/list?api_key=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => navbar(data));
