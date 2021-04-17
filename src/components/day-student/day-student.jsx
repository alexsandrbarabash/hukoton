import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const TableElement = ({
  index,
  subject = "",
  task = "",
  showModal,
  grade,
}) => (
  <tr>
    <td width={50}>{index}</td>
    <td width={125}>{subject}</td>
    <td>{task}</td>
    <td width={130}>{grade}</td>
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
      index,
      subject: "",
      homework: "",
      grade: "",
    };
  });
};

const DayStudent = ({ name = "Monday", showModal, data }) => {
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
            <th width={30}>#</th>
            <th width={125}>Subject</th>
            <th>Task</th>
            <th width={150}>Grades</th>
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
                  task={item.homework}
                  grade={item.grade}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default DayStudent;
