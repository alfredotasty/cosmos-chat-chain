package keeper

import (
	"chat/x/chat/types"
)

var _ types.QueryServer = Keeper{}
