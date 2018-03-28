var fs = require('fs');
var yaml = require('yaml-js');

var info = {
    title: "Wizard's Keep",
    version: "2.0",
    copyright: "1985, 2018 Bingeware"
}

var places = new Map();
var objects = new Map();
var placesDataPromise = new Promise(loadPlacesMap);
var objectsDataPromise = new Promise(loadObjectsMap);

function loadPlacesMap(resolve,reject) {
    fs.readFile("./lib/places.yaml", function(err,data) {
        var placesData = yaml.load(data);

        placesData.forEach(element => {
            places.set(element.id, element);    
            console.log("loaded place: " + element.id);
        });

        console.log("Places loaded");

        resolve();
    });
}

function loadObjectsMap(resolve,reject) {
    fs.readFile("./lib/objects.yaml", function(err,data) {
        var objectsData = yaml.load(data);

        objectsData.forEach(element => {
            objects.set(element.id, element);    
            console.log("loaded object: " + element.id);
        });

        console.log("Objects loaded");

        resolve();
    });
}

// Initialize the adventure module by loading the static content  
function initialize() {
    return new Promise(function(resolve,reject) {
        Promise.all([placesDataPromise, objectsDataPromise]).then(resolve);
    });
}

function getPlace(id) {
    return places.get(id);
}

function getObject(id) {
    return objects.get(id);
}

exports.initialize = initialize;
exports.getObject = getObject;
exports.getPlace = getPlace;
exports.info = info;
