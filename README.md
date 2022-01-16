# Project3-DataVisualization
# 1-800-NEED-CASH-NOW - Data Visualization

## Team : Ryan Hulett, Joby Augustine, Karla Robles


## Background

**Source of Data**: https://www.kaggle.com/axeltorbenson/unemployment-data-19482021 

*The data is used from kaggle.com :*

* Data in csv format 1) crimebystatecombinedwithunemployment (1).csv  2) data/statelatlong.csv



## Outline of Project

- Download csv files from source
- Extract data 
- Tranform data
  - combining data from different sources
  - data cleaning
  - data types
- Load the tranformed data to a database
- Data Visualization Dashboard built with
  - Python Flask–powered API, HTML/CSS, JavaScript, Jupyter Notebook
  - MongoDb
  - Plotly, Leaflet
  - User interactive document elements of Dropdown Menu, Button and Bootstrap Navigation bar.


## Key Deliverables
### Jupyter Notebooks
- [Unemployment_Crime_Data_Analysis]


## Accomplishments

### U.S. UnEmployment and Crime Data

- Extracted crimebystatecombinedwithunemployment (1).csv  and  data/statelatlong.csv from source
- Cleansed and prepped the data by removing unwanted data, used data from 2004-2014, using python,pandas and Jupyter notebook
- Performed various operations - Created Database and collections to store the data, converted the dataframes to JSON files for plotting in Plotly and Leaflet.
- JS functions are used to get the results for each plots, htmls are developed for different pages
- Flask -API is used for the web application.


**Line Chart for the unemployment and crime rate analysis for 10 years for U.S. States (2004 -2014)**
  
**Bar Graph for all U.S. states for the year selected from the dropdown menu**

**Bar chart of 10 States with highest Unemployment rates for the year selected from the dropdown**

**Bar chart of 10 States with highest Unemployment rates for the year selected from the dropdown**

**Leaflet Map for the Unemployment and Crime rates for the year selected**

**Conclusion**

The dashboard compares the unemployment rates with different crime rates across the United States over 10 years (2004 – 2014) 

The users will also be able to select a certain year from which the database will return unemployment and crime rates for the states as well as 10 states with highest unemployment and crime rates

Users have the ability to view the map with the crime rates and unemployment rates for the year selected
