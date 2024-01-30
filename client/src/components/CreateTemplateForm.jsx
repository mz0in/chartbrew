import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spacer,
} from "@nextui-org/react";

import {
  createTemplate as createTemplateAction,
} from "../actions/template";
import Text from "./Text";

function CreateTemplateForm(props) {
  const {
    teamId, projectId, visible, onClose, createTemplate,
  } = props;

  const [templateName, setTemplateName] = useState("");
  const [loading, setLoading] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const _onSaveTemplate = () => {
    if (!templateName) {
      setValidationError(true);
      return false;
    }

    setValidationError(false);
    setLoading(true);

    return createTemplate(teamId, projectId, templateName)
      .then(() => {
        setLoading(false);
        onClose(true);
        return true;
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Modal isOpen={visible} onClose={() => onClose()} size="small">
        <ModalContent>
          <ModalHeader>
            <Text size="h3">Create a template</Text>
          </ModalHeader>
          <ModalBody>
            <Spacer y={1} />
            <form onSubmit={(e) => {
              e.preventDefault();
              _onSaveTemplate();
            }}>
              <Input
                label="Template name"
                placeholder="Enter a name for the template"
                value={templateName}
                onChange={(e) => setTemplateName(e.target.value)}
                color={validationError ? "error" : "default"}
                variant="bordered"
                fullWidth
                autoFocus
              />
            </form>
            <Spacer y={1} />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="flat"
              color="warning"
              onClick={() => onClose()}
              auto
            >
              Close
            </Button>
            <Button
              onClick={_onSaveTemplate}
              color="primary"
              isLoading={loading}
            >
              Save template
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>  
    </>
  );
}

CreateTemplateForm.propTypes = {
  teamId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  projectId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  visible: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  createTemplate: PropTypes.func.isRequired,
};

CreateTemplateForm.defaultProps = {
  visible: false,
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => {
  return {
    createTemplate: (teamId, projectId, name) => (
      dispatch(createTemplateAction(teamId, projectId, name))
    ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTemplateForm);
