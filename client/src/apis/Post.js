import config from "../config";

const sendFeedback = (formData, history) => {
  return fetch(`${config.server_url}dashboard/post/sendFeedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
    }),
  })
  .then((res) =>{
    return res;
  } );
};

const sendCancellation = (formData, history) => {
  return fetch(`${config.server_url}dashboard/post/sendCancellation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
    }),
  })
  .then((res) =>{
    return res;
  } );
};

export { sendFeedback, sendCancellation }