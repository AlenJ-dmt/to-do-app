import config from "../config";
import axios from "axios";

const CrudApiService = {
  createNewTask(task) {
    return axios.post(`${config.API_ENDPOINT}/tasks`, task);
  },
  getTaskList() {
    return axios.get(`${config.API_ENDPOINT}/tasks`);
  },
  getTaskById(taskId) {
    return axios.get(`${config.API_ENDPOINT}/tasks/${taskId}`);
  },
  updateTask(taskId, updatedTask) {
    return axios.put(`${config.API_ENDPOINT}/tasks/${taskId}`, updatedTask);
  },
  deleteTask(taskId) {
    return axios.get(`${config.API_ENDPOINT}/tasks/${taskId}`);
  },
};

export default CrudApiService;
