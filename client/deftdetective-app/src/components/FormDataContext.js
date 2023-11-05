import { createContext, useContext, useReducer } from 'react';

const initialFormData = {
    whatData: {
        itemName: '',
        description: '',
        picture: null
    },
    whenData: {
        date1: '',
        date2: '',
        timeOption: '',
    },
    whereData: {
        places: []
    }
};

const FormDataContext = createContext();

const formDataReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_WHAT':
            return {
                ...state,
                whatData: { ...state.whatData, ...action.payload },
            };
        case 'UPDATE_WHEN':
            return {
                ...state,
                whenData: { ...state.whenData, ...action.payload },
            };
        case 'UPDATE_WHERE':
            return {
                ...state,
                whereData: { places: action.payload.places },
            };
        default:
            return state;
    }
};

export function FormDataProvider({ children }) {
    const [formData, dispatch] = useReducer(formDataReducer, initialFormData);

    return (
        <FormDataContext.Provider value={{ formData, dispatch }}>
            {children}
        </FormDataContext.Provider>
    );
};

export function useFormData() {
    return useContext(FormDataContext);
};
