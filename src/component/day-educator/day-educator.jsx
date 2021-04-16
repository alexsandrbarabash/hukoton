import React from "react";
import { Table } from "react-bootstrap";

const TableElement = ({
  subject = "sfd",
  task = "sdfsd",
  group = "A1",
  showModal,
  index,
}) => (
  <tr onClick={showModal}>
    <td width={30}>{index}</td>
    <td>{group}</td>
    <td>{subject}</td>
    <td>{task}</td>
  </tr>
);

const DayEducator = ({ name = "Monday", showModal }) => {
  return (
    <div className="tab-container">
      <h3>{name}</h3>
      <Table>
        <thead>
          <tr>
            <th width={30}>#</th>
            <th>Group</th>
            <th>Subject</th>
            <th width={0}>Task</th>
          </tr>
        </thead>
      </Table>
      <div className="table-day">
        <Table striped hover size="sm">
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
    </div>
  );
};

export default DayEducator;
