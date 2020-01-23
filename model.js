


// Implémenter ici les 4 classes du modèle.
function Rectangle(x, y, height, width, color, size) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;

    Form.call(this, color, size);

    Rectangle.prototype.paint = function (ctx) {
        //TODO Manager color
        ctx.fillStyle = color;
        ctx.lineWidth = size;
        ctx.rect(this.x, this.y, this.x + this.width, this.y + this.height);
        ctx.stroke();
    };

}

function Line(x1, y1, x2, y2, color, size) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    Form.call(this, color, size);

    Line.prototype.paint = function (ctx) {
        //TODO Manager color
        ctx.fillStyle = color;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();

    };

}

function Form(color, size) {
    this.color = color;
    this.size = size;

}

function Drawing() {
    this.formList = new Array();

    Drawing.prototype.paint = function (ctx) {
        console.log(this.formList);
        ctx.fillStyle = '#F0F0F0'; // set canvas' background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        this.formList.forEach(function (eltDuTableau) {
            // now fill the canvas
            eltDuTableau.paint(ctx);
        });
    };
}

// N'oubliez pas l'héritage !
