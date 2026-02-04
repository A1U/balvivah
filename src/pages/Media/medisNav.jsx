import React from 'react'
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdInsertPhoto } from "react-icons/md";
import { FaVideoSlash } from "react-icons/fa";
import { FaBullhorn } from "react-icons/fa6";
import { MdOutlineEventSeat } from "react-icons/md";
import { FaOldRepublic } from "react-icons/fa";



const MedisNav = () => {
  return (
    <>
      

<Nav variant="pills" className="justify-content-center media-gallery-nav">
  <Nav.Item>
    <Nav.Link
      as={NavLink}
      to="/photos"
      className="d-flex align-items-center"
    >
      <MdInsertPhoto className="me-2" />
      Photos
    </Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link
      as={NavLink}
      to="/videos"
      className="d-flex align-items-center"
    >
      <FaVideoSlash className="me-2" />
      Videos
    </Nav.Link>
  </Nav.Item>


  <Nav.Item>
    <Nav.Link
      as={NavLink}
      to="/campings"
      className="d-flex align-items-center"
    >
      <FaBullhorn className="me-2" />
      Campinng
    </Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link
      as={NavLink}
      to="/events"
      className="d-flex align-items-center"
    >
      <MdOutlineEventSeat className="me-2" />
     Events
    </Nav.Link>
  </Nav.Item>

  <Nav.Item>
    <Nav.Link
      as={NavLink}
      to="/publication"
      className="d-flex align-items-center"
    >
      <FaOldRepublic className="me-2" />
      PubliCations
    </Nav.Link>
  </Nav.Item>
</Nav>


    </>
  )
}

export default MedisNav;
