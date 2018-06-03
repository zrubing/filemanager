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


  const prevResourceId = getResource().id;
  const resource = getResource();

  const rawDialogElement = {
    elementType: 'UploadWithRemarkDialog',
    elementProps: {
      onHide: hideDialog,
      onSubmit: async (data) => {
        const response = await
          api.uploadFileToIdWithRemark({ apiOptions, parentId: resource.id, file: data.file, remark: data.description });
        const newResource = normalizeResource(response.body[0]);

        if (prevResourceId === resource.id) {
          navigateToDir(resource.id, newResource.id, false);
        }
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
