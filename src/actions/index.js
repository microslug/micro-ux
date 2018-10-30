import axios from 'axios';
import { Config } from '../components/config';

export const FETCH = 'FETCH_FROM_API';
export const ABORT = 'ABORT_CALL_TO_API';

function validateUrl(value) {
  //return true;
  // Thank you Mathias :) https://mathiasbynens.be/demo/url-regex
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

export function createSlug(url) {
  if (validateUrl(url)) {
    url = !url ? url : encodeURIComponent(url);
    const microAPI = `${Config.API_URL}`;
    //returnAction.request =
    const request = axios.post(microAPI, {
      url: url
    });
    return {
      type: FETCH,
      payload: request
    };
  } else {
    return {
      type: ABORT
    };
  }

    // return returnAction;

}
