// Översätter bildnamn till bilnamn
const carImages = {
  "img-1.png": "Volvo",
  "img-2.png": "Tesla",
  "img-3.png": "Volkswagen",
};
let currentCar;

// Taggarna output-text och output-container återfinns i HTML-filen
let outputContainer = document.getElementById("text-output-container");
let outputText = document.getElementById("output-text");
let carImage = document.getElementById("image-output-container");
let title = (document.title = "JavaScript FTW!");
let btn1 = document.getElementById("button-1");

// Man kan t ex ställa färgen på ett område
outputContainer.style.backgroundColor = "None";

// Informationstext i den vänstra rutan
let infoText = "Möjliga bilar:<br><br>";
let brandArray = ["Volvo", "Tesla", "Volkswagen"];

for (let i = 0; i < brandArray.length; i++) {
  infoText += `Bil #${i + 1}: ${brandArray[i]}` + "<br>";
}

infoText += "<br>Klicka i denna ruta för att slumpa fram en bil!";

// Här sker själva textutmatningen
outputContainer.innerHTML = infoText;

// Knappraden
btn1.textContent = "Bil #1";

// Funktion som slumpar fram en ny bild
function newCar() {
  // Slumpar fram en bil (ett tal mellan 1 och 3)
  let randomNumber = Math.floor(Math.random() * brandArray.length);
  // Skapar bildnamnet
  let currentImage = `img-${randomNumber + 1}.png`;
  console.log(currentImage);
  currentCar = randomNumber;

  // Visar bild och text
  carImage.innerHTML = `<img src="./images/${currentImage}" />`;
  carImage.innerHTML += `<p>${carImages[currentImage]}</p>`;
}

// Lägger till en EventListener till outputContainer
outputContainer.addEventListener("click", newCar);
