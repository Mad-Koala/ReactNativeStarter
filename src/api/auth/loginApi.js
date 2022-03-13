import {LOGIN} from 'constants/apiEndpoints';

export const userLogin = async user => {
  const response = await fetch(LOGIN, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const responseData = await response.json();
  return responseData;
};
