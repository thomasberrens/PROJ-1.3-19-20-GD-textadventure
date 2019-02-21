const divLocation = document.getElementById('location');
const myPossebilities = document.getElementById('possebilities');
const myButton = document.getElementById('myButton');
const myInput = document.getElementById('myInput');
const feedback = document.getElementById('feedback');
const imageLocation = document.getElementById('imageLocation');

let currentLocation = 4;

let locations = [];
locations[0] = "lokatie 0";
locations[1] = "lokatie 1";
locations[2] = "lokatie 2";
locations[3] = "lokatie 3";
locations[4] = "lokatie 4";
locations[5] = "lokatie 5";
locations[6] = "lokatie 6";
locations[7] = "lokatie 7";
locations[8] = "lokatie 8";

images = [];
images[0] = "room0.png";
images[1] = "room1.png";
images[2] = "room2.png";
images[3] = "room3.png";
images[4] = "room4.png";
images[5] = "room5.png";
images[6] = "room6.png";
images[7] = "room7.png";
images[8] = "room8.png";

directions = [];
directions[0] = ["oost"];
directions[1]= ["west","zuid"];
directions[2]= ["zuid"];
directions[3]= ["oost"];
directions[4]= ["noord","west","zuid"];
directions[5]= ["zuid"];
directions[6]= ["oost"];
directions[7]= ["noord","west","oost"];
directions[8]= ["noord","west"];

myInput.addEventListener('keydown',getInput,false);

function getInput(evt){
  if(evt.key == "Enter"){


  let inputArray = myInput.value.split(" ");
  if(inputArray[0]=="ga"){
    if(directions[currentLocation].indexOf(inputArray[1])!=-1){
      switch(inputArray[1]){
        case "noord":
              currentLocation -= 3;
        break;
        case "zuid":
          currentLocation += 3;
        break;
        case "oost":
          currentLocation += 1;
        break;
        case "west":
          currentLocation -= 1;
        break;
      }
    } else {
      feedback.innerHTML = "dat mag niet";
      setTimeout(removeFeedback,2000);

    }
    giveLocation();
    myInput.value = "";
  }

  if(inputArray[0]=="pak"){
    console.log('ga wat pakken')
  }
}
}

function giveLocation(){
  divLocation.innerHTML = locations[currentLocation];
  imageLocation.src = "media/" + images[currentLocation];
  myDirections = "mogelijke richtingen zijn: ";
  for(let i = 0; i< directions[currentLocation].length;i++){
    myDirections += directions[currentLocation][i] + " ";
  }
  possebilities.innerHTML = myDirections;

}

function removeFeedback(){
  feedback.innerHTML = "";
}

giveLocation();
