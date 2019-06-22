import styled from 'styled-components'
import { connect } from 'react-redux'

const Square = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${props => props.color};
  border: 1px;
  :hover {
    background-color: darkgray;
  }
`

const selector = (state, item) => {
  const i = state.items[item]
  return i && i.selected ? '#112233' : "#111111"
}

const mapStateToProps = (state, ownProps) => ({
  color: selector(state, ownProps.item),
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch({ type: 'SELECT', item: ownProps.item }),
})

const ConnectedSquare = connect(mapStateToProps, mapDispatchToProps)(Square)
export default ConnectedSquare
