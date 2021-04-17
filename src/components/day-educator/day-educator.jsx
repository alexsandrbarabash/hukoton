import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const TableElement = ({
  subject = "",
  task = "",
  group = "",
  showModal,
  students,
  scheduleID,
  homework,
  index,
}) => (
  <tr
    onClick={() =>
      scheduleID ? showModal(students, scheduleID, homework) : () => {}
    }
  >
    <td width={40}>{index}</td>
    <td width={90}>{group}</td>
    <td>{subject}</td>
    <td>{task}</td>
  </tr>
);

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const fixArr = (data) => {
  return arr.map((item, index) => {
    const newItem = data.find((item) => index === item.order);
    if (newItem) {
      return newItem;
    }

    return {
      subject: "",
      task: "",
      group: "",
    };
  });
};

const DayEducator = ({ name = "Monday", showModal, data }) => {
  const [norm, setNorm] = useState([]);

  useEffect(() => {
    setNorm(fixArr(data));
  }, []);

  return (
    <div className="tab-container">
      <h3>{name}</h3>
      <Table>
        <thead>
          <tr>
            <th width={5}>#</th>
            <th width={5}>Group</th>
            <th>Subject</th>
            <th width={0}>Task</th>
          </tr>
        </thead>
      </Table>
      <div className="table-day">
        <Table striped hover size="sm">
          <tbody>
            {norm.map((item, index) => {
              return (
                <TableElement
                  key={index}
                  index={index + 1}
                  subject={item.subject}
                  task={item.task}
                  group={item.group.name}
                  showModal={showModal}
                  students={item.group.students}
                  scheduleID={item.scheduleID}
                  homework={item.group.homework}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DayEducator;
