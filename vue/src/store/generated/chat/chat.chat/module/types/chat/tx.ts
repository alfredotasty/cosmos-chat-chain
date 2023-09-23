/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "chat.chat";

export interface MsgCreateMessages {
  creator: string;
  body: string;
}

export interface MsgCreateMessagesResponse {
  id: number;
}

export interface MsgUpdateMessages {
  creator: string;
  id: number;
  body: string;
}

export interface MsgUpdateMessagesResponse {}

export interface MsgDeleteMessages {
  creator: string;
  id: number;
}

export interface MsgDeleteMessagesResponse {}

const baseMsgCreateMessages: object = { creator: "", body: "" };

export const MsgCreateMessages = {
  encode(message: MsgCreateMessages, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateMessages {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateMessages } as MsgCreateMessages;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateMessages {
    const message = { ...baseMsgCreateMessages } as MsgCreateMessages;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    return message;
  },

  toJSON(message: MsgCreateMessages): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateMessages>): MsgCreateMessages {
    const message = { ...baseMsgCreateMessages } as MsgCreateMessages;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    return message;
  },
};

const baseMsgCreateMessagesResponse: object = { id: 0 };

export const MsgCreateMessagesResponse = {
  encode(
    message: MsgCreateMessagesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateMessagesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateMessagesResponse,
    } as MsgCreateMessagesResponse;
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

  fromJSON(object: any): MsgCreateMessagesResponse {
    const message = {
      ...baseMsgCreateMessagesResponse,
    } as MsgCreateMessagesResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateMessagesResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateMessagesResponse>
  ): MsgCreateMessagesResponse {
    const message = {
      ...baseMsgCreateMessagesResponse,
    } as MsgCreateMessagesResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateMessages: object = { creator: "", id: 0, body: "" };

export const MsgUpdateMessages = {
  encode(message: MsgUpdateMessages, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateMessages {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateMessages } as MsgUpdateMessages;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMessages {
    const message = { ...baseMsgUpdateMessages } as MsgUpdateMessages;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateMessages): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateMessages>): MsgUpdateMessages {
    const message = { ...baseMsgUpdateMessages } as MsgUpdateMessages;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    return message;
  },
};

const baseMsgUpdateMessagesResponse: object = {};

export const MsgUpdateMessagesResponse = {
  encode(
    _: MsgUpdateMessagesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateMessagesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateMessagesResponse,
    } as MsgUpdateMessagesResponse;
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

  fromJSON(_: any): MsgUpdateMessagesResponse {
    const message = {
      ...baseMsgUpdateMessagesResponse,
    } as MsgUpdateMessagesResponse;
    return message;
  },

  toJSON(_: MsgUpdateMessagesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateMessagesResponse>
  ): MsgUpdateMessagesResponse {
    const message = {
      ...baseMsgUpdateMessagesResponse,
    } as MsgUpdateMessagesResponse;
    return message;
  },
};

const baseMsgDeleteMessages: object = { creator: "", id: 0 };

export const MsgDeleteMessages = {
  encode(message: MsgDeleteMessages, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteMessages {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteMessages } as MsgDeleteMessages;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteMessages {
    const message = { ...baseMsgDeleteMessages } as MsgDeleteMessages;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteMessages): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteMessages>): MsgDeleteMessages {
    const message = { ...baseMsgDeleteMessages } as MsgDeleteMessages;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteMessagesResponse: object = {};

export const MsgDeleteMessagesResponse = {
  encode(
    _: MsgDeleteMessagesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteMessagesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteMessagesResponse,
    } as MsgDeleteMessagesResponse;
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

  fromJSON(_: any): MsgDeleteMessagesResponse {
    const message = {
      ...baseMsgDeleteMessagesResponse,
    } as MsgDeleteMessagesResponse;
    return message;
  },

  toJSON(_: MsgDeleteMessagesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteMessagesResponse>
  ): MsgDeleteMessagesResponse {
    const message = {
      ...baseMsgDeleteMessagesResponse,
    } as MsgDeleteMessagesResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateMessages(
    request: MsgCreateMessages
  ): Promise<MsgCreateMessagesResponse>;
  UpdateMessages(
    request: MsgUpdateMessages
  ): Promise<MsgUpdateMessagesResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteMessages(
    request: MsgDeleteMessages
  ): Promise<MsgDeleteMessagesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateMessages(
    request: MsgCreateMessages
  ): Promise<MsgCreateMessagesResponse> {
    const data = MsgCreateMessages.encode(request).finish();
    const promise = this.rpc.request("chat.chat.Msg", "CreateMessages", data);
    return promise.then((data) =>
      MsgCreateMessagesResponse.decode(new Reader(data))
    );
  }

  UpdateMessages(
    request: MsgUpdateMessages
  ): Promise<MsgUpdateMessagesResponse> {
    const data = MsgUpdateMessages.encode(request).finish();
    const promise = this.rpc.request("chat.chat.Msg", "UpdateMessages", data);
    return promise.then((data) =>
      MsgUpdateMessagesResponse.decode(new Reader(data))
    );
  }

  DeleteMessages(
    request: MsgDeleteMessages
  ): Promise<MsgDeleteMessagesResponse> {
    const data = MsgDeleteMessages.encode(request).finish();
    const promise = this.rpc.request("chat.chat.Msg", "DeleteMessages", data);
    return promise.then((data) =>
      MsgDeleteMessagesResponse.decode(new Reader(data))
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
