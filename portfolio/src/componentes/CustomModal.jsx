

import React, { Component, Fragment } from 'react';
import Modal from 'react-responsive-modal';

class CustomModal extends Component {
    
    constructor(props) {
        super(props);
    }

    
    render() {

        return (
            <Fragment>
                <Modal open={this.props.show} onClose={this.props.close} center>
                    <div className="modal-text">
                        <h2>{this.props.content.projeto}</h2>
                        {this.props.content.descricao}
                        
                    </div>
                </Modal>
            </Fragment>
        );
    }
}

export default CustomModal;
