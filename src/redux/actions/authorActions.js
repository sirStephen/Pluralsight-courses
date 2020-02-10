import * as types from './actionTypes';
import * as authorApi from '../../api/authorApi';
import { beginApiCall, apiCAllError } from './apiStatusActions';

export function loadAuthorSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return function (dispatch) {
        dispatch(beginApiCall())
        return authorApi.getAuthors().then(authors => {
            dispatch(loadAuthorSuccess(authors));
        }).catch(error => {
            dispatch(apiCAllError(error));
            throw error;
        })
    }
}