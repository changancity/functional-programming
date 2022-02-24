import { Either, Left, prop } from '..';

const left = x => new Left(x);

Either.of('rain').map(str => `b${str}`); 
// Right('brain')

left('rain').map(str => `It's gonna ${str}, better bring your umbrella!`); 
// Left('rain')

Either.of({ host: 'localhost', port: 80 }).map(prop('host'));
// Right('localhost')

left('rolls eyes...').map(prop('host'));
// Left('rolls eyes...')
