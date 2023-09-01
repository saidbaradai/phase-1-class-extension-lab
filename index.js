class Polygon {
    constructor(sides) {
        this.sides = sides
    }
    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        let sum = 0;
        for(let i = 0; i < this.countSides; i++) {
            sum += this.sides[i];
        }
        return sum;
    }
}

class Triangle extends Polygon{
    get isValid() {
        if(this.countSides !== 3) {
            return false;
        } else if(((this.sides[0] + this.sides[1]) < this.sides[2]) || ((this.sides[1] + this.sides[2]) < this.sides[0]) || ((this.sides[0] + this.sides[2]) < this.sides[1])) {
            return false;
        } else {
            return true;
        }
    }
}

class Square extends Polygon{
    get isValid() {
        if(this.countSides !== 4) {
            return false;
        }

        for(let i = 1; i < this.countSides; i++) {
            if(this.sides[i] !== this.sides[0]) {
                return false;
            }
        }
        return true;
    }

    get area() {
        if(this.isValid) {
            return this.sides[0] ** 2;
        } else {
            throw new Error ("Your square is not valid")
        }
    }
}

const triangle = new Triangle( [ 5, 5, 5 ] )
const triangle2 = new Triangle( [ 15, 10, 1] )
const square = new Square( [ 5, 5, 5, 5 ] )