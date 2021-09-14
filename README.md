<!-- @format -->

# Clean_Javascript

- in this repo i will put blocks of clean Javascript

  - Typescript
  - Testing for NodeJS and ReactJS

- Each branch contains feature

## Branches

- feature/staticAnalysisTesting
  - contains config for Eslint,TypeScript,Prettier
  - husky precomit
- feature/CreateReactWithout_CRA
  - i created a react app using webpack 5 and babel without need for
    create-react-app cli
  - hot reload support
- feature/jest

  - config jest testing with React
  - Adding travisci [CI] and deploy to gh-pages[github pages]
  - hacks in jest => it uses jsdom so i can test in node envirnoment and like
    browser dom i can run in the Test:

  ```
  console.log(window)
  ```

  and it will give me a result

> I can specify with node envirnoment to run in jest

```
npm t -- --env=node
```

and this will give error for `console.log(window)`

### Problems ⛔⛔⛔ and Solutions 🟢🟢🟢

➡️ Running (aut-scaling-text.js) test Will give Error

     ⛔Jest encountered an unexpected token
     The Problem was importing css file as node module but it's css file

🟢 -> Solution: add mocks in jest.config.js

```
 moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
```

## vsCode Extensions

- eslint => This will show Me errors of eslint while writting the Code
- prettier => for code format
