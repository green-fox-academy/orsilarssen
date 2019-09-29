/*Pirates
Create a Pirate class. While you can add other fields and methods, you must have these methods:-

drinkSomeRum() - intoxicates the Pirate some
howsItGoingMate() - when called, the Pirate replies, if drinkSomeRun was called:-
0 to 4 times, "Pour me anudder!"
else, "Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.

If you manage to get this far, then you can try to do the following. - die() - this kills off the pirate, in which case, 
DrinkSomeRum, etc. just result in he's dead. - brawl(x) - where pirate fights another pirate 
(if that other pirate is alive) and there's a 1/3 chance, 1 dies, the other dies or they both pass out.

And... if you get that far...

Add a parrot.*/


class Pirate {
    private _drunkLevel: number;
    private _alive: boolean = true;
    passOut: boolean = false;

    public constructor(drunkLevel: number = 0) {
        this._drunkLevel = drunkLevel;
    }

    public drinkSomeRum(): void {
        
        if (this._alive = false){
            console.log('Pirate is dead, he cannot drink anymore')
        } else if (this._drunkLevel <= 4) {
            console.log('Pour me anudder!');
            this._drunkLevel++;
        } else if (this._drunkLevel == 5) {
            this.howsItGoingMate();
            this._drunkLevel++;
        } else if (this._drunkLevel == 6 ){
            this.die();
            console.log('Pirate iz ded...');
        }
    }

    public howsItGoingMate(): void {
        console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
    }

    public die(): void {
        this._alive = false;
    }

    public brawl(Pirate): void {
        let randomNum: number = Math.floor(Math.random()*Math.floor(3));
        if (randomNum == 0){
            this._alive=false;
            console.log('The pirate iz ded...')
        }
        else if ( randomNum == 1){
            Pirate._alive=false;
            console.log('The other pirate died...')
        }
        else if (randomNum == 2){
            this.passOut=true;
            Pirate.passOut=true;
            console.log('...both pirate passed out...Zzzz...')
        }
    }
        
}

let JackSparrow = new Pirate;

let Hook = new Pirate;

JackSparrow.drinkSomeRum();
JackSparrow.drinkSomeRum();
JackSparrow.drinkSomeRum();

Hook.brawl(JackSparrow);

/*JackSparrow.drinkSomeRum();
JackSparrow.drinkSomeRum();
JackSparrow.drinkSomeRum();
JackSparrow.drinkSomeRum();*/




