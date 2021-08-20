import React, { useState, useEffect } from "react";
import "./CrudPage.css";
import CrudApiService from "../../services/crud-api-services";
import { useHistory } from "react-router";

const CrudPage = () => {
  const [taskList, setTaskList] = useState([]);
  const history = useHistory()

  const getTaskList = () => {
    CrudApiService.getTaskList().then((response) => setTaskList(response.data));
  };

  const populateList = () => {
    return taskList.map((task) => 
      <div key={task._id} onClick={() => history.push(`/details/${task._id}`)} className="task__container__title">
        <p className="to__do__task__title" style={{ color: "#fff" }}>{task.title}</p>
      </div>
    );
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <div className="to__do__list__page">
      / To Do List / All
      <div className="tasks__container">{populateList()}</div>
    </div>
  );
};

export default CrudPage;
