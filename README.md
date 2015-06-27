# eider
> fast, lightweight & highly opinionated development server for quickly scaffolding prototypes, using Jade, LESS and browserify

### Installation
```
$ npm install eider -g
```

### Usage
The directory you run `eider` in will be served at `/`:
```
$ eider
```
fires up a server at localhost port `8080`.

Now `/foo/` will try to look for `/foo/index.jade`, `/foo/styles/style.css` will return `/foo/styles/styles.less` compiled and `/foo/js/index.js` will return a browserified version of that file.

### Buyer beware
This is **not** intended to be used in any kind of production setting, please don't even start to think about anything like that.

### "eider", wtf?
> The UK's heaviest duck, and its fastest flying.

For the bird nerds: <http://www.rspb.org.uk/discoverandenjoynature/discoverandlearn/birdguide/name/e/eider/>

##License
MIT © [Frederik Ring](http://www.frederikring.com)
