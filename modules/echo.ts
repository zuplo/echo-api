import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

const bodyValue = async (request: ZuploRequest, context: ZuploContext) => {

  if (!request.body) {
    return undefined;
  }

  const bodyText = await request.text();
  const contentType = request.headers.get("content-type");


  if (contentType?.startsWith("application/json")) {
    try {
      return JSON.parse(bodyText);
    }
    catch (err) {
      //ignore error
    }
  }
  return bodyText;
}

export default async function (request: ZuploRequest, context: ZuploContext) {
  const { url, method, query } = request;

  const body = await bodyValue(request, context);

  const headers = {};

  for (const [key, value] of request.headers) {
    headers[key] = value;
  }

  return {
    url,
    method,
    query,
    body,
    headers
  }
}
