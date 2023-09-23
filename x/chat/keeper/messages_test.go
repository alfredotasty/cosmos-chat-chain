package keeper_test

import (
	"testing"

	keepertest "chat/testutil/keeper"
	"chat/testutil/nullify"
	"chat/x/chat/keeper"
	"chat/x/chat/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

func createNMessages(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Messages {
	items := make([]types.Messages, n)
	for i := range items {
		items[i].Id = keeper.AppendMessages(ctx, items[i])
	}
	return items
}

func TestMessagesGet(t *testing.T) {
	keeper, ctx := keepertest.ChatKeeper(t)
	items := createNMessages(keeper, ctx, 10)
	for _, item := range items {
		got, found := keeper.GetMessages(ctx, item.Id)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&got),
		)
	}
}

func TestMessagesRemove(t *testing.T) {
	keeper, ctx := keepertest.ChatKeeper(t)
	items := createNMessages(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMessages(ctx, item.Id)
		_, found := keeper.GetMessages(ctx, item.Id)
		require.False(t, found)
	}
}

func TestMessagesGetAll(t *testing.T) {
	keeper, ctx := keepertest.ChatKeeper(t)
	items := createNMessages(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMessages(ctx)),
	)
}

func TestMessagesCount(t *testing.T) {
	keeper, ctx := keepertest.ChatKeeper(t)
	items := createNMessages(keeper, ctx, 10)
	count := uint64(len(items))
	require.Equal(t, count, keeper.GetMessagesCount(ctx))
}
