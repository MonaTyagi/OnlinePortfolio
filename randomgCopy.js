// Function to show images on clicking and sound on win
function showImage() {
  // Generate random numbers from 1 to 10
  let randomNumber = (Math.floor(Math.random() * 10)) + 1;
  // Setting images based on random number in place of question mark
  let randomImageSource = randomNumber + ".png";
  let image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource);

// On winning diamond, sound should come
// Images appear on clicking treasure chest(box)
  if (randomNumber == 1) {
    let crash=new Audio("crash.mp3");
    crash.play();
    document.querySelector("h1").innerHTML = "It's a diamond! You Win!!";
  } else if (randomNumber==2) {
    document.querySelector("h1").innerHTML = "Arr! Got a Pirate Flag ";
  } else if (randomNumber==3) {
    document.querySelector("h1").innerHTML = "This site contains cookie!!";
  } else if (randomNumber==4) {
    document.querySelector("h1").innerHTML = "It is sunny today, use hat!";
  } else if (randomNumber==5) {
    document.querySelector("h1").innerHTML = "Write your diary with pen!";
  } else if (randomNumber==6) {
    document.querySelector("h1").innerHTML = "Check direction with compass!";
  } else if (randomNumber==7) {
    document.querySelector("h1").innerHTML = "Make the ducks walk the plank!";
  } else if (randomNumber==8) {
    document.querySelector("h1").innerHTML = "Got the Mop, now clean floor!";
  } else if (randomNumber==9) {
    document.querySelector("h1").innerHTML = "Remember to eat your Greens!";
  } else if (randomNumber==10) {
    document.querySelector("h1").innerHTML = "Rubik's Cube for playtime!";
  }
}