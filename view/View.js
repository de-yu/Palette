/* global Refresh, indexrender */
'use babel';

class View
{
  constructor()
  {
      this.writedata = new WriteData();
  }
  firstRun()
  {
    
  }
  index(themedata)
  {/*
    var nav = indexrender.navigationRender();
    var main = indexrender.containerRender(data , this.writedata);
    
    ReactDOM.render(
         React.createElement(nav , {newtheme:main.addNewList  , search:main.search , savedata:main.save , clearSearch:main.clearSearch}),
        document.getElementById('navigation')
    );*/
    var Nav = require("./component/Navigation");
    var Container = require("./component/Container");
    
    var main = ReactDOM.render(
            <Container  />,
        document.getElementById('all-row')
    )
    /*ReactDOM.render(
            <Nav  newtheme={main.addNewList}  search={main.search}  savedata={main.save} clearSearch={main.clearSearch} />,
        document.getElementById('navigation')
    )*/

  }
}

module.exports = View;