package keeper

import (
	"encoding/binary"

	"chat/x/chat/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// GetMessagesCount get the total number of messages
func (k Keeper) GetMessagesCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.MessagesCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	return binary.BigEndian.Uint64(bz)
}

// SetMessagesCount set the total number of messages
func (k Keeper) SetMessagesCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte{})
	byteKey := types.KeyPrefix(types.MessagesCountKey)
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)
	store.Set(byteKey, bz)
}

// AppendMessages appends a messages in the store with a new id and update the count
func (k Keeper) AppendMessages(
	ctx sdk.Context,
	messages types.Messages,
) uint64 {
	// Create the messages
	count := k.GetMessagesCount(ctx)

	// Set the ID of the appended value
	messages.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MessagesKey))
	appendedValue := k.cdc.MustMarshal(&messages)
	store.Set(GetMessagesIDBytes(messages.Id), appendedValue)

	// Update messages count
	k.SetMessagesCount(ctx, count+1)

	return count
}

// SetMessages set a specific messages in the store
func (k Keeper) SetMessages(ctx sdk.Context, messages types.Messages) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MessagesKey))
	b := k.cdc.MustMarshal(&messages)
	store.Set(GetMessagesIDBytes(messages.Id), b)
}

// GetMessages returns a messages from its id
func (k Keeper) GetMessages(ctx sdk.Context, id uint64) (val types.Messages, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MessagesKey))
	b := store.Get(GetMessagesIDBytes(id))
	if b == nil {
		return val, false
	}
	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMessages removes a messages from the store
func (k Keeper) RemoveMessages(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MessagesKey))
	store.Delete(GetMessagesIDBytes(id))
}

// GetAllMessages returns all messages
func (k Keeper) GetAllMessages(ctx sdk.Context) (list []types.Messages) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MessagesKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Messages
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetMessagesIDBytes returns the byte representation of the ID
func GetMessagesIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetMessagesIDFromBytes returns ID in uint64 format from a byte array
func GetMessagesIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
