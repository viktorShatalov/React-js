const ADD_MESSEGE = 'ADD-MESSEGE';

let initialState = {
    dialogs: [
        // { id: 1, name: 'Name' } для теста разкоментировать

    ],
    messeges: [
        // { id: 1, messege: 'Hi' } для теста разкоментировать
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSEGE':
            let body = action.newMessegeBody;
            return {
                ...state,
                messeges: [...state.messeges, { id: 2, messege: body }]
            };
        default:
            return state;
    }

}
export const sendMessege = (newMessegeBody) => ({ type: ADD_MESSEGE, newMessegeBody })

export default dialogsReducer;