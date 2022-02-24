import util from 'util';

export class Either {
  static of(x) {
    return new Right(x);
  }

  constructor(x) {
    this.$value = x;
  }
}

export class Left extends Either {
  map(f) {
    return this;
  }

  [util.inspect.custom]() {
    return `Left(${util.inspect(this.$value)})`;
  }
}

export class Right extends Either {
  map(f) {
    return Either.of(f(this.$value));
  }

  [util.inspect.custom]() {
    return `Right(${util.inspect(this.$value)})`;
  }
}
