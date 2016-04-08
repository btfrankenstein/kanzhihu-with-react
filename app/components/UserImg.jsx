var React = require('react');
var _anti_hotlink_base = 'http://anti-anti-hotlink-9defc.coding.io/img?q=';

var UserImg = React.createClass({
  getAvatarUri:function(url){
    return _anti_hotlink_base+url.substring(8);
  },
  render: function() {
    return (
      <div className="img"><img src={this.getAvatarUri(this.props.url)} /></div>
      );
  }
});
module.exports = UserImg;