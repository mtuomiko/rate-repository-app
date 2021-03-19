import 'dotenv/config';

export default ({ config }) => {
  const appConfig = ({
    ...config,
    extra: {
      env: process.env.ENV,
      webHost: process.env.WEB_HOST,
      nativeHost: process.env.NATIVE_HOST,
    },
  });
  return appConfig;
};
