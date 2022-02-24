import { Task } from '..';

new Task((reject, resolve) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      reject(new Error('something went wrong'))
      return;
    }
    resolve(500);
  }, 200)
})
  .map((n) => n * 2)
  .fork(
    console.log,
    number => { console.log('Lucky number is: ', number) }
  );
