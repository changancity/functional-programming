export function curry(fn) {
  return (...args) => {
    if (args.length >= fn.length) {
      fn.apply(null, args);
    }

    return curry(
      fn.bind(null, ...args)
    );
  }
}
