import namespace from "./namespace";

function api({params}) {
    return "this is " + params;
}
export default {
    
    namespace: namespace,

    state: {
        text: "Hello World",
    },

    reducers: {
        changeText:  (state, action) => ({...state, text: action.payload.newText})
    },

    effects: {
        *changeDelay({payload}, {put, call}){
            const res = yield call(api, { params: "params" })
            yield put({type: "changeText", payload: { newText: res }})
        }
    },

    subscriptions: {
        
    }

}