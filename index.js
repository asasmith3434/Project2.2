
var PlanetPromise = d3.json("https://swapi.co/api/planets");

var setBanner = function(message)
{
    d3.select(".Main").text(message);
}

var printNames = function(PlanetData)
{
    d3.select(".names")
    .append("ul")
    .selectAll("li")
    .data(PlanetData)
    .enter()
    .append("li")
    .text(function(d) { return d.name })
    .on("click", function(d) { printData(d) });
}

var printData = function(PlanetData)
{
    d3.select(".data *").remove("ul");
    d3.select(".data").append("div").attr("class", "info");
    d3.select(".info").append("ul").attr("class", "infoList");
    d3.select(".infoList").append("li").text(PlanetData.results[0].name);
    d3.select(".infoList").append("li").text(PlanetData.results[0].terrain);
    d3.select(".infoList").append("li").text(PlanetData.results[0].climate)
    d3.select(".infoList").append("li").text(PlanetData.results[0].population)
    d3.select(".infoList").append("li").text(PlanetData.results[0].orbital_period)
    d3.select(".infoList").append("li").text(PlanetData.results[0].rotation_period)


}

PlanetPromise.then(
function(PlanetData)
{
    setBanner("Star Wars Planets");
    printNames(PlanetData);
    console.log(PlanetData);
    console.log(PlanetData.results[0].name)
    printData(PlanetData)
  
   
},
function(err)
{
    setBanner("Loading Failed");
    console.log(err);
});
