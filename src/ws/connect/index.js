const arc = require('@architect/functions');

exports.handler = async (event) => {
  const { requestContext: { connectionId: id } } = event;
  console.log('connect', id);
  await arc.ws.send({ id, payload: { id } });
  return { statusCode: 200 };
}
