# dogehouse-bot

## What is this?

This is my attempt at making a good DogeHouse bot template. Most of the bots I see use plain JavaScript and either implement commands wrong, or crash with any errors.

## How is it different?

This template uses TypeScript and Kebab. The advantage of that is intellisense and strict type checking, so you don't have to look up documentation for functions and don't make silly mistakes.

You can also bundle it into an executable for quick production deploys.

## Things that need to be added

- [x] Compiling
- [x] Wrapper for kebab (so you can access it in any file)
- [ ] Commands
- Proper logging
  - [x] Stdout (console)
  - [ ] File
    - [ ] Make it not crap itself when the logs don't exist yet
- [ ] Error handling
- [ ] Comments
- [ ] Tests?

## How to run

1. Generate this template using GitHub. (<https://github.com/HonbraDev/dogehouse-bot/generate>)
2. Run `yarn` (you can use npm too, but this project was made for Yarn)
3. Populate `.env` with your bot tokens (DOGEHOUSE_TOKEN and DOGEHOUSE_REFRESH_TOKEN)
4. Run `yarn compile:prod`
5. Run `yarn start`

The bot should join the biggest room and say hello.
