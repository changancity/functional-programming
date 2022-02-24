# Functional programming

此次 Session 只是对 functional programming 做一个概览性的介绍. 其中的核心概念与语言无关, 示例代码依赖了 JavaScript 的特性.

过程中如果有和我们日常开发中常见的概念/实现匹配的地方(特别是 React, Bacon, lodash), 欢迎对号入座.

## Function / Closure

### Signature

### Examples

#### Functional component

## Higher-order function

In mathematics and computer science, a higher-order function is a function that does at least one of the following:

- takes one or more functions as arguments
- returns a function as its result

### Examples

#### List in React

```jsx
function List({ items, onChange }) {
  const getDeleteHandler = (index) => () => {
    const newItems = [...items].splice(index, 1);
    onChange(newItems);
  };

  return (
    {items.map((item, index) => (
      <ListItem onDelete={getDeleteHandler(index)}>
        {item.text}
      </ListItem>
    ))}  
  );
}
```

## Side effect and Purity

### Side effects

- changing the file system
- inserting a record into a database
- making a HTTP call
- mutations
- printing to the screen / logging
- obtaining user input
- querying the DOM
- accessing system state
- ...

### Purity

- Cacheable
- Portable / Self-documenting
- Testable
- Reasonable
- Parallel code

### Examples

#### immutable state in React
#### React.PureComponent
  props and state as inputs
#### Stateless react component
  - React.memo

## Currying

In mathematics and computer science, currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each takes a single argument. 

`f(a, b, c)` => `f(a)(b)(c)`

```js
function curry(func) {
  return (...args) => {
    if (args.length >= func.length) {
      func.apply(null, args);
    }

    return curry(
      func.bind(null, ...args)
    );
  }
}

function curry(func) {
  const arity = func.length;

  return function $curry(...args) {
    if (args.length >= func.length) {
      func.apply(null, args);
    }

    return $curry.bind(null, ...args);
  }
}
```

parameters order
fix paramters

## Partial applying

`this` 以及一些 API 在不同 Runtime 里的实现.

naming opportunity
caching

## Compose, Point free

In mathematics, function composition is an operation  ∘  that takes two functions f and g, and produces a function h = g  ∘  f such that h(x) = g(f(x)).

```js
function compose(...funcs) {
  return funcs.reduce((a, b) => (
    (...args) => a(b(...args))
  ));
}

function upperCase(string) {
  return string.toUpperCase();
}

// repeat :: string -> string
function repeat(string) {
  return Array.from({ length: 2}).fill(string).join('\n');
}

const importantThing = compose(console.log, double, upperCase);

importantThing('Time card!');
```

compose(f, g)
f(g())

right -> left

### Examples

#### [Redux.compose](https://github.com/reduxjs/redux/blob/master/src/compose.ts)

#### pipe in Shell

curl -x -x | 

## Functors

### Examples

#### Array.map

## Error handling

- Maybe
- Either

## Containers

- Maybe
- Either
- IO
- Task

### Examples

Optional
Promise

## References

- [Higher-order function](https://en.wikipedia.org/wiki/Higher-order_function)
- [Higher-Order Components](https://reactjs.org/docs/higher-order-components.html)

[](https://en.wikipedia.org/wiki/Currying)
[](https://en.wikipedia.org/wiki/Function_composition)