/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "chat.chat";

export interface ChatPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  messagePacketPacket: MessagePacketPacketData | undefined;
}

export interface NoData {}

/** MessagePacketPacketData defines a struct for the packet payload */
export interface MessagePacketPacketData {
  body: string;
  user: string;
}

/** MessagePacketPacketAck defines a struct for the packet acknowledgment */
export interface MessagePacketPacketAck {}

const baseChatPacketData: object = {};

export const ChatPacketData = {
  encode(message: ChatPacketData, writer: Writer = Writer.create()): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.messagePacketPacket !== undefined) {
      MessagePacketPacketData.encode(
        message.messagePacketPacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ChatPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChatPacketData } as ChatPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.messagePacketPacket = MessagePacketPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChatPacketData {
    const message = { ...baseChatPacketData } as ChatPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.messagePacketPacket !== undefined &&
      object.messagePacketPacket !== null
    ) {
      message.messagePacketPacket = MessagePacketPacketData.fromJSON(
        object.messagePacketPacket
      );
    } else {
      message.messagePacketPacket = undefined;
    }
    return message;
  },

  toJSON(message: ChatPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.messagePacketPacket !== undefined &&
      (obj.messagePacketPacket = message.messagePacketPacket
        ? MessagePacketPacketData.toJSON(message.messagePacketPacket)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ChatPacketData>): ChatPacketData {
    const message = { ...baseChatPacketData } as ChatPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.messagePacketPacket !== undefined &&
      object.messagePacketPacket !== null
    ) {
      message.messagePacketPacket = MessagePacketPacketData.fromPartial(
        object.messagePacketPacket
      );
    } else {
      message.messagePacketPacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
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

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseMessagePacketPacketData: object = { body: "", user: "" };

export const MessagePacketPacketData = {
  encode(
    message: MessagePacketPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.body !== "") {
      writer.uint32(10).string(message.body);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MessagePacketPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMessagePacketPacketData,
    } as MessagePacketPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.body = reader.string();
          break;
        case 2:
          message.user = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MessagePacketPacketData {
    const message = {
      ...baseMessagePacketPacketData,
    } as MessagePacketPacketData;
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

  toJSON(message: MessagePacketPacketData): unknown {
    const obj: any = {};
    message.body !== undefined && (obj.body = message.body);
    message.user !== undefined && (obj.user = message.user);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MessagePacketPacketData>
  ): MessagePacketPacketData {
    const message = {
      ...baseMessagePacketPacketData,
    } as MessagePacketPacketData;
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

const baseMessagePacketPacketAck: object = {};

export const MessagePacketPacketAck = {
  encode(_: MessagePacketPacketAck, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MessagePacketPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMessagePacketPacketAck } as MessagePacketPacketAck;
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

  fromJSON(_: any): MessagePacketPacketAck {
    const message = { ...baseMessagePacketPacketAck } as MessagePacketPacketAck;
    return message;
  },

  toJSON(_: MessagePacketPacketAck): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MessagePacketPacketAck>): MessagePacketPacketAck {
    const message = { ...baseMessagePacketPacketAck } as MessagePacketPacketAck;
    return message;
  },
};

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
