
'use babel';

var Grid = require("./Grid");
var Header = require("./Header");
var ColorList = require("./ColorList");

class Container extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {maxkey:0};
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
          var header = <Header name={element} />;
          var colorlist = <ColorList colors={renderdata.colors[index]}  index={index} />;
          
            return (<Grid  header={header}  color={colorlist}  key={index} id={index}  del={this.deleteElement} />);
        }.bind(this));
        
        return(                
                <div onClick={this.refresh}>
                {element}
                </div>
        );

    }
}

module.exports = Container;