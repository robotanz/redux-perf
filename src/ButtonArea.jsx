import styled from 'styled-components'
import { connect } from 'react-redux'

const Area = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  overflow: auto;
`

// This connection will subscribe to items that change at each selection
// to illustrate the fact that squares won't be rendered anyway
const mapStateToProps = state => ({
  items: state.items,
})

const ConnectedArea = connect(mapStateToProps)(Area)

export default ConnectedArea
