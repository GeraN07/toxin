import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { FullOffer, Rooms } from '../types/rooms';
import { AppDispatch, State } from '../types/state';

export const fetchRooms = createAsyncThunk<
  Rooms,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('rooms/fetchRooms', async (_, { extra: api }) => {
  const response = await (api).get<Rooms>('/api/rooms');
  return response.data;
});

export const fetchRoomById = createAsyncThunk<
  FullOffer,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('rooms/fetchRoomById', async (id: string, { extra: api }) => {
  const response = await (api).get<FullOffer>(
    `/api/rooms/${id}`
  );
  return response.data;
});
