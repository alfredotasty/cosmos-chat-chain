package types

import (
	"fmt"
	host "github.com/cosmos/ibc-go/v3/modules/core/24-host"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		PortId:       PortID,
		MessagesList: []Messages{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	if err := host.PortIdentifierValidator(gs.PortId); err != nil {
		return err
	}
	// Check for duplicated ID in messages
	messagesIdMap := make(map[uint64]bool)
	messagesCount := gs.GetMessagesCount()
	for _, elem := range gs.MessagesList {
		if _, ok := messagesIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for messages")
		}
		if elem.Id >= messagesCount {
			return fmt.Errorf("messages id should be lower or equal than the last id")
		}
		messagesIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
