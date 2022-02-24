import { compose } from '../src';

// upperCase :: string -> string
function upperCase(string) {
  return string.toUpperCase();
}

// repeat :: string -> string
function triple(string) {
  return Array.from({ length: 3}).fill(string).join('\n');
}

// importantThing :: string -> string
const importantThing = compose(console.log, triple, upperCase);

importantThing('Timecard!');
