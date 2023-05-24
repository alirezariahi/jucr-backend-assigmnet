import Joi from 'joi';
export default () => ({
  app: {
    port: getPort(),
  },
  OCMApiKye: getOCMApiKye(),
});

function getPort() {
  const port = Joi.number().port().validate(process.env.PORT).value;

  return port;
}

function getOCMApiKye() {
  const OCMApiKye = Joi.string()
    .required()
    .validate(process.env.OPENCHARGEMAP_API_KEY).value;

  return OCMApiKye;
}
