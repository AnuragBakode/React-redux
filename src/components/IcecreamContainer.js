import React from 'react'
import {connect} from 'react-redux'
import { buyIcecream } from '../redux/icecream/icecreamActions'

const IcecreamContainer = (props) => {
  return (
    <div>
        <h1>Number of Icecreams - {props.numOfIceCreams}</h1>
        <button onClick = {props.buyIcecream}>Buy Icecream</button>
    </div>
  )
}

const mapStateToProps  = state => {
    return {
        numOfIceCreams : state.icecream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIcecream : () => dispatch(buyIcecream())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(IcecreamContainer)


