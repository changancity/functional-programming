import { curry, compose } from '../essentials';
import { Maybe } from '../functors';

// Pointfree utilities

// concat :: String -> String -> String
export const concat = curry((a, b) => a.concat(b));

// filter :: (a -> Boolean) -> [a] -> [a]
export const filter = curry((fn, xs) => xs.filter(fn));

// filter :: Functor f => (a -> b) -> f a -> f b
export const map = curry((f, anyFunctor) => anyFunctor.map(f));

// head :: [a] -> a
export const head = xs => xs[0];

// last :: [a] -> a
export const last = xs => xs[xs.length - 1];

// prop :: String -> Object -> a
export const prop = curry((p, object) => object[p]);

// safeHead :: [a] -> Maybe a
export const safeHead = compose(Maybe.of, head);

// safeLast :: [a] -> Maybe a
export const safeLast = compose(Maybe.of, last);

// safeProp :: String -> Object -> Maybe a
export const safeProp = curry((p, obj) => compose(Maybe.of, prop(p))(obj));
