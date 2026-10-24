# node-example

A 2019 sample for experimenting with Travis CI on a Node.js project: a one-file HTTP server whose build is gated by JSHint through Grunt.

> **Status: historical sample.** The Travis configuration targets Node `0.11`, which is long unsupported, and the pinned Grunt 0.4 packages are old.

## What is in it

| File | Purpose |
|---|---|
| `hello.js` | HTTP server on `127.0.0.1:1337` that replies `Hello World new!!` |
| `Gruntfile.js` | Runs JSHint on `Gruntfile.js` and `hello.js` (default task) |
| `package.json` | `npm test` runs `grunt --verbose` (package name `node-travis`) |
| `.travis.yml` | Travis CI: language `node_js`, version `0.11` |

## Run it

```bash
npm install
npm test            # JSHint; fails the build on lint errors
node hello.js       # then open http://127.0.0.1:1337/
```

JSHint's default settings warn about missing semicolons, which is what the comment in `hello.js` refers to: removing a semicolon from the checked files is an easy way to make the build fail on purpose and watch the CI reaction.

## Known limitations

- Travis config uses Node `0.11`; update `.travis.yml` to a supported Node version to run it on current CI.
- No application tests; the build only lints.
