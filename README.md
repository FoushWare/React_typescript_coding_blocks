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

### Start Problems ⛔⛔⛔ and Solutions 🟢🟢🟢

➡️ Running (aut-scaling-text.js) test Will give Error

     ⛔->Jest encountered an unexpected token
     The Problem was importing css file as node module but it's css file

🟢 -> Solution: add mocks in jest.config.js

```
 moduleNameMapper: {
    '\\.css$': require.resolve('./test/style-mock.js'),
  },
```

⛔ -> with using mock-module.js for mocking css file 👔 if i use the debug
method from render [react-testing-lib] ... class will not appear .. and i want
to make things to the class in runtime

```
test('renders', () => {
	const { debug } = render(<AutoScalingText />)
	debug()
})

--outputs
<body>
        <div>
          <div
            data-testid="total"
            style="transform: scale(1,1);"
          />
        </div>
      </body>

```

🟢 -> solution : is to use package called identity-obj-proxy ... And in
jest.config.js

```
 moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy', // to make className appear in the test
    '\\.css$': require.resolve('./test/style-mock.js'), // mocking css file because it's render as module not css file
  },

  ---output

  <body>
        <div>
          <div
            class="autoScalingText"
            data-testid="total"
            style="transform: scale(1,1);"
          />
        </div>
      </body>


```

⛔ -> emotion styles not shown in snapshot serialize

🟢 -> Add jest-emotion

```
  snapshotSerializers: ['jest-emotion']

```

### End Problems ⛔⛔⛔ and Solutions 🟢🟢🟢

- snapshot for the serialize version of dom node

## vsCode Extensions

- eslint => This will show Me errors of eslint while writting the Code
- prettier => for code format

## React Main libs

- emotion it's like style-component
