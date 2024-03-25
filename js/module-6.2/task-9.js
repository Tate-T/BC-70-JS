class Player {
    constructor(playerName, playerPoint) {
        this.name = playerName;
        this.points = playerPoint;
    }
    getInfo() {
        return `${this.name} has ${this.points} points`
    }
    addPoints(value) {
        this.points += value;
        return this.points;
    }
}
class Senior extends Player {
    constructor(seniorName, seniorPoints) {
        super(seniorName, seniorPoints)
    }
    
}
const vasya = new Senior("Vasya", 30) 
console.log(vasya.getInfo())