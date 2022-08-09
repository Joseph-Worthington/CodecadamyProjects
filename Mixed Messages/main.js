const { stderr } = require('process');

class MixedMessages{
    constructor(name, message){
        this._name = name
        this._message = message;
    }
    get getName() {
        return this._name;
    }
    get messageType() {
        return this._message;
    }

}

class MotivationalMessage extends MixedMessages{
    constructor(name, message){
        super(name, message);
    }

    message(){

        let randomInt = Math.floor(Math.random()*4);
        let randomMessage = '';

        switch(randomInt){
            case 0:
                randomMessage = "You Got This!";
                break;
            case 1:
                randomMessage = "You are Gold always believe in your soul";
                break;
            case 2:
                randomMessage = "The day is darkest before the dawn";
                break;
            case 3:
                randomMessage = "Get out there and get it done";
                break;
            
            default:
                randomMessage = "Try again";

        }
        console.log(`Okay, here is your ${this._message} message... "${randomMessage}"`)
    }
}

class SpiritualMessage extends MixedMessages{
    constructor(name, message){
        super(name, message);
    }

    message(){

        let randomInt = Math.floor(Math.random()*4);
        let randomMessage = '';

        switch(randomInt){
            case 0:
                randomMessage = "The sun guides you toward the light!";
                break;
            case 1:
                randomMessage = "The problems of today are but a drop in the ocean";
                break;
            case 2:
                randomMessage = "Elightment is a path of adversity";
                break;
            case 3:
                randomMessage = "The path to cerenaty has many roads keep your eyes on your path or you will lsoe your way";
                break;
            
            default:
                randomMessage = "Walk the road least travelled so you may leave your mark";

        }
        console.log(`Okay, here is your ${this._message} message... "${randomMessage}"`)
    }
}

class SillyMessage extends MixedMessages{
    constructor(name, message){
        super(name, message);
    }

    message(){

        let randomInt = Math.floor(Math.random()*4);
        let randomMessage = '';

        switch(randomInt){
            case 0:
                randomMessage = "Toast is bread that has gone through the fire are you toast or bread";
                break;
            case 1:
                randomMessage = "The lost soul knows not where it is, or where it cna be found";
                break;
            case 2:
                randomMessage = "A hiddn dragon is hard to find, but that is the point of hide and seek";
                break;
            case 3:
                randomMessage = "Arm your mind and nothing will break you except bullets, or blunt force trauma";
                break;
            
            default:
                randomMessage = "Cut your way through your adversaries but dont be surprissed when you got jail";

        }
        console.log(`Okay, here is your ${this._message} message... "${randomMessage}"`)
    }
}
// A class for each message type that will take the name and message from the main  constructor. This will return a message of Hi Joe, here is ... message:

//So how will the classes cycle through variables to create a message? Could have ten messages that it just picks one at random.
//Can improve from there but lets start simpler. 


// A motivational class will containt the name and message from the primary class of Mixed Message. It will also have a create a message method. 



const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your name?`, theirName => {
    console.log(`Hi ${theirName}! `);
        readline.question(`Hi ${theirName}. What kind of message would you like? I can do 'Motivational' 'Spiritual' 'Silly' or type 'Create' and make your own.? `, messageType => {
            if(messageType === 'Motivational'){
                let m = new MotivationalMessage(theirName, messageType)   
                m.message();
                readline.close();
            }else if(messageType === "Spiritual"){
                let m = new SpiritualMessage(theirName, messageType)   
                m.message();
                readline.close();
            }else if(messageType === "Silly"){
                let m = new SillyMessage(theirName, messageType)   
                m.message();
                readline.close();
            }
        });
  });
  

//Create an if statment around each variable

//The variables will create a different message taking the name and message type as arguments.

