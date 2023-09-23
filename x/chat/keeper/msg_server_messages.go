package keeper

import (
	"context"
	"fmt"

	"chat/x/chat/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateMessages(goCtx context.Context, msg *types.MsgCreateMessages) (*types.MsgCreateMessagesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var messages = types.Messages{
		Creator: msg.Creator,
		Body:    msg.Body,
	}

	id := k.AppendMessages(
		ctx,
		messages,
	)

	return &types.MsgCreateMessagesResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateMessages(goCtx context.Context, msg *types.MsgUpdateMessages) (*types.MsgUpdateMessagesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var messages = types.Messages{
		Creator: msg.Creator,
		Id:      msg.Id,
		Body:    msg.Body,
	}

	// Checks that the element exists
	val, found := k.GetMessages(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetMessages(ctx, messages)

	return &types.MsgUpdateMessagesResponse{}, nil
}

func (k msgServer) DeleteMessages(goCtx context.Context, msg *types.MsgDeleteMessages) (*types.MsgDeleteMessagesResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Checks that the element exists
	val, found := k.GetMessages(ctx, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the msg creator is the same as the current owner
	if msg.Creator != val.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveMessages(ctx, msg.Id)

	return &types.MsgDeleteMessagesResponse{}, nil
}
