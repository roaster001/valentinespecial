const scenarios = [
    "Your date orders pineapple pizza and puts ketchup on it. Stay or Run?",
    "Your date brings their pet snake and puts it on the table. Stay or Run?",
    "Your date keeps calling you by their ex’s name. Stay or Run?",
    "Your date talks only in memes. Stay or Run?",
    "Your date insists that the Earth is flat and the moon landing was fake. Stay or Run?",
    "Your date pulls out a guitar and sings a 10-minute song about their ex. Stay or Run?",
    "Your date refuses to eat anything except chicken nuggets. Stay or Run?",
    "Your date says they don’t believe in showers. Stay or Run?",
    "Your date says ‘I love you’ 5 minutes into the conversation. Stay or Run?",
    "Your date takes out a book titled ‘How to Get Rich by Ignoring Red Flags.’ Stay or Run?",
    "Your date corrects your grammar every time you speak. Stay or Run?",
    "Your date live-streams your entire dinner to their 5 followers. Stay or Run?",
    "Your date refuses to make eye contact and only talks to their phone. Stay or Run?",
    "Your date wears socks with their sandals and insists it’s high fashion. Stay or Run?",
    "Your date eats spaghetti with their hands. Stay or Run?",
    "Your date brings their mom and lets her order for them. Stay or Run?",
    "Your date says they never tip because ‘kindness is the real tip.’ Stay or Run?",
    "Your date takes one bite of food and asks for a takeout box. Stay or Run?",
    "Your date keeps talking about how amazing their ex was. Stay or Run?",
    "Your date insists on speaking in a fake British accent. Stay or Run?",
    "Your date gets into an argument with the waiter about pineapple on pizza. Stay or Run?",
    "Your date asks if you’d be okay with sharing a toothbrush. Stay or Run?",
    "Your date takes selfies with every bite of food. Stay or Run?",
    "Your date brings their pet tarantula in their pocket. Stay or Run?",
    "Your date refuses to sit on chairs and insists on squatting. Stay or Run?",
    "Your date wears sunglasses indoors the entire time. Stay or Run?",
    "Your date says they’re a professional clown and demonstrates at the table. Stay or Run?",
    "Your date drinks milk with ice cubes. Stay or Run?",
    "Your date says their favorite hobby is breaking up couples. Stay or Run?",
    "Your date says their dream is to live in their mom’s basement forever. Stay or Run?",
    "Your date calls their dog their 'son' and expects you to treat them like family. Stay or Run?",
    "Your date says they don’t believe in deodorant because ‘natural is better.’ Stay or Run?",
    "Your date refuses to pay and says, 'Love should be free.' Stay or Run?",
];

const gifs = [
    "giphy.gif",
    
];
const gifsucees = [
    "ross.gif",
    
];

const romanticMusic = document.getElementById("romanticMusic");
const scenarioText = document.getElementById("scenario");
const newScenarioBtn = document.getElementById("newScenarioBtn");
const stayBtn = document.getElementById("stayBtn");
const runBtn = document.getElementById("runBtn");
const reactionDiv = document.getElementById("reaction");
const reactionGif = document.getElementById("reactionGif");

newScenarioBtn.addEventListener("click", () => {
    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    scenarioText.textContent = randomScenario;
    scenarioText.textContenttexxt = randomScenario;
    reactionDiv.style.display = "none";
    romanticMusic.pause();
    romanticMusic.currentTime = 0;
});

stayBtn.addEventListener("click", () => {
    reactionGif.src = gifsucees[Math.floor(Math.random() * gifsucees.length)];
    reactionDiv.style.display = "block";
    romanticMusic.pause();
    scenarioText.textContent = "Aww, you stayed! Hope it's true love! ❤, 🫥 Lets doubt your choice again !! click again ";
    
    //scenarioText.textContent = "Lets doubt your choice again";
    //reactionDiv.style.display = "none";
});

runBtn.addEventListener("click", () => {
    reactionGif.src = gifs[Math.floor(Math.random() * gifs.length)];
    reactionDiv.style.display = "block";
    romanticMusic.pause();
    romanticMusic.currentTime = 0;
    scenarioText.textContent = "RUN FOR YOUR LIFE! 🚪💨  🏃‍♂️‍➡️ Don't worry click again to find your lobster";
});