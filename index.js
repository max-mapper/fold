(function() {
  if (isInBrowser()) {
    window.fold = fold
  } else {
    var cheerio = require('cheerio')
    module.exports = fold
  }

  function isInBrowser() {
    return (typeof window !== "undefined") && (typeof document !== "undefined")
  }
  
  function parseHTML(htmlString) {
    if (isInBrowser()) {
      if ($) return $(htmlString)
    } else {
      return cheerio.load(htmlString).root()
    }
  }
  
  function fold(data, template, html) {
    if (!data) return new Fold()
    if (!template && !html) return new Fold(data)
    return new Fold(html)(data, template)
  }

  function Fold(html) {
    if (html) this.html = html
    if (isInBrowser()) this.html = document
    return this.render.bind(this)
  }

  Fold.prototype.render = function(data, template) {
    if (typeof data === "object" && template) {
      var dom = parseHTML(template)
    } else {
      var dom = parseHTML(this.html)
      if (data) dom = dom.find(data)
      data = template
    }
    return this._render(dom, data)
  }
  
  Fold.prototype._render = function(dom, data) {
    if (dom.length === 0) return false
    Object.keys(data).forEach(function(key) {
      if (isInBrowser()) {
        if (dom.is(key)) dom = $("<div></div>").html(dom)
        dom.find(key).html(data[key])
      } else {
        dom.find(key).html(data[key])
      }
    })
    return dom.html()
  }
})()