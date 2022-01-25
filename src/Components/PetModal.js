import { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import petStore from '../petStore';
const PetModal = ({ pet }) => {
  const [show, setShow] = useState(false);
  const [petForm, setPetForm] = useState({ ...pet });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setPetForm({ ...petForm, [e.target.name]: e.target.value });
  };
  const modalButton = pet ? 'Update' : 'Add';
  const handleSubmit = (e) => {
    e.preventDefault();
    pet ? petStore.updatePet(petForm) : petStore.addPet(petForm);
    handleClose();
  };
  return (
    <>
      <button type="button" class="btn btn-info" onClick={handleShow}>
        {modalButton} a pet
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalButton} a pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Pet name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                value={petForm.name}
                type="text"
                placeholder="Pet name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pet type</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="type"
                value={petForm.type}
                type="text"
                placeholder="Pet type"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pet image</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="image"
                value={petForm.image}
                type="text"
                placeholder="Pet image url"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn btn-info" onClick={handleClose}>
            Close
          </button>
          <button type="button" class="btn btn-info" onClick={handleSubmit}>
            {modalButton}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PetModal;
