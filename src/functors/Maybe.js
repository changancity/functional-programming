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

  inspect() {
    return this.isNothing
      ? 'Nothing'
      : `Just(${inspect(this.$value)})`;
  }
}
