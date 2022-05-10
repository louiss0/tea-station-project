---
aliases: [vite template notes]
tags: [HTML, CSS, typescript]
note type: Main
---

# Tea Station Project

This project is called the tea station project this is the one that comes from udemy im testing out my basic html template that I made with vite. The project is a simple project that is a tea station project.

To start up the server use the following command.

```bash
docker-compose up -d server
```

To download packages use this one

```bash
docker-compose run --rm npm install
```

The npm service is a _utility container_ that is used to access the node package manager called npm.

The config file for vite looks like this

```javascript
export default defineConfig({
  server: {
    host: "0.0.0.0",

    port: 3000,

    watch: {
      usePolling: true,
    },
    plugins: [
      pugPlugin(),
      WindiCSS(),
      mpa({ open: false, scanFile: "index.html" }),
    ],
  },
});
```

- This is the windi css config so far

```ts
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        catamaran: ["Catamaran", "sans-serif"],
        ghotel: ["Grand Hotel", "cursive"],
      },
    },
  },
});
```

- The main colors for this project are
  
  - green-500
  - green-300
  
  - gray-900
  - gray-500
  - gray-100
  - white

> [!Warning]
> I could not get hmr to work at all automatically it might be that im using windows but please don't get rid of watch at all or the use polling setting that put in it is very important. This means that every time you make a change you must save the file to see any changes. **Don't change any of the settings for the mpa options if you get rid of the open option you'll get a bug if you get rid of the scanFile option it will expect to find a `main{.ts?x.js?x} file in each page folder`**

## Folders and Files

| Folder  | Files                                                         |
| ------- | ------------------------------------------------------------- |
| app     | package.json, package-lock.json, tsconfig.json vite.config.ts |
| layouts | main.pug, home.pug                                            |
| mixins  | navbar.pug                                                    |
| src     | main.ts, style.css                                            |
| pages   | index/index.html,home/index.html                              |
