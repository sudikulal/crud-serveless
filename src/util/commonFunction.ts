export const sendResponse = (status: number, response: string) => {
  return {
    statusCode: status,
    body: JSON.stringify(response),
  };
};

export const parseBody = (event: any) => {
  try {
    if (
      event.headers &&
      event.headers["Content-Type"] === "application/x-www-form-urlencoded"
    ) {
      const querystring = require("querystring");
      event.body = querystring.parse(event.body);
    }
  } catch (error) {
    console.error(error);
    return;
  }
};
