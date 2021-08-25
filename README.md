# PlaywrightSandbox

Trying to prove (without any luck yet) that page.click() may fail because I am getting that error at a work project
which is an old AngularJS app. Constructing a fake scenario here with the newest Angular.

So basically trying to prove wrong this: https://github.com/microsoft/playwright/issues/6244#issuecomment-824384845

1. npm start (logic at [src/app/app.component.ts](src/app/app.component.ts))
1. npm run uitest (test at [tests/modal.spec.ts](tests/modal.spec.ts))


