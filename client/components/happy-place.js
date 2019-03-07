import React, {Component} from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types'

class HappyPlace extends Component {
  // componentDidMount(){
  //     const {getBackground, background} = this.props
  //     getBackground(background.name)
  // }
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
// const mapDispatch = (dispatch) => ({
//     getBackground: () => dispatch(fetchBackground())
// })

export default connect(mapState)(HappyPlace)
