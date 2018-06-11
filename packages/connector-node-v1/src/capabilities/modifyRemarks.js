//修改备注
import getMess from '../translations';
import icons from '../icons-svg';
import api from '../api';
import onFailError from '../utils/onFailError';

const label = 'modifyRemarks';


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
  const localeLabel = getMessage(label);

  const rawDialogElement = {
    elementType: 'SetNameDialog',
    elementProps: {
      initialValue: '',
      onHide: hideDialog,
      onSubmit: async (remarks) => {
        const selectedResources = getSelectedResources();
        try {

          hideDialog();
          const result = await api.modifyRemarks(apiOptions, selectedResources[0].id, remarks);
          const resource = getResource();
          return null;

        } catch (err) {
          hideDialog();
          onFailError({
            getNotifications,
            label: localeLabel,
            notificationId: label,
            updateNotifications
          });
          console.log(err);
          return null
        }
      },
      onValidate: async (name) => {
        if (!name) {
          return getMessage('emptyName');
        }
        return null;
      },
      inputLabelText: getMessage('newRemarks'),
      headerText: getMessage('modifyRemarks'),
      submitButtonText: localeLabel,
      cancelButtonText: getMessage('cancel')
    }
  };
  showDialog(rawDialogElement);
}


export default (apiOptions, actions) => {

  const localeLabel = getMess(apiOptions.locale, label);

  const { getSelectedResources } = actions;

  return {
    id: label,
    icon: { svg: icons.modifyRemarks },
    label: localeLabel,
    shouldBeAvailable: (apiOptions) => {
      let selectedResources = getSelectedResources();
      return selectedResources.length === 1 &&!selectedResources.some(r => r.type === 'dir')
    },
    availableInContexts: ['files-view', 'new-button'],
    handler: () => handler(apiOptions, actions)

  }
}