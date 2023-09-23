package chat

import (
	"math/rand"

	"chat/testutil/sample"
	chatsimulation "chat/x/chat/simulation"
	"chat/x/chat/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = chatsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateMessages = "op_weight_msg_messages"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateMessages int = 100

	opWeightMsgUpdateMessages = "op_weight_msg_messages"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMessages int = 100

	opWeightMsgDeleteMessages = "op_weight_msg_messages"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteMessages int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	chatGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		MessagesList: []types.Messages{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		MessagesCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&chatGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateMessages int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateMessages, &weightMsgCreateMessages, nil,
		func(_ *rand.Rand) {
			weightMsgCreateMessages = defaultWeightMsgCreateMessages
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateMessages,
		chatsimulation.SimulateMsgCreateMessages(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateMessages int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateMessages, &weightMsgUpdateMessages, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMessages = defaultWeightMsgUpdateMessages
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMessages,
		chatsimulation.SimulateMsgUpdateMessages(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteMessages int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteMessages, &weightMsgDeleteMessages, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteMessages = defaultWeightMsgDeleteMessages
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteMessages,
		chatsimulation.SimulateMsgDeleteMessages(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
