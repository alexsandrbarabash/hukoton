import React from "react";
import { Table } from "react-bootstrap";

const TableElement = ({ subject = "", educator = "", showModal, index }) => (
  <tr onClick={showModal}>
    <td width={30}>{index}</td>
    <td>{subject}</td>
    <td>{educator}</td>
  </tr>
);

const DayCreator = ({ name = "Monday", showModal }) => {
  return (
    <div className="tab-container">
      <h3>{name}</h3>
      <Table>
        <thead>
          <tr>
            <th width={30}>#</th>
            <th>Subject</th>
            <th>Educator</th>
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

export default DayCreator;
