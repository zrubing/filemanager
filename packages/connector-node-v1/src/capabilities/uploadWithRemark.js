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
    elementType: 'UploadWithRemarkDialog',
    elementProps: {
      onHide: hideDialog,
      onSubmit: async (data) => {
        await api.uploadFileToIdWithRemark({ apiOptions, parentId: resource.id, file: data.file, remark: data.descriptions })
      }
    }

  }
  showDialog(rawDialogElement);
}
export default (apiOptions, actions) => {
  const localeLabel = getMess(apiOptions.locale, label);
  const { getResource } = actions;

  return {
    id: label,
    icon: { svg: icons.fileUpload },
    label: localeLabel,
    shouldBeAvailable: (apiOptions) => {
      const resource = getResource();
      if (!resource || !resource.capabilities) {
        return false
      }
      return resource.capabilities.canAddChildren
    },
    availableInContexts: ['files-view', 'new-button'],
    handler: () => handler(apiOptions, actions)
  }
}
