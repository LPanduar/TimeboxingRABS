import React from 'react'
import { Container, Row, Col, Nav, Navbar, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
]

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container fluid>
                <Row>
                    <Col md={3} className="bg-light sidebar">
                        <Nav className="flex-column">
                            <Nav.Link href="#overview">Overview</Nav.Link>
                            <Nav.Link href="#reports">Reports</Nav.Link>
                            <Nav.Link href="#analytics">Analytics</Nav.Link>
                            <Nav.Link href="#export">Export</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={9} className="ms-sm-auto px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Dashboard</h1>
                        </div>
                        <Row>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Total Users</Card.Title>
                                        <Card.Text>
                                            <h2>1,234</h2>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Revenue</Card.Title>
                                        <Card.Text>
                                            <h2>$56,789</h2>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Orders</Card.Title>
                                        <Card.Text>
                                            <h2>890</h2>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-4">
                            <Col md={12}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>Monthly Overview</Card.Title>
                                        <BarChart width={600} height={300} data={data}>
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <Bar dataKey="pv" fill="#8884d8" />
                                            <Bar dataKey="uv" fill="#82ca9d" />
                                        </BarChart>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}