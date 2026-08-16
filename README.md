# Clusterix Playwright Automation

## Tech Stack
- Playwright
- JavaScript
- Page Object Model (POM)

## Test Scope
Happy Path Automation:

1. Login
2. Create File
3. Edit File
4. Edit File Again
5. Logout

## Run Tests

npm install

npx playwright test

## Reports

npx playwright show-report

## Notes

MFA authentication requires either:
- Test account without MFA
- TOTP secret
- Session bootstrap mechanism

Current framework supports manual MFA completion before continuing automation.
