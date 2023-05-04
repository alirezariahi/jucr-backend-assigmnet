export default () => ({
  mongo: {
    uri: getMongoUri(),
  },
});

function getMongoUri() {
  const mongoUser = process.env.DATABASE_USER;
  const mongoPassword = process.env.DATABASE_PASSWORD;
  const mongoHost = process.env.DATABASE_HOST;
  const mongoPort = process.env.DATABASE_PORT;
  const mongoDatabase = process.env.DATABASE_NAME;

  if (
    mongoHost === undefined ||
    mongoPort === undefined ||
    mongoDatabase === undefined
  ) {
    throw new Error('MongoDB configuration is missing');
  }

  if (mongoUser && mongoPassword) {
    return `mongodb://${mongoUser}:${mongoPassword}@${mongoHost}:${mongoPort}/${mongoDatabase}`;
  } else {
    return `mongodb://${mongoHost}:${mongoPort}/${mongoDatabase}`;
  }
}
