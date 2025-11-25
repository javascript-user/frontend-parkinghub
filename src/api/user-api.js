import axios from "axios";

export const createUser = async (value) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/users/",
      value
    );
    return response;
  } catch (error) {
    console.error("There was an error creating the user!", error);
  }
};

export const loginUser = async (value) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/users/login",
      value
    );
    return response;
  } catch (error) {
    console.error("There was an error creating the user!", error);
  }
};