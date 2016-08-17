module.exports = function (source) {
  this.cacheable()
  var m = source.match(/<svg[\s\S]+?viewBox="(.+?)"[\s\S]+?>/)
  return 'module.exports = ' + JSON.stringify(m ? m[1] : null)
}
