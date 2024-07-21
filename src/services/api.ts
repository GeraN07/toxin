import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import browserHistory from './history';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) =>
  !!StatusCodeMapping[response.status];

const BACKEND_URL = 'https://toxin-eight.vercel.app/api';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => config);

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.code === 'ERR_NETWORK') {
        toast.error(
          'Извините, не удалось получить данные с сервера. Проблемы с подключением :(',
          {
            position: 'top-right',
            toastId: 'error1',
          }
        );
        browserHistory.push('/');
      }

      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = <AxiosError>error.response.data;

        toast.warn(detailMessage.message, {
          position: 'top-right',
          toastId: 'error2',
        });
      }

      if (error.response?.status === StatusCodes.NOT_FOUND) {
        browserHistory.push('/not-found');
      }

      throw error;
    }
  );

  return api;
};
