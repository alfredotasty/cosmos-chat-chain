package types

// ValidateBasic is used for validating the packet
func (p MessagePacketPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p MessagePacketPacketData) GetBytes() ([]byte, error) {
	var modulePacket ChatPacketData

	modulePacket.Packet = &ChatPacketData_MessagePacketPacket{&p}

	return modulePacket.Marshal()
}
