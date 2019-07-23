const UPDATE_NEW_MESSEGE_BODY = "UPDATE-NEW-MESSEGE-BODY";
const ADD_MESSEGE = 'ADD-MESSEGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'my name' }
       
    ],
    messeges: [
        { id: 1, messege: 'Hi' }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSEGE-BODY':
            return {
                ...state,
                newMessegeBody: action.newMessege
            };
        case 'ADD-MESSEGE':
            let newMessege = state.newMessegeBody;
            return {
                ...state,
                newMessegeBody : '',
                messeges: [...state.messeges, {id:2,messege:newMessege}]
            };
        default:
            return state;
    }

}
export const sendMessege = () => ({ type: ADD_MESSEGE })
export const UpdateNewMessegeCreator = (body) => ({ type: UPDATE_NEW_MESSEGE_BODY, newMessege: body })
export default dialogsReducer;