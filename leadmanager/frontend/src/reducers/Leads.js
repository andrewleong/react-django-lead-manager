import { GET_LEADS } from '../actions/types'

const initialState = {
    leads: []
}

export default (state, initialState, action) => {
    switch(action.type) {
        case GET_LEADS:
            const { leads } = action
            return {
                ...state,
                leads
            }
    }
}