const initialState = {
  meteo: {
    content: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_METEO":
      return {
        ...state,
        meteo: {
          ...state.meteo,
          content: [action.payload]
        }
      };
    default:
      return state;
  }
};

export default mainReducer;
