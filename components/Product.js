const React = require('react');

class Product extends React.Component {
  render(){
    return(
      <div>
        <li>{this.props.name}</li>
        <li>{this.props.producer}</li>
        <li>{this.props.hasWatermark.toString()}</li>
        <li>{this.props.color}</li>
        <li>{this.props.weight}</li>

      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']),
  weight: function(props, propName) {
  //   if (props.propName >= 80 && props.propName <= 300) {
  //     return null
  //   } else {
  //     return new Error(
  //       'Weight must be between 80 and 300'
  //     )
  //   }
    const weight = props[propName];
    if (weight === undefined){
      return new Error ('required')
    }
    if (isNaN(weight)){
      return new Error ('number')
    }
    if (!(weight > 80 && weight < 300)) {
      return new Error ('no')
    }
  }
}

module.exports = Product;
