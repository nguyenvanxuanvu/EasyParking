import React, { useState } from "react";
import { Modal} from "react-bootstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from "./Map.js"

export default function InfoModal(props){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button type="submit" class="btn" style={{color: 'red'}} onClick={handleShow}>
        Xem bản đồ
      </button>
      <Modal size="lg" show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {props.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{overflowY: 'auto', marginRight: '15px'}}>
            <Map address={props.address}></Map>
        </Modal.Body>
      </Modal>
    </div>
  );
}