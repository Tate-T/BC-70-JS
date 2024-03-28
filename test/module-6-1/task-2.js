function Hero(infoHero1) {
    this.name = infoHero1.heroName;
    this.score = infoHero1.heroScore;
    // this.showHeroInfo = function() {
    //         const message = `Hero ${this.name} has ${this.score} scores.`;
    //         return message;
         
    //     }
    
        
}

const infoHero1 = { 
     heroName: "Olha",
     heroScore: 15,
}

const hero1 = new Hero(infoHero1); 
console.log(hero1);

const infoHero2 = {
    heroName: "Valentyn",
    heroScore: 8,
}

const hero2 = new Hero(infoHero2);
console.log(hero2);

// Hero.__proto__
Hero.prototype.showHeroInfo = function() {
    const message = `Hero ${this.name} has ${this.score} scores.`;
    return message;
 
}

console.log(Hero.prototype.showHeroInfo());
console.log(hero1.showHeroInfo());
console.log(hero2.showHeroInfo());
console.log(hero2);
console.log(Array());
console.log(Object());
console.log(Hero.__proto__);