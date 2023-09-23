package chat_test

import (
	"testing"

	keepertest "chat/testutil/keeper"
	"chat/testutil/nullify"
	"chat/x/chat"
	"chat/x/chat/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		MessagesList: []types.Messages{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		MessagesCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ChatKeeper(t)
	chat.InitGenesis(ctx, *k, genesisState)
	got := chat.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	require.ElementsMatch(t, genesisState.MessagesList, got.MessagesList)
	require.Equal(t, genesisState.MessagesCount, got.MessagesCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
