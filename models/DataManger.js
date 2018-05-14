function DataManger(data)
{
    this.data = data;
    this.search = false;
    this.searchdata = {headers:new Array() , colors:new Array()};
}
DataManger.prototype.delete = function(index)
{
    for (var key in this.data)
    {
        this.data[key].splice(index , 1);
    }
}
DataManger.prototype.deleteColor = function(index , i)
{
     this.data["colors"][index].splice(i , 1);
}
DataManger.prototype.newTheme = function(newdata)
{
    for (var key in this.data)
    {
        this.data[key].push(newdata[key]);
    }
}
DataManger.prototype.newColor = function(index , value)
{
 this.data["colors"][index].push(value);
}
DataManger.prototype.modifyHeader = function(index , value)
{
    this.data["headers"][index] = value;
}
DataManger.prototype.modifyColor = function(index ,i ,  value)
{
    this.data["colors"][index][i] = value;
}
DataManger.prototype.refresh = function(data)
{
    this.data = data;
}
DataManger.prototype.setSearch = function(query)
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
DataManger.prototype.clearSearch = function()
{
    this.search = false;
    this.searchdata = {headers:new Array() , colors:new Array()};
}
DataManger.prototype.getData = function()
{
    console.log(JSON.stringify(this.data));
    if(this.search)
        return this.searchdata;
    else
        return this.data;
}   

