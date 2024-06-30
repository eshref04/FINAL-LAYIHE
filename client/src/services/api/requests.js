import axios from "axios";
import { BASE_URL } from "./constants";


async function getAll(endpoint) {
  
  try {
    const response = await axios.get(BASE_URL + endpoint
   
  );
    return response.data;
  } catch (error) {
    return error;
  }
}


async function getOne(endpoint, id) {
  try {
    const response = await axios.get(BASE_URL + endpoint + `/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}


async function post(endpoint, payload) {
  try {
    const response = await axios.post(BASE_URL + endpoint, payload);
    return response.data;
  } catch (error) {
    return error;
  }
}



async function deleteOne(endpoint, id) {
  try {
    const response = await axios.delete(BASE_URL + endpoint + `/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}


async function patch(endpoint, id, payload) {
  try {
    const response = await axios.patch(BASE_URL + endpoint + `/${id}`, payload);
    return response.data;
  } catch (error) {
    return error;
  }
}


async function put(endpoint, id, payload) {
  try {
    const response = await axios.put(BASE_URL + endpoint + `/${id}`, payload);
    return response.data;
  } catch (error) {
    return error;
  }
}



const controller = {
  post: post,
  getAll: getAll,
  getOne: getOne,
  delete: deleteOne,
  patch: patch,
  put: put,
};

export default controller;