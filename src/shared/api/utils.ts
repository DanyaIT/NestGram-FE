export const getBaseUrl = (version = "v1") => {
  // return `http://localhost:3001/${version}`;

  return `${process.env["NEXT_PUBLIC_API_HOST"]}/${version}`;
};
