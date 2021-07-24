module.exports.cors = async (event, context, callback) => {
  callback(null, {
    headers: {
      "Access-Control-Allow-Origin": event.headers.origin,
    },
    statusCode: 200,
  });
};
