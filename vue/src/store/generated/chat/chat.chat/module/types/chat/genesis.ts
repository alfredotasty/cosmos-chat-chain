/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Params } from "../chat/params";
import { Messages } from "../chat/messages";

export const protobufPackage = "chat.chat";

/** GenesisState defines the chat module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  port_id: string;
  messagesList: Messages[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  messagesCount: number;
}

const baseGenesisState: object = { port_id: "", messagesCount: 0 };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    for (const v of message.messagesList) {
      Messages.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.messagesCount !== 0) {
      writer.uint32(32).uint64(message.messagesCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.messagesList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.messagesList.push(Messages.decode(reader, reader.uint32()));
          break;
        case 4:
          message.messagesCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.messagesList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = String(object.port_id);
    } else {
      message.port_id = "";
    }
    if (object.messagesList !== undefined && object.messagesList !== null) {
      for (const e of object.messagesList) {
        message.messagesList.push(Messages.fromJSON(e));
      }
    }
    if (object.messagesCount !== undefined && object.messagesCount !== null) {
      message.messagesCount = Number(object.messagesCount);
    } else {
      message.messagesCount = 0;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    if (message.messagesList) {
      obj.messagesList = message.messagesList.map((e) =>
        e ? Messages.toJSON(e) : undefined
      );
    } else {
      obj.messagesList = [];
    }
    message.messagesCount !== undefined &&
      (obj.messagesCount = message.messagesCount);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.messagesList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    } else {
      message.port_id = "";
    }
    if (object.messagesList !== undefined && object.messagesList !== null) {
      for (const e of object.messagesList) {
        message.messagesList.push(Messages.fromPartial(e));
      }
    }
    if (object.messagesCount !== undefined && object.messagesCount !== null) {
      message.messagesCount = object.messagesCount;
    } else {
      message.messagesCount = 0;
    }
    return message;
  },
};

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
