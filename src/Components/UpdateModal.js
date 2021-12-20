import { useState } from 'react';
import { Modal, Form } from 'react-bootstrap';
import petStore from '../petStore';
function UpdateModal(props) {
  const [show, setShow] = useState(false);
  const [pet, setPet] = useState({
    id: props.pet.id,
    name: props.pet.name,
    type: props.pet.type,
    image: props.pet.image,
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    petStore.updatePet(pet);
    handleClose();
  };
  return (
    <>
      <button type="button" class="btn btn-info" onClick={handleShow}>
        Update
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Pet name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                value={pet.name}
                placeholder="Pet name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pet type</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="type"
                value={pet.type}
                type="text"
                placeholder="Pet type"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Pet image</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="image"
                value={pet.image}
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
            Update
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModal;
