import { z } from "zod";

export type ApiResponse<T> =
  | ClientError
  | NetworkError
  | ServerError
  | Success<T>;

type ClientError = {
  ok: false;
  type: "ClientError";
  message: string;
};

type NetworkError = {
  ok: false;
  type: "NetworkError";
  message: string;
  details: {
    method: string;
    url: string;
  };
};

type ServerError = {
  ok: false;
  type: "ServerError";
  message: string;
  details: {
    method: string;
    url: string;
    status: number;
    response: { text: string };
  };
};

type Success<T> = {
  ok: true;
  type: "Success";
  data: T;
  details: {
    method: string;
    url: string;
    status: number;
    response: { text: string };
  };
};
