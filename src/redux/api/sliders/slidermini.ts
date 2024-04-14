import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const postRequest = createAsyncThunk("fetch/post", async (data) => {
  const response = await axios.post("https://api.elchocrud.pro/api/v1/53bbbf91c4ea62724aae7e81c91510e8/sliders", data)
  return response.data
})