export function manageFriends(state, action){
	if (action.type === 'ADD_FRIEND') {
		return Object.assign({}, state, {friends: [...state.friends, action.payload]} )
	} else if (action.type === 'REMOVE_FRIEND') {
		let answer = []
		for (let i = 0; i < state.friends.length; i++) {
			if (state.friends[i].id !== action.payload) {answer.push(state.friends[i])}
		}
		return Object.assign({}, state, {friends: answer} )
	}
	else {return state}

}
