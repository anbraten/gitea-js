import { Api, ApiConfig } from './api';

export function giteaApi<SecurityDataType = unknown>(
  baseUrl: string,
  options?: ApiConfig<SecurityDataType> & { token?: string },
) {
  return new Api({
    ...options,
    baseUrl: `${baseUrl}/api/v1`,
    baseApiParams: {
      format: 'json',
    },
    securityWorker: (securityData: SecurityDataType | null) => {
      if (!options?.token) {
        return;
      }

      return {
        secure: true,
        headers: {
          Authorization: `Bearer ${options.token}`,
        },
      };
    },
  });
}

export * from './api';
