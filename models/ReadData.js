class ReadData
{
  constructor(){
    this.fs = require("fs");
  }
getData()
{
        if(this.fs.existsSync("./data/themes.json"))
        {
        var text = this.fs.readFileSync("./data/themes.json" , 'utf-8');
        var jsonthemedata = JSON.parse(text);
        return jsonthemedata;
        }
        else
        {
          return  {"headers":["new"],"colors":[[]]};
        }
}

}

module.exports =ReadData;