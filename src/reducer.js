export const initialState = {
	term: null,
};

export const typeActions = {
	SET_SEARCH_TERM: 'SET_SEARCH_TERM',
};

const reducer = (state, action) => {
	console.log(action);

	switch (action.type) {
		case typeActions.SET_SEARCH_TERM:
			return {...state, term: action.term};

		default:
			state;
	}
};

export default reducer;
