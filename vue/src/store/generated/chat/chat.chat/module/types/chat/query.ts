/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../chat/params";
import { Messages } from "../chat/messages";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "chat.chat";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetMessagesRequest {
  id: number;
}

export interface QueryGetMessagesResponse {
  Messages: Messages | undefined;
}

export interface QueryAllMessagesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMessagesResponse {
  Messages: Messages[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetMessagesRequest: object = { id: 0 };

export const QueryGetMessagesRequest = {
  encode(
    message: QueryGetMessagesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMessagesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMessagesRequest,
    } as QueryGetMessagesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMessagesRequest {
    const message = {
      ...baseQueryGetMessagesRequest,
    } as QueryGetMessagesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetMessagesRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMessagesRequest>
  ): QueryGetMessagesRequest {
    const message = {
      ...baseQueryGetMessagesRequest,
    } as QueryGetMessagesRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetMessagesResponse: object = {};

export const QueryGetMessagesResponse = {
  encode(
    message: QueryGetMessagesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Messages !== undefined) {
      Messages.encode(message.Messages, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMessagesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMessagesResponse,
    } as QueryGetMessagesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Messages = Messages.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMessagesResponse {
    const message = {
      ...baseQueryGetMessagesResponse,
    } as QueryGetMessagesResponse;
    if (object.Messages !== undefined && object.Messages !== null) {
      message.Messages = Messages.fromJSON(object.Messages);
    } else {
      message.Messages = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMessagesResponse): unknown {
    const obj: any = {};
    message.Messages !== undefined &&
      (obj.Messages = message.Messages
        ? Messages.toJSON(message.Messages)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMessagesResponse>
  ): QueryGetMessagesResponse {
    const message = {
      ...baseQueryGetMessagesResponse,
    } as QueryGetMessagesResponse;
    if (object.Messages !== undefined && object.Messages !== null) {
      message.Messages = Messages.fromPartial(object.Messages);
    } else {
      message.Messages = undefined;
    }
    return message;
  },
};

const baseQueryAllMessagesRequest: object = {};

export const QueryAllMessagesRequest = {
  encode(
    message: QueryAllMessagesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMessagesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMessagesRequest,
    } as QueryAllMessagesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMessagesRequest {
    const message = {
      ...baseQueryAllMessagesRequest,
    } as QueryAllMessagesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMessagesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMessagesRequest>
  ): QueryAllMessagesRequest {
    const message = {
      ...baseQueryAllMessagesRequest,
    } as QueryAllMessagesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMessagesResponse: object = {};

export const QueryAllMessagesResponse = {
  encode(
    message: QueryAllMessagesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Messages) {
      Messages.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMessagesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMessagesResponse,
    } as QueryAllMessagesResponse;
    message.Messages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Messages.push(Messages.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMessagesResponse {
    const message = {
      ...baseQueryAllMessagesResponse,
    } as QueryAllMessagesResponse;
    message.Messages = [];
    if (object.Messages !== undefined && object.Messages !== null) {
      for (const e of object.Messages) {
        message.Messages.push(Messages.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMessagesResponse): unknown {
    const obj: any = {};
    if (message.Messages) {
      obj.Messages = message.Messages.map((e) =>
        e ? Messages.toJSON(e) : undefined
      );
    } else {
      obj.Messages = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMessagesResponse>
  ): QueryAllMessagesResponse {
    const message = {
      ...baseQueryAllMessagesResponse,
    } as QueryAllMessagesResponse;
    message.Messages = [];
    if (object.Messages !== undefined && object.Messages !== null) {
      for (const e of object.Messages) {
        message.Messages.push(Messages.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Messages by id. */
  Messages(request: QueryGetMessagesRequest): Promise<QueryGetMessagesResponse>;
  /** Queries a list of Messages items. */
  MessagesAll(
    request: QueryAllMessagesRequest
  ): Promise<QueryAllMessagesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("chat.chat.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Messages(
    request: QueryGetMessagesRequest
  ): Promise<QueryGetMessagesResponse> {
    const data = QueryGetMessagesRequest.encode(request).finish();
    const promise = this.rpc.request("chat.chat.Query", "Messages", data);
    return promise.then((data) =>
      QueryGetMessagesResponse.decode(new Reader(data))
    );
  }

  MessagesAll(
    request: QueryAllMessagesRequest
  ): Promise<QueryAllMessagesResponse> {
    const data = QueryAllMessagesRequest.encode(request).finish();
    const promise = this.rpc.request("chat.chat.Query", "MessagesAll", data);
    return promise.then((data) =>
      QueryAllMessagesResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
