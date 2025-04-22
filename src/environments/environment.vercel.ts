import env from './.env';

export const environment = {
  production: true,
  version: env.mifos_x.version,
  hash: env.mifos_x.hash,
  fineractPlatformTenantId: 'default',
  fineractPlatformTenantIds: 'default',
  baseApiUrls: 'https://sandbox.mifos.community',
  baseApiUrl: 'https://sandbox.mifos.community',
  allowServerSwitch: true,
  apiProvider: '/fineract-provider/api',
  apiVersion: '/v1',
  serverUrl: '',
  oauth: {
    enabled: false,
    serverUrl: '',
    appId: ''
  },
  defaultLanguage: 'en-US',
  supportedLanguages: 'cs-CS,de-DE,en-US,es-MX,fr-FR,it-IT,ko-KO,lt-LT,lv-LV,ne-NE,pt-PT,sw-SW',
  preloadClients: true,
  defaultCharDelimiter: ',',
  displayBackEndInfo: true,
  displayTenantSelector: true,
  waitTimeForNotifications: 60,
  waitTimeForCOBCatchUp: 30,
  session: {
    timeout: {
      idleTimeout: 300000
    }
  },
  minPasswordLength: 12
};

// Server URL
environment.serverUrl = `${environment.baseApiUrl}${environment.apiProvider}${environment.apiVersion}`;
