import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';
import { Form, Label, Input } from 'reactstrap';

import { PopupContent } from './openfin/popup';

export const OrderTicketModal = (props) => {
  const {
    selectedOrder,
    setSelectedOrder
  } = props;

  function closeModal() {
    setSelectedOrder(null);
  }

  return (
    <Modal isOpen={selectedOrder !== null} toggle={closeModal}>
      <PopupContent>
        <ModalHeader>Order Ticket: {selectedOrder?.ticker}</ModalHeader>
        <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input type="number" name="price" value={selectedOrder?.price}/>
                </FormGroup>
                <FormGroup>
                    <Label for="price">Quantity</Label>
                    <Input type="number" name="price" value={selectedOrder?.quantity}/>
                </FormGroup>
            </Form>
        </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={closeModal}>Place Order</Button>
            <Button color="danger" onClick={closeModal}>Cancel</Button>
        </ModalFooter>
      </PopupContent>
    </Modal>
  );
}