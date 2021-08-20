import React, { useState, useEffect } from "react";
import "./CrudPage.css";
import CrudApiService from "../../services/crud-api-services";
import { useHistory } from "react-router";
import ReactLoading from "react-loading";

const CrudPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const history = useHistory();

  const getTaskList = () => {
    CrudApiService.getTaskList().then((response) => setTaskList(response.data));
  };

  const populateList = () => {
    return taskList.map((task) => (
      <div
        key={task._id}
        onClick={() => history.push(`/details/${task._id}`)}
        className="task__container__title"
      >
        <p className="to__do__task__title" style={{ color: "#fff" }}>
          {task.title}
        </p>
      </div>
    ));
  };

  useEffect(() => {
    setIsLoading(true);
    getTaskList();
    setIsLoading(false);
  }, []);

  return (
    <div className="to__do__list__page">
      / To Do List / All
      {isLoading ? (
        <div className="loading__container">
          <ReactLoading height={100} width={100} />
        </div>
      ) : (
        <div className="tasks__container">{populateList()}</div>
      )}
    </div>
  );
};

export default CrudPage;
