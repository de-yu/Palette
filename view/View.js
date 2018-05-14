/* global Refresh, indexrender */

function View()
{
    this.writedata = new WriteData();
}
View.prototype.firstRun = function(){
    
};
View.prototype.index = function(themedata)
{
    var data = new DataManger(themedata);
    var nav = indexrender.navigationRender();
    var main = indexrender.containerRender(data , this.writedata);
    
    ReactDOM.render(
         React.createElement(nav , {newtheme:main.addNewList  , search:main.search , savedata:main.save , clearSearch:main.clearSearch}),
        document.getElementById('navigation')
    );

};
