
 var indexrender = {

    
  navigationRender: function(){
      
       var navigation = React.createClass({
            newtheme:function()
            {
                this.props.newtheme();
            },
            search:function()
            {
                this.props.search(this.refs.searchquery.value);
            },
            enterSearch:function(event)
            {
                if(event.which==13)
                {
                     this.props.search(this.refs.searchquery.value);
                }
            },
            clearSearch:function(){
                this.props.clearSearch();
            },
            savedata:function(){
                this.props.savedata();
            },
            render:function(){
                var logo = React.createElement("img" , {src:"./img/palette.png" , className:"navigation-logo"});
                var search = React.createElement("input" , {type:"input" , className:"navigation-search" , ref:"searchquery" , onKeyDown:this.enterSearch});
                var searchbut = React.createElement("div" , {className:"navigation-searchbut" ,onClick:this.search} , React.createElement("img" , {src:"./img/search.png"}));
                var clearsearch =  React.createElement("span" , {className:"navigation-searchclear" , onClick:this.clearSearch} , React.createElement("span" , null ,"清除搜尋"));
                var newthemebut = React.createElement("span" , {className:"navigation-action" , onClick:this.newtheme} , React.createElement("span" , null ,"新增主題"));
                var savebut = React.createElement("span" , {className:"navigation-action" , onClick:this.savedata} , React.createElement("span" , null ,"儲存"));
                var container = React.createElement("div" , {className:"navigation"}, logo, search , searchbut , clearsearch , newthemebut , savebut);
                
                return container;
            }
        });
        return navigation;
  },
  containerRender : function(data , savedata){
      
        var main;
         var dropdownitem = React.createClass({
            usefunction:function(){
                this.props.func();
            },
            render:function(){
                var item = React.createElement("div" , {className:"dropdown-item" , onClick:this.usefunction} , this.props.header);  
                return item;
            }
        });
        var dropdown = React.createClass({
             getInitialState: function() {
                return {header:this.props.header
                        ,func :this.props.func};  
            },
            render:function(){

                    var list = new Array();
                    for(var i=0;i<this.state.header.length;i++)            
                    {
                        list.push(React.createElement(dropdownitem , {header:this.state.header[i]
                            ,func:this.state.func[i]}
                        ));
                    }
                    var container = React.createElement("div" , {className:"dropdown-container"} , list);
                    return container;
            }
        });

      var header = React.createClass({
          getInitialState: function() {
                 return {name:this.props.name};
            },
           render:function(){
               var text = React.createElement("div" , null , this.state.name);
               var con = React.createElement("div" , {className: "header"} , text);              
               return con;
           }
       });
       
       var colorblock = React.createClass({
            getInitialState: function() {
                 return {show:true , controlstate:"none"};
            },
            deleteColor:function(){
                 this.props.delcolor(this.props.id);
            },
            modifycolor:function(){
                
               var id = this.props.id;
               var pop = new PopupBox("輸入顏色");
               pop.prompt({contenttext:"顏色:" , inputname:"color" , correcthandler:function(value){
                this.props.changecolor(id , value.color);
             }.bind(this)});
                /*var color = prompt("輸入顏色" , "");  
                this.props.changecolor(this.props.id , color);*/
            },
            setColorHex:function()
            {
               cp1.setColorFromHex(this.props.color); 
            },
            showControl:function(){
                  this.setState({controlstate:"block"});
            },
            hideControl:function(){
                   this.setState({controlstate:"none"});
            },
            render:function(){
                if(this.state.show ==true)
                {
                    var bg_color = this.props.color;
                    var del = React.createElement("div" ,{className:"color-del",onClick:this.deleteColor} 
                    , React.createElement("img" , {src:"./img/del.png"}));
                    var edit = React.createElement("div" , {className:"color-edit" , onClick:this.modifycolor} , React.createElement("img" , {src:"./img/edit.png"}));
                    var space = React.createElement("div" , {className:"color-space"} ,null);
                    var controlblock = React.createElement("div" , {className:"color-control" ,onMouseOver:this.showControl , onMouseOut:this.hideControl, style:{display:this.state.controlstate}}
                        , space , edit , del);
                    var block =  React.createElement("div" ,{className:"color-block",onMouseDown:this.setColorHex,onMouseOver:this.showControl , onMouseOut:this.hideControl, style:{background:bg_color}});  
                    var container = React.createElement("div" , {className:"color-container"}, block, controlblock);
                    return container;
                }
                return null;
           }
       });
       var colors_list = React.createClass({
           getInitialState: function() {
             return {bgcolor:this.props.colors , index:this.props.index};  
           },
           deleteColor:function(i){
               data.deleteColor(this.state.index , i );
               main.updateContain();
           },
           modifyColor:function(i , color)
           {
             data.modifyColor(this.state.index , i ,color)
             main.updateContain();
           },
           render:function(){
               var block;
               var color = new Array();
      
               for(var i=0;i<this.state.bgcolor.length;i++)
               {
                   var c =  React.createElement(colorblock , {id:i , color:this.state.bgcolor[i] , delcolor:this.deleteColor , changecolor:this.modifyColor});
                   color.push(c);
               }
               
               block = React.createElement("div" , {className: "color-list"} , color );
               return block;
           }
       });
       
       var grid = React.createClass({
            getInitialState: function() {
             return {show:true , id:this.props.id , showfunction:false};  
           },
           show:function()
           {
               return this.state.show;
           },
           functionShowChange:function(){
               
               if(this.state.showfunction==false)
                   this.setState({showfunction:true});
               else
                   this.setState({showfunction:false});                  
           },
           modifyHeader:function(){
               
                 var id = this.state.id;
               var pop = new PopupBox("輸入標題");
               pop.prompt({contenttext:"標題:" , inputname:"header" , correcthandler:function(value){
                               data.modifyHeader(id , value.header);
                main.updateContain();
             }})
           },
           newColor:function(){

           var id = this.state.id;
               var pop = new PopupBox("輸入新的顏色");
               pop.prompt({contenttext:"顏色:" , inputname:"color" , correcthandler:function(value){
                data.newColor(id , value.color);
                main.updateContain();
             }})
           },
           deleteTheme:function(){
               this.props.del(this.state.id);
           },
           render : function(){
                var dropheader = new Array("標題" , "新增顏色" , "刪除這個主題");
                var dropfunc = new Array(this.modifyHeader , this.newColor ,this.deleteTheme);
                var spinner;
                if(this.state.showfunction==true)
                    spinner = React.createElement(dropdown,{header:dropheader , func:dropfunc , show:this.state.showfunction});
                else
                    spinner = null;
                var functionbut = React.createElement("div" , {className:"grid-all-function" , onClick:this.functionShowChange}
                                    , React.createElement("img" , {src:"./img/functionlist.png"}) , spinner);            
                var all = React.createElement("div" , {className:"grid-all"} , this.props.header , this.props.color,functionbut);
                var container = React.createElement("div" , {className:"grid"} ,all);
                return container;
            }
        });
       
       var contain = React.createClass({
           getInitialState: function() {
             
             return {maxkey:0};  
           },
           addNewList : function(){
               data.newTheme({headers:"new" , colors:new Array()});
               this.forceUpdate();             
           },
           deleteElement: function(index){

               data.delete(index);
               this.forceUpdate(); 
           },
           search:function(query)
           {
               data.setSearch(query);
               this.forceUpdate();
           },
           clearSearch:function()
           {
               data.clearSearch();
               this.forceUpdate();               
           },
           save:function()
           {
             savedata.save(data.getData());  
           },
           updateContain:function(){
               this.forceUpdate();
           },
           render:function(){

               var newbut = React.createElement("div" , {className:"grid" , style:{display:"block"}}
                            , React.createElement("div" , {className:"newlist-but" , onClick:this.addNewList} , "new"));          
               var row = new Array();
               var renderdata = data.getData();

               for(var i=0;i<renderdata.headers.length;i++)
               {
                   var addheader = React.createElement(header  , {name:renderdata.headers[i]})
                  , addcolor = React.createElement(colors_list , {colors:renderdata.colors[i] , index:i});

                  var a = React.createElement(grid , {key:this.state.maxkey , header:addheader ,color:addcolor, id:i , del:this.deleteElement}); 
                  row.push(a);    
                  this.state.maxkey++;
               }
              
               var all = React.createElement("div" , {onClick:this.refresh} , row );
               
               return all;
           }
       });
       
        main = ReactDOM.render(
        React.createElement(contain),
        document.getElementById('all-row')
    );
    return main;
  }
};