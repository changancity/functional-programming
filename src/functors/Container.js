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

  inspect() {
    return `Container(${inspect(this.$value)})`;
  }
}
