var done = false;
var node;
var textnode;
 
function continueStory(stuff) {
    node = document.createElement("P");
    textnode = document.createTextNode(stuff);
    node.appendChild(textnode);
    document.getElementById("story").appendChild(node);
}
 
function start() {

    confirm("Are you ready to start your own adventure?");

    var age = prompt("What's your age?");
    if (age < 11) {
        continueStory("Eh, I'll let this one slide.");
    }
    else {
        continueStory("Let's go!");
    }

continueStory("You are a marine biologist. You are getting ready to go deep sea diving.");

continueStory("Your partner asks you, 'Do you want to take an extra oxygen tank?'");

var userAnswer = prompt("Do you take an extra tank?");
    if (userAnswer === "yes") {
        continueStory("You put the extra tank in your submarine and jump in after it. Your partner seals the hatch.");
    }
    else {
        continueStory("'Alright, then. But you might regret it,' your partner says. But you hop into your submarine anyway, and your parter closes the hatch.");
    }

confirm("Continue?");

continueStory("You start up the sub, and it sinks below the surface. As the bubbles clear, you see small fish and other little creatures swimming around. You remember you have a camera for taking pictures of the sea life.")

 userAnswer = prompt("Do you want to take any pictures?");
    if (userAnswer === "yes") {
        continueStory("Great! You snap a few pics of the beautiful fish, then continue on your way.")
    }
    else {
        continueStory("'There'll be more fish at the bottom,' you think, continuing through the water.");
}
continueStory("You get deeper and deeper. The sunlight starts to fade. You are traveling to the bottom, to look at the more exotic species. The light fades completely. It's getting harder to see.");
    
 userAnswer = prompt("Do you turn your headlights on?");
    if (userAnswer === "yes") {
        continueStory("The headlights are turned on, and you can see where you are going. A wall approaches fast, and you duck your sub out of the way. Good thing you turned the light on!");
    }
    else {
        continueStory("Now it's pitch black. There is no light supply. 'The light could scare the fish away,' you think. You are crusing along, down the abyss, when the side of your sub smashes into a wall. It dents the side of the sub. It starts to spin slowly, still sinking. Alarms go off. You struggle to stay on your feet. You reach forward and grab the steering wheel, steadying you. Your sub is damaged. You decide it would be best to turn the headlights on, so you do.");
    }
    userAnswer = prompt("Do you want to call your team to check in?");
        if (userAnswer === "yes") {
            continueStory("You call in your team on the radio to say you are all right. They congratulate you and tell you to keep going!");
        }
        else {
            continueStory("'They know I'm fine,' you think. You continue down.")
        }
        confirm("Are you ready to dive deeper into the abyss?");
        
        continueStory("Your headlights illuminated dozens of interesting fish. You take lots of pictures of the exotic creatures. But finally, when you've reached your limit of depth, you see an angler fish. You excitedly take a few pictures, then, happy with your work, cruise up to the surface.")
    
    continueStory("Thank you for playing!");
     
}