const PI=3.14159;

function getArea(radius) {
  return PI * radius * radius;
}

function getCircumference(radius) {
  return 2 * PI * radius;
}

export {PI, getArea, getCircumference}