package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateMessages = "create_messages"
	TypeMsgUpdateMessages = "update_messages"
	TypeMsgDeleteMessages = "delete_messages"
)

var _ sdk.Msg = &MsgCreateMessages{}

func NewMsgCreateMessages(creator string, body string) *MsgCreateMessages {
	return &MsgCreateMessages{
		Creator: creator,
		Body:    body,
	}
}

func (msg *MsgCreateMessages) Route() string {
	return RouterKey
}

func (msg *MsgCreateMessages) Type() string {
	return TypeMsgCreateMessages
}

func (msg *MsgCreateMessages) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateMessages) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateMessages) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateMessages{}

func NewMsgUpdateMessages(creator string, id uint64, body string) *MsgUpdateMessages {
	return &MsgUpdateMessages{
		Id:      id,
		Creator: creator,
		Body:    body,
	}
}

func (msg *MsgUpdateMessages) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMessages) Type() string {
	return TypeMsgUpdateMessages
}

func (msg *MsgUpdateMessages) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateMessages) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMessages) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteMessages{}

func NewMsgDeleteMessages(creator string, id uint64) *MsgDeleteMessages {
	return &MsgDeleteMessages{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteMessages) Route() string {
	return RouterKey
}

func (msg *MsgDeleteMessages) Type() string {
	return TypeMsgDeleteMessages
}

func (msg *MsgDeleteMessages) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteMessages) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteMessages) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
