
/* global data, savedata */

'use babel';

var Grid = require("./Grid");


class Container extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {maxkey:0 , data: data.getData()};
        this.addNewList = this.addNewList.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
        this.search = this.search.bind(this);
        this.clearSearch = this.search.bind(this);
    }
    addNewList(){
        data.newTheme({headers:"new" , colors:new Array()});
        this.setState({data: data.getData()});           
    }
    deleteElement(index){

        data.delete(index);
        this.setState({data: data.getData()});  
    }
    search(query)
    {
        data.setSearch(query);
        this.setState({data: data.getData()});  
    }
    clearSearch()
    {
        data.clearSearch();
        this.setState({data: data.getData()});                
    }
    save()
    {
      savedata.save(data.getData());  
    }
    updateContain(){
        this.setState({data: data.getData()});  
    }
    render(){
        var renderdata = this.state.data;
        var element =  renderdata.headers.map(function(element , index){

            return (<Grid  key={renderdata["key"][index]} id={index}  del={this.deleteElement.bind(this)} />);
        }.bind(this));
        
        return(                
                <div onClick={this.updateContain.bind(this)}>
                {element}
                </div>
        );

    }
}

module.exports = Container;