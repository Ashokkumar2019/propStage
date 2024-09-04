import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import data from './Data.json';


const LeftSide = ({ onFilterChange }) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'html', label: 'HTML' },
    { id: 'css', label: 'CSS' },
    { id: 'js', label: 'JS' },
    
  ];

  return (
    <div>
      {filters.map(filter => (
        <button
          key={filter.id}
          className="btn btn-outline-primary w-100 mb-2"
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default function Midp() {
  const [selectedFilter, setSelectedFilter] = useState('all');

 
  const filteredData = selectedFilter === 'all'
    ? data
    : data.filter(item => item.type === selectedFilter);

  return (
    <Container>
      <Row>
        <Col xxl={3} xl={3} lg={3} md={4} sm={12}>
          <LeftSide onFilterChange={setSelectedFilter} />
        </Col>
        <Col xxl={9} xl={9} lg={9} md={8} sm={12} className="bg-white px-3">
          <Row className="g-3">
            {filteredData.map(e => (
              <Col md={4} key={e.id}>
                <Card>
                  <Card.Img variant="top" src={e.image} />
                  <Card.Body>
                  
                    <Card.Title>{e.title}-{e.type}</Card.Title>
                    <Card.Text>{e.paragraph}</Card.Text>
                    <a href={e.link} className="btn btn-primary">
                      Learn More
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
