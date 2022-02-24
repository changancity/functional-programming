export function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    }

    return curry(
      fn.bind(null, ...args)
    );
  } 
}
