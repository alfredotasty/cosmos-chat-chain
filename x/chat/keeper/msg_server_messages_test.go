package keeper_test

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"

	"chat/x/chat/types"
)

func TestMessagesMsgServerCreate(t *testing.T) {
	srv, ctx := setupMsgServer(t)
	creator := "A"
	for i := 0; i < 5; i++ {
		resp, err := srv.CreateMessages(ctx, &types.MsgCreateMessages{Creator: creator})
		require.NoError(t, err)
		require.Equal(t, i, int(resp.Id))
	}
}

func TestMessagesMsgServerUpdate(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgUpdateMessages
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgUpdateMessages{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateMessages{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgUpdateMessages{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)
			_, err := srv.CreateMessages(ctx, &types.MsgCreateMessages{Creator: creator})
			require.NoError(t, err)

			_, err = srv.UpdateMessages(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}

func TestMessagesMsgServerDelete(t *testing.T) {
	creator := "A"

	for _, tc := range []struct {
		desc    string
		request *types.MsgDeleteMessages
		err     error
	}{
		{
			desc:    "Completed",
			request: &types.MsgDeleteMessages{Creator: creator},
		},
		{
			desc:    "Unauthorized",
			request: &types.MsgDeleteMessages{Creator: "B"},
			err:     sdkerrors.ErrUnauthorized,
		},
		{
			desc:    "KeyNotFound",
			request: &types.MsgDeleteMessages{Creator: creator, Id: 10},
			err:     sdkerrors.ErrKeyNotFound,
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			srv, ctx := setupMsgServer(t)

			_, err := srv.CreateMessages(ctx, &types.MsgCreateMessages{Creator: creator})
			require.NoError(t, err)
			_, err = srv.DeleteMessages(ctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
			}
		})
	}
}
