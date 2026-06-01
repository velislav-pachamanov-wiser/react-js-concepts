import { API_URL } from "@consts/consts";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { User } from "src/types";

export type CreateUserPayload = Omit<User, 'id'>

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get<User[]>(`${API_URL}/users`);
  return response.data;
});

export const createUser = createAsyncThunk('users/createUser', async (user: CreateUserPayload) => {
  const response = await axios.post<User>(`${API_URL}/users`, user);
  return response.data;
});

export const updateUser = createAsyncThunk('users/updateUser', async (user: User) => {
  const response = await axios.put(`${API_URL}/users/${user.id}`, user);
  return response.data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id: number) => {
  const response = await axios.delete(`${API_URL}/users/${id}`);
  return response.data;
});