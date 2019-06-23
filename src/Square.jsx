import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { startTime, logElapsed } from './Timeter'

const Square = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border: 1px solid #112233;
  :hover {
    background-color: #223344;
  }
`

class PureSquare extends React.PureComponent {
  render() { 
    return ( <Square { ...this.props } /> );
  }

  componentDidUpdate() {
    logElapsed()
  }
}
 
const selector = (state, item) => {
  const i = state.items[item]
  return i && i.selected ? '#112233' : "#111111"
}

const mapStateToProps = (state, ownProps) => ({
  color: selector(state, ownProps.item),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    startTime()
    dispatch({ type: 'SELECT', item: ownProps.item })
  },
})

const ConnectedSquare = connect(mapStateToProps, mapDispatchToProps)(PureSquare)
export default ConnectedSquare
