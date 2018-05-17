
class Controller
{  
    constructor()
    {
      this.querystring = require('querystring'); 
      this.url = require("url");   
      this.urlsearch = this.getUrlRearch();
      this.readdata = new ReadData();
      this.view = new View();
    }


    getUrlRearch()
    {

        var urldata = this.url.parse(location.href);
        var search = this.querystring.parse(urldata.query);

        return search;
    }
    execute()
    {   
      var action;
      var fs = require("fs");

      this.index();

    }
    index()
    {

        this.view.index();
    }
}

module.exports = Controller;