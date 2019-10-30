
var PlanetPromise = d3.json("https://swapi.co/api/planets");

var setBanner = function(message)
{
    d3.select(".Main").text(message);
}










var displayNames= function(PlanetsData) // for the All Planets Click
{
    d3.select(".names")
    .append("h2")
    .text("All Planets")
    .on("click", function(d) {printNames(PlanetsData)})
}

var printNames = function(PlanetsData)
{
    console.log(PlanetsData)
    d3.selectAll("ul *")
    .remove()
    d3.select("ul")
    .selectAll("li")
    .data(PlanetsData)
    .enter()
    .append("li")
    .text(function(d) { return d.name })
    .on("click", function(d) { printfirstData(d) });
}


var printfirstData = function(PlanetData)
{
    d3.select(".data *").remove("ul");
    d3.select(".data").append("div").attr("class", "info");
    d3.select(".info").append("ul").attr("class", "infoList");
    d3.select(".infoList").append("li").text(PlanetData.name);
    d3.select(".infoList").append("li").text("Terrain:"+PlanetData.terrain);
    d3.select(".infoList").append("li").text("Climate:"+PlanetData.climate)
    d3.select(".infoList").append("li").text("Population:"+PlanetData.population)
    d3.select(".infoList").append("li").text("Orbital Period:"+PlanetData.orbital_period)
    d3.select(".infoList").append("li").text("Rotational Period:"+PlanetData.rotation_period)


}
















var displayHabitable= function(PlanetsData) // for the Habital click
{
    d3.select(".names2")
    .append("h2")
    .text("Habitable")
    .on("click", function(d) {printNames2(PlanetsData)})
}
var printNames2= function(PlanetsData)
{
    console.log(PlanetsData)
    d3.selectAll("ul *")
    .remove()
    d3.select("ul")
   .selectAll("li")
    .data(PlanetsData)
    .enter()
    .append("li")
    .text(function(d) { return d.name })
    .on("click",   printData.filter(function(printData){ if (PlanetData.population>0) {return printData;} });
    
}


var printData = function(PlanetData)
{
    d3.select(".data *").remove("ul");
    d3.select(".data").append("div").attr("class", "info");
    d3.select(".info").append("ul").attr("class", "infoList");
    d3.select(".infoList").append("li").text(PlanetData.name);
    d3.select(".infoList").append("li").text("Terrain:"+PlanetData.terrain);
    d3.select(".infoList").append("li").text("Climate:"+PlanetData.climate)
    d3.select(".infoList").append("li").text("Population:"+PlanetData.population)
    d3.select(".infoList").append("li").text("Orbital Period:"+PlanetData.orbital_period)
    d3.select(".infoList").append("li").text("Rotational Period:"+PlanetData.rotation_period)


}









var displayInhabitable= function(PlanetsData) // for the All Planets Click
{
    d3.select(".names3")
    .append("h2")
    .text("Inhabitable")
    .on("click", function(d) {printNames(PlanetsData)})
}

var printNames3 = function(PlanetsData)
{
    console.log(PlanetsData)
    d3.selectAll("ul *")
    .remove()
    d3.select("ul")
    .selectAll("li")
    .data(PlanetsData)
    .enter()
    .append("li")
    .text(function(d) { return d.name })
    .on("click", function(d) { printsecondData(d) });
}


var printsecondData = function(PlanetData)
{
    d3.select(".data *").remove("ul");
    d3.select(".data").append("div").attr("class", "info");
    d3.select(".info").append("ul").attr("class", "infoList");
    d3.select(".infoList").append("li").text(PlanetData.name);
    d3.select(".infoList").append("li").text("Terrain:"+PlanetData.terrain);
    d3.select(".infoList").append("li").text("Climate:"+PlanetData.climate)
    d3.select(".infoList").append("li").text("Population:"+PlanetData.population)
    d3.select(".infoList").append("li").text("Orbital Period:"+PlanetData.orbital_period)
    d3.select(".infoList").append("li").text("Rotational Period:"+PlanetData.rotation_period)


}






PlanetPromise.then(
function(PlanetData)
{
    setBanner("Star Wars Planets");
    
    console.log(PlanetData)
    displayNames(PlanetData.results)
    displayHabitable(PlanetData.results)
    displayInhabitable(PlanetData.results)
   
    
   
},
function(err)
{
    setBanner("Loading Failed");
    console.log(err);
});
