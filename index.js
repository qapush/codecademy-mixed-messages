const { caption, separator } = require('./modules/decor');
const { result: {nutrition, physical, mental} } = require('./modules/messages');

console.log(caption, separator, '\n');
console.log('Nutrition: ', nutrition);
console.log('Physical health: ', physical);
console.log('Mental health: ', mental);
console.log(separator);
