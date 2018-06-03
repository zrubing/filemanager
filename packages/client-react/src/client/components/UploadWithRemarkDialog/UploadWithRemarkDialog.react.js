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
  constructor(props){
    super(props);
    this.state={
      file:null,
      description:''
    }
  }

  handleSubmitButtonClick = async (e) => {
    if(this.state.file){

    }else{
      alert('请选择文件!')
    }
  }
  onChange=(e)=>{
    this.setState({
      file:e.target.files[0]
    })
  }

  onTextChange=(e)=>{
    this.setState({
      description:e.target.value
    })
  }
  render() {
    let { onHide, headerText, inputLabelText, messageText, submitButtonText, cancelButtonText } = this.props;
    return (
      <Dialog onHide={onHide}>
        <div>
          <div className="oc-fm--dialog__header">
            {headerText}
          </div>
          <input className="oc-fm--dialog__input-file" name="myFile" type="file" onChange={this.onChange} />
          <input ref={ref => { ref && ref.focus() }}
            className="
              oc-fm--dialog__input
              oc-fm--dialog__input--margin-bottom
            "
            onChange={this.onTextChange}
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