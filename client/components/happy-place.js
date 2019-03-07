import React, {Component} from 'react'
import {connect} from 'react-redux'

class HappyPlace extends Component {
  render() {
    const {background} = this.props
    return (
      <div>
        <img className="relaxing-background" src={background.imageUrl} />
      </div>
    )
  }
}

const mapState = state => ({
  background: state.background
})

export default connect(mapState)(HappyPlace)
