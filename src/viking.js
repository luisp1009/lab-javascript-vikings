// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.health, this.strength
    }

    receiveDamage(theDamage) {
      this.health -= theDamage
    
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    receiveDamage(theDamage) {
        this.health -= theDamage

        
        if (this.health > 0){

            return `${this.name} has received ${theDamage} points of damage`
           }
        else {
            return `${this.name} has died in act of combat`
        }
        }

        battleCry() {
            return "Odin Owns You All!"
        }
        }      
        


// Saxon
class Saxon extends Soldier{
    
        receiveDamage(theDamage) {
            this.health -= theDamage
    if (this.health >0){    

        return `A Saxon has received ${theDamage} points of damage`
       }
    else {
        return `A Saxon has died in combat`
    }
}
}

// War
class War { 
    constructor(){ 
        this.vikingArmy = []
        this.saxonArmy = []
}
 
addViking(aVikingObject) {
    this.vikingArmy.push(aVikingObject)
}

addSaxon(aSaxonObject){
    this.saxonArmy.push(aSaxonObject)
}

vikingAttack() {
    const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[saxonIndex];
    const result = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health < 1) this.saxonArmy.splice(saxonIndex, 1);
    return result
}

saxonAttack(){
    const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[vikingIndex];
    const result = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health < 1) this.vikingArmy.splice(vikingIndex, 1);
    return result

}

showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }

}






    