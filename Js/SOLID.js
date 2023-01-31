const circle = (redius) => {
  const proto = {
    type: "Circle",
    area() {
      Math.PI * Math.pow(shape.length, 2);
    },
  };
  return Object.assign(Object.create(proto));
};

const square = (length) => {
  const proto = {
    type: "Square",
    area() {
      Math.pow(shape.length, 2);
    },
  };
  return Object.assign(Object.create(proto));
};

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
    sum() {
      const area = [];
      for (shapes of this.shapes) {
        area.push(shape.area());
      }
      return area.reduce((v, c) => (c += v), 0);
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
