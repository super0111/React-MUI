import config from "../config";

const sendFeedback = (formData, history) => {
  return fetch(`${config.server_url}api/sendMail/sendFeedback`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
    }),
  })
  .then((res) =>{
    return res.json();
  } );
};

const sendContactSales = (formData, history) => {
  return fetch(`${config.server_url}api/sendMail/sendContactSales`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
    }),
  })
  .then((res) =>{
    return res.json();
  } );
};

const sendCancellation = (formData, history) => {
  return fetch(`${config.server_url}api/sendMail/sendCancellation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...formData,
    }),
  })
  .then((res) =>{
    return res.json();
  } );
};

export { sendFeedback, sendContactSales, sendCancellation }