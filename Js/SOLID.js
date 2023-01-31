//Function Composition
//Creates a interface of what shapes can do if they have shapeInterface assigned
const shapeInterface = (state) => ({
  types: "shapeInterface",
  area: () => state.area(state),
  volume: () => state.volume(state),
});

//Creates  Factory function with prototypes of length, Type and area so the function is a Single Responsibility
const circle = (redius) => {
  const proto = {
    length,
    type: "Circle",
    area: (args) => Math.PI * Math.pow(args.length, 2),
  };
  const basics = shapeInterface(proto);
  const composite = Object.assign({}, basics);
  return Object.assign(Object.create(composite), { length });
};

const square = (length) => {
  const proto = {
    length,
    type: "Square",
    area: (args) => Math.pow(args.length, 2),
  };
  const basics = shapeInterface(proto);
  const composite = Object.assign({}, basics);
  return Object.assign(Object.create(composite), { length });
};

//A factory function that is used to find the area of the shape in the area array, while also checking for the Prototype of shapeInterface inorder to operate
const areaCalculator = (s) => {
  const proto = {
    // Bad Sum Method
    // sum() {
    //   const area = [];

    //   for (shape of this.shape) {
    //     if (shape.type === "Square") {
    //       area.push(Math.pow(shape.length, 2));
    //     } else if (shape.type === "Circle") {
    //       area.push(Math.PI * Math.pow(shape.length, 2));
    //     }
    //   }
    //   return area.reduce((v, c) => (c += v), 0);
    // },

    // Better Sum Method
    // sum() {
    //   const area = [];
    //   for (shapes of this.shapes) {
    //     area.push(shape.area());
    //   }
    //   return area.reduce((v, c) => (c += v), 0);
    // },
    //Even Better Sum Method
    sum() {
      const area = [];
      for (shape of this.shapes) {
        if (Object.getPrototypeOf(shape).type === "shapeInterface") {
          area.push(shape.area());
        } else {
          throw new Error("this is not a shapeInterface object");
        }
      }
    },
    output() {
      return `
            <h1>
             Sum of areas of provided shapes: 
             ${this.sum()}
            </h1>`;
    },
  };
  return Object.assign(Object.create(proto), { shapes: s });
};

//Factory Function to calculate volume of shapes assuming they have the right Prototype as declared in shapesInterface
const volumeCalc = (s) => {
  const proto = {
    type: "volumeCalc",
  };
  const areaCalProto = Object.getPrototypeOf(areaCalculator());
  const inherit = Object.assign({}.areaCalProto, proto);
  return Object.assign(Object.create(inherit), { shapes: s });
};

const s = square(5);
console.log("OBJ\n", s);
console.log("Proto\n", Object.getPrototypeOf(s));
