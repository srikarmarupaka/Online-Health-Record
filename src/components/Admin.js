import React,{useState} from 'react'
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap'
import AdminDetails from './AdminDetails'
import PatientDetails from './PatientDetails'
import HospitalDetails from './HospitalDetails'
import CollegeDetails from './CollegeDetails'
import DoctorDetails from './DoctorDetails'

export default function Admin() {
  let [type, setType] = useState('admin-dashboard');
    return (
        <div>
            <div className="h2">Admin Portal</div>
            <Container>
              <Row>
                <Col>
                  <ButtonGroup vertical>
                    <Button variant="primary" type="submit" onClick={() => setType('admin-details')}>
                      Add Admin
                    </Button>
                    <Button variant="warning" type="submit"  onClick={()=>setType('patient-details')}>
                      Add Patient
                    </Button>
                    <Button variant="success" type="submit"  onClick={()=>setType('hospital-details')}>
                      Add Hospital
                    </Button>
                    <Button variant="danger" type="submit" onClick={()=>setType('college-details')}>
                      Add College
                    </Button>
                    <Button variant="light" type="submit" onClick={()=>setType('doctor-details')}>
                      Add Doctor
                    </Button>
                    <Button variant="info" type="submit" onClick={()=>setType('admin-details')}>
                    Update personal details 
                    </Button>
                    <Button variant="secondary" type="submit" onClick={()=>setType('admin-details')}>
                    Logout 
                    </Button>
                </ButtonGroup>
            </Col>
            <Col>
                {type === 'admin-details' && <AdminDetails />}
                {type === 'patient-details' && <PatientDetails />}
                {type === 'hospital-details' && <HospitalDetails />}
                {type === 'college-details' && <CollegeDetails />}
                {type === 'doctor-details' && <DoctorDetails />}
            </Col>
            </Row>
          </Container>
        </div>
    )
}
