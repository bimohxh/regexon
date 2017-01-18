function $(id) {return document.getElementById(id)}
(function () {

  var raphael='js/visualize/libs/raphael'
  var visualize='js/visualize/visualize'
  var parse='js/visualize/parse'
  var Kit='js/visualize/Kit'

  window.addEventListener('DOMContentLoaded',function () {
    require([raphael,visualize,parse,Kit],init)
  })

  window.VS = {}
  var paper;
  function init (R, visualize, parse, K) {
    window.VS.params = {
      R: R,
      visualize: visualize,
      parse: parse,
      K: K
    }

    paper = window.VS.params.R('graphCt', 10, 10)

    show('')
  }

  function getFlags () {
    var flags=document.getElementsByName('flag');
    var fg='';
    for (var i=0,l=flags.length;i<l;i++) {
      if (flags[i].checked) fg+=flags[i].value;
    }
    return fg;
  }

  function show (restr) {
    try {
      window.VS.params.visualize(window.VS.params.parse(restr), getFlags(), paper)
    } catch (e) {
      if (e instanceof window.VS.params.parse.RegexSyntaxError) {
        //logError(re,e);
      } else throw e
    }
  }

  window.VS.visualize = show
})()