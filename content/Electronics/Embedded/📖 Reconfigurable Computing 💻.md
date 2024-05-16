---
title: 📖 Reconfigurable Computing
date: 2024-05-16
Version: 
description: 
tags:
  - Hardware
draft: false
---
## EEL4720/5721 Reconfigurable Computing

### Course Introduction

- **Instructor:** Dr. Greg Stitt
    - **Email:** gstitt@ufl.edu (include class name in subject)
    - **Website:** http://www.gstitt.ece.ufl.edu
- **Course Websites:**
    - http://www.gstitt.ece.ufl.edu/courses/eel4720_5721/ (slides, labs, assignments, etc.)
    - Canvas: https://elearning.ufl.edu/ (grades, project submissions, discussions, tests)
- **Research Project:**
    - Two options: assigned or proposed
    - Assigned: most students, various group sizes, EDGE students have individual projects
    - Proposed: topic approval required, earned based on grades or project ideas
- **Reading Material:**
    - No required textbook
    - Optional books on the website and syllabus
    - Research papers on the class website
    - VHDL resources posted on the website
- **Prerequisites:**
    - Basics of digital design (registers, muxes, adders, FSMs)
    - Basics of architecture (controller+datapath, memories, pipelining)
- **Goals:**
    - Understand reconfigurable computing (RC) issues (architectures, tools, design, etc.)
    - Investigate a specific application through a research project

### What is Reconfigurable Computing?

- Study of architectures adaptable after fabrication
- Implementation of circuits without fabricating a device (circuits as "software")
- Programmable by downloading bits (like microprocessors)
- Bits specify circuit structures (not instructions like in microprocessors)

### Why is RC Important?

- **Performance:** Often much faster than microprocessors
- **Low Power Consumption:** A few RC devices can match a large cluster's performance at a fraction of the power
- **Example:** Novo-G FPGA supercomputer
    - 100s of FPGAs, 10s of Linux nodes
    - Significant speedups for computational biology apps
    - Similar performance to top supercomputers, but with much lower power consumption

### Brief RC History

- Originated for ASIC prototyping
- Used for ASIC replacement
- Performance/energy benefits led to accelerator architectures (mainly embedded systems)
- Microsoft widely adopted FPGAs in servers (accelerating Bing, Azure)
- Other companies followed due to energy advantages

### How to Choose the Best Device for Your Application

- **Factors Influencing Device Choice:**
    - Cost (NRE and unit cost)
    - Performance requirements
    - Energy efficiency
    - Power constraints
    - Size, weight, etc.
    - Time to market
    - Flexibility and adaptability
    - Optimization goals and constraints
- **Economic Considerations:**
    - Total cost = NRE cost + unit cost * volume
    - FPGAs: lower NRE, higher unit cost
    - ASICs: higher NRE, lower unit cost
    - Microprocessors: very low NRE, varying unit cost
- **Application Requirements:**
    - Performance constraints (e.g., video decoder frame rate)
    - Different applications have different constraints (performance, energy, power, cost, etc.)
- **Example:**
    - FPGA: Unit cost = 5, NRE cost = 200,000
    - Microprocessor: Unit cost = 8, NRE cost = 100,000
    - Cheapest implementation depends on volume:
        - &lt;33k units: Microprocessor
        - >33k units: FPGA
- **Other Economic Considerations:**
    - Time to market significantly impacts revenue
    - FPGAs have faster time to market than ASICs
- **Miscellaneous Considerations:**
    - Post-deployment changes/adaptations (FPGAs are reconfigurable)
    - Changing standards (e.g., codecs)
    - Adding new features, bug fixes, security fixes
    - Fault tolerance/recovery
    - Partial reconfiguration (analogous to virtual memory)
- **Optimization Goals and Constraints:**
    - High-performance computing: maximize performance given power/cost constraints
    - Embedded systems: minimize power given performance constraints
    - Data centers: meet throughput while minimizing energy and cooling costs
