import {Card} from "./card";
import {Player} from "./player";

export class Game {
    get player1(): Player {
        return this._player1;
    }

    set player1(value: Player) {
        this._player1 = value;
    }

    get player2(): Player {
        return this._player2;
    }

    set player2(value: Player) {
        this._player2 = value;
    }

    get player3(): Player {
        return this._player3;
    }

    set player3(value: Player) {
        this._player3 = value;
    }

    get player4(): Player {
        return this._player4;
    }

    set player4(value: Player) {
        this._player4 = value;
    }

    get player1Cards(): Array<Card> {
        return this._player1Cards;
    }

    set player1Cards(value: Array<Card>) {
        this._player1Cards = value;
    }

    get player2Cards(): Array<Card> {
        return this._player2Cards;
    }

    set player2Cards(value: Array<Card>) {
        this._player2Cards = value;
    }
    private _player1: Player
    private _player2: Player
    private _player3: Player
    private _player4: Player
    private _player1Cards: Array<Card>
    private _player2Cards: Array<Card>

    constructor(
        public room: String,
    ) {
    }


}
