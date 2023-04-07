const initialState = {
  meteo: {
    content: null
  },
  settimana: {
    content: null
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_METEO":
      return {
        ...state,
        meteo: {
          ...state.meteo,
          content: action.payload
        }
      };
    case "METEO_SETTIMANA":
      return {
        ...state,
        settimana: {
          ...state.settimana,
          content: action.payload
        }
      };
    default:
      return state;
  }
};

export default mainReducer;
