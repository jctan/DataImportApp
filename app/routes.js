//routes to handle CRUD operations

module.exports = function(app){
  //api 
  //get all imports
  /*
  app.get('/api/imports', function(req, res){

  });

  //create imports and send back all imports after creation
  app.post('/api/imports', function(req, res){

  });

  //delete import
  app.delete('/api/imports/:import_id', function(req, res){

  });
  */

  //application ------------------------------------------------
  app.get('*', function(req, res){
    res.sendfile('./public/views/index.html');
  });

  app.get('/home', function(req, res){
    res.sendfile('./public/views/home.html');
  });

  app.get('/imports', function(req, res){
    res.sendfile('./public/views/imports.html');
  });

};