class DataManger {
  constructor(data) {
    this.data = this.createKey(data);
    this.search = false;
    this.searchdata = {headers:new Array(),colors:new Array() , key:new Array()};
  }
  delete(index) {
    for (var key in this.data)
    {
      this.data[key].splice(index,1);
    }
  }
  deleteColor(index,i) {
    this.data["colors"][index].splice(i,1);
  }
  newTheme(newdata) {
    for (var key in this.data)
    {
      this.data[key].push(newdata[key]);
    }
  }
  newColor(index,value) {
    this.data["colors"][index].push(value);
  }
  modifyHeader(index,value) {
    this.data["headers"][index] = value;
  }
  modifyColor(index,i,value) {
    this.data["colors"][index][i] = value;
  }
  refresh(data) {
    this.data = data;
  }
  setSearch(query) {
    this.search = true;
    var searchdata = {headers:new Array(),colors:new Array() , key:new Array()};

    for (var i = 0;i < this.data["headers"].length;i++)
    {
      if (this.data["headers"][i].search(query) > -1) {
        searchdata["headers"].push(this.data["headers"][i]);
        searchdata["colors"].push(this.data["colors"][i]);
        searchdata["key"].push(this.data["key"][i]);
      }
    }
    this.searchdata = searchdata;
  }
  clearSearch() {
    this.search = false;
    this.searchdata = {headers:new Array(),colors:new Array()};
  }
  getRowData(index) {
    return {'header':this.data['headers'][index],'colors':this.data['colors'][index]}
  }
  createKey(data) {
    var temp = {headers:new Array(),colors:new Array(),key:new Array()};
    for (var i = 0;i < data["headers"].length;i++)
    {
      temp["headers"].push(data["headers"][i]);
      temp["colors"].push(data["colors"][i]);
      temp['key'].push(i);

    }
    return temp;
  }
  getData() {

    if (this.search) {
      return this.searchdata;
    }
    else {
      return this.data;
    }
  }
}

module.exports = DataManger;
