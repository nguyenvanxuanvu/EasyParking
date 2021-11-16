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
      <Modal show={show} onHide={handleClose} fullscreen>
        <Modal.Header closeButton>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Map address={props.address}></Map>
        </Modal.Body>
      </Modal>
    </div>
  );
}