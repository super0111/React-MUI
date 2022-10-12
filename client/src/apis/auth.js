import config from "../config";

const login = (formData, history) => {
  return fetch(`${config.server_url}api/authRoutes/signIn`, {
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

const forgotPassword = (formData, history) => {
  return fetch(`${config.server_url}api/authRoutes/reset-password-email`, {
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

const resetPassword = (formData, history) => {
  return fetch(`${config.server_url}api/authRoutes/update-password`, {
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

const signUpFlow1 = (formData, history) => {
  return fetch(`${config.server_url}api/authRoutes/signUpFlow1`, {
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

const signUpFlow2 = (formData, history) => {
  return fetch(`${config.server_url}api/authRoutes/signUpFlow2`, {
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

const signUpFlow3 = (formData, history) => {
  return fetch(`${config.server_url}api/authRoutes/signUpFlow3`, {
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

const signUpFlow4 = (formData, history) => {
  return fetch(`${config.server_url}api/authRoutes/signUpFlow4`, {
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

export { login, signUpFlow1, signUpFlow2, signUpFlow3, signUpFlow4, forgotPassword, resetPassword }