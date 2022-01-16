import json
from flask import Flask, render_template, redirect, request
from flask_pymongo import PyMongo

import os
import pymongo

# Create an instance of Flask
app_flask = Flask(__name__)
# app=Flask(__name__,template_folder='templates')


class mongo_connection:
    conn = None

    def connect(self):
        myclient = pymongo.MongoClient("mongodb://localhost:27017/Crimes_db")
        mydb = myclient["Crimes_db"]
        self.conn = mydb["FullData_ExpDF"]

    def query(self, sql):
        cursor = self.conn.find(sql)
        return cursor


db = mongo_connection()
db.connect()

# Use PyMongo to establish Mongo connection
# mongo = PyMongo(app, uri="mongodb://localhost:27017/Crimes_db")
# app.config["MONGO_URI"] = "mongodb://localhost:27017/Crimes_db"
# mongo = PyMongo(app)

# conn = 'mongodb://localhost:27017/Crimes_db'
# client = pymongo.MongoClient(conn)
# db=client.Crimes_db


# Route to render index.html template using data from Mongo
@app_flask.route("/")
def home():
    return render_template("index.html")


@app_flask.route("/map/", methods=["GET", "POST"])
def map():
    # # Get Dataset
    file_path = os.path.join(
        os.path.split(os.path.abspath(__name__))[0],
        "MyTry_Proj3_LastAttempt",
        "Export_DataFrame.json"
    );
    print("beforeHere");
    # with open("/Users/jobyaugustine/Desktop/Projects/MyTry_Proj3_LastAttempt/Export_DataFrame.json") as fp:
    with open("Export_DataFrame.json") as fp:    
        data_set = json.load(fp)
      
        
    print("AfterjsonHere");
    if request.method == "POST":
        year = int(request.form.get('selDataset'))
        print(year);
    new_data_set = []
    # print(data_set);
        # Filter Data
    for i in data_set:
        if i['Year'] == year:
            new_data_set.append(i)
        
    data_set = new_data_set
    
    return render_template("map.html", data_set=data_set)
    
# Route that will trigger the getmapdata() function


if __name__ == "__main__":
    # app_flask.run(debug=True)
    app_flask.run(debug=True, port=2000)
