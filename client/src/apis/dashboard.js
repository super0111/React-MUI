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

const saveCampaignX = (formData, history) => {
  return fetch(`${config.server_url}api/dashboardRoutes/campaignX`, {
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

const uploadWebsite = (formData, history) => {
  return fetch(`${config.server_url}api/dashboardRoutes/uploadWebsite`, {
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

const uploadLinkedIn = (formData, history) => {
  return fetch(`${config.server_url}api/dashboardRoutes/uploadLinkedIn`, {
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

export { saveNewCampaign, saveCampaignX, uploadWebsite, uploadLinkedIn }