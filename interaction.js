
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.xInitiale = 0;
  this.yInitiale = 0;
  this.xFinale = 0;
  this.yFinale = 0;
  this.inter = interactor;
  var pressed = false;

  // Developper les 3 fonctions gérant les événements
  this.mouseDown = function (evt) {
    pressed = true;

    var pos = getMousePosition(canvas, evt);
    xInitiale = pos.x;
    yInitiale = pos.y;
    console.log(pos);
    inter.onInteractionStart(this);
  }.bind(this);

  this.mouseMove = function (evt) {
    if (pressed) {
      var pos = getMousePosition(canvas, evt);
      xFinale = pos.x;
      yFinale = pos.y;
      console.log(pos);
      interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  this.mouseUp = function (evt) {
    if (pressed) {
      var pos = getMousePosition(canvas, evt);
      xFinale = pos.x;
      yFinale = pos.y;
      pressed = false;

      console.log(pos);
      interactor.onInteractionEnd(this);
    }
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.mouseDown, false);
  canvas.addEventListener('mousemove', this.mouseMove, false);
  canvas.addEventListener('mouseup', this.mouseUp, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