- **Application Characteristics:**
    - Parallelism, dependencies
    - Arithmetic type (floating-point, fixed-point, integer, bitwise logic)
    - Branching
    - Memory requirements
    - Sensitivity to memory and I/O bandwidth
    - Data structures and memory access patterns
- **Architecture Characteristics:**
    - Peak computational throughput
    - Board architecture (PCIe, SoC, custom)
- **Input Size and Characteristics:**
    - Input size affects performance and energy
    - Small inputs may not utilize all GPU cores or amortize PCIe overheads
    - Large inputs may not fit in on-board memory
- **Common GPU/FPGA Trends:**
    - GPUs excel with SIMT floating-point parallelism and non-divergent control flow
    - FPGAs excel when GPUs have SIMT bottlenecks or custom fixed-point/bit operations are needed
    - FPGAs generally consume less power and energy
    - GPUs are easier to program
- **FPGA vs. GPU Competition:**
    - No clear winner yet.
    - GPUs are typically faster but consume more power.
    - FPGAs are slower and harder to program but use less power and can adapt to new models.
- **Potential Future FPGA Trends:**
    - Energy-efficient high-performance computing (HPC)
    - Mid-2000s: High-end processors with FPGA accelerator boards (Cray, SGI, etc.)
    - Combined high-performance microprocessors with FPGA accelerators (Novo-G)
    - ~2016: Shared-memory "coherent" systems (Intel Xeon+FPGA, IBM Power9)
    - FPGA advantages in HPC:
        - Low volume, ASICs rarely feasible, microprocessors too slow
        - Lower power consumption (important for cooling and energy costs)
