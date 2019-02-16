import { handleActions } from 'redux-actions';
import { ActionTypes } from 'constants/index';

export const appState = {
    alerts: [],
};

const hideAlert = (state, { payload: { id }}) => ({
    ...state,
    alerts: state.alerts.filter(d => d.id !== id),
});

const showAlert = (state, { payload }) => ({
    ...state,
    alerts: [...state.alerts, payload],
});

export default {
    app: handleActions(
        {
            [ActionTypes.HIDE_ALERT]: hideAlert,
            [ActionTypes.SHOW_ALERT]: showAlert,
            [ActionTypes.SHOW_ALERT_LOL]: showAlert,
        },
        appState
    )
};

