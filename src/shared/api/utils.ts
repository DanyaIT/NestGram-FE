export const getBaseUrl = (version = "v1") => {
  return `${process.env["NEXT_PUBLIC_API_URL"]}/${version}`;
};
