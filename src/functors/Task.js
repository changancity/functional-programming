export class Task {
  static of(x) {
    return new Task((_, resolve) => resolve(x));
  }

  static rejected(x) {
    return new Task((reject, _) => reject(x));
  }

  constructor(fork) {
    this.fork = fork;
  }

  map(fn) {
    return new Task((reject, resolve) => (
      this.fork(reject, compose(resolve, fn))
    ));
  }

  inspect() {
    return `Task(${inspect(this.fork)})`;
  }
}
