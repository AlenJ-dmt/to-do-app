import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import CrudApiService from "../../services/crud-api-services";
import ReactLoading from "react-loading";
import "./DetailPage.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { ImCheckmark } from "react-icons/im";

const DetailPage = () => {
  const { taskId } = useParams();
  const history = useHistory();

  const [title, setTitle] = useState(null);
  const [importance, setImportance] = useState(null);
  const [frequency, setFrequency] = useState(null);
  const [category, setCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const loadTaskInformation = () => {
    setIsLoading(true);
    CrudApiService.getTaskById(taskId).then((response) => {
      setTitle(response.data.title);
      setImportance(response.data.importance);
      setFrequency(response.data.frequency);
      setCategory(response.data.category);
      setIsLoading(false);
    });
  };

  const deleteTask = () => {
    CrudApiService.deleteTask(taskId).then(() => history.push("/to-do"));
  };

  useEffect(() => {
    loadTaskInformation();
  }, []);

  return isLoading ? (
    <div className="loading__container">
      <ReactLoading type="balls" height={150} width={150} />
    </div>
  ) : (
    <div className="detail__page__container">
      <h3 className="detail__page__title"> {title} </h3>
      <div className="datail__page__details__container">
        <h3 className="detail__page__details">Importance: {importance}</h3>
      </div>
      <div className="datail__page__details__container">
        <h3 className="detail__page__details">Frequency: {frequency}</h3>
      </div>
      <div className="datail__page__details__container">
        <h3 className="detail__page__details">Category: #{category}</h3>
      </div>
      <div className="detail__page__button__container">
        <div className="detail__page__icon__container task__completed__icon">
          <ImCheckmark color={"#fff"} size={20} />
        </div>
        <div onClick={() => history.push(`/edit/${taskId}`)} className="detail__page__icon__container edit__task__icon">
          <AiFillEdit color={"#fff"} size={20} />
        </div>
        <div
          onClick={() => setShowOverlay(true)}
          className="detail__page__icon__container delete__task__icon"
        >
          <AiFillDelete color={"#fff"} size={20} />
        </div>
      </div>
      {showOverlay && (
        <div className="overlay">
          <div className="overlay__mesagge">
            <p style={{ borderBottom: "1px solid #121212" }}>
              {" "}
              Are you sure you want to delete this task?
            </p>
            <div className="detail__page__overlay__button__container">
              <button
                onClick={() => setShowOverlay(false)}
                className="btn cancel__btn"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteTask();
                }}
                className="btn continue__btn"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
