<!DOCTYPE html>
<html>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.20.19/system.js"></script>
  <script>
    SystemJS.config({
    map: {
    'plugin-babel'         : 'https://cdn.rawgit.com/systemjs/plugin-babel/master/plugin-babel.js',
    'systemjs-babel-build' : 'https://cdn.rawgit.com/systemjs/plugin-babel/master/systemjs-babel-browser.js'
    },
    transpiler: 'plugin-babel'
    });
  </script>
  <script>
    SystemJS.import('script.js')
  </script>
  <body>
    <h1>ES6 modules with SystemJS - See console for results</h1>
  </body>

</html>