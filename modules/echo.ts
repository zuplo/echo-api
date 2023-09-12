import { ZuploRequest } from "@zuplo/runtime";

const bodyValue = async (request: ZuploRequest):Promise<undefined|string> => {
  if (!request.body) {
    return undefined;
  }

  const bodyText = await request.text();
  const contentType = request.headers.get("content-type");

  if (contentType?.startsWith("application/json")) {
    try {
      return JSON.parse(bodyText);
    } catch (err) {
      //ignore error
    }
  }
  return bodyText;
};

export default async function (request: ZuploRequest): Promise<Response> {
  const { url, method, query } = request;

  const body = await bodyValue(request);

  const headers = {};

  for (const [key, value] of request.headers) {
    if (!key.startsWith("cf-")) {
      headers[key] = value;
    }
  }

  const result = {
    url,
    method,
    query,
    body,
    headers,
  };
  return new Response(JSON.stringify(result, undefined, 2), {
    headers: {
      "content-type": "application/json",
    },
  });
}
