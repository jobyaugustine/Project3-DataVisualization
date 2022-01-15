

// Define a function that will create charts for given sample
function buildCharts(selection) {
  if (selection != '')
  {
  console.log("In BuildCharts ");
  console.log(selection);

  var sampleValues = [];
  for (let i = 0; i <UnEmp10_var.length; i++) 
  {
  row = UnEmp10_var[i];
  if (row.Year ==selection)
      
    sampleValues.push(UnEmp10_var[i]["Unemployment"]); 
  }  
  var barChartValues = sampleValues.slice(0, 10).reverse();

// for labels of the bar chart
      // var idValues = sampleDict.State;
      var idValues = [];
      for (let i = 0; i <UnEmp10_var.length; i++) 
      {
      row = UnEmp10_var[i];
      if (row.Year ==selection)
      {
          idValues.push(UnEmp10_var[i]["State"]); 

      }
    }
      var barChartLabels = idValues.slice(0, 10).reverse();


      // Create bar chart 

      var barChartTrace = {
          type: "bar",
          y: barChartLabels,
          x: barChartValues,
          text: "UnEmployment Rate",
          name:"Highest Unemployment States",
          orientation: 'h' 
      };

      var barChartData = [barChartTrace];

      var layout = {xaxis: {
                      title: "UnEmployment Rate-->" },title:"Ten States with highest Unemployment Rates for the Year selected "
                };

      Plotly.newPlot("bar", barChartData,layout);


    ///------------------------

    var sampleValues = [];
    for (let i = 0; i <CrimeRate10_var.length; i++) 
    {
    row = CrimeRate10_var[i];
    if (row.Year ==selection)
        
      sampleValues.push(CrimeRate10_var[i]["Total_CrimeRate"]); 
    }  
    var barChartValues = sampleValues.slice(0, 10).reverse();
  
    var idValues = [];
    for (let i = 0; i <UnEmp10_var.length; i++) 
    {
    row = UnEmp10_var[i];
    if (row.Year ==selection)
    {
        idValues.push(UnEmp10_var[i]["State"]); 

    }
  }
    var barChartLabels = idValues.slice(0, 10).reverse();

  
  
//         // Create bar chart 
  
        var barChartTrace = {
            type: "bar",
            y: barChartLabels,
            x: barChartValues,
            text: "Crime Rate",
            color:'red',
            name:"Highest Crime rated States",
            orientation: 'h'
            
        };
  
        var barChartData = [barChartTrace];
        var layout = {
                    xaxis: {title: "Crime Rate"},title:"Ten States with highest Crime Rates for the Year selected "
                };
        Plotly.newPlot("bar2", barChartData,layout);
      
      while(bar2.length>0)
      {
             Plotly.deleteTraces("bar2", [0]);
             bar2.layout = {};
             bar2.data = [];
      }
    }
 else 
 {barChartData ='';
 console.log(selection);
 while(bar2.data.length>0)
{
       Plotly.deleteTraces("bar2", [0]);

}

while(bar.data.length>0)
{
      Plotly.deleteTraces("bar", [0]);
}
}   
}

//----------------------
// -- displaying the details of the 10 states with highest UnEmpl and Crime Rates
function callUnEmp10(tempyear2)
{ 
  if (tempyear2 != '')
  {document.getElementById("myList").innerHTML = "";
  //var tempUnempmax =0
  console.log("insidecallunemp");
   let Unemp10Array =[];
   let State10Array = [];
  for (let i = 0; i <UnEmp10_var.length; i++) 
  {
  row = UnEmp10_var[i];
  if (row.Year ==tempyear2)
   {Unemp10Array.push(row.Unemployment);
    State10Array.push(row.State);}
  }
 
let list = document.getElementById("myList");
 
  for (let i = 0; i <Unemp10Array.length; i++)
  {let li = document.createElement("li");
    // li.innerText = item;
    if (i==0)
     li.innerText = "";
      
     li.innerText = li.innerText +  State10Array[i] + "   " + " with UnEmployment: " + Unemp10Array[i] 
      list.appendChild(li);
  }
}
else 
   {console.log("clearinginnerHTML");
   document.getElementById("myList").innerHTML = "Unemployment declined from 2010 to 2019. A trend of decreasing unemployment followed after a high in 2010 resulting from the 2008 financial crisis. It rose again to 8.1 percent in 2020.";}

 }

//---------

