import {Col, Container, FormControl, InputGroup, Row,} from 'react-bootstrap';
import SelectionMenuSidebar from "../../components/selection-menu-sidebar";
import './selection-menu.scss';
import SelectionMenuItems from "../../components/selection-menu-items";
import React, {useEffect, useState} from "react";
import Spinner from "../../components/spinner";
import GroupService from "../../api/services/group-service";
import UserService from "../../api/services/user-service";
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom'
import AddItemButton from "../../components/add-item-button";


const SelectionMenu = () => {
  const [mode, setMode] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {institution, loggedIn} = useSelector(state => state.userReducer);

  const toggleHandler = (mode) => {
    console.log('switch')
    setMode(mode);
  }
  console.log(loading);
  useEffect(() => {
    const groupService = new GroupService();
    const userService = new UserService();

    if (mode === 1 && loggedIn) {
      setLoading(true);
      userService.getEducatorsByInstitutionID(institution.id)
        .then(data => {
          setLoading(false);
          setItems(data);
        })
        .catch(e => {
          setLoading(false);
          setError(e);
        });
    } else if (mode === 2 && loggedIn) {
      setLoading(true);
      userService.getStudentsByInstitutionID(institution.id)
        .then(data => {
          setLoading(false);
          setItems(data);
        })
        .catch(e => {
          setLoading(false);
          setError(e);
        });
    } else if (mode === 3 && loggedIn) {
      setLoading(true);
      groupService.getGroupsByInstitutionID(institution.id)
        .then(data => {
          setLoading(false);
          setItems(data);
        })
        .catch(e => {
          setLoading(false);
          setError(e);
        });
    }
  }, [mode]);

  if (!loggedIn) {
    return (<Redirect to={`/`}/>)
  }

  return (
    <section className='selection-menu mt-3'>
      <Container fluid>
        <Row>
          <Col sm={6}>
            <SelectionMenuSidebar toggleHandler={toggleHandler}/>
          </Col>
          <Col sm={6}>
            <InputGroup className='mb-3'>
              <FormControl placeholder='Search...'/>
            </InputGroup>
            {loading ? <Spinner/> : <SelectionMenuItems items={items} mode={mode}/>}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SelectionMenu;