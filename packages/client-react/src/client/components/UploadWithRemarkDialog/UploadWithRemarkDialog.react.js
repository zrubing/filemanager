import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Dialog from '../Dialog';

const propTypes = {
  cancelButtonText: PropTypes.string,
  headerText: PropTypes.string,
  messageText: PropTypes.string,
  inputLabelText: PropTypes.string,
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
  onHide: PropTypes.func,
  onSubmit: PropTypes.func,
  onValidate: PropTypes.func,
  submitButtonText: PropTypes.string
};

const defaultProps = {
  cancelButtonText: 'Cancel',
  headerText: 'Upload',
  messageText: '',
  inputLabelText: '',
  initialValue: '',
  onChange: () => { },
  onHide: () => { },
  onSubmit: () => { },
  onValidate: () => { },
  submitButtonText: 'Upload'
};

export default class UploadWithRemarkDialog extends Component {

  render() {
    let { onHide, headerText, inputLabelText, messageText, submitButtonText, cancelButtonText } = this.props;
    return (
      <Dialog onHide={onHide}>
        <div className="oc-fm--dialog__content" onKeyDown={this.handleKeyDown}>
          <div className="oc-fm--dialog__header">
            {headerText}
          </div>
          {inputLabelText && (
            <div className="oc-fm--dialog__input-label">{inputLabelText}</div>
          )}
          <input type="file" />
          <input ref={ref => { ref && ref.focus() }}
            spellCheck={false}
            className="
              oc-fm--dialog__input
              oc-fm--dialog__input--margin-bottom
            "
            value={value}
          />
          <div className="oc-fm--dialog__horizontal-group oc-fm--dialog__horizontal-group--to-right">
            <button type="button" className="oc-fm--dialog__button oc-fm--dialog__button--default" onClick={onHide}>
              {cancelButtonText}
            </button>
            <button
              type="button"
              className={`oc-fm--dialog__button oc-fm--dialog__button--primary`}
              onClick={this.handleSubmitButtonClick}
            >
              {submitButtonText}
            </button>
          </div>
        </div>
      </Dialog>
    )

  }


}

UploadWithRemarkDialog.propTypes = propTypes;
UploadWithRemarkDialog.defaultProps = defaultProps;