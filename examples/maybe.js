import { compose, curry, Maybe, prop } from '..';

const add5 = (num) => num + 5;

Maybe
  .of({ name: 'Ergou' })
  .map(prop('age'))
  .map(add5)
// Nothing

Maybe
  .of({ name: 'Ergou', age: 10 })
  .map(prop('age'))
  .map(add5)
// Just(15)

const map = curry((f, anyFunctor) => anyFunctor.map(f));

// safeProp :: String -> Object -> Maybe(Any)
const safeProp = curry((p, obj) => Maybe.of(prop(p, obj)));

// ageAfter5Year :: Object -> Maybe(Number)
const ageAfter5Year = compose(map(add5), safeProp('age'));

console.log(
  ageAfter5Year({ name: 'Ergou' })
);

console.log(
  ageAfter5Year({ name: 'Ergou', age: 10 })
);
