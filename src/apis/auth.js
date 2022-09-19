import config from "../config";

const login = (formData, history) => {
  return fetch(`${config.server_url}dashboard/auth/login`, {
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


export { login,}