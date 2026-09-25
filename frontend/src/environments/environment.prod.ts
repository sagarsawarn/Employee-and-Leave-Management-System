/**
 * Production environment. Swapped in at build time via angular.json
 * fileReplacements. Point apiBaseUrl at the deployed API origin.
 */
export const environment = {
  production: true,
  apiBaseUrl: '/api/v1',
};
