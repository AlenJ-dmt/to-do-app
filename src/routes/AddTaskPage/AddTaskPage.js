import React, { useState, useEffect } from "react";
import "./AddTaskPage.css";
import CrudApiService from "../../services/crud-api-services";
import ReactLoading from "react-loading";
import { useHistory, useLocation, useParams } from "react-router";

const AddTaskPage = () => {
  const history = useHistory();
  const location = useLocation();
  const { taskId } = useParams();

  const { pathname } = location;

  useEffect(() => {
    if (pathname !== "/addTask") {
      loadValues();
    }
  }, []);

  const loadValues = () => {
    CrudApiService.getTaskById(taskId).then((response) => {
      console.log(response);
      setTitle(response.data.title);
      setImportance(response.data.importance);
      if (response.data.frequency !== "once") {
        setIsRepetitive(true);
      }
      setFrequency(response.data.frequency);
      setCategory(response.data.category);
      setIsLoading(false);
    });
  };

  const [title, setTitle] = useState(null);
  const [importance, setImportance] = useState(null);
  const [frequency, setFrequency] = useState("once");
  const [category, setCategory] = useState(null);
  const [isRepetitive, setIsRepetitive] = useState(false);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);

  const createNewTask = (ev) => {
    ev.preventDefault();
    setIsLoading(true);

    if (title === null) {
      setErr(true);
      setErrMsg("Title cannot be empty");
      setIsLoading(false);
      return;
    }

    if (title.length < 10) {
      setErr(true);
      setErrMsg("Title must be at least 10 letter long");
      setIsLoading(false);
      return;
    }
    if (importance < 1 || importance > 3) {
      setErr(true);
      setErrMsg("Please select a valid number");
      setIsLoading(false);
      return;
    }
    if (isRepetitive) {
      if (frequency === null) {
        setErr(true);
        setErrMsg("Please select a how often to repeat task");
        setIsLoading(false);
        return;
      }
    }

    setErr(false);

    if (pathname === "/addTask") {
      CrudApiService.createNewTask({
        title: title,
        importance: importance,
        frequency: frequency,
        category: category,
      }).then((response) => history.push(`/details/${response.data._id}`));
    }
    else{
      CrudApiService.updateTask(taskId, {
        title: title,
        importance: importance,
        frequency: frequency,
        category: category,
      }).then((response) => history.push(`/details/${taskId}`));
    }
  };

  return (
    <div className="add__task__page__container">
      <h1 style={{ color: "#fff" }}>
        {pathname === "/addTask" ? "Add New Task" : "Update Task"}
      </h1>
      <form className="add__task__form">
        <div className="add__task__page__input__container">
          <label htmlFor="task-title" className="add__task__page__label">
            Title:{" "}
          </label>
          <input
            required
            value={title}
            name="task-title"
            type="text"
            className="add__task__page__input"
            placeholder="Task title"
            maxLength="32"
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div className="add__task__page__input__container">
          <label htmlFor="importance" className="add__task__page__label">
            Rate task importance (1-3):{" "}
          </label>
          <input
            style={{ width: 100 }}
            required
            name="importance"
            type="number"
            className="add__task__page__input"
            placeholder="1-3"
            min="1"
            max="3"
            value={importance}
            onChange={(ev) => setImportance(ev.target.value)}
          />
        </div>
        <div className="add__task__page__input__container">
          <label htmlFor="repeat" className="add__task__page__label">
            Repeat:{" "}
          </label>
          <input
            style={{ height: 20 }}
            name="repeat"
            type="checkbox"
            className="add__task__page__checkbox"
            onChange={() => setIsRepetitive(!isRepetitive)}
          />
        </div>
        {isRepetitive && (
          <div className="add__task__frequency">
            <label>Daily</label>
            <input
              name="frequency"
              onChange={(ev) => setFrequency(ev.target.value)}
              value="Daily"
              type="radio"
            />
            <label>Weekly</label>
            <input
              name="frequency"
              onChange={(ev) => setFrequency(ev.target.value)}
              value="Weekly"
              type="radio"
            />
            <label>Monthly</label>
            <input
              name="frequency"
              onChange={(ev) => setFrequency(ev.target.value)}
              value="Monthly"
              type="radio"
            />
          </div>
        )}
        <div className="add__task__page__input__container">
          <label htmlFor="repeat" className="add__task__page__label">
            Category:{" "}
          </label>
          <select
            value={category}
            required
            onChange={(ev) => setCategory(ev.target.value)}
          >
            <option value="">...</option>
            <option value="General Health">General Health</option>
            <option value="Food Habits">Food Habits</option>
            <option value="Physical Health">Physical Health</option>
            <option value="Mental Health">Mental Health</option>
            <option value="Education">Education</option>
            <option value="Relationships">Relationships</option>
          </select>
        </div>
        {isLoading ? (
          <div className="loading__container">
            <ReactLoading type="balls" height={50} width={50} />
          </div>
        ) : (
          <button
            onClick={(ev) => createNewTask(ev)}
            className="add__task__button"
          >
            {pathname === "/addTask" ? "Add Task" : "Update"}
          </button>
        )}
      </form>
      {err && (
        <div className="add__task__error__message">
          <p style={{ fontSize: 16, color: "#f57878" }}>{errMsg}</p>
        </div>
      )}
    </div>
  );
};

export default AddTaskPage;
