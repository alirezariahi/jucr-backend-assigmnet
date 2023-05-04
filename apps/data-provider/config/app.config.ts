import Joi from 'joi';
export default () => ({
  app: {
    port: getPort(),
  },
});

function getPort() {
  const port = Joi.number().port().validate(process.env.PORT).value;

  return port;
}
