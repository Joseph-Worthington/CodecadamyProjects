const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(field){
        this._field = field;
    }

    get field(){
        return this._field;
    }
    

    print() {
        this._field.forEach((row) => {
            console.log(row.join(" "));
        });
    }
    async move() {
        let row = 0;
        let column = 0;
        let loop = true;


        const readline = require('readline')
        
        let rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            autoCommit: true
         });

         rl.on("SIGINT", function () {
            process.emit("SIGINT");
          });

          process.on("SIGINT", function () {
            //graceful shutdown
            process.exit();
          });
        
        rl.question('Which Direction?');

        readline.emitKeypressEvents(process.stdin);
        process.stdin.setRawMode(true);

        process.stdin.on('keypress', charater => {

            readline.moveCursor(rl, 0, -1)
            rl.clearLine(0);
        })

        // const readline = require('readline').createInterface({
        //     input: process.stdin,
        //     output: process.stdout
        //   });

        // while(loop){
        //   readline.question('Which direction?', direction => {
        //     switch(direction){
        //         case 'w':
        //             if(row > 0 && row < this._field.length){
        //                row -=1;
        //                console.log(row);
        //             }
        //             readline.clearLine(-1);
        //         break;
        //         case 'a':
        //             if(column >= 0){
        //                 column--;
        //                 console.log(row);
        //             }

        //             readline.close();
        //         break;
        //         case 's':
        //             if(row >= 0 && row < this._field.length){
        //                 row +=1;
        //                 console.log(row);
        //              }
        //             readline.close();
                    
        //         break;
        //         case 'd':
        //             if(column >= 0){
        //                 column++;
        //             }
        //             readline.close();
        //         break;
        //         default:
        //             console.log('Incorrect input. Please WASD to move around the maze!');
        //             readline.close();
        //     }            
        //   });
        // }
        
        for(let i = 0; i > this._field.length; i++){
            for(let j = 0; j > this._field[i].length; j++){
                console.log(this._field[i][j])
                if(j === '*'){


                }
            }
        }
    }

}


const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
]);

myField.print();
myField.move();






