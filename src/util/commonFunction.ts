export const sendResponse = (status: number, response: string) => {
  return {
    statusCode: status,
    body: JSON.stringify(response),
  };
};
