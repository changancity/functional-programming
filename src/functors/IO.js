import util from 'util';
import { compose } from '..';

export class IO {
  static of(x) {
    return new IO(() => x);
  }

  constructor(fn) {
    this.unsafePerformIO = fn;
  }

  map(fn) {
    return new IO(compose(fn, this.unsafePerformIO));
  }

  [util.inspect.custom]() {
    return `IO(${util.inspect(this.unsafePerformIO)})`;
  }
}
