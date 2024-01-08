import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'bravelit',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
