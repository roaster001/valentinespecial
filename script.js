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
    "Your date orders a glass of milk at a bar. Stay or Run?",  
"Your date pulls out a harmonica and plays it between bites. Stay or Run?",  
"Your date licks their knife after every bite. Stay or Run?",  
"Your date insists that they are the reincarnation of Napoleon. Stay or Run?",  
"Your date brings their own silverware but it's plastic. Stay or Run?",  
"Your date asks if you’d be okay with sharing a bath… on the first date. Stay or Run?",  
"Your date spends the entire meal debating which Hogwarts house you’d be in. Stay or Run?",  
"Your date claims they were abducted by aliens and have proof… in their basement. Stay or Run?",  
"Your date refers to their car as ‘Bessie’ and kisses it goodbye. Stay or Run?",  
"Your date wears a Bluetooth earpiece the entire time and keeps whispering 'Copy that.' Stay or Run?",  
"Your date sprinkles salt in their drink because ‘it enhances the flavor.’ Stay or Run?",  
"Your date refuses to speak in anything but Shakespearean English. Stay or Run?",  
"Your date calls the waiter ‘peasant’ and demands ‘a feast fit for royalty.’ Stay or Run?",  
"Your date dips their fries in their soda and calls it ‘a delicacy.’ Stay or Run?",  
"Your date tells you they only eat food that matches their outfit. Stay or Run?",  
"Your date keeps winking at you after every sentence, even when it’s not flirty. Stay or Run?",  
"Your date brings their childhood teddy bear and introduces it as their ‘emotional support friend.’ Stay or Run?",  
"Your date orders for you without asking what you want. Stay or Run?",  
"Your date refuses to use cutlery and calls it ‘government brainwashing.’ Stay or Run?",  
"Your date slaps their stomach after every bite and says, ‘That’s the good stuff!’ Stay or Run?",  
"Your date insists on smelling every dish before eating it. Stay or Run?",  
"Your date wears a tinfoil hat to ‘block government signals.’ Stay or Run?",  
"Your date hums the ‘Jaws’ theme every time you take a bite. Stay or Run?",  
"Your date tries to ‘manifest’ free food by staring intensely at the waiter. Stay or Run?",  
"Your date insists that ketchup is a smoothie. Stay or Run?",  
"Your date cuts their pizza with scissors. Stay or Run?",  
"Your date makes airplane noises while feeding themselves. Stay or Run?",  
"Your date only speaks in riddles and refuses to answer questions directly. Stay or Run?",  
"Your date takes off their shoes and socks under the table. Stay or Run?",  
"Your date gives a 10-minute speech about how dinosaurs never existed. Stay or Run?",  
"Your date brings their parrot and lets it order for them. Stay or Run?",  
"Your date sniffs your hair and says it smells ‘like destiny.’ Stay or Run?",  
"Your date keeps texting their mom for conversation advice. Stay or Run?",  
"Your date brings their own chair to the restaurant because ‘these seats have bad vibes.’ Stay or Run?",  
"Your date wears a cape and insists they are a superhero. Stay or Run?",  
"Your date insists on high-fiving after every bite. Stay or Run?",  
"Your date plays rock-paper-scissors with themselves and always loses. Stay or Run?",  
"Your date whispers ‘This is just like my dreams’ while staring at you. Stay or Run?",  
"Your date insists on calling you ‘partner’ in an exaggerated cowboy accent. Stay or Run?",  
"Your date orders spaghetti and drinks the sauce like a milkshake. Stay or Run?",  
"Your date carves their initials into the restaurant table. Stay or Run?",  
"Your date insists on taking a bite of your food before you do. Stay or Run?",  
"Your date keeps adjusting your posture and telling you ‘good form.’ Stay or Run?",  
"Your date pulls out a deck of tarot cards and says, ‘Let’s see if we last.’ Stay or Run?",  
"Your date tries to order a ‘well-done’ sushi roll. Stay or Run?",  
"Your date keeps showing you blurry pictures of ghosts on their phone. Stay or Run?",  
"Your date challenges the waiter to an arm-wrestling match. Stay or Run?",  
"Your date constantly adjusts their imaginary monocle. Stay or Run?",  
"Your date dips their bread in their drink and calls it ‘soggy heaven.’ Stay or Run?",  
"Your date dramatically gasps every time you speak. Stay or Run?",  
"Your date refers to their ex as ‘The One Who Got Away’ at least five times. Stay or Run?",  
"Your date only drinks from a flask they brought themselves. Stay or Run?",  
"Your date asks you what blood type you are ‘just out of curiosity.’ Stay or Run?",  
"Your date pulls out a puppet and makes it order their meal. Stay or Run?",  
"Your date only eats with chopsticks, even soup. Stay or Run?",  
"Your date takes their plate to the bathroom to ‘eat in peace.’ Stay or Run?",  
"Your date says grace before eating but prays for their crypto investments. Stay or Run?",  
"Your date dramatically reenacts their entire day before ordering. Stay or Run?",  
"Your date insists you guess their name instead of telling you. Stay or Run?",  
"Your date orders their steak ‘as rare as my trust issues.’ Stay or Run?",  
"Your date puts hot sauce in their water. Stay or Run?",  
"Your date asks if they can have a sip of your drink before you even try it. Stay or Run?",  
"Your date shows up wearing an ‘I love me’ shirt. Stay or Run?",  
"Your date wears a fanny pack and keeps pulling out loose spaghetti. Stay or Run?",  
"Your date has a mysterious briefcase they refuse to open. Stay or Run?",  
"Your date insists on calling you ‘soulmate’ before the appetizers arrive. Stay or Run?",  
"Your date asks if you have life insurance before dessert. Stay or Run?",  
"Your date brings a candle and whispers ‘mood lighting",

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
