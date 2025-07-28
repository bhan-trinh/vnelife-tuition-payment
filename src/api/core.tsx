import {ROUTES} from './routes';

export const getToken = async (username: string, password: string) => {
  const body = {
    username: username,
    password: password,
  };
  const response = await fetch(ROUTES.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  console.log(data);
  return data.token;
};
