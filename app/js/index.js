require(["react"],function(e){var t,n,r,i,s;return r=e.createClass({render:function(){return this.props.className?e.createElement("div",{className:this.props.className},this.props.displayName):e.createElement("div",null,this.props.displayName)}}),n=e.createClass({render:function(){return e.createElement("ul",{className:"page clear"},e.createElement(r,{displayName:"内容1",className:"active"}),e.createElement(r,{displayName:"内容2"}),e.createElement(r,{displayName:"内容3"}))}}),s=e.createClass({getInitialState:function(){return{active:!1}},handleClick:function(){return this.props.click(this)},render:function(){return this.props.className||this.state.active?e.createElement("li",{className:this.props.className||"active",onClick:this.handleClick},this.props.displayName):e.createElement("li",{onClick:this.handleClick},this.props.displayName)}}),i=e.createClass({handleClick:function(e){return console.log(this),e.setState({active:!0})},render:function(){return e.createElement("ul",{className:"nav-tab clear"},e.createElement(s,{displayName:"技术",className:"active",click:this.handleClick}),e.createElement(s,{displayName:"运营",click:this.handleClick}),e.createElement(s,{displayName:"3",click:this.handleClick}))}}),t=e.createClass({render:function(){return e.createElement("div",{className:"index-page"},e.createElement(i,null),e.createElement(n,null))}}),e.render(e.createElement(t,null),document.body)});