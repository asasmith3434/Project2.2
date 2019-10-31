
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
    .on("click", function(d) {
         d3.selectAll("ul *")
        .remove()
        printNames(PlanetsData)}  )
}

var printNames = function(PlanetsData)
{
   
   
    d3.select(".names")
    .append("ul")
    .selectAll("li")
    .data(PlanetsData)
    .enter()
    .append("li")
    .text(function(d) { return d.name } ) 
    .on("click", function(d) { 
        printfirstData(d) } );
    
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
    .on("click", function(d) {
        d3.selectAll("ul *")
        .remove()
        printNames2(PlanetsData)})
}
var printNames2= function(PlanetsData)
{
    console.log(PlanetsData)
   // d3.select("#names2")
    //.remove()
   var Habitable= filterHab(PlanetsData)
    d3.select(".names2")
    .append("ul")
    .selectAll("li")
    .remove()
    .data(Habitable)
    .enter()
    .append("li")
    .text(function(d) { return d.name })
   .on("click",  function(d) {printData (d)})
       
        
       
    
        
        
        
        
}
// must erase all the data and then replot the filtered data. Because the filter only reorganizes and does not display the data back into html. Use .remove to erase the data and then call the funciton(data) again to replot.

var printData = function(Planet2Data)
{
    d3.select(".data *").remove("ul");
    d3.select(".data").append("div").attr("class", "info");
    d3.select(".info").append("ul").attr("class", "infoList");
    d3.select(".infoList").append("li").text(Planet2Data.name);
    d3.select(".infoList").append("li").text("Terrain:"+Planet2Data.terrain);
    d3.select(".infoList").append("li").text("Climate:"+Planet2Data.climate)
    d3.select(".infoList").append("li").text("Population:"+Planet2Data.population)
    d3.select(".infoList").append("li").text("Orbital Period:"+Planet2Data.orbital_period)
    d3.select(".infoList").append("li").text("Rotational Period:"+Planet2Data.rotation_period)


}


var filterHab= function(PlanetsData) 
        {
       return PlanetsData.filter(function(planet) 
        {
            if (planet.population>0) 
                    {
                        return true;
                    }
            else{ return  false;}
         })
        
        
    }
    
  

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 // or = || population== 0 || population== unknown   





var displayInhabitable= function(PlanetsData) // for the All Planets Click
{
    d3.select(".names3")
    .append("h2")
    .text("Inhabitable")
    .on("click", function(d) {
        d3.selectAll("ul *")
        .remove()
        printNames3(PlanetsData)})
}

var printNames3 = function(PlanetsData)
{
    
    var Inhabitable= filterHab2(PlanetsData)
    d3.select(".names3")
    .append("ul")
    .selectAll("li")
    .data(Inhabitable)
    .enter()
    .append("li")
    .text(function(d) { return d.name })
    .on("click", function(d) { 
        printsecondData(d) });
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


var filterHab2= function(PlanetsData) 
        {
       return PlanetsData.filter(function(planetInhabitable) 
        {
            if (planetInhabitable.population==0 || planetInhabitable.population=="unknown") 
                    {
                        return true;
                    }
            else{ return  false;}
         })
        
        
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
