class DataManger
{
  constructor(data)
  {
    this.data = data;
    this.search = false;
    this.searchdata = {headers:new Array() , colors:new Array()};
  }
  deleteA(index)
{
    for (var key in this.data)
    {
        this.data[key].splice(index , 1);
    }
}
deleteColor(index , i)
{
     this.data["colors"][index].splice(i , 1);
}
newTheme(newdata)
{
    for (var key in this.data)
    {
        this.data[key].push(newdata[key]);
    }
}
newColor(index , value)
{
 this.data["colors"][index].push(value);
}
modifyHeader(index , value)
{
    this.data["headers"][index] = value;
}
modifyColor (index ,i ,  value)
{
    this.data["colors"][index][i] = value;
}
refresh(data)
{
    this.data = data;
}
setSearch(query)
{
    this.search = true;
    var searchdata = {headers:new Array() , colors:new Array()};
    var pattern = new RegExp(query , "i");

    for(var i=0;i<this.data["headers"].length;i++)
    {
        if(pattern.test(this.data["headers"][i]))
        {
            searchdata["headers"].push(this.data["headers"][i]);
            searchdata["colors"].push(this.data["colors"][i]);
        }
    }
    
    this.searchdata = searchdata;
}
clearSearch()
{
    this.search = false;
    this.searchdata = {headers:new Array() , colors:new Array()};
}
getData()
{
    console.log(JSON.stringify(this.data));
    if(this.search)
    {
        return this.searchdata;
    }
    else
    {
        return this.data;
    }
}   

}

module.exports = DataManger;
