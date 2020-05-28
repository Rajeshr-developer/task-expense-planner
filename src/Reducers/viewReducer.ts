import { Action } from "redux";

const initialState = {
    renderPrompt: false,
    promptType:""
};

interface CustomAction extends Action {
    payload?: any
}

const viewReducer = (state = initialState, action: CustomAction) => {
    console.log('action = ',action.type);
    switch (action.type) {
        case 'RENDER_PROMPT':
            return {
                ...state,
                renderPrompt: action.payload,
                promptType:'income'
            };
        case 'ADD_INCOME':
            return {
                ...state,
                renderPrompt: false
            };
        case 'RENDER_PROMPT_SPENDING':
            return {
                ...state,
                renderPrompt: action.payload,
                promptType:'spending'
            };
        default:
            return state;
    }
};

export default viewReducer;
