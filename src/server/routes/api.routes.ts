import axios from 'axios';
import * as express from 'express';
import { Router } from 'express';
import { IProfile } from 'passport-azure-ad';
import { API_URL, BASE_PATH } from '../config/constants.config';
import { getAccessTokenByOid } from './authentication.routes';

const apiRouter: Router = express.Router();

// Authenticated endpoints: routes proxy
apiRouter.all(`${BASE_PATH}/api/*`, (req, res) => {
  const user: IProfile = req.user || {};
  const oid: string = user.oid || '';
  const accessToken = getAccessTokenByOid(oid);

  if (req.isAuthenticated() && accessToken) {
    const method = req.method;
    const basePath = req.url.replace(BASE_PATH, '');
    const body = req.body;
    const url = `${API_URL}${basePath}`;
    const config = { headers: { Authorization: `Bearer ${accessToken}` } };

    const success = (response: any) => {

      // console.log('ORIG: ', url, response.data, response.status);
      // if (!response.data) {
      //   res.status(response.status).send(response.data);
      // }
      // new Deserializer({}).deserialize(response).then(data => {
      //   // response.data = data;
      //   console.log('DATA', data);
      res.status(response.status).send(response.data);
      // });

    };

    const fail = (error: any) => {

      console.error(`Error when attempting to connect to api with url: ${url}. Error: ${error}`);

      if (error.response && error.response.status) {
        res.status(error.response.status).send(error.response.data);
      } else {
        res.status(500).send();
      }
    };

    switch (method.toUpperCase()) {
      case 'GET':
        axios.get(url, config).then(success).catch(fail);
        break;
      case 'POST':
        axios.post(url, body, config).then(success).catch(fail);
        break;
      case 'PATCH':
        axios.patch(url, body, config).then(success).catch(fail);
        break;
      case 'PUT':
        axios.put(url, body, config).then(success).catch(fail);
        break;
      case 'HEAD':
        axios.head(url, config).then(success).catch(fail);
        break;
      case 'DELETE':
        axios.delete(url, config).then(success).catch(fail);
        break;
      default:
        res.status(405).send();
    }
  }
  else {
    res.status(401).send();
  }
});

// Unauthenticated endpoint: Survey endpoint.
apiRouter.post(`${BASE_PATH}/survey`, (req, res) => {
  const body = req.body;

  axios.post(`${API_URL}/api/survey`, body)
    .then((response: any) => {
      res.cookie('surveyId', response.data.id);
      res.send(response.data);
    })
    .catch((error: any) => {
      console.error(`Error when attempting to submit survey with url: ${API_URL}/api/survey. Error: ${error}`);
      res.status(500).send();
    });
});

// Unauthenticated endpoint: Innovation transfer check endpoint.
apiRouter.get(`${BASE_PATH}/innovators/innovation-transfers/:id/check`, (req, res) => {

  axios.get(`${API_URL}/api/innovators/innovation-transfers/${req.params.id}/check`)
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((error: any) => {
      console.error(`Error: ${API_URL}/api/innovators/innovation-transfers/:id/check : ${error}`);
      res.status(500).send();
    });

});


export default apiRouter;
