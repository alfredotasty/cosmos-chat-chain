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

export interface MsgSendMessagePacket {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  body: string;
  user: string;
}

export interface MsgSendMessagePacketResponse {}

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

const baseMsgSendMessagePacket: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  body: "",
  user: "",
};

export const MsgSendMessagePacket = {
  encode(
    message: MsgSendMessagePacket,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.body !== "") {
      writer.uint32(42).string(message.body);
    }
    if (message.user !== "") {
      writer.uint32(50).string(message.user);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendMessagePacket {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendMessagePacket } as MsgSendMessagePacket;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.body = reader.string();
          break;
        case 6:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendMessagePacket {
    const message = { ...baseMsgSendMessagePacket } as MsgSendMessagePacket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    return message;
  },

  toJSON(message: MsgSendMessagePacket): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.body !== undefined && (obj.body = message.body);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendMessagePacket>): MsgSendMessagePacket {
    const message = { ...baseMsgSendMessagePacket } as MsgSendMessagePacket;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    return message;
  },
};

const baseMsgSendMessagePacketResponse: object = {};

export const MsgSendMessagePacketResponse = {
  encode(
    _: MsgSendMessagePacketResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendMessagePacketResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendMessagePacketResponse,
    } as MsgSendMessagePacketResponse;
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

  fromJSON(_: any): MsgSendMessagePacketResponse {
    const message = {
      ...baseMsgSendMessagePacketResponse,
    } as MsgSendMessagePacketResponse;
    return message;
  },

  toJSON(_: MsgSendMessagePacketResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSendMessagePacketResponse>
  ): MsgSendMessagePacketResponse {
    const message = {
      ...baseMsgSendMessagePacketResponse,
    } as MsgSendMessagePacketResponse;
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
  DeleteMessages(
    request: MsgDeleteMessages
  ): Promise<MsgDeleteMessagesResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendMessagePacket(
    request: MsgSendMessagePacket
  ): Promise<MsgSendMessagePacketResponse>;
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

  SendMessagePacket(
    request: MsgSendMessagePacket
  ): Promise<MsgSendMessagePacketResponse> {
    const data = MsgSendMessagePacket.encode(request).finish();
    const promise = this.rpc.request(
      "chat.chat.Msg",
      "SendMessagePacket",
      data
    );
    return promise.then((data) =>
      MsgSendMessagePacketResponse.decode(new Reader(data))
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
