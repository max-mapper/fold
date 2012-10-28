function inBrowser() { return (typeof window !== "undefined") && (typeof document !== "undefined") }

var a = fold('<div class="template"><div class="foo"></div></div>')
console.log(a('.template', {'.foo': 'bar'}) === '<div class="foo">bar</div>')

var b = fold('.template', {'.foo': 'bar'}, '<div class="template"><div class="foo"></div></div>')
console.log(b === '<div class="foo">bar</div>')

var c = fold({'.foo': 'bar'}, '<div class="foo"></div>')
console.log(c === '<div class="foo">bar</div>')

if (inBrowser()) {
  var d = fold('.template', {'.foo': 'bar'})
  console.log(d === '<div class="foo">bar</div>')
}