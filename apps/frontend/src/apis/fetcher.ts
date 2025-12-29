import ky, { type Options, type ResponsePromise } from 'ky';
import { getUserFriendlyErrorMessage } from './errorMessages';

const defaultOption: Options = {
  retry: 0,
  timeout: 30_000,
};

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export const instance = ky.create({
  prefixUrl: API_ENDPOINT,
  headers: {
    'content-type': 'application/json',
  },
  hooks: {
    afterResponse: [
      async (_request, _options, response) => {
        if (!response.ok) {
          const errorBody = await response.json();
          const errorMessage =
            errorBody && typeof errorBody === 'object' && 'error' in errorBody
              ? errorBody.error
              : '';
          throw new Error(getUserFriendlyErrorMessage(errorMessage, response.status));
        }
        return response;
      },
    ],
  },
  ...defaultOption,
});

export async function parseResponse<T>(response: ResponsePromise) {
  return await response.json<T>();
}

export const fetcher = {
  get: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.get(pathname, options)),
  post: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.post(pathname, options)),
  put: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.put(pathname, options)),
  delete: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.delete(pathname, options)),
  patch: <T>(pathname: string, options?: Options) =>
    parseResponse<T>(instance.patch(pathname, options)),
};
