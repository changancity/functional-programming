import { Maybe, prop } from '..';

let a = Maybe.of({ name: 'Ergou' })
  .map(prop('age'))
console.log(a);