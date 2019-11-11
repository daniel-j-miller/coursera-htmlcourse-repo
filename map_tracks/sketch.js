let myMap;
let canvas;
const mappa = new Mappa('Leaflet');
let j = 0;
let k = 0;
let l = 0;

let xml;

function preload() {
  xml = loadXML('https://gist.githubusercontent.com/daniel-j-miller/0ee37fc29b61a632357e9f47077e8b8d/raw/2f1321a6ead526a7921cd631f872318a357df597/test.xml'); 
    xml2 = loadXML("https://gist.githubusercontent.com/daniel-j-miller/ea8c1b7a2b7b124a03e431e0d8ce1950/raw/c7a723ba349304c26c5c3d2a655d4aaf87423eb8/test2.xml");
  
  xml3 = loadXML("https://gist.githubusercontent.com/daniel-j-miller/cbbcb7fba09c933c606374879356041e/raw/5ab7f5a523a9815a943ff55d76256b37adca741f/test2.xml");
  
}

let n1 = 100;
let n2 = 200;
let div = 2;


// Lets put all our map options in a single object
// lat and lng are the starting point for the map.
const options = {
  lat: -35.282,
  lng: 149.12,
  zoom: 14,
  style: "http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
}

function setup(){
  canvas = createCanvas(800,640); 
  // background(100); let's uncomment this, we don't need it for now

  // Create a tile map with the options declared
    myMap = mappa.tileMap(options);
  myMap.overlay(canvas); 
  
}

function draw(){
   // Clear the previous canvas on every frame
clear();

  let children = xml.getChildren('trkpt');
  let children2 = xml2.getChildren('trkpt');
  let children3 = xml3.getChildren('trkpt');
  
noFill();
strokeWeight(3);
  

stroke(255,0,0,150);
beginShape();

  for(i = 0;i < 10; i++){
    var p = j + i;
  var point = myMap.latLngToPixel(children[p].getNum('lat'), children[p].getNum('lon'));
    curveVertex(point.x + noise(n1) * div, point.y + noise(n2) * div);
    n1 += 0.1;
    n2 += 0.1;
  }
endShape();

  if(j < children.length-13){
  j+=1;
  } else{
  j=0;
  }
  
  
stroke(20, 166, 42,200);
beginShape();

  for(i = 0;i < 10; i++){
    var p2 = k + i;
  var point2 = myMap.latLngToPixel(children2[p2].getNum('lat'), children2[p2].getNum('lon'));
    curveVertex(point2.x + noise(n1) * div, point2.y + noise(n2) * div);
    n1 += 0.1;
    n2 += 0.1;
  }
endShape();


  if(k < children2.length-13){
  k+=1;
  } else{
  k=0;
  }
  
stroke(0,0,255,200);
beginShape();

  for(i = 0;i < 10; i++){
    var p3 = l + i;
  var point3 = myMap.latLngToPixel(children3[p3].getNum('lat'), children3[p3].getNum('lon'));
    curveVertex(point3.x + noise(n1) * div, point3.y + noise(n2) * div);
    n1 += 0.1;
    n2 += 0.1;
  }
endShape();


  if(l < children3.length-13){
  l+=1;
  } else{
  l=0;
  }

}