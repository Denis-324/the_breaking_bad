/* eslint-disable import/prefer-default-export */
import axios from "axios";

export const getApi = async (url: string) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error: any) {
    console.error(error.response);
    return false;
  }
};
