import { compose, IO, map, Maybe, prop } from '..';

const localStorage = {
    getItem(key) {
        return '{"version": "1.0.0", "url": "https://x.pkg"}';
    }
};

// url :: IO String
const config = new IO(() => localStorage.getItem('config'));

// parseConfig :: String -> Object | null
const parseConfig = (string) => {
    try {
        return JSON.parse(string);
    } catch {
        return null;
    }
};

// safeParseConfig :: String -> Maybe(Object)
const safeParseConfig = compose(Maybe.of, parseConfig);

// findSourceURL :: () -> IO(Maybe(String))
const findSourceURL = () => map(
    compose(map(prop('url')), safeParseConfig),
    config,
);

// Impure calling code
const result = findSourceURL().unsafePerformIO();

console.log(result);
// Just('https://x.pkg')
