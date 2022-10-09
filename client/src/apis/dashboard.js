import config from "../config";

const newCampaign = (formData, history) => {
  return fetch(`${config.server_url}api/sendMail/newCampaign`, {
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

export { newCampaign }