<!-- @format -->

# Clean_Javascript

- in this repo i will put blocks of clean Javascript

  - Typescript
  - Testing for NodeJS and ReactJS

- Each branch contains feature

## Travis_build

- branch feature/jest  
  [![Jest Branch build status](https://app.travis-ci.com/FoushWare/React_typescript_coding_blocks.svg?token=EsqdxqGydwPtFHUFqsDb&branch=feature/jest)](https://app.travis-ci.com/FoushWare/React_typescript_coding_blocks.svg?token=EsqdxqGydwPtFHUFqsDb&branch=feature/jest)

- branch master  
   [![Jest Branch build status](https://app.travis-ci.com/FoushWare/React_typescript_coding_blocks.svg?token=EsqdxqGydwPtFHUFqsDb&branch=master)](https://app.travis-ci.com/FoushWare/React_typescript_coding_blocks.svg?token=EsqdxqGydwPtFHUFqsDb&branch=master)

## Branches

- feature/staticAnalysisTesting
  - contains config for Eslint,TypeScript,Prettier
  - husky precomit
- feature/CreateReactWithout_CRA
  - i created a react app using webpack 5 and babel without need for
    create-react-app cli
  - hot reload support
- feature/jest🧪 🤠 🔭

  ```
  🤪 You can run (server,client)(nodeENV,jsdomENV)
  - I Made this using :
  > projects:[] in jest config

  	projects: [
  	'./test/jest.client.js',
  	'./test/jest.server.js'
  ]

  ```

  > Note 🧨 You can remove the tests and start ... i made these tests to Test
  > Jest configurationg with nodeJS & ReactJS

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

⛔ -> the Calculator styles not applied

🟢 -> changing the module exportconvension to camelcase so i can use css modules
style with camelcase

```
 {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              // modules: true,
              // exportLocalsConvention: "camelCase",
              modules: {
                mode: "local",
                exportLocalsConvention: "camelCase",
              }


            },
          },
        ],
        include: /\.module\.css$/,
      },
```

```
-> so now i can call the style
[.calculator-keypad] like this

styles.calculatorKeypad

```

⛔ -> Arrow function not working  
The Reson was file `bundle.js` called twice

🟢 -> i removed it from the `public/index.html`

### End Problems ⛔⛔⛔ and Solutions 🟢🟢🟢

- snapshot for the serialize version of dom node

## vsCode Extensions

- eslint => This will show Me errors of eslint while writting the Code
- prettier => for code format

## 👀 Show all jest config

```
    npx jest --showConfig
```

## React Main libs

- emotion it's like style-component
