// Configuration object with simple error checking

const GetConfig = () => {
  const configObj = {};
  if (process.env.REACT_APP_API_HOST) {
    configObj.API_URL = process.env.REACT_APP_API_HOST + process.env.REACT_APP_API_PATH;
    configObj.HOST = process.env.REACT_APP_API_HOST;
  } else {
    configObj.API_URL = "Api not specified!"
  }
  return configObj;
}

export const Config = GetConfig();

export default GetConfig;