function funcForYearlyUnempMax(tempyear2)
{
  var tempUnempmax =0

  for (let i = 0; i <data_var.length; i++) 
  {
  row = data_var[i];
  if (row.Year ==tempyear2)
    {
      if (row.Unemployment > tempUnempmax)
          {tempUnempmax=row.Unemployment;}  
    }
  }
   return tempUnempmax;
}


function funcForYearlyCrimeMax(tempyear2)
{
  var tempCrimemax = 0

  for (let i = 0; i <data_var.length; i++) 
  {row = data_var[i];
  if (row.Year ==tempyear2)
    {
      if (row.Total_CrimeRate > tempCrimemax)
          {tempCrimemax=row.Total_CrimeRate;};
    }
  }
  return tempCrimemax ;
}
//--------


function tryplot(menuitemselected)
{
  console.log("i am here")
// Initialized arrays
let statename = []
let unemparr = []
let totcrimearr = []


// For loop to populate arrays

if (menuitemselected != '')
{
  // callCrime10(menuitemselected);
   callUnEmp10(menuitemselected);


for (let i = 0; i <data_var.length; i++) 
  {
  row = data_var[i];
  if (row.Year ==menuitemselected)
    {statename.push(row.State);
    unemparr.push(row.Unemployment);
    totcrimearr.push(row.Total_CrimeRate);}
  }

// Trace1 for the Unemp Data
let trace1 = {
    x: statename,
    y: unemparr,
    text: "UnempInfo",
    name: "Unemp",
    type: "bar"
  };

// Trace 2 for the Crime Data
let trace2 = {
  x: statename,
  y: totcrimearr,
  text: "CrimeInfo",
  name: "Crime",
  type: "bar"
};

// Create data array
let data = [trace1, trace2];

// Apply a title to the layout
let layout = {title: "Unemployment vs Crime Rate for the Year selected"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

}
else 
{
  console.log("empy selected")
  let yearslist = ['2004','2005','2006','2007','2008','2009', '2010','2011','2012','2013','2014'];
  let YearlyUnempMax =[]
  let YearlyCrimeMax =[]
  for (let i = 0; i <yearslist.length; i++) 
  {
    let tempyear=yearslist[i];
    console.log("infunc")
    //YearlyUnempMax.push(data_var.filter(funcForYearlyUnempMax(tempyear)));
    YearlyUnempMax.push(funcForYearlyUnempMax(tempyear));
    //YearlyCrimeMax.push(data_var.filter(funcForYearlyCrimeMax(tempyear)));
    YearlyCrimeMax.push(funcForYearlyCrimeMax(tempyear));
  }
// Trace1 for the Unemp Data
let trace1 = {
  x: yearslist,
  y: YearlyUnempMax,
  name: "Yearly Unemp change",
  mode: "lines+markers"
  
};

// Trace 2 for the Crime Data
let trace2 = {
  x: yearslist,
  y: YearlyCrimeMax,
  xaxis:'x2',
  yaxis:'y2',
  //text: "CrimeInfo",
  name: "Yearly Crime change",
  mode: "lines+markers"
};

// Create data array
let data = [trace1, trace2];

var layout = {
  grid: {rows: 1, columns: 2, pattern: 'independent',subplots:[['xy','x2y2']]},
  title: "Yearly Unemployment Rate and Crime Rate Graph across U.S. from 2004 to 2014",  
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);

document.getElementById("myList").innerHTML = "Unemployment declined from 2010 to 2019. A trend of decreasing unemployment followed after a high in 2010 resulting from the 2008 financial crisis. It rose again to 8.1 percent in 2020.";
let list = document.getElementById("myList");
}

}

// Define function that will run on page load
function init() {
   
      //Year Drop Down
      var filteredData = ['','2004','2005','2006','2007','2008','2009', '2010','2011','2012','2013','2014'];
      var dropdownMenu =document.getElementById("selDataset");
      // populating the dropdown with the values
      for(var i=0;i<filteredData.length;i++)
      {
          var opt = document.createElement('option');
          opt.innerHTML = filteredData[i];
          opt.value = filteredData[i];
          dropdownMenu.appendChild(opt);
          
          var tempmenu = filteredData[0];
      }
      
      console.log(tempmenu);
      tryplot(tempmenu);
    //   buildCharts(filteredData[0]);
    }

  function optionChanged(newSelection) {
    tryplot(newSelection);
    buildCharts(newSelection);


    
  }
    var btn = d3.select("button");
    console.log(btn);
    
  
// Initialize dashboard on page load
init();


