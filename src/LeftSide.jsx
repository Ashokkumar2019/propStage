import React from 'react'
import Nav from 'react-bootstrap/Nav';

export default function LeftSide() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="javascript:void(0)">All Event</Nav.Link>
      <Nav.Link href="javascript:void(0)">HTML</Nav.Link>
      <Nav.Link href="javascript:void(0)">CSS</Nav.Link>
      <Nav.Link href="javascript:void(0)">JS</Nav.Link>
    </Nav>
  )
}
