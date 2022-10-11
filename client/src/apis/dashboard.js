import config from "../config";

const saveNewCampaign = (formData, history) => {
  return fetch(`${config.server_url}api/dashboardRoutes/newCampaign`, {
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

export { saveNewCampaign }