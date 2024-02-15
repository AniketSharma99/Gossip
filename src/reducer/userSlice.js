import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
    "login/login",
    async (obj, thunkAPI) => {
      try {
        const response = await fetch(
            // environment.baseURL + 
            // apiRoute +
            "htttp://localhost:3001/login",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          }
        );
        let data = await response.json();
        
        if (response.status === 200) {
        console.log("successfully login");
          return data.Data;
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
export const signup = createAsyncThunk(
    "login/signup",
    async (obj, thunkAPI) => {
        console.log("ee",obj);
      try {
        const response = await fetch(
            // environment.baseURL + 
            // apiRoute +
            "htttp://localhost:3001/signup",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
          }
        );
        let data = await response.json();
        
        if (response.status === 200) {
        console.log("successfully signup");
          return data.Data;
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  export const userSlice =createSlice({
    name: 'LoginUser',
    initialState:{
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
    },
    reducers: {
        clearState: (state) => {
          state.isError = false;
          state.isSuccess = false;
          state.isFetching = false;
          return state;
        },
      },
    
    extraReducers : (builder)=>{
        builder.addCase(login.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
        });
        builder.addCase(login.rejected, (state, {payload}) => {
            console.log("INREJECTED");
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload?.Message ?? "Something went wrong!";
        });
        builder.addCase(signup.pending, (state) => {
            state.isFetching = true;
        });
        builder.addCase(signup.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.isSuccess = true;
        });
        builder.addCase(signup.rejected, (state, {payload}) => {
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload?.Message ?? "Something went wrong!";
        });

    }

  })

export const { clearState } = userSlice.actions;

export const userSelector = (state) => state.user;