const initialState = {}

export const items = (state = initialState, action) => {
  if (action.type === 'SELECT') {
    const items = { ...state }
    if (!items[action.item]) {
      items[action.item] = { selected: true }
    } else {
      items[action.item].selected = !items[action.item].selected
    }
    return items
  }

  return state
}