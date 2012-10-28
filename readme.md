# fold.js

## the simplest templating API ever: css selectors for all the things

### named after the Scottish Fold cat breed because they are awesome:

![scottish fold](http://upload.wikimedia.org/wikipedia/commons/5/5d/Adult_Scottish_Fold.jpg)

### also named after that thing you do when making meringue where you fold in egg whites

## Client side API

requirements: zepto or jquery. if you don't like this feel free to fork and write a compatibility layer that uses `querySelector`!

```javascript
// after loading the fold.js script tag you get a new global variable 'fold'

// fold assumes your templates are in the DOM already, e.g.:
// <div class="template"><div class="foo"></div></div>

// look up the template via query selector and fold in the data
fold('.template', {'.foo': 'bar'})
// => <div class="foo">bar</div>

// or if you have the template string already and don't wanna rely on the DOM
fold({'.foo', "bar"}, '<div class="foo"></div>')
// => <div class="foo">bar</div>
```

## Node API

node doesn't have a DOM so you have to give it an HTML string to use as its fake DOM:

```javascript
var fold = require('fold')('<div class="template"><div class="foo"></div></div>')
fold('.template', {'.foo', "bar"})
// => <div class="foo">bar</div>
```

you can also use `fold` directly without a DOM or fake DOM:

```javascript
var fold = require('fold')
fold({'.foo', "bar"}, '<div class="foo"></div>')
// => <div class="foo">bar</div>
```

## TODO

- set html attrs and innerText, not just innerHTML

## License

BSD