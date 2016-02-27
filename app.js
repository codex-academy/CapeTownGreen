var body = document.querySelector("body");
var taxiLocationCounter = 1;

//listen for the keydown event
body.onkeydown = function(e){
  if ((taxiLocationCounter > 0) && (taxiLocationCounter < 10)) {
    var keyname = keyCodeName(e.keyCode);
    var  trafficLight = new TrafficLight(taxiLocationCounter);
  
    if (e.keyCode === 39) {
      moveForward();
    } else if (e.keyCode === 37) {
      moveBack();
    } else if (e.keyCode === 38) {
       trafficLight.makeRed();
    } else if (e.keyCode === 40) {
      trafficLight.makeGreen();
    } else {
      return false
    }; 
  };
  displayMessage(createLocationClass(taxiLocationCounter));
};

var keyCodeName = function(x){
  switch(x) {
  	case 37: return "left";
  	case 38: return "up";
  	case 39: return "right";
  	case 40: return "down";
  	default: return "";
  };
};

var createLocationClass = function(number) {
	if (number === 1) {
  	return 'slot-one-of-nine'
  } else if (number === 2) {
  	return 'slot-two-of-nine'
  }else if (number === 3) {
  	return 'slot-three-of-nine'
  }else if (number === 4) {
  	return 'slot-four-of-nine'
  }else if (number === 5) {
  	return 'slot-five-of-nine'
  }else if (number === 6) {
  	return 'slot-six-of-nine'
  } else if (number === 7) {
  	return 'slot-seven-of-nine'
  }else if (number === 8) {
  	return 'slot-eight-of-nine'
  }else if (number === 9) {
  	return 'slot-nine-of-nine'
  };
};

var moveForward = function() {
  var currentLocation = createLocationClass(taxiLocationCounter);
  taxiLocationCounter++;
  var newLocation = createLocationClass(taxiLocationCounter);
  
  moveTaxi(currentLocation, newLocation);
};

var moveBack = function() {
  var currentLocation = createLocationClass(taxiLocationCounter);
  taxiLocationCounter--;
  var newLocation = createLocationClass(taxiLocationCounter);

  moveTaxi(currentLocation, newLocation);
};

var createTrafficLightClass = function(c) {
  switch(c) {
    case 1: return ".one-of-nine";
    case 2: return ".two-of-nine";
    case 3: return ".three-of-nine";
    case 4: return ".four-of-nine";
    case 5: return ".five-of-nine";
    case 6: return ".six-of-nine";
    case 7: return ".seven-of-nine";
    case 8: return ".eight-of-nine";
    case 9: return ".nine-of-nine";
    default: return "";
  }
};
  

function TrafficLight(taxiLocationCounter) {
  var className = createTrafficLightClass(taxiLocationCounter);
  var trafficLightElement = document.querySelector(className);
  
  this.makeRed = function() {
    trafficLightElement.classList.add("lights-stop");
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.remove("lights-slowdown");
  }

  this.makeGreen = function() {
    trafficLightElement.classList.add("lights-go");
    trafficLightElement.classList.remove("lights-slowdown");
    trafficLightElement.classList.remove("lights-stop");
  }

  this.makeOrange = function() {
    trafficLightElement.classList.add("lights-slowdown");
    trafficLightElement.classList.remove("lights-go");
    trafficLightElement.classList.remove("lights-stop");
  }

  this.color = function() {
    if (trafficLightElement.classList.contains("lights-slowdown")){
      return 'orange';
    }

    if (trafficLightElement.classList.contains("lights-stop")){
      return 'red';
    }

    if (trafficLightElement.classList.contains("lights-go")){
      return 'green';
    }
  }
};

