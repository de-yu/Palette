
'use babel';

var Grid = require("./Grid");


class Container extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {maxkey:0};
        this.addNewList = this.addNewList.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
        this.search = this.search.bind(this);
        this.clearSearch = this.search.bind(this);
    }
    addNewList(){
        data.newTheme({headers:"new" , colors:new Array()});
        this.forceUpdate();             
    }
    deleteElement(index){

        data.delete(index);
        this.forceUpdate(); 
    }
    search(query)
    {
        data.setSearch(query);
        this.forceUpdate();
    }
    clearSearch()
    {
        data.clearSearch();
        this.forceUpdate();               
    }
    save()
    {
      savedata.save(data.getData());  
    }
    updateContain(){
        this.forceUpdate();
    }
    render(){
        var renderdata = data.getData();
        console.log(renderdata);
        var element =  renderdata.headers.map(function(element , index){
            return (<Grid   key={index} id={index}  del={this.deleteElement.bind(this)} />);
        }.bind(this));
        
        return(                
                <div onClick={this.updateContain.bind(this)}>
                {element}
                </div>
        );

    }
}

module.exports = Container;