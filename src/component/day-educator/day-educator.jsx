import React from "react";
import { Table } from "react-bootstrap";

import "./day-educator-style.scss";

const TableElement = ({
  index,
  subject = "",
  task = "",
  assessments = "",
  time = "",
  showModal,
}) => (
  <tr onClick={showModal}>
    <td>{index}</td>
    <td>{time}</td>
    <td>{subject}</td>
    <td>{task}</td>
    <td>{assessments}</td>
  </tr>
);

const DayEducator = ({ name = "Monday", showModal }) => {
  return (
    <div className="table-day">
      <h3>{name}</h3>
      <Table striped hover size="sm">
        <thead>
          <tr>
            <th width={30}>#</th>
            <th width={100}>Time</th>
            <th width={125}>Subject</th>
            <th>Task</th>
            <th width={100}>Grades</th>
          </tr>
        </thead>
        <tbody>
          <TableElement index={1} subject="react" showModal={showModal} />
          <TableElement index={2} subject="" />
          <TableElement index={3} subject="" />
          <TableElement index={4} subject="react" showModal={showModal} />
          <TableElement index={5} subject="react" showModal={showModal} />
          <TableElement index={6} subject="react" showModal={showModal} />
          <TableElement index={7} subject="react" showModal={showModal} />
          <TableElement index={8} subject="react" showModal={showModal} />
        </tbody>
      </Table>
    </div>
  );
};

export default DayEducator;
