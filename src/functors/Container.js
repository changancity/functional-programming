import util from 'util';

export class Container {
  static of(x) {
    return new Container(x);
  }

  constructor(x) {
    this.$value = x;
  }

  map(f) {
    return Container.of(f(this.$value));
  }

  [util.inspect.custom]() {
    return `Container(${util.inspect(this.$value)})`;
  }
}
