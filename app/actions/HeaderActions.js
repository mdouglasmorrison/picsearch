import alt from '../alt';
import {assign} from 'underscore';

class HeaderActions {
    constructor() {
        this.generateActions(
            'updateAjaxAnimation',
            'updateSearchQuery',
            'findPersonSuccess',
            'findPersonFail'
        );
    }

    findPerson(payload) {
        console.log(payload);
        $.ajax({
            url: '/api/search?email=' + payload.query
        })
        .done((data) => {
            assign(payload, data);
            this.actions.findPersonSuccess(payload);
        })
        .fail(() => {
                console.log('failure');
            this.actions.findPersonFail(payload);
        });
    }
}

export default alt.createActions(HeaderActions);