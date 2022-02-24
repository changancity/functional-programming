export function curry(func) {
  const arity = func.length;

  return function $curry(...args) {
    if (args.length >= func.length) {
      func.apply(null, args);
    }

    return $curry.bind(null, ...args);
  }
}