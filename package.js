Package.describe({
  name: 'templ:dimentum',
  version: '0.0.0',
  summary: 'Directed momentum animation.',
  git: 'https://github.com/meteor-templ/dimentum',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  
  api.use('mongo');
  api.use('ecmascript');
  api.use('templating');
  api.use('less');
  api.use('check');
  api.use('random');
  api.use('reactive-var');
  
  api.use('percolate:momentum@0.7.2');
  
  api.addFiles('dimentum.js', 'client');
});