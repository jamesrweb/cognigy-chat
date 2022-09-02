type Environment = {
  ENDPOINT_BASE_URL: string;
  ENDPOINT_URL_TOKEN: string;
};

function expectStringFromEnvironment(label: string, value?: string): string {
  if (value === undefined) {
    throw new Error(
      `The string value "${label}" should be set in the environment but it is currently undefined."`
    );
  }

  return value;
}

export const environment: Environment = {
  ENDPOINT_BASE_URL: expectStringFromEnvironment(
    "ENDPOINT_BASE_URL",
    process.env.REACT_APP_ENDPOINT_BASE_URL
  ),
  ENDPOINT_URL_TOKEN: expectStringFromEnvironment(
    "ENDPOINT_URL_TOKEN",
    process.env.REACT_APP_ENDPOINT_URL_TOKEN
  )
};
