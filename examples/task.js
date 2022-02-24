import { Task } from "../src";

new Task((_, resolve) => {
  setTimeout(() => {
    resolve(500);
  }, 200)
})
  .map((n) => n * 2)
  .fork(
    error => { console.log('something went wrong'); },
    number => { console.log('Lucky number is: ', number) }
  );
