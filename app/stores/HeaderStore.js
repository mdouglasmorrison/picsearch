import alt from '../alt';
import HeaderActions from '../actions/HeaderActions';

class HeaderStore {
    constructor() {
        this.bindActions(HeaderActions);
        this.totalCharacters = 0;
        this.onlineUsers = 0;
        this.searchQuery = '';
        this.ajaxAnimationClass = '';
    }

    onFindPersonSuccess(payload) {
        //payload.history.pushState(null, '/characters/' + payload.characterId);
    }

    onFindPersonFail(payload) {
        //payload.searchForm.classList.add('shake');
        //setTimeout(() => {
        //    payload.searchForm.classList.remove('shake');
        //}, 1000);
    }


    onUpdateAjaxAnimation(className) {
        this.ajaxAnimationClass = className; //fadein or fadeout
    }

    onUpdateSearchQuery(event) {
        this.searchQuery = event.target.value;
    }

}

export default alt.createStore(HeaderStore);