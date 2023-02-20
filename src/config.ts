export interface IConfig {
  isProd: boolean;
  port: number;
}

/**
 * Server configuration.
 * @readonly
 */
const config: Readonly<IConfig> = {
  isProd: process.env.NODE_ENV === 'production',
  // default port.
  port: 8443,
};

export default config;
