
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd

	this.onInteractionStart = function (dnd) {
		switch (this.currEditingMode) {
			case editingMode.line:
				this.currentShape = new Line(dnd.xInitiale, dnd.yInitiale, dnd.xFinale, dnd.yFinale, this.currColour, this.currLineWidth);
				break;
			case editingMode.rect:
				this.currentShape = new Rectangle(dnd.xInitiale, dnd.yInitiale, dnd.xFinale, dnd.yFinale, this.currColour, this.currLineWidth);
				break;
		}

		drawing.formList.push(this.currentShape);
		drawing.paint(ctx);
	}.bind(this);

	this.onInteractionUpdate = function (DnD) {
		switch (this.currEditingMode) {
			case editingMode.line:
				this.currentShape = new Line(dnd.xInitiale, dnd.yInitiale, dnd.xFinale, dnd.yFinale, this.currColour, this.currLineWidth);
				break;
			case editingMode.rect:
				this.currentShape = new Rectangle(dnd.xInitiale, dnd.yInitiale, dnd.xFinale, dnd.yFinale, this.currColour, this.currLineWidth);
				break;
		}

		drawing.formList.push(this.currentShape);
		drawing.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function(DnD) {
		switch (this.currEditingMode) {
			case editingMode.line:
				this.currentShape = new Line(dnd.xInitiale, dnd.yInitiale, dnd.xFinale, dnd.yFinale, this.currColour, this.currLineWidth);
				break;
			case editingMode.rect:
				this.currentShape = new Rectangle(dnd.xInitiale, dnd.yInitiale, dnd.xFinale, dnd.yFinale, this.currColour, this.currLineWidth);
				break;
		}

		drawing.formList.push(this.currentShape);
		drawing.paint(ctx);
	}.bind(this);


};


