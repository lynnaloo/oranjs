window.oranjs = window.oranjs || {};

oranjs.Globals = {
  Reactions: {
    HUNGRY: 'hungry',
    HAPPY: 'happy'
  },

  Gender: {
    MALE: 'he',
    FEMALE: 'she',
    IT: 'it'
  },

  wrapperMarkup: '<div class="oranjs-pet-wrapper"><div class="oranjs-info"><span class="oranjs-name"></span> is a <span class="oranjs-type"></span></div><div class="oranjs-info">Right now <span class="oranjs-gender"></span> is <span class="oranjs-reaction"></span>!</div></div>',

  instanceCount: 0
}; 

// all our pet needs to come alive
oranjs.Pet = function (name, type = 'cat', gender) {
	this.color = 'orange';   // of course right?
	this.isHungry = false;   // flag to see if the pet is hungry
	this.lastFed = null;     // timestamp of when the pet was fed the last time. them pet's want food too much! =_=
	this.name = name;        // of course we need a name
  this.type = type;        // type of the pet
  this.gender = gender;    // pet's gender
  this.reaction = oranjs.Globals.Reactions.HAPPY; // we set the default emotion to happy

  this._instanceID = 0;   // used for internal stuff
};

// bring our new fancy pet into the virtual world
oranjs.Pet.prototype.init = function (container) {
  const _containerName = container.substring(1);
  const _elem = (container.indexOf('#') === 0) ? document.getElementById(_containerName) : ((container.indexOf('.') === 0) ? document.getElementsByClassName(_containerName).item(0) : document.getElementsByTagName(_containerName).item(0))

  // make sure a gender is set
  this.gender = (this.gender === oranjs.Globals.Gender.MALE ||
                 this.gender === oranjs.Globals.Gender.FEMALE  ||
                 this.gender === oranjs.Globals.Gender.IT) ? this.gender : oranjs.Globals.Gender.IT;

  // now we set up our markup
  _elem.innerHTML = oranjs.Globals.wrapperMarkup;
  oranjs.Globals.instanceCount = document.getElementsByClassName('oranjs-pet-wrapper').length;
  this._instanceID = oranjs.Globals.instanceCount;
  _elem.className += ' oranjs-id_' + this._instanceID;

  _elem.children[0].getElementsByClassName('oranjs-name').item(0).innerHTML = this.name;
  _elem.children[0].getElementsByClassName('oranjs-type').item(0).innerHTML = this.type;
  _elem.children[0].getElementsByClassName('oranjs-gender').item(0).innerHTML = this.gender;

  // trigger the first reaction
  this.triggerReaction(this.reaction);

  // and make sure our hunger system is up and running
  this.hunger();
};

// feed them some tasty foodz
oranjs.Pet.prototype.feed = function() {
	this.lastFed = Date.now();
	this.isHungry = false;

  // food equals happiness
  this.triggerReaction(oranjs.Globals.Reactions.HAPPY);

  // but who can get enough?
  this.hunger();
};

oranjs.Pet.prototype.hunger = function () {
  const _timerMin = 2;
  const _timerMax = 4;
  const _feedTimer = Math.floor(Math.random() * (_timerMax - _timerMin + 1) + _timerMax) * 1000;

  // our little pet is getting hungry :o
  window.setTimeout(() => {
    if (this.isHungry) {
      return;
    }
    this.isHungry = true;

    this.triggerReaction(oranjs.Globals.Reactions.HUNGRY);
  }, _feedTimer);
};

// trigger and visually show the pet's emotional reaction
oranjs.Pet.prototype.triggerReaction = function(reaction) {
  document.getElementsByClassName('oranjs-id_' + this._instanceID).item(0).children[0].getElementsByClassName('oranjs-reaction').item(0).innerHTML = reaction;
};
