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

    public constructor(drunkLevel: number = 0) {
        this._drunkLevel = drunkLevel;
    }

    public drinkSomeRum(): void {
        if (this._alive = true && this._drunkLevel <= 0) {
            this._drunkLevel++;
        } else if (this._drunkLevel < 5) {
            this._drunkLevel++;
            this.howsItGoingMate();
        } else {
            this.die();
            console.log('Pirate iz ded...');
        }
    }

    public howsItGoingMate(): void {
        if (this._drunkLevel < 4) {
            console.log('Pour me anudder!');
        } else if (this._drunkLevel < 5) {
            console.log('Arghh, I\'ma Pirate. How d\'ya d\'ink its goin?');
        }
    }

    public die(): void {
        this._alive = false;
    }
}

let alcohol = new Pirate;

alcohol.drinkSomeRum();
alcohol.drinkSomeRum();

alcohol.drinkSomeRum();
alcohol.drinkSomeRum();
alcohol.drinkSomeRum();
alcohol.drinkSomeRum();



