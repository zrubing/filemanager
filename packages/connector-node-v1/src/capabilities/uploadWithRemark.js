import api from '../api';
import onFailError from '../utils/onFailError';
import icons from '../icons-svg';
import getMess from '../translations';

const label = 'upload';

function handler(apiOptions, actions) {
    const {
        showDialog,
        hideDialog,
        navigateToDir,
        updateNotifications,
        getSelectedResources,
        getResource,
        getNotifications
    } = actions;

    const getMessage = getMess.bind(null, apiOptions.locale);
    const localeLabel = getMessage(label)

    const rawDialogElement = {

    }
}
