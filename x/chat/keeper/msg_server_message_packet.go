package keeper

import (
	"context"

	"chat/x/chat/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v3/modules/core/02-client/types"
)

func (k msgServer) SendMessagePacket(goCtx context.Context, msg *types.MsgSendMessagePacket) (*types.MsgSendMessagePacketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// store packet before transmit to another chain
	k.AppendMessages(ctx, types.Messages{
		Creator: msg.User,
		Body:    msg.User,
	})

	// Construct the packet
	var packet types.MessagePacketPacketData

	packet.Body = msg.Body
	packet.User = msg.User

	// Transmit the packet
	err := k.TransmitMessagePacketPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendMessagePacketResponse{}, nil
}
