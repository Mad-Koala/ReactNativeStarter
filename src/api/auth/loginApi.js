import {LOGIN} from 'constants/apiEndpoints';
import RestClient from 'helpers/restClient';

export const userLogin = async () => {
  const response = await RestClient.getCall(LOGIN);
  return response;
};
