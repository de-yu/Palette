
function Controller(themepath)
{  

    this.querystring = require('querystring'); 
    this.url = require("url");   
    this.urlsearch = this.getUrlRearch();
    this.themepath = themepath;
    this.readdata = new ReadData();
    this.view = new View();

}

Controller.prototype.getUrlRearch = function()
{

    var urldata = this.url.parse(location.href);
    var search = this.querystring.parse(urldata.query);
    
    return search;
};

Controller.prototype.execute = function()
{   
  var action;
  var fs = require("fs");

  this.index();

  
};
Controller.prototype.index = function()
{
    var themedata = this.readdata.getData();
    
    this.view.index(themedata);
};
