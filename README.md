
# Form Wrapper (module federation)
A React, Typescript and Tailwind application that renders
one registration form in multiple steps. 

## Description
This module represents the form wrapper and keeps track of the global
state with `zustand`. Individual form steps are rendered as
indipendent remote moules as part of a webpack module federation.
The guest application is expected to run on `http://localhost:8001`.

## Installation
```bash
npm install
```

## Usage
Start the project in dev mode on port 8000

```bash
npm run start:dev
```

Make sure the guest is running on port 8001


## Issues with Next.js
I was planning to implement SSR and routing with Next.js, but it turned out
it has issues with webpack module federation:

https://www.npmjs.com/package/@module-federation/nextjs-mf
https://github.com/module-federation/core/issues/3153
https://module-federation.io/practice/frameworks/next/index.html
