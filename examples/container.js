import { compose, curry } from '../src';

// string => string
const exclaim = (string) => string.concat('!');

// (number) => (string) => string
const repeat = curry(
  // (number, string) => string
  (count, string) => Array.from({ length: count }).fill(string).join('\n')
);

const importantThing = compose(repeat(3), exclaim);

// console.log(
//   importantThing('timecard')
// );

class Container {
  static of(value) {
    return new Container(value);
  }
  
  constructor(value) {
    this.$value = value;
  }

  map(fn) {
    return Container.of(fn(this.$value));
  }
}

// console.log(
//   Container.of('timecard').map(exclaim).map(repeat(3))
// );

// external deps, file
// async

// error

class Maybe {
  static of(value) {
    return new Maybe(value);
  }
  
  constructor(value) {
    this.$value = value;
  }

  isNil() {
    return this.$value === null || this.$value === undefined;
  }

  map(fn) {
    return this.isNil() ? this : Maybe.of(fn(this.$value));
  }
}

const parseDate = (string) => {
  if (!/\d{4}-\d{2}-\d{2}/.test(string)) {
    return null;
  }

  return new Date(string);
}

const getBirthYear = (date) => date.getFullYear();

const getAge = curry(
  (currentYear, birthYear) => currentYear - birthYear
);

// yyyy-mm-dd, age
console.log(
  Maybe.of('200-12-21')
    .map(parseDate)
    .map(getBirthYear)
    .map(getAge(2022))
);

const map = curry(
  (fn, container) => container.map(fn)
);

const age = compose(
  map(getAge(2022)),
  map(getBirthYear),
  map(parseDate),
  Maybe.of,
);

console.log(
  age('2002-12-21')
);

// ({}).someProp?.someMethod?.()

// Maybe.of({}).map(prop('someProp')).map(prop('someMethod'))

class Either {
  static of(value) {
    return new Right(value);
  }

  constructor(value) {
    this.$value = value;
  }
}

class Right extends Either {
  map(fn) {
    return Right.of(fn(this.$value));
  }
}

class Left extends Either {
  map() {
    return this;
  }
}

const left = (reason) => new Left(reason);

const parseDate2 = (string) => {
  if (!/\d{4}-\d{2}-\d{2}/.test(string)) {
    return left('Invalid date format');
  }

  return Right.of(new Date(string));
}

// console.log(
//   parseDate2('2020-12-21')
//     .map(getBirthYear)
//     .map(getAge(2022))
// );

class IO {
  static of(value) {
    return new IO(() => value);
  }

  constructor(value) {
    this.$value = value;
  }

  map(fn) {
    return new IO(compose(fn, this.$value))
  }
}

const storage = new IO(() => new Date())
  .map(getBirthYear)
  
console.log(storage.$value());

class Task {
  static of(value) {
    return new Task((_, resolve) => void resolve(value));
  }

  static rejected(reason) {
    return new Task((reject, _) => void reject(reason));
  }

  // (reject, resolve) => void
  constructor(fork) {
    this.fork = fork;
  }

  map(fn) {
    return new Task((reject, resolve) => {
      this.fork(reject, compose(resolve, fn));
    });
  }
}

Task.of(3).map(x => x ** 2).fork(
  console.error,
  console.log
);

new Task((resolve) => {
  setTimeout(() => {
    resolve('2020-01-21');
  }, 1000);
})
  .map(getBirthYear)
  .fork(
    console.error,
    console.log
  );
