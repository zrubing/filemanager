import createFolder from './create-folder';
import deleteResource from './delete-resource';
import download from './download';
import upload from './upload';
import rename from './rename';
import sort from './sort';
import uploadWithRemark from './uploadWithRemark';
import modifyRemarks from './modifyRemarks';

const capabilities = [
  createFolder,
  rename,
  download,
  // upload,
  uploadWithRemark,
  deleteResource,
  modifyRemarks,
  sort
];

/**
 * Actions' fields list:
 *  showDialog,
 *  hideDialog,
 *  navigateToDir,
 *  updateNotifications,
 *  getSelection,
 *  getSelectedResources,
 *  getResource,
 *  getResourceChildren,
 *  getResourceLocation,
 *  getNotifications,
 *  getSortState
 *
 *  Called from FileNavigator (componentDidMount() and componentWillReceiveProps())
 *
 * @param apiOptions
 * @param {object} actions
 * @returns {array}
 */
export default (apiOptions, actions) => (
  capabilities.map(capability => capability(apiOptions, actions))
);