- **Where are FPGAs not used?**
    - General-purpose computing (most applications)
        - FPGAs can be fast but not for all applications
        - Requires parallel algorithms
        - Common coding constructs not suitable for hardware
        - Subject of ongoing research
    - High-volume applications (cell phones, some machine learning)
        - ASICs are increasingly common in machine learning (Google's TPU)
        - FPGA vs. GPU competition ongoing
        - GPUs are faster but consume more power
        - FPGAs are slower and harder to program but use less power and are adaptable
    - Gaming, 3D graphics (NVIDIA's GPUs are specialized ASICs)
- **Limitations of FPGAs:**
    - Peak throughput lower than high-end GPUs
    - Programming is more difficult (requires low-level digital design expertise)
    - Device costs can be high (largest FPGAs cost ~$10k)

## Reconfigurable Architectures

**Reconfigurability:** Achieved by creating components with adaptable functions

**History**
- **SPLDs (Simple Programmable Logic Devices):** PALs, PLAs, GALs (limited to hundreds of gates)
- **CPLDs (Complex Programmable Logic Devices):** Combined SPLDs, macrocells, logic blocks
- **FPGAs (Field-Programmable Gate Arrays):** Array of configurable components, millions of gates
- **Coarse-grained RC architectures:** Array of larger components (multipliers, DSP units)

### Optimization Problems

- **Optimization Problems:** Finding the best solution from a set of possibilities.
- **NP-Complete Problems:** Many optimization problems are NP-complete, meaning there's no known efficient solution.
- **Approaches to Solving:**
    - Exhaustive search: Checking all possibilities (not feasible for large problems).
    - Branch and bound: Eliminates possibilities without evaluating them.
    - Heuristics: Finding good solutions quickly.
- **Heuristics:**
    - Hill climbing: Starts with a random solution and iteratively improves it.
        - Fast but can get stuck in local optima.
    - Simulated annealing: Allows occasional worse moves to escape local optima.
        - Can find near-optimal solutions but is sensitive to parameters.
    - Genetic algorithms: Mimics evolution to find good solutions.
        - Can find near-optimal solutions but is sensitive to parameters.
- **Relevance to Reconfigurable Computing:** Many RC tool problems are NP-complete optimization problems.

### Register-Transfer (RT) Synthesis

- **Register-Transfer (RT) Synthesis:** Creating circuits from RTL (Register Transfer Level) descriptions (VHDL, Verilog).
- **Main Steps:**
    1. Lexical/Parsing: Analyzes HDL and converts it to an intermediate representation.
    2. Resource Allocation: Maps the intermediate representation to RT components.
    3. Optimizations: Logic minimization, state minimization, etc.
    4. Technology Mapping: Maps the design to the target technology (e.g., LUTs, CLBs).
    5. Placement and Routing: Determines the physical layout of the circuit.
- **Technology Mapping:** Converts a circuit from one technology (e.g., gates) to the technology used by the physical device (e.g., LUTs, CLBs).
- **Placement:** Assigns each virtual CLB (from the technology-mapped circuit) to a physical CLB in the FPGA fabric.
    - NP-complete problem.
    - Cost functions (e.g., average wire length) are used to estimate routing quality.
- **Routing:** Determines how to configure routing resources to connect CLBs.
    - NP-complete problem.
    - Can be done in two stages: global routing (coarse) and detailed routing (fine-grained).
- **Placement and Routing (PAR):**
    - Highly interdependent.
    - Goals:
        - Fit the circuit on the fabric.
        - Minimize critical path delay.
    - Techniques:
        - Simulated annealing, Kernighan-Lin (KL) heuristic, min-cut problem mapping.

### Parallelism in Reconfigurable Computing

- **Why Microprocessors are Slow:**
    - Von Neumann architecture: Sequential execution, limited by memory bandwidth (Von Neumann bottleneck).
    - RC is fast due to custom circuits that exploit massive parallelism.
- **Types of Parallelism:**
    - Bit-level: Operations on individual bits in parallel.
    - Arithmetic-level (wide): Multiple arithmetic operations in parallel.
    - Pipeline (deep): Multiple stages of a computation overlapped.
    - Task-level: Multiple independent tasks executed concurrently.
- **Systolic Arrays:**
    - Fully pipelined circuits with local connections.
    - Data flows rhythmically through processing elements.
- **Pipelining:**
    - Represents data dependencies using a Data Flow Graph (DFG).
    - Adds pipeline stages to each DFG level.
    - Allocates resources for each operation.
- **Loop Unrolling:**
    - Replicates loop body to increase parallelism.
    - Limited by memory bandwidth and area.
- **Dependencies:**
    - Limit parallelism and increase latency.
    - Can be addressed using parallelizing transformations (e.g., tree height reduction).
- **Control Flow:**
    - If statements can be converted to computation using multiplexers.
- **Other Challenges:**
    - Output bandwidth limitations.
    - Streaming data requirements.
    - Memory bandwidth limitations and non-sequential access patterns.
    - Dynamic memory access patterns and pointer-based data structures.

### High-Level Synthesis (HLS) for Custom Circuits

- **High-Level Synthesis (HLS):**
    - Creates custom circuits from high-level code (C, C++, Java, etc.).
    - Goal: Automate the process of converting high-level code into hardware.
- **Main Steps:**
    1. **Syntactic Analysis:**
        - Lexical analysis: Breaks code into tokens.
        - Parsing: Checks grammatical structure.
        - Creates an intermediate representation (e.g., CDFG).
    2. **Optimization:**
        - Applies various optimizations to the intermediate representation.
    3. **Scheduling/Resource Allocation:**
        - Determines when operations will execute and the resources needed.
    4. **Binding/Resource Sharing:**
        - Maps operations to physical resources and determines resource sharing.
- **Intermediate Representation (IR):**
    - Abstract Syntax Tree (AST), Control/Data Flow Graph (CDFG), Sequencing Graph, etc.
    - CDFG combines control flow and data dependencies.
- **Scheduling:**
    - Assigns start times to operations in the DFG.
    - Types of scheduling problems:
        - Unconstrained
        - Minimum latency
        - Latency-constrained
        - Minimum-latency, resource-constrained
        - Minimum-resource, latency-constrained
- **Scheduling Algorithms:**
    - ASAP (As Soon As Possible)
    - ALAP (As Late As Possible)
    - Hu's Algorithm
    - List Scheduling
- **Binding:**
    - Maps operations to physical resources.
    - Resource sharing is determined using compatibility graphs and clique partitioning.
    - Left Edge Algorithm is an alternative to clique partitioning.
- **Limitations of HLS:**
    - Limited task-level parallelism in CDFG.
    - Coding practices can limit circuit performance.
    - Expert designers can often create better circuits manually.
- **High-Level Synthesis (HLS): Summary**
    - Main Steps:
        1. The front-end (lexing/parsing) converts code into an intermediate representation (e.g., CDFG).
        2. Scheduling assigns a start time for each operation in the DFG.
            - CFG node start times are defined by control dependencies.
        3. Resource allocation is determined by the schedule.
        4. Binding maps scheduled operations onto physical resources.
            - Determines how resources are shared.
    - Big Picture:
        - The scheduled/bound DFG can be translated into a datapath.
        - The CFG can be translated into a controller.
        - HLS can create a custom circuit for any CDFG!

### Buffering Techniques

- **Buffers:**
    - Purposes:
        - Flow control for tasks with different production and consumption rates.
        - [[#Metastability|Metastability]] issues.
        - Memory clock likely different from circuit clock.
        - Stores "windows" of data, delivers to datapath.
        - Conversion between memory and datapath widths.
- **FIFOs (First-In, First-Out):**
    - Most common buffer for synchronizing parallel tasks.
    - Used for synchronizing execution of parallel tasks.
    - Simple control:
        - Producer writes if not full (full provides "back pressure").
        - Consumer reads if not empty.
- **FIFO Sizing:**
    - Tasks often produce/consume data at different rates.
    - Three common situations:
        1. Fp &lt;= Fc (consumer always ready): FIFO depth of 1 (or 0).
        2. Fp &gt; Fc (constant producer stream): Infinite FIFO or producer must monitor full flag.
        3. Fp &gt; Fc (bursty producer): FIFO depth = $B * (1 - Fc / Fp)$
            - B: Maximum consecutive messages (burst)
- **FIFO Sizing with Sliding Window:**
    - When producer and consumer rates are equal within a time window.
    - FIFO depth = min(window - Dc, Dp)
        - Dp: Producer data rate per window
        - Dc: Consumer data rate per window
- **FIFOs Between RAM and Pipelines:**
    - Output data in the order read from memory.
    - Timing issues:
        - Memory bandwidth too small: Circuit stalls or wastes cycles.
        *   Memory bandwidth too large: FIFOs fill up, causing memory reads to stall.
### Improvements

- **Smart Buffers:**
    - Optimize memory access by fetching only necessary data.
    - Avoid redundant reads of reused data.
    - Effectively increase memory bandwidth and enable more loop unrolling.
    - Add latency but improve throughput significantly.
    - Can be implemented using registers (for 1D data) or Block RAM (for 2D data).

### Complete Architecture

- Includes RAM, FIFOs, smart buffers, datapath, address generators, and control logic.
- Operates in multiple clock domains for memory, circuit, and potentially input/output.

### Smart Buffer Implementation

- **Methodology:**
    1. Determine unrolling amount (window size).
    2. Determine buffer size and allocate resources.
    3. Add steering logic to update the buffer for each consecutive window.
- **Register Smart Buffers (1D Data):**
    - Buffer size: Number of elements read from FIFO to get the first window.
    - Steering logic: Implemented to shift data within the buffer for subsequent windows.
- **Block RAM Smart Buffers (2D Data):**
    - Store each row in a separate BRAM.
    - Shift data into a 2D register array (window size).
    - Realign BRAMs after finishing each row.

## Optimization Problems in Reconfigurable Computing

- **Optimization Problems:** Finding the best solution from a set of possibilities.
- **NP-Complete Problems:** Many optimization problems are NP-complete, meaning there's no known efficient solution.
- **Approaches to Solving:**
    - Exhaustive search: Checking all possibilities (not feasible for large problems).
    - Branch and bound: Eliminates possibilities without evaluating them.
    - Heuristics: Finding good solutions quickly.
- **Heuristics:**
    - Hill climbing: Starts with a random solution and iteratively improves it.
        - Fast but can get stuck in local optima.
    - Simulated annealing: Allows occasional worse moves to escape local optima.
        - Can find near-optimal solutions but is sensitive to parameters.
    - Genetic algorithms: Mimics evolution to find good solutions.
        - Can find near-optimal solutions but is sensitive to parameters.
- **Relevance to Reconfigurable Computing:** Many RC tool problems are NP-complete optimization problems.

## Register-Transfer (RT) Synthesis

- **Register-Transfer (RT) Synthesis:** Creating circuits from RTL (Register Transfer Level) descriptions (VHDL, Verilog).
- **Main Steps:**
    1. Lexical/Parsing: Analyzes HDL and converts it to an intermediate representation.
    2. Resource Allocation: Maps the intermediate representation to RT components.
    3. Optimizations: Logic minimization, state minimization, etc.
    4. Technology Mapping: Maps the design to the target technology (e.g., LUTs, CLBs).
    5. Placement and Routing: Determines the physical layout of the circuit.
- **Technology Mapping:** Converts a circuit from one technology (e.g., gates) to the technology used by the physical device (e.g., LUTs, CLBs).
- **Placement:** Assigns each virtual CLB (from the technology-mapped circuit) to a physical CLB in the FPGA fabric.
    - NP-complete problem.
    - Cost functions (e.g., average wire length) are used to estimate routing quality.
- **Routing:** Determines how to configure routing resources to connect CLBs.
    - NP-complete problem.
    - Can be done in two stages: global routing (coarse) and detailed routing (fine-grained).
- **Placement and Routing (PAR):**
    - Highly interdependent.
    - Goals:
        - Fit the circuit on the fabric.
        - Minimize critical path delay.
    - Techniques:
        - Simulated annealing, Kernighan-Lin (KL) heuristic, min-cut problem mapping.

## Parallelism in Reconfigurable Computing

- **Why Microprocessors are Slow:**
    - Von Neumann architecture: Sequential execution, limited by memory bandwidth (Von Neumann bottleneck).
    - RC is fast due to custom circuits that exploit massive parallelism.
- **Types of Parallelism:**
    - Bit-level: Operations on individual bits in parallel.
    - Arithmetic-level (wide): Multiple arithmetic operations in parallel.
    - Pipeline (deep): Multiple stages of a computation overlapped.
    - Task-level: Multiple independent tasks executed concurrently.
- **Systolic Arrays:**
    - Fully pipelined circuits with local connections.
    - Data flows rhythmically through processing elements.
- **Pipelining:**
    - Represents data dependencies using a Data Flow Graph (DFG).
    - Adds pipeline stages to each DFG level.
    - Allocates resources for each operation.
- **Loop Unrolling:**
    - Replicates loop body to increase parallelism.
    - Limited by memory bandwidth and area.
- **Dependencies:**
    - Limit parallelism and increase latency.
    - Can be addressed using parallelizing transformations (e.g., tree height reduction).
- **Control Flow:**
    - If statements can be converted to computation using multiplexers.
- **Other Challenges:**
    - Output bandwidth limitations.
    - Streaming data requirements.
    - Memory bandwidth limitations and non-sequential access patterns.
    - Dynamic memory access patterns and pointer-based data structures.

## High-Level Synthesis (HLS) for Custom Circuits

- **High-Level Synthesis (HLS):**
    - Creates custom circuits from high-level code (C, C++, Java, etc.).
    - Goal: Automate the process of converting high-level code into hardware.
- **Main Steps:**
    1. **Syntactic Analysis:**
        - Lexical analysis: Breaks code into tokens.
        - Parsing: Checks grammatical structure.
        - Creates an intermediate representation (e.g., CDFG).
    2. **Optimization:**
        - Applies various optimizations to the intermediate representation.
    3. **Scheduling/Resource Allocation:**
        - Determines when operations will execute and the resources needed.
    4. **Binding/Resource Sharing:**
        - Maps operations to physical resources and determines resource sharing.
- **Intermediate Representation (IR):**
    - Abstract Syntax Tree (AST), Control/Data Flow Graph (CDFG), Sequencing Graph, etc.
    - CDFG combines control flow and data dependencies.
- **Scheduling:**
    - Assigns start times to operations in the DFG.
    - Types of scheduling problems:
        - Unconstrained
        - Minimum latency
        - Latency-constrained
        - Minimum-latency, resource-constrained
        - Minimum-resource, latency-constrained
- **Scheduling Algorithms:**
    - ASAP (As Soon As Possible)
    - ALAP (As Late As Possible)
    - Hu's Algorithm
    - List Scheduling
- **Binding:**
    - Maps operations to physical resources.
    - Resource sharing is determined using compatibility graphs and clique partitioning.
    - Left Edge Algorithm is an alternative to clique partitioning.
- **Limitations of HLS:**
    - Limited task-level parallelism in CDFG.
    - Coding practices can limit circuit performance.
    - Expert designers can often create better circuits manually.
- **High-Level Synthesis (HLS): Summary**
    - Main Steps:
        1. The front-end (lexing/parsing) converts code into an intermediate representation (e.g., CDFG).
        2. Scheduling assigns a start time for each operation in the DFG.
            - CFG node start times are defined by control dependencies.
        3. Resource allocation is determined by the schedule.
        4. Binding maps scheduled operations onto physical resources.
            - Determines how resources are shared.
    - Big Picture:
        - The scheduled/bound DFG can be translated into a datapath.
        - The CFG can be translated into a controller.
        - HLS can create a custom circuit for any CDFG!

### FPGA Architectures

- **Look-up Tables (LUTs):**
    - Small memories (typically SRAM) used to implement truth tables.
    - Logic inputs connect to address inputs, and the memory output is the logic output.
    - Can implement combinational logic with the same number of inputs and outputs.
    - Example: A 3-input, 2-output LUT can implement a full adder.
    - **Limitations:**
        - LUT size grows exponentially with the number of inputs.
        - Not feasible for large circuits with many inputs due to the exponential growth of the truth table and LUT.
- **Mapping Circuits to Multiple LUTs:**
    - Large circuits are divided into smaller circuits that fit into LUTs.
    - If a circuit doesn't map perfectly:
        - Extra LUT inputs are ignored.
        - Extra LUT outputs are unused (space is wasted).
    - **Key Point:** The number of gates in a circuit doesn't affect LUT mapping; only the number of inputs and outputs matters.
- **Sequential Logic:**
    - FPGAs use Configurable Logic Blocks (CLBs) to handle sequential logic.
    - CLBs contain LUTs, flip-flops, and multiplexers.
    - The multiplexer allows the circuit to use either the LUT output or the flip-flop output.
    - CLBs often have multiple LUTs for efficient I/O sharing and routing resource savings.
    - Specialized connections between CLBs (e.g., carry chains) further optimize specific logic functions.
- **Commercial CLBs:**
    - Xilinx Virtex 4 CLB: 4 slices (1 slice = 2 LUTs + 2 FFs + other components)
    - Altera devices: LABs (Logic Array Blocks) with LEs (logic elements) containing 4-input LUTs.
- **Reconfigurable Interconnect:**
    - Connects CLBs together.
    - Uses fixed wires on the chip.
    - Consists of:
        - Channel wires (routing channels, routing tracks): Placed everywhere to provide flexibility.
        - Connection boxes: Allow CLB inputs/outputs to connect to different wires.
        - Switch boxes (switch matrices): Connect horizontal and vertical routing channels.
- **Connection Box Characteristics:**
    - Flexibility: Number of wires a CLB I/O can connect to.
    - Topology: Defines the specific wires each CLB I/O can connect to.
- **Switch Box Characteristics:**
    - Flexibility: Number of wires a single wire can connect to.
    - Topology: Defines which wires can be connected (planar/subset vs. Wilton).
    - Routability: A measure of the number of circuits that can be routed.
        - Higher flexibility and Wilton topology improve routability.
- **FPGA Fabrics:**
    - 2D array of CLBs and programmable interconnect.
    - Include dedicated memory components (Block RAM or MLABs) to avoid using LUTs for memory.
    - Block RAM can be placed anywhere in the fabric, often in columns.
- **DSP Components:**
    - Custom DSP units for efficient implementation of DSP functions (adders, multipliers, MAC, etc.).
    - Examples: Xilinx DSP48, Altera multiplier blocks.
- **Other Resources:**
    - I/O pins and high-speed serial transceivers for communication.
    - Clock resources (clock trees) for timing management.
- **Programming FPGAs:**
    - Bitfile: Contains configuration bits for LUTs, control flip-flops, and routing resources.
    - Shift registers are used to load the bitfile into the FPGA.
    - Partial reconfiguration allows specific regions to be reconfigured.
- **FPGA Architecture Tradeoffs:**
    - Larger LUTs are faster but waste transistors if not all inputs are used.
    - More flexible routing improves routability but consumes chip area.
    - FPGA fabrics are designed for specific application domains (DSP, HPC, embedded systems).
- **Examples:**
    - Xilinx Virtex IV: LX (logic), SX (signal processing), FX (embedded systems)
    - Xilinx 7 Series: Artix, Kintex, Virtex
    - Zynq: Combines ARM processor with programmable logic
    - Altera Stratix/Arria 10: High LUT count, floating-point cores, HyperFlex interconnect

### Example Fabrics

- Virtex 7 (image from Xilinx 7-series overview)
- Altera Stratix/Arria 10
    - > 1 million LUTs
    - Floating-point cores in fabric
    - HyperFlex Interconnect
        - Embeds flip flops into reconfigurable interconnect
        - Enables significantly faster clock speeds
    - [altera/stratix-seriesl](https://www.altera.com/products/fpga/stratix-series/stratix-10/overview.html)

### Metastability

Metastability is a phenomenon that can occur in digital circuits when a signal is sampled near its threshold voltage during a clock transition. This can cause the sampled value to become unpredictable, oscillating between 0 and 1 for an indeterminate amount of time. Metastability can lead to errors in the circuit's operation and can be difficult to debug.

#### Causes of Metastability

- **Clock Domain Crossing:** When a signal is transferred between two unrelated clock domains, there is no guarantee that the signal will be stable at the sampling edge of the receiving clock. This can lead to metastability.
- **Asynchronous Inputs:** Asynchronous inputs to a synchronous circuit can also cause metastability if they change near the clock edge.

#### Mitigating Metastability

- **Synchronizers:** The most common way to mitigate metastability is to use synchronizers. A synchronizer is a chain of flip-flops that are clocked by the receiving clock domain. The idea is that the first flip-flop may become metastable, but the probability of subsequent flip-flops remaining metastable decreases exponentially with each stage.
- **Clock Domain Crossing (CDC) Design Techniques:** Proper CDC design techniques can help to minimize the probability of metastability. These techniques include using gray code for crossing signals, avoiding gated clocks, and using appropriate synchronization protocols.
- **FIFO Buffers:** FIFOs (First-In, First-Out) buffers can also be used to mitigate metastability. By storing data in a FIFO, the receiving clock domain can sample the data at its own pace, reducing the risk of metastability.

#### Metastability in FPGAs

FPGAs are particularly susceptible to metastability due to their reconfigurable nature and the presence of multiple clock domains. The programmable interconnect in FPGAs can introduce additional delays and uncertainties, increasing the risk of metastability.

To mitigate metastability in FPGAs, designers can use the same techniques as in other digital circuits, such as synchronizers and FIFO buffers. Additionally, FPGA vendors often provide specialized resources and tools to help designers manage metastability issues.

#### Additional Notes

- Metastability is a probabilistic phenomenon. It is impossible to eliminate the risk of metastability completely, but it can be reduced to an acceptable level.
- The probability of metastability depends on several factors, including the clock frequency, the setup and hold times of the flip-flops, and the amount of time available for synchronization.
- Metastability can be a difficult problem to debug because it is not always reproducible.