import util from 'util';

export class IO {
  static of(x) {
    return new IO(() => x);
  }

  constructor(fn) {
    this.$value = fn;
  }

  map(fn) {
    return new IO(compose(fn, this.$value));
  }

  [util.inspect.custom]() {
    return `IO(${util.inspect(this.$value)})`;
  }
}
