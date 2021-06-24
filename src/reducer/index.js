// eslint-disable-next-line import/prefer-default-export
export const reducer = (state, action) => {
  switch (action.type) {
    case '':
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  };
};
