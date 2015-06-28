# eider [![Build Status](https://travis-ci.org/m90/eider.svg?branch=master)](https://travis-ci.org/m90/eider)
> fast, lightweight & highly opinionated development server for quickly building prototypes or proof-of-concepts, using Jade, LESS and browserify

### Installation
```sh
$ npm install eider -g
```

### Usage
The directory you run `eider` in will be served at `/`:
```sh
$ eider
```
fires up a server at localhost port `8080`.

Now `/foo` (as well as `/foo/index.html`) will try to look for `/foo/index.jade`, `/foo/styles/style.css` will return `/foo/styles/styles.less` compiled and `/foo/js/index.js` will return a browserified version of that file. Every other request will just try to be resolved by a static asset.

You can also specify a port to be used when starting `eider`:
```sh
$ eider --port 1337
```

### Buyer beware
This is **not** intended to be used in any kind of production setting, please don't even start to think about anything like that.

### "eider", wtf?
> The UK's heaviest duck, and its fastest flying.

For the bird nerds: <http://www.rspb.org.uk/discoverandenjoynature/discoverandlearn/birdguide/name/e/eider/>

## License
MIT © [Frederik Ring](http://www.frederikring.com)
