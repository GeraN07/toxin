import {useDispatch} from 'react-redux';
import type {AppDispatch} from '../types/state';

export const useAppDispatch = () => useDispatch<AppDispatch>();

