import { createAsyncThunk } from "@reduxjs/toolkit";
import { userRegistrationApi } from "../api/user-registration";
import type { RegistrationRequest } from "@/entities/user/models";
import { notifyService } from "@/shared/services";
import { parsedUserService } from "@/entities/user/services";

const { notifyError, notifySuccess } = notifyService;
const { parseUserDataToRegistrationRequest } = parsedUserService;

export const userRegistrationThunk = createAsyncThunk<
  void,
  RegistrationRequest
>(
  "user/registration",
  async ({ data, files }, { dispatch, rejectWithValue }) => {
    try {
      if (!data) return;

      const formData = new FormData();

      const dataToSend = parseUserDataToRegistrationRequest(data);

      formData.append("data", JSON.stringify(dataToSend));

      files.forEach((file) => {
        formData.append("files", file);
      }); 

      await dispatch(
        userRegistrationApi.endpoints.registration.initiate(formData),
      ).unwrap();
  
      notifySuccess('Анкета создана!')

    } catch (error: any) {
      notifyError(error.data.message);
      return rejectWithValue(error.data.message);
    }
  },
);
