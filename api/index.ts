import type { AxiosInstance } from 'axios';

import authModule from './auth';
import type { AuthResponse } from './auth';

export default function (instance: AxiosInstance) {
  return {
    auth: authModule(instance),
  };
}

export interface ApiModule {
  auth: AuthResponse;
  getUser(): Promise<AuthResponse>;
}
