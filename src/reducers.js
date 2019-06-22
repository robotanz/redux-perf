const initialState = {}

export const items = (state = initialState, action) => {
  if (action.type === 'SELECT') {
    const items = { ...state }
    if (!items[action.item]) {
      items[action.item] = {}
    }
    items[action.item].selected = true
    return items
  }

  return state
}