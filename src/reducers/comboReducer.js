import {
  SET_COMBOS,
  SET_COMBO,
  REMOVE_COMBO,
  REMOVE_COMBOS,
  UNSET_COMBOS,
} from "../actions";

const initialState = {
  combos: [],
  combo: [],
  basicCombos: [
    ["Jab", "Cross"],
    ["Jab", "Jab", "Cross"],
    ["Jab", "Cross", "Left Hook"],
    ["Jab", "Cross", "Left Hook", "Cross"],
    ["Jab", "Cross", "Left Uppercut", "Cross"],
    ["Jab", "Right Uppercut", "Left Hook", "Cross"],
    ["Cross", "Left Uppercut", "Cross"],
  ],
  isSet: false,
};

function comboReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COMBO:
      return {
        ...state,
        combo: [...state.combo, action.singleAction],
      };
    case REMOVE_COMBO:
      return {
        ...state,
        combo: [],
      };
    case SET_COMBOS:
      return {
        ...state,
        combos: [...state.combos, action.combo],
        isSet: true,
      };
    case UNSET_COMBOS:
      return {
        ...state,
        isSet: false,
      };
    case REMOVE_COMBOS:
      return {
        ...state,
        combos: [],
        isSet: false,
      };
    default:
      return state;
  }
}

export default comboReducer;
