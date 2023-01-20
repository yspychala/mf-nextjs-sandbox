export default function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        count: state.count + 1,
      });
    default:
      return state;
  }
}
