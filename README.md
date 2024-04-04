# API-test

## Getting started

## Verification
- Verify the HTTP status is 200
- Count the total number of currencies returned within the response
- Verify the currency ‘GBP’ is shown within the response

# Tools to handle the tests
- Playwright v1.42.1
- Node JS 20.12.1

# Executing tests
## Local
- Clone repo
- Checkout to code dir
- Install  node modules, run ```npm install```
- On the terminal, run test in a headless mode with ```npm run pw:run```
- On the terminal, view test report by running ```npm run pw:show:report```

## CI
- Tests run on GitHub on every push
