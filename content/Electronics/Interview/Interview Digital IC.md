---
title: Interview Digital IC
date: 2024-04-15
Version: 
description: 
tags:
  - Interview
  - Hardware
draft:
---
# FPGA and ASIC Design Principles ✨
---
## Table of Contents

1. [[#FPGA Basics]]
	- [[#Basic Components of FPGA|Basic Components of FPGA]]
	- [[#Working Principle of LUT|Working Principle of LUT]]
	- [[#FPGA Design Flow|FPGA Design Flow]]
2. [[#ASIC Design|ASIC Design]]
	- [[#Basic Process and Tools for ASIC Design|Basic Process and Tools for ASIC Design]]
	- [[#Differences Between ASIC Design and FPGA Design|Differences Between ASIC Design and FPGA Design]]
3. [[#Setup and Hold Time|Setup and Hold Time]]
	- [[#Latches, Flip-Flops, and Registers|Latches, Flip-Flops, and Registers]]
	- [[#Differences Between Latches and Flip-Flops|Differences Between Latches and Flip-Flops]]
	- [[#Concept of Setup Time and Hold Time|Concept of Setup Time and Hold Time]]
	- [[#Why Flip-Flops Need to Meet Setup Time and Hold Time|Why Flip-Flops Need to Meet Setup Time and Hold Time]]
	- [[#What to Do When Setup Time and Hold Time Are Not Met|What to Do When Setup Time and Hold Time Are Not Met]]
	- [[#What Is Metastability|What Is Metastability]]
	- [[#How to Prevent Metastability|How to Prevent Metastability]]
	- [[#What Are Recovery Time and Removal Time|What Are Recovery Time and Removal Time]]
---

## FPGA Basics

### Basic Components of FPGA

FPGA chips mainly consist of:

- Configurable Input/Output Blocks (IOBs)
- Configurable Logic Blocks (CLBs) or Logic Array Blocks (LABs)
- Clock management units
- Abundant routing resources
- Embedded specialized modules (DSP, BRAM, etc.)

Each CLB contains multiple slices, and each slice consists of a LUT, MUX, carry chain, and registers. The number of registers is typically twice the number of LUTs.

### Working Principle of LUT

LUTs (Look-Up Tables) are used to implement combinational logic functions and are essentially a type of RAM. When a user describes a logic circuit using a hardware description language, FPGA development software automatically calculates all possible results of the logic circuit and writes the results into the RAM in advance. Each input for logical operations is equivalent to inputting an address to look up in the table, finding the corresponding content, and then outputting it.

### FPGA Design Flow

1. Functional Definition/Device Selection (Detailed)
2. Design Input (RTL Design)
3. Functional Simulation (Verification of code functionality)
4. Synthesis (Mapping RTL to gate-level logic netlist)
5. Post-Synthesis Simulation (Adding standard delay files to simulation models)
6. Implementation and Place & Route (Mapping logic netlist onto FPGA development board and routing)
7. Timing Simulation (Annotating delay information back into logic netlist)
8. FPGA Chip Programming and Debugging (Common debugging tools include: Vivado Debug Core, Quartus SignalTap)

## ASIC Design

### Basic Process and Tools for ASIC Design

1. Requirement Analysis, Architectural Design, Functional Description
2. RTL Design
3. Functional Simulation (VCS)
4. Logic Synthesis (DC)
5. Static Timing Analysis (PT)
6. Gate-Level Simulation (VCS)
7. Design for Testability (DFT)
8. Layout and Routing (Astro)
9. Static Timing Analysis (PT)
10. Post-Simulation (VCS)

### Differences Between ASIC Design and FPGA Design

- ASIC logic resources and clock frequencies are usually far greater than FPGA
- ASIC has only one chance, whereas FPGA can be programmed, offering flexibility
- ASIC tends to be more conservative in RTL design
- ASIC has higher requirements for coding style
- ASIC design places greater emphasis on clocks and resets
- ASIC needs to consider SCAN testing and BIST
- FPGA often uses ready-made IP and considers resource balance; ASIC focuses on performance and power
- ASIC has better timing predictability and higher adjustability

## Setup and Hold Time

### Latches, Flip-Flops, and Registers

- **Latch**: Level-sensitive storage units triggered by levels. When enabled, output changes with input; when latched, output remains unchanged. Also known as transparent latches.
    
- **Flip-Flop (FF)**: Edge-triggered, also known as bistable triggers. Maintains state until an input pulse is received. Can be understood as two latches with different level sensitivities in series.
    
- **Register**: Used to temporarily store data participating in operations and results. Flip-flops are the basic building blocks of registers.
    

### Differences Between Latches and Flip-Flops

1. Latches are level-triggered, flip-flops are edge-triggered
2. Latches are prone to glitches, flip-flops can filter glitches
3. Latches consume fewer gate resources than flip-flops in ASICs, but the opposite in FPGAs
4. Latches make static timing analysis extremely complex

> 💡 General design rule: Avoid using latches wherever possible and use flip-flops instead. Incomplete if/case statements can easily lead to latches.

### Concept of Setup Time and Hold Time

- **Setup Time**: Time data input must remain unchanged before clock rising edge for data to be latched
- **Hold Time**: Time data input must remain unchanged after clock rising edge for data to be latched

Meeting setup/hold time is critical for correct flip-flop operation.

### Why Flip-Flops Need to Meet Setup Time and Hold Time

Physically:

- Setup time needed because D input acts as latch requiring stable time from previous gate
- Hold time needed because flip-flop needs feedback to latch state passed between gates

Consequences of not meeting setup/hold time:

- Flip-flop enters metastable state
- Intermediate voltage between 0/1 propagates metastability to next-level circuit

### What to Do When Setup Time and Hold Time Are Not Met

- Reduce clock frequency
- Use better devices
- For setup: Reduce combinational logic time, reduce fan-out
- For hold: May need to increase combinational logic time

### What Is Metastability

Metastability is when a flip-flop cannot reach a confirmable state within a specified time. The output becomes unstable, drifting between 0 and 1. After a recovery time, the output stabilizes to a random value independent of input. Metastability is unavoidable in asynchronous designs.

### How to Prevent Metastability

1. Reduce clock frequency
2. Use flip-flops with faster response times
3. Use clock signals with faster edge changes
4. For single-bit async input, synchronize with two-stage flip-flops
5. For multi-bit data, synchronize with async FIFO
6. Use async reset circuits with synchronous release

### What Are Recovery Time and Removal Time

In the context of flip-flops and timing constraints, recovery time and removal time are related to asynchronous control signals, such as reset and preset.

- **Recovery Time**: The minimum time required between the inactive edge of an asynchronous control signal (e.g., reset or preset) and the next active edge of the clock for the flip-flop to reliably capture the input data. In other words, it is the time needed for the flip-flop to recover from the asynchronous control signal and be ready to capture new data.
- **Removal Time**: The minimum time required for an asynchronous control signal to remain active after the active edge of the clock to ensure that the flip-flop reliably captures the intended state (e.g., reset or preset state). It is the time needed for the asynchronous control signal to be safely removed without affecting the flip-flop's state.

Meeting recovery and removal time constraints is crucial for the proper operation of flip-flops in the presence of asynchronous control signals. Violating these constraints may lead to metastability or incorrect flip-flop states.

---