// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

// cycle images in the following order: CHERRY --> LEMON --> ORANGE
a = document.getElementById('slot1');
b = document.getElementById("slot2");
c = document.getElementById("slot3");
var mySound = document.getElementById('you-win');

function nextImage(el){
	if (el.src.match("cherry_slot.PNG")){
		 el.src = "lemon_slot.PNG";
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("lemon_slot.PNG")){
		 el.src = "orange_slot.PNG";
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("orange_slot.PNG")){
		 el.src = "cherry_slot.PNG";
		// if the image is an orange, change it to a cherry!
	} else {
		// do nothing
	}
}

function playSound() {
	 document.getElementById('you-win').play();
	// when the JACKPOT! button is clicked, play the slot machine sound
}

function checkImages(){
	console.log("running check images");
	if (a.src.match("cherry_slot.PNG") && b.src.match("cherry_slot.PNG") && c.src.match("cherry_slot.PNG")){
		mySound.play();
		console.log("changes to cherry");
	} else { 
	console.log("images don't match");
		//i wish this function would work when all lights are yellow, or all are red...
	}
}
// LEMON --> BAR --> CHERRY
// function nextImage(el){}


// ORANGE --> CHERRY --> SEVEN --> WATERMELON
//function nextImage(el){}

