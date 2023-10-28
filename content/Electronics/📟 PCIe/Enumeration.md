## Simplified view on Enumeration

#PCIe enumeration is the process of initializing communication between #PCIe devices. It involves discovery, configuration, and setup steps to enable seamless data transfer.

1. Root Port Initiation ^Initiation

	- The enumeration process begins when the root ports probe the PCIe bus to detect connected devices.
	- Root ports send configuration read requests to device functions to check for a response.
	- If a device is present, it responds with its Device ID, Vendor ID, and status registers.

2. Device Identification ^Identification

	- The Device ID and Vendor ID allow the system to identify and recognize the type of PCIe device.
	- Device IDs are assigned by the manufacturer while Vendor IDs are obtained from the PCI SIG.
	- Example: A GPU may respond with Device ID 10DE and Vendor ID 1234, identifying it as a Sample GPU Core.

3. Capability Discovery

	- Root ports query the Capability structures within PCIe device functions.
	- These structures reveal key capabilities like supported PCIe generations, maximum payload size, power management features, etc.
	- Example: A network interface card's Capability structure may indicate support for PCIe Gen 4 and a maximum payload size of 256 bytes.

4. Link Training and Negotiation

	- Using the discovered capabilities, the devices and root ports negotiate and agree on optimal link parameters.
	- This includes determining the PCIe generation, lane widths, and maximum payload size to use for stable communication.
	- Example: A storage controller may negotiate PCIe Gen 3 and a maximum payload size of 128 bytes with the root port based on device limits.

5. Resource Allocation

	- Root ports assign memory and I/O resources to devices via Base Address Registers (BARs).
	- BARs define areas in memory or I/O address spaces for memory-mapped communication between devices.
	- Example: An NVMe SSD may get a BAR set to 0xF0000000 for efficient data exchange.

6. Data Transfer Setup ^Data-transfer

	- Endpoints and root ports complete configuration by setting up interrupts, finalizing BARs, and exchanging status.
	- Interrupts are mapped between devices and the processor for transaction signaling and events.
	- Example: An FPGA board may configure interrupt pin INTA for data transfer readiness.

PCIe enumeration enables the detection, configuration, and preparation of PCIe devices for optimal communication with the system. Proper enumeration is crucial for performance and interoperability.