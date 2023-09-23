// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteMessages } from "./types/chat/tx";
import { MsgCreateMessages } from "./types/chat/tx";
import { MsgUpdateMessages } from "./types/chat/tx";
import { MsgSendMessagePacket } from "./types/chat/tx";


const types = [
  ["/chat.chat.MsgDeleteMessages", MsgDeleteMessages],
  ["/chat.chat.MsgCreateMessages", MsgCreateMessages],
  ["/chat.chat.MsgUpdateMessages", MsgUpdateMessages],
  ["/chat.chat.MsgSendMessagePacket", MsgSendMessagePacket],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeleteMessages: (data: MsgDeleteMessages): EncodeObject => ({ typeUrl: "/chat.chat.MsgDeleteMessages", value: MsgDeleteMessages.fromPartial( data ) }),
    msgCreateMessages: (data: MsgCreateMessages): EncodeObject => ({ typeUrl: "/chat.chat.MsgCreateMessages", value: MsgCreateMessages.fromPartial( data ) }),
    msgUpdateMessages: (data: MsgUpdateMessages): EncodeObject => ({ typeUrl: "/chat.chat.MsgUpdateMessages", value: MsgUpdateMessages.fromPartial( data ) }),
    msgSendMessagePacket: (data: MsgSendMessagePacket): EncodeObject => ({ typeUrl: "/chat.chat.MsgSendMessagePacket", value: MsgSendMessagePacket.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
