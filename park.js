var Park = function(name){
  this.name = name;
  this.enclosure = []
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaurByType = function (type) {
  this.enclosure.filter(dinosaur => dinosaur !== type )
};

module.exports = Park;
