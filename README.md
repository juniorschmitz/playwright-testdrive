# Playwright test drive

## Installing dependencies
How to install dependencies:
```
npm i
```

## Running the project
How to run the tests:
```
npx playwright test
```

How to run the tests in headless mode:
```
npx playwright test --headed
```

How to run the tests in a single browser if there is a config.ts file:
```
npx playwright test --project=chromium
```

If you would like to, you can run the tests using a pre-defined configuration on this project, running:
```
npm test
```

## Developing
For running the Playwright Inspector and implementing new scenarios using this feature, you should use the following command:
```
set PWDEBUG=1
npm run test
```

Enjoy!