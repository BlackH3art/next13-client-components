# Next13 client component not rendering on client

Components with `'use client'` directive are not being rendered on the client at all.\
Simple counter with `useState` doesn't work.\
`console.log()` logging only in terminal. No logs are printed out in the browser console.

## Minimal reproducible repository
Clone repo:
```bash
git clone https://github.com/BlackH3art/next13-client-components.git
```
Install dependencies:
```bash
npm install
```
Run application:
```bash
npm run dev
```

## Output

Terminal:

![terminal](https://github.com/BlackH3art/next13-client-components/blob/main/src/images/output.jpg "Terminal")

Browser console:

![console](https://github.com/BlackH3art/next13-client-components/blob/main/src/images/console.jpg "Console")
