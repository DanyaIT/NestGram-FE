export const getBaseUrl = (version = "v1") =>
  `${process.env["NEXT_PUBLIC_API_URL"]}/${version}`;
