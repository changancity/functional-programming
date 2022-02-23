import util from 'util';

export class Maybe {
  static of(x) {
    return new Maybe(x);
  }

  constructor(x) {
    this.$value = x;
  }

  get isNothing() {
    return this.$value === undefined || this.$value === null;
  }

  map(f) {
    return this.isNothing
      ? this
      : Maybe.of(f(this.$value));
  }

  [util.inspect.custom]() {
    return this.isNothing
      ? 'Nothing'
      : `Just(${util.inspect(this.$value)})`;
  }
}
