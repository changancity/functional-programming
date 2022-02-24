import { compose } from '..';

// upperCase :: string -> string
function upperCase(string) {
  return string.toUpperCase();
}

// repeat :: string -> string
function triple(string) {
  return Array.from({ length: 3}).fill(string).join('\n');
}

// importantThing :: string -> string
const importantThing = compose(triple, upperCase);

console.log(
  importantThing('Timecard')
);

// associativity
// compose(f, compose(g, h)) === compose(compose(f, g), h);
