const { ws } = require('@architect/functions');

exports.handler = async (event) => {
  const { requestContext: { connectionId: id } } = event;
  console.log('disconnect', id);
  return { statusCode: 200 };
}
