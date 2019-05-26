// Action Types

export const Types = {
  OPEN: 'drawer/OPEN',
  CLOSE: 'drawer/CLOSE'
}

// IntialState

const INITIAL_STATE = {
  isActive: false
}

// Reducer

export default function drawer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return { ...state, isActive: true }
    case Types.CLOSE:
      return { ...state, isActive: false }
    default:
      return state
  }
}

export const Creators = {
  openDrawer: () => ({
    type: Types.OPEN
  }),

  closeDrawer: () => ({ type: Types.CLOSE })
}
