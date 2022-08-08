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
        console.log(`Hi ${this._name}, here is your ${this._message} message... "${randomMessage}"`)
    }
}
// A class for each message type that will take the name and message from the main  constructor. This will return a message of Hi Joe, here is ... message:

//So how will the classes cycle through variables to create a message? Could have ten messages that it just picks one at random.
//Can improve from there but lets start simpler. 


// A motivational class will containt the name and message from the primary class of Mixed Message. It will also have a create a message method. 

if(messageType === 'Motivational'){
    let m = new MotivationalMessage(n, message);
}

m.message();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`What's your name?`, theirName => {
    console.log(`Hi ${theirName}!`);
        readline.question(`What kind of message would you like?`, messageType => {
            console.log(`Okay here is your ${messageType} message!`);
            m.message();
        });
  });
  

//Create an if statment around each variable

//The variables will create a different message taking the name and message type as arguments.

