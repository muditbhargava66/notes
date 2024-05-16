---
title: '"📖 Operating Systems 🐧"'
date: 2024-05-15
Version: 
description: 
tags: 
draft:
---
## Chapter 2: Introduction to Operating Systems

### Key Concepts

- **Operating System (OS):** Software that manages hardware resources and provides services to applications.
- **Virtualization:** The OS transforms physical resources (CPU, memory, disk) into a more general, powerful, and easy-to-use virtual form.
- **Resource Manager:** The OS manages and allocates resources like CPU time, memory, and disk space to different processes.
- **Standard Library:** The OS provides a standard library of system calls (APIs) that applications can use to interact with the hardware and request services.

### Virtualizing the CPU

- **Process:** A running program.
- **Process States:** Running, Ready, Blocked.
- **Process Control Block (PCB):** Data structure storing process information.
- **Context Switch:** Switching the CPU between processes.
- **Scheduling Policies:** FIFO, SJF, STCF, Round Robin, Multi-Level Feedback Queue (MLFQ).

### Virtualizing Memory

- **Address Space:** Abstraction of a process's own memory.
- **Virtual Address vs. Physical Address:** Translation is needed.
- **Page Table:** Maps virtual pages to physical frames.
- **Page Fault:** Accessing a page not in memory.
- **Page Replacement Policies:** Optimal, FIFO, LRU, Clock Algorithm.

### Persistence

- **I/O Devices:** Hardware for input/output.
- **Device Drivers:** Software managing device interaction.
- **Hard Disk Drives (HDDs):** Persistent storage with sectors.
- **Disk Scheduling:** Optimizing disk access order (SSTF, SCAN, SPTF).
- **Redundant Arrays of Inexpensive Disks (RAID):** Combining disks for performance, capacity, and reliability (RAID 0, RAID 1, RAID 4/5).

### File Systems

- **File:** Linear array of bytes.
- **Directory:** Collection of (name, inode number) pairs.
- **Inode:** Stores file metadata.
- **File System Layout:** Superblock, Inode Table, Data Blocks, Free Space Management.
- **File System Consistency:** Ensuring correctness after crashes (fsck, journaling).

### Distributed Systems

- **Distributed File Systems:** Multiple clients accessing files on a server.
- **NFS:** Sun's Network File System (stateless protocol, idempotent operations).
- **AFS:** Andrew File System (whole-file caching, callbacks).

## Chapter 4: The Abstraction: The Process

### Key Concepts

- **Process:** The OS's abstraction of a running program.
- **Process API:** System calls for creating, destroying, waiting on, and controlling processes.
- **Process Creation:** Loading code and static data, allocating stack and heap, setting up I/O.
- **Process States:** Running, Ready, Blocked.
- **Process List:** Tracks all processes in the system.

### Process API

- **Create:** `fork()` (creates a new child process that is a copy of the parent).
- **Destroy:** `kill()` (sends a signal to terminate a process).
- **Wait:** `wait()` (waits for a child process to terminate).
- **Miscellaneous Control:** `suspend()`, `resume()`.
- **Status:** `getpid()` (gets the process ID).

### Process Creation

1. **Load Code and Static Data:** Read from disk into memory.
2. **Allocate Stack and Heap:** For runtime execution.
3. **Set Up I/O:** Standard input, output, error.
4. **Start Execution:** Jump to `main()`.

### Process States and Transitions

- **Running:** Executing on the CPU.
- **Ready:** Ready to run, waiting for the CPU.
- **Blocked:** Waiting for an event (e.g., I/O).

## Chapter 5: Interlude: Process API

### Key Concepts

- **fork()**: Creates a new child process that is a copy of the parent.
- **wait()**: Waits for a child process to terminate.
- **exec()**: Replaces the current process image with a new program.
- **Process Control:** Signals (e.g., SIGINT, SIGTSTP).
- **Users:** Processes are associated with users for security and resource management.
- **Superuser (root):** Has special privileges to control all processes.

### fork(), wait(), exec()

- **fork()**: Creates a child process.
- **wait()**: Waits for a child to terminate.
- **exec()**: Replaces the current process with a new program.

### Process Control and Users

- **Signals:** Used to communicate with processes (e.g., kill, interrupt, stop).
- **Users:** Control their own processes.
- **Superuser (root):** Can control all processes.

## Chapter 6: Mechanism: Limited Direct Execution

### Key Concepts

- **Limited Direct Execution (LDE):** The mechanism for virtualizing the CPU.
- **User Mode vs. Kernel Mode:** Two privilege levels for processes.
- **System Calls:** Interface for user programs to request OS services.
- **Trap Instructions:** Used to switch from user mode to kernel mode and initiate a system call.
- **Trap Table:** Stores addresses of system call handlers.
- **Timer Interrupt:** Used to regain control from a running process.
- **Context Switch:** Switching between processes by saving and restoring register context.

### Limited Direct Execution

1. **OS loads program:** Sets up process state, loads code into memory.
2. **Process runs in user mode:** Executes instructions directly on the CPU.
3. **System call or interrupt:** Process traps into kernel mode.
4. **OS regains control:** Services the request and returns control to the process.

### Restricted Operations and System Calls

- **User Mode:** Limited privileges.
- **Kernel Mode:** Full privileges.
- **System Calls:** `open()`, `read()`, `write()`, etc.

### Context Switching

- **Saves registers of the current process.**
- **Restores registers of the next process.**
- **Resumes execution of the next process.**

## Chapter 7: Scheduling: Introduction

### Key Concepts

- **Workload:** The set of processes that need to be scheduled.
- **Scheduling Metrics:** Turnaround time, response time, fairness.
- **Scheduling Policies:** FIFO, SJF, STCF, Round Robin.
- **Convoy Effect:** Short jobs get stuck behind long jobs.

### Workload Assumptions (Simplified)

- Each job runs for the same amount of time.
- All jobs arrive at the same time.
- Once started, each job runs to completion.
- All jobs only use the CPU (no I/O).
- The run-time of each job is known.

### Scheduling Metrics

- **Turnaround Time:** Time from job arrival to completion.
- **Response Time:** Time from job arrival to first run.
- **Fairness:** How evenly is CPU time distributed?

### Scheduling Policies

- **FIFO:** First-In-First-Out.
- **SJF:** Shortest Job First (non-preemptive).
- **STCF:** Shortest Time-to-Completion First (preemptive SJF).
- **Round Robin:** Time slicing for fairness.

## Chapter 8: Scheduling: The Multi-Level Feedback Queue

### Key Concepts

- **Multi-Level Feedback Queue (MLFQ):** A scheduling algorithm that tries to balance turnaround time and response time.
- **Priority Levels:** Jobs are assigned to queues with different priorities.
- **Priority Adjustment:** MLFQ adjusts job priorities based on their behavior.
- **Starvation:** Long-running jobs may never get to run.
- **Gaming:** Users may try to trick the scheduler.

### MLFQ Rules

1. Higher priority jobs run first.
2. Jobs with the same priority run in RR.
3. New jobs start at the highest priority.
4. Jobs that use their entire time slice are demoted.
5. Periodically boost all jobs to the highest priority.

### MLFQ: Attempts and Improvements

- **Attempt #1:** Basic rules lead to starvation and gaming.
- **Attempt #2:** Priority boost to prevent starvation.
- **Attempt #3:** Better accounting to prevent gaming.

### Tuning MLFQ

- Number of queues, time slice per queue, priority boost interval.
- Solaris Time-Sharing (TS) class: Table-driven configuration.
- Other MLFQs: Use formulas for priority adjustment.

## Chapter 9: Scheduling: Proportional Share

### Key Concepts

- **Proportional Share Scheduling:** Guarantees each job a certain percentage of CPU time.
- **Lottery Scheduling:** Uses lottery tickets to represent shares.
- **Stride Scheduling:** A deterministic version of lottery scheduling.
- **Linux Completely Fair Scheduler (CFS):** Uses virtual runtime (`vruntime`) to achieve fairness.

### Lottery Scheduling

- **Tickets:** Represent the share of CPU time a process should receive. The percentage of tickets a process has represents its share of the CPU.
- **Lottery:** Held periodically to determine which process runs next. The scheduler picks a random ticket number, and the process holding that ticket gets to run.
- **Probabilistic Correctness:** Over time, the number of times a process wins the lottery should be proportional to its number of tickets.
- **Ticket Currency:** Allows users to allocate tickets to their jobs in their own currency, which is then converted to a global currency for the lottery.
- **Ticket Transfer:** Processes can temporarily hand off their tickets to other processes.
- **Ticket Inflation:** Processes can temporarily increase or decrease their number of tickets.

### Stride Scheduling

- **Deterministic:** Unlike lottery scheduling, stride scheduling is deterministic. It ensures each job gets its exact share of the CPU over a fixed interval.
- **Stride:** Each job has a stride value, which is inversely proportional to its number of tickets.
- **Pass Value:** A counter for each job that tracks its progress.
- **Scheduling Decision:** The job with the lowest pass value is chosen to run next. After running, its pass value is incremented by its stride.

### Linux Completely Fair Scheduler (CFS)

- **Virtual Runtime (vruntime):** A counter that tracks how much CPU time a process has received, adjusted by its priority (niceness).
- **Scheduling Decision:** The process with the lowest vruntime is chosen to run next.
- **sched_latency:** The target latency over which CFS tries to achieve fairness.
- **min_granularity:** The minimum time slice for a process.
- **Niceness and Weight:** Processes can be assigned different priorities (niceness), which are mapped to weights. Weights are used to adjust vruntime and time slice calculations.
- **Red-Black Trees:** CFS uses red-black trees to efficiently manage runnable processes and find the next process to run.

### Challenges of Proportional Share Scheduling

- **I/O Bound Jobs:** Proportional share schedulers may not handle I/O-bound jobs well, as they may not get their fair share of the CPU if they block frequently.
- **Ticket/Priority Assignment:** Determining the appropriate number of tickets or priority for each job can be difficult.

### Use Cases for Proportional Share Scheduling

- **Virtualized Environments:** Allocating CPU resources to virtual machines.
- **Shared Clusters:** Ensuring fair resource allocation among users.

## Chapter 10: Multiprocessor Scheduling (Advanced)

### Key Concepts

- **Multiprocessor Scheduling:** Scheduling jobs on systems with multiple CPUs.
- **Challenges:** Scalability, cache affinity, load balancing.
- **Single-Queue Multiprocessor Scheduling (SQMS):** All jobs in one queue.
- **Multi-Queue Multiprocessor Scheduling (MQMS):** One queue per CPU.
- **Migration:** Moving jobs between CPUs to balance load.
- **Work Stealing:** A technique for load balancing in MQMS.

### Multiprocessor Architecture

- **Hardware Caches:** Small, fast memories that store copies of frequently used data from main memory.
- **Cache Coherence:** Ensuring consistency of cached data across multiple CPUs.
- **Bus Snooping:** A technique for maintaining cache coherence in bus-based systems.
- **Synchronization:** Using locks or other mechanisms to protect shared data in multi-threaded programs.
- **Cache Affinity:** The tendency for a process to run faster on the same CPU due to cached data.

### Single-Queue Scheduling (SQMS)

- **Simple:** Easy to implement.
- **Unscalable:** Locking overhead increases with more CPUs.
- **Poor Cache Affinity:** Jobs bounce between CPUs.

### Multi-Queue Scheduling (MQMS)

- **Scalable:** Each CPU has its own queue.
- **Good Cache Affinity:** Jobs stay on the same CPU.
- **Load Imbalance:** Some CPUs may be idle while others are busy.
- **Migration:** Moving jobs between queues to balance load.
- **Work Stealing:** A technique for load balancing.

### Linux Multiprocessor Schedulers

- **O(1) Scheduler:** Priority-based, focuses on interactivity. ***Completely Fair Scheduler (CFS):** Fair sharing of CPU resources.

## Chapter 11: Virtual Memory: Introduction

### Key Concepts

- **Virtual Memory (VM):** Provides each process with its own private linear address space.
- **Demand Paging:** Pages are only brought into memory when needed.
- **Page Table:** Maps virtual pages to physical frames.
- **Swap Space:** Disk space used to store pages not currently in memory.
- **Translation Lookaside Buffer (TLB):** A cache for address translation entries.

### Address Translation

- **Virtual Address (VA):** Generated by the CPU.
- **Physical Address (PA):** Used to access memory.
- **Page Table:** Maps VA to PA.
- **Page:** A fixed-size unit of memory.
- **Frame:** A fixed-size unit of physical memory.

### Steps in Address Translation

1. **CPU generates VA.**
2. **TLB checks for VA to PA mapping.**
3. **If TLB hit, use PA from TLB.**
4. **If TLB miss, use page table to find PA.**
5. **If page fault, load page into memory.**
6. **Update TLB and page table.**
7. **Access memory using PA.**

### Demand Paging

- **Lazy Loading:** Pages are only brought into memory when accessed.
- **Swap Space:** Pages not in memory are stored on disk.
- **Page Fault:** When a page not in memory is accessed.
- **Page Replacement:** Choosing a page to evict when memory is full.

## Chapter 12: Virtual Memory: Mechanisms

### Key Concepts

- **Page Table Structure:** Hierarchical or hashed.
- **Swap Space:** Disk space for storing pages not in memory.
- **Present Bit:** Indicates if a page is in memory.
- **Dirty Bit:** Indicates if a page has been modified.
- **Reference Bit (Accessed Bit):** Indicates if a page has been accessed recently.
- **Protection Bits:** Control access permissions for a page (read, write, execute).

### Page Table Structures

- **Linear Page Table:** Simple but large.
- **Multi-Level Page Table:** Hierarchical, smaller than linear.
- **Inverted Page Table:** Stores (frame number, PID) pairs.
- **Hashed Page Table:** Hash virtual page number to find entry.

### Page Fault Handling

1. **Trap to the kernel.**
2. **Check if access is valid.**
3. **Find a free frame.**
4. **Fetch page from disk.**
5. **Update page table and TLB.**
6. **Restart the faulting instruction.**

### Copy-on-Write (COW):** A technique for optimizing fork() by sharing pages between parent and child processes. Only when a process modifies a shared page is a copy made.

## Chapter 13: Virtual Memory: Policies

### Key Concepts

- **Page Replacement Policies:** Choosing a victim page to evict when memory is full.
    - **Optimal (OPT):** Replace the page that will not be used for the longest time in the future.
    - **FIFO:** Replace the oldest page.
    - **Least Recently Used (LRU):** Replace the least recently used page.
    - **Clock Algorithm (Second Chance):** An approximation of LRU.
- **Thrashing:** Excessive paging due to lack of memory.
- **Working Set Model:** The set of pages a process needs to execute efficiently.
- **Page Fault Frequency (PFF):** A metric for adjusting the working set size.

### Page Replacement Policies

- **Optimal (OPT):** Theoretical, not implementable.
- **FIFO:** Simple but suffers from Belady's anomaly.
- **Least Recently Used (LRU):** Good approximation of OPT, but expensive to implement.
- **Clock Algorithm (Second Chance):** An efficient approximation of LRU.

### Thrashing

- Occurs when a process spends more time paging than executing.
- Caused by not having enough memory for the working set.
- Solution: Increase memory or reduce the number of active processes.

### Working Set Model

- The working set is the set of pages a process needs to execute efficiently.
- Working set size changes over time.
- The OS can estimate the working set size using PFF.

### Page Fault Frequency (PFF)

- Measures the rate at which a process is experiencing page faults.
- Used to adjust the working set size.
- If PFF is too high, increase working set size.
- If PFF is too low, decrease working set size.

## Chapter 14: Interlude: Memory API

### Key Concepts

- **Stack Memory (Automatic Memory):** Managed implicitly by the compiler. Used for local variables and function parameters.
- **Heap Memory:** Explicitly managed by the programmer using `malloc()` and `free()`. Used for dynamic data structures.
- **Common Errors:** Forgetting to allocate/free memory, not allocating enough memory (buffer overflow), forgetting to initialize allocated memory, freeing memory multiple times (double free), freeing memory before you are done with it (dangling pointer), calling `free()` incorrectly.

### Memory Allocation in C

- **`malloc(size_t size)`:** Allocates a block of memory of the specified size on the heap. Returns a `void` pointer to the allocated memory or `NULL` on failure.
- **`free(void *ptr)`:** Deallocates the memory block pointed to by `ptr`.
- **`calloc(size_t nmemb, size_t size)`:** Allocates memory for an array of `nmemb` elements, each of size `size`, and initializes all bytes to zero.
- **`realloc(void *ptr, size_t size)`:** Resizes the memory block pointed to by `ptr` to the specified `size`.

### Common Memory Errors

- **Forgetting to Allocate Memory:** Leads to segmentation faults.
- **Not Allocating Enough Memory:** Buffer overflows, potential security vulnerabilities.
- **Forgetting to Initialize Allocated Memory:** Uninitialized reads, unpredictable behavior.
- **Forgetting to Free Memory:** Memory leaks, can lead to running out of memory.
- **Freeing Memory Before You Are Done With It:** Dangling pointers, crashes, or data corruption.
- **Freeing Memory Repeatedly:** Double frees, undefined behavior.
- **Calling `free()` Incorrectly:** Passing invalid pointers to `free()`, undefined behavior.

### Underlying OS Support

- **`brk()` and `sbrk()`:** System calls used by the memory allocation library to change the size of the heap.
- **`mmap()`:** Can be used to create anonymous memory regions (not associated with any file) that can be used like the heap.

## Chapter 15: Mechanism: Address Translation

### Key Concepts

- **Address Translation:** The hardware mechanism that translates virtual addresses (generated by the process) into physical addresses (used to access memory).
- **Base and Bounds:** A simple form of address translation using two registers:
    - **Base Register:** Stores the starting physical address of a process's address space.
    - **Bounds Register:** Stores the size of the address space.
- **Dynamic Relocation:** The ability to move a process's address space to a different location in physical memory after it has started running.
- **Hardware Support:** Privileged mode, base and bounds registers, address translation circuitry, exception handling.
- **Operating System (OS) Responsibilities:** Memory management, base and bounds management, exception handling.

### Address Translation Process

1. **CPU generates a virtual address (VA).**
2. **Hardware adds the base register value to the VA to get the physical address (PA).**
3. **Hardware checks if the VA is within bounds.**
4. **If the VA is out of bounds, a segmentation fault occurs.**
5. **If the VA is valid, the hardware accesses memory using the PA.**

### Hardware Support

- **Privileged Mode:** Prevents user processes from modifying base and bounds registers.
- **Base and Bounds Registers:** Store the base address and size of the address space.
- **Address Translation Circuitry:** Performs the addition and bounds checking.
- **Exception Handling:** Raises exceptions for invalid memory accesses.

### Operating System Responsibilities

- **Memory Management:** Allocates and deallocates memory for processes.
- **Base and Bounds Management:** Sets the base and bounds registers for each process.
- **Exception Handling:** Handles segmentation faults and other exceptions.

## Chapter 16: Segmentation

### Key Concepts

- **Segmentation:** A memory management scheme that divides the address space into logical segments (e.g., code, heap, stack).
- **Segment Table:** Stores the base address, size, and protection bits for each segment.
- **External Fragmentation:** Wasted space between segments in physical memory.
- **Internal Fragmentation:** Wasted space within a segment.
- **Sharing:** Segments can be shared between processes.
- **Protection:** Segments can have different access permissions (read, write, execute).

### Segmentation vs. Base and Bounds

- Segmentation is a generalization of base and bounds.
- Instead of one base and bounds pair for the entire address space, there is a pair for each segment.
- This allows for more flexible placement of segments in physical memory.

### Segmentation Hardware

- **Segment Table:** Stores base, bounds, and protection bits for each segment.
- **Segment Registers:** Point to the segment table entries for the currently active segments.

### Segmentation and Sharing

- **Code Sharing:** The code segment can be shared between processes by marking it as read-only.
- **Data Sharing:** Other segments can also be shared, but care must be taken to ensure proper synchronization.

### External Fragmentation

- Since segments are variable-sized, external fragmentation can occur.
- Solutions:
    - **Compaction:** Rearrange segments to create larger contiguous free spaces.
    - **Free-List Management Algorithms:** Best fit, worst fit, first fit, next fit.

## Chapter 17: Free-Space Management

### Key Concepts

- **Free-Space Management:** The task of keeping track of free memory and allocating it to processes.
- **Heap:** The region of memory used for dynamic allocation.
- **Free List:** A data structure that tracks free chunks of memory in the heap.
- **Splitting:** Dividing a large free chunk into smaller chunks to satisfy an allocation request.
- **Coalescing:** Merging adjacent free chunks into a larger chunk.
- **External Fragmentation:** Wasted space between allocated blocks.
- **Internal Fragmentation:** Wasted space within an allocated block.

### Free List Implementation

- The free list is typically implemented as a linked list of nodes.
- Each node stores the size and a pointer to the next free block.
- The list can be sorted by address or size.

### Allocation Strategies

- **Best Fit:** Choose the smallest free block that is large enough to satisfy the request.
- **Worst Fit:** Choose the largest free block.
- **First Fit:** Choose the first free block that is large enough.
- **Next Fit:** Similar to first fit, but starts the search from the last allocated block.

### Other Approaches

- **Segregated Lists:** Maintain separate free lists for different size classes.
- **Buddy Allocation:** Divide free space into power-of-two sized blocks.
- **Slab Allocation:** Pre-allocate and cache objects of common sizes.

## Chapter 18: Paging: Introduction

### Key Concepts

- **Paging:** A memory management scheme that divides the address space into fixed-sized pages.
- **Page Table:** Stores the mapping between virtual pages and physical frames.
- **Page Fault:** Occurs when a process accesses a page not in memory.
- **Demand Paging:** Pages are only brought into memory when needed.
- **Swap Space:** Disk space used to store pages not currently in memory.

### Paging vs. Segmentation

- **Paging:** Fixed-sized pages, no external fragmentation.
- **Segmentation:** Variable-sized segments, can lead to external fragmentation.

### Page Table Structure

- **Linear Page Table:** Simple array, but can be very large.
- **Multi-Level Page Table:** Hierarchical structure, reduces memory overhead.

### Address Translation with Paging

1. **CPU generates a virtual address (VA).**
2. **Extract the virtual page number (VPN) from the VA.**
3. **Use the VPN to index into the page table and find the corresponding page table entry (PTE).**
4. **If the PTE is valid, extract the physical frame number (PFN) from the PTE.**
5. **Concatenate the PFN with the offset from the VA to form the physical address (PA).**
6. **Access memory using the PA.**

### Page Faults

- **Occurs when a process accesses a page not in memory.**
- **Handled by the OS:**
    1. Find a free frame or evict a page.
    2. Read the page from disk into the free frame.
    3. Update the page table.
    4. Restart the faulting instruction.

## Chapter 19: Paging: Faster Translations (TLBs)

### Key Concepts

- **Translation Lookaside Buffer (TLB):** A hardware cache for page table entries (PTEs).
- **TLB Hit:** The desired translation is found in the TLB.
- **TLB Miss:** The desired translation is not found in the TLB.
- **Hardware-Managed TLB:** Hardware handles TLB misses by walking the page table.
- **Software-Managed TLB:** OS handles TLB misses by updating the TLB.

### TLB Basic Algorithm

2. Extract the virtual page number (VPN) from the virtual address.
4. Check if the TLB holds the translation for this VPN.
6. If TLB hit:
    
    - Check protection bits.
    - If access allowed, form physical address and access memory.
    - If access not allowed, raise a protection fault.
    
8. If TLB miss:
    
    - Hardware-managed: Walk the page table, update TLB, retry instruction.
    - Software-managed: Raise a TLB miss exception, OS handles the miss, retries the instruction.
    

### TLB and Locality

- TLBs exploit spatial and temporal locality in memory accesses to improve performance.
- Spatial locality: Accessing nearby addresses.
- Temporal locality: Accessing the same address repeatedly.

### TLB Contents

- **VPN:** Virtual Page Number.
- **PFN:** Physical Frame Number.
- **Valid Bit:** Indicates if the entry is valid.
- **Protection Bits:** Control access permissions (read, write, execute).
- **ASID (Address Space Identifier):** Distinguishes between address spaces of different processes.

### TLB and Context Switches

- TLB entries are process-specific.
- Solutions to TLB flushing on context switches:
    
    - **Flush TLB:** Invalidate all entries.
    - **Address Space Identifiers (ASIDs):** Tag TLB entries with ASID to differentiate between processes.
    

### TLB Replacement Policies

- **LRU (Least Recently Used):** Replace the least recently used entry.
- **Random:** Replace a random entry.

### Real-World TLB Example: MIPS R4000

- 19-bit VPN (for user addresses).
- 24-bit PFN (supports up to 64GB of physical memory).
- Additional bits: Global bit (G), ASID, Coherence bits (C), Dirty bit (D), Valid bit (V).

## Chapter 20: Paging: Smaller Tables

### Key Concepts

- **Large Pages:** Using larger page sizes to reduce the size of the page table.
- **Multi-Level Page Tables:** A hierarchical page table structure that reduces memory overhead by only allocating page table entries for valid pages.
- **Inverted Page Tables:** A page table that stores entries for each physical frame, rather than each virtual page.
- **Page Table Swapping:** Swapping out portions of the page table to disk when memory is tight.

### Large Pages

- **Pros:** Smaller page tables, reduced TLB misses.
- **Cons:** Increased internal fragmentation (wasted space within a page).

### Multi-Level Page Tables

- **Pros:** Smaller page tables, support for sparse address spaces.
- **Cons:** Increased complexity, slightly higher TLB miss overhead.

### Inverted Page Tables

- **Pros:** Very small page table size.
- **Cons:** Complex and slow translation process.

### Page Table Swapping

- Allows page tables to be stored in virtual memory and swapped to disk if needed.
- Reduces memory pressure but can introduce additional overhead.

## Chapter 21: Beyond Physical Memory: Mechanisms

### Key Concepts

- **Swap Space:** Disk space used to store pages not currently in memory.
- **Present Bit:** Indicates whether a page is in memory or on disk.
- **Page Fault:** Occurs when a process accesses a page not in memory.
- **Page Fault Handler:** OS routine that handles page faults.
- **Demand Paging:** Pages are brought into memory only when needed.
- **Page Replacement:** Choosing a page to evict when memory is full.
- **Swap Daemon (Page Daemon):** A background thread that writes dirty pages to disk.

### Page Fault Handling Mechanism

2. **Hardware traps to the OS.**
4. **Page fault handler determines the location of the page on disk.**
6. **If memory is full, select a victim page for replacement.**
8. **Read the page from disk into a free frame.**
10. **Update the page table and TLB.**
12. **Restart the faulting instruction.**

### Swap Space Management

- **Swap Space:** A dedicated disk partition or file used to store pages not in memory.
- **Page-Out:** Writing a dirty page to swap space.
- **Page-In:** Reading a page from swap space into memory.

### Page Replacement Policies

- Discussed in detail in Chapter 22.

### Swap Daemon

- Runs in the background.
- Periodically writes dirty pages to disk to free up memory.
- Helps prevent thrashing.

## Chapter 22: Beyond Physical Memory: Policies

### Key Concepts

- **Page Replacement Policies:**
    
    - **Optimal (OPT):** Replace the page that will not be used for the longest time in the future.
    - **FIFO:** Replace the oldest page.
    - **Least Recently Used (LRU):** Replace the least recently used page.
    - **Clock Algorithm:** An approximation of LRU.
    
- **Thrashing:** Excessive paging due to lack of memory.
- **Working Set:** The set of pages a process is actively using.

### Page Replacement Policies

- **Optimal (OPT):** Theoretical, not implementable.
- **FIFO:** Simple but can lead to poor performance.
- **LRU:** Good performance but expensive to implement perfectly.
- **Clock Algorithm:** A good approximation of LRU with lower overhead.

### Thrashing

- Occurs when the system spends more time paging than executing.
- Caused by not having enough memory for the working sets of active processes.
- Solutions:
    
    - Increase memory.
    - Reduce the number of active processes.
    - Use a smarter page replacement policy.
    

### Working Set

- The set of pages a process is actively using.
- Working set size changes over time.
- The OS can estimate the working set size using the page fault frequency (PFF).

## Chapter 23: Complete Virtual Memory Systems

### Key Concepts

- **VAX/VMS Virtual Memory:** An early example of a modern VM system.
- **Linux Virtual Memory:** A modern VM system used in a wide range of devices.
- **Page Table Structure:** VAX/VMS and Linux use multi-level page tables.
- **Page Replacement:** VAX/VMS uses a modified FIFO with second-chance lists, Linux uses a modified clock algorithm.
- **Other Features:** Demand zeroing, copy-on-write, prefetching, clustering.

### VAX/VMS Virtual Memory

- **Hardware:** 32-bit address space, 512-byte pages, hybrid segmentation/paging.
- **Page Table:** Stored in kernel virtual memory, can be swapped to disk.
- **Page Replacement:** Segmented FIFO with second-chance lists.
- **Other Features:** Demand zeroing, copy-on-write, clustering.

### Linux Virtual Memory

- **Hardware:** x86 architecture, multi-level page tables, support for large pages.
- **Page Table:** Four-level page table for 48-bit virtual addresses.
- **Page Replacement:** Modified clock algorithm.
- **Other Features:** Demand zeroing, copy-on-write, prefetching, transparent huge pages.

### Security Considerations

- **Buffer Overflow Attacks:** Can be mitigated by the NX (No eXecute) bit and address space layout randomization (ASLR).
- **Meltdown and Spectre:** Hardware vulnerabilities that can be exploited to leak information across security boundaries.

## Chapter 24: Summary Dialogue on Memory Virtualization

### Key Points

- **Virtual Memory (VM):** Provides the illusion of a large, private address space for each process.
- **Address Translation:** Converts virtual addresses to physical addresses.
- **TLB:** A hardware cache for address translations.
- **Page Table:** A data structure that stores the mapping between virtual pages and physical frames.
- **Page Fault:** Occurs when a process accesses a page not in memory.
- **Page Replacement:** Choosing a page to evict when memory is full.
- **Swapping:** Moving pages between memory and disk.

### Importance of Understanding VM

- Helps diagnose performance problems.
- Allows for better understanding of system behavior.
- Enables writing more efficient code.

### Key Components of a VM System

- **Hardware:** TLB, page table registers, MMU.

## Chapter 25: A Dialogue on Concurrency

### Key Points

- **Concurrency:** The ability of an operating system to manage multiple threads of execution within a single process.
- **Threads:** Independent sequences of instructions that can be executed concurrently within a shared address space.
- **Challenges of Concurrency:**
    - **Race Conditions:** When the outcome of a program depends on the unpredictable order in which threads execute.
    - **Synchronization:** Coordinating access to shared resources to prevent race conditions.
    - **Deadlocks:** When two or more threads are blocked, each waiting for a resource held by another.

### The Peach Analogy

The professor uses a peach analogy to explain concurrency:

- **Multiple eaters (threads) want to eat peaches (access shared resources).**
- **If they don't coordinate, they might grab the same peach (race condition).**
- **A solution is to form a line (use synchronization).**

### Why Study Concurrency in OS?

- **OS Support:** The OS provides primitives like locks and condition variables for thread synchronization.
- **The OS as a Concurrent Program:** The OS itself is a multi-threaded program and needs to manage its own internal concurrency.

## Chapter 26: Concurrency: An Introduction

### Key Concepts

- **Thread:** A unit of execution within a process.
- **Thread Control Block (TCB):** Stores the state of a thread (similar to PCB for processes).
- **Parallelism:** Using multiple threads to perform tasks simultaneously on multiple processors.
- **Shared Memory:** Threads within a process share the same address space, allowing easy data sharing.
- **Race Conditions:** When the outcome of a program depends on the unpredictable order in which threads execute.
- **Critical Section:** A section of code that accesses shared data and must be executed atomically.
- **Mutual Exclusion:** Ensuring that only one thread can execute a critical section at a time.
- **Indeterminate Program:** A program with race conditions, leading to unpredictable results.

### Why Use Threads?

- **Parallelism:** Speed up computation on multi-processor systems.
- **Avoid Blocking:** Allow a program to continue executing other tasks while waiting for I/O operations to complete.

### Thread Creation Example

- The chapter provides a code example (`threads.c`) that demonstrates thread creation using `pthread_create()`.
- The example shows how the order of thread execution can be non-deterministic.

### Race Conditions and Shared Data

- The chapter presents a code example (`counter.c`) that demonstrates a race condition when multiple threads try to update a shared counter.
- The problem arises because the increment operation is not atomic.

### The Need for Atomicity

- **Atomic Operations:** Operations that appear to execute as a single, indivisible step.
- **Synchronization Primitives:** Tools provided by the OS (e.g., locks, semaphores) to enforce atomicity.

## Chapter 27: Interlude: Thread API

### Key Concepts

- **POSIX Threads (pthreads):** A standard API for thread management in UNIX-like systems.
- **Thread Creation:** `pthread_create()`.
- **Thread Joining:** `pthread_join()`.
- **Locks (Mutexes):** `pthread_mutex_lock()`, `pthread_mutex_unlock()`.
- **Condition Variables:** `pthread_cond_wait()`, `pthread_cond_signal()`.

### Thread Creation

- `pthread_create(thread, attr, start_routine, arg)`:
    - `thread`: Pointer to a `pthread_t` structure to identify the new thread.
    - `attr`: Thread attributes (usually `NULL` for defaults).
    - `start_routine`: The function the thread starts executing.
    - `arg`: Argument passed to the `start_routine`.

### Thread Joining

- `pthread_join(thread, value_ptr)`:
    - Waits for the specified thread to terminate.
    - `value_ptr`: Pointer to a location where the thread's return value can be stored.

### Locks (Mutexes)

- `pthread_mutex_t`: Data type for a mutex.
- `pthread_mutex_init()`: Initializes a mutex.
- `pthread_mutex_lock()`: Acquires the lock.
- `pthread_mutex_unlock()`: Releases the lock.
- `pthread_mutex_trylock()`: Tries to acquire the lock without blocking.
- `pthread_mutex_timedlock()`: Tries to acquire the lock with a timeout.

### Condition Variables

- `pthread_cond_t`: Data type for a condition variable.
- `pthread_cond_init()`: Initializes a condition variable.
- `pthread_cond_wait(cond, mutex)`: Waits on the condition variable, atomically releasing the associated mutex.
- `pthread_cond_signal(cond)`: Signals one waiting thread to wake up.

## Chapter 28: Locks

### Key Concepts

- **Locks:** Synchronization primitives used to enforce mutual exclusion.
- **Spinlocks:** A simple lock implementation where a thread waits in a loop (spins) until the lock is available.
- **Test-and-Set:** An atomic instruction used to build spinlocks.
- **Compare-and-Swap:** A more powerful atomic instruction that can be used to build locks and other synchronization primitives.
- **Load-Linked/Store-Conditional:** A pair of instructions used to build locks on some architectures.
- **Fetch-and-Add:** An atomic instruction that increments a value and returns the old value.
- **Ticket Lock:** A fair lock implementation using fetch-and-add.
- **Two-Phase Locks:** A lock that first spins and then blocks if it cannot acquire the lock quickly.

### Building Locks

- **Disabling Interrupts:** An early approach for uniprocessors, but not suitable for multiprocessors.
- **Test-and-Set:** A simple way to build a spinlock.
- **Compare-and-Swap:** A more powerful instruction that can be used to build more complex locks.
- **Load-Linked/Store-Conditional:** Similar to compare-and-swap, but available on different architectures.
- **Fetch-and-Add:** Used to build ticket locks, which are fair.

### Evaluating Locks

- **Correctness:** Does the lock provide mutual exclusion?
- **Fairness:** Does each thread get a fair chance to acquire the lock?
- **Performance:** What are the overheads of acquiring and releasing the lock?

### Spinlocks vs. Blocking Locks

- **Spinlocks:** Keep spinning while waiting for the lock. Good for short critical sections and multiprocessors.
- **Blocking Locks:** Put the thread to sleep while waiting for the lock. Better for long critical sections and uniprocessors.

### Two-Phase Locks

- Combine spinning and blocking for better performance.
- Spin for a short time, then block if the lock is not acquired.

## Chapter 29: Lock-based Concurrent Data Structures

### Key Concepts

- **Thread Safety:** Making data structures safe for concurrent access by multiple threads.
- **Common Data Structures:** Counters, linked lists, queues, hash tables.
- **Locking Strategies:** Coarse-grained (one lock for the entire structure) vs. fine-grained (locks for individual parts).
- **Scalability:** How well the data structure performs as the number of threads increases.

### Concurrent Counters

- **Simple Counter:** A single lock protects the counter variable.
- **Approximate Counter:** Uses multiple local counters and a global counter to improve scalability.

### Concurrent Linked Lists

- **Simple Linked List:** A single lock protects the entire list.
- **Hand-over-Hand Locking:** A lock per node, but often not faster than a single lock.

### Concurrent Queues

- **Michael and Scott Queue:** Uses two locks (head and tail) to allow concurrent enqueue and dequeue operations.

### Concurrent Hash Tables

- **Simple Hash Table:** A lock per bucket allows for high concurrency.

### Key Lessons

- **Be careful with lock acquisition and release around control flow changes.**
- **More concurrency doesn't always mean better performance.**
- **Avoid premature optimization.**

## Chapter 30: Condition Variables

### Key Concepts

- **Condition Variables:** Synchronization primitives used for signaling between threads.
- **Wait:** A thread waits on a condition variable until it is signaled.
- **Signal:** A thread signals a condition variable to wake up one or more waiting threads.
- **Producer/Consumer Problem:** A classic concurrency problem where producers generate data and consumers consume it.
- **Bounded Buffer:** A fixed-size buffer used in the producer/consumer problem.
- **Covering Conditions:** A condition that covers all cases where a thread needs to wake up.

### Condition Variable Operations

- `pthread_cond_wait(cond, mutex)`:
    
    - Atomically releases the mutex and puts the calling thread to sleep.
    - When woken up, re-acquires the mutex before returning.
    
- `pthread_cond_signal(cond)`: Wakes up one waiting thread.
- `pthread_cond_broadcast(cond)`: Wakes up all waiting threads.

### Producer/Consumer Problem

- **Problem:** Producers generate data items and put them in a buffer. Consumers take items from the buffer and consume them.
- **Solution:** Use a mutex to protect the buffer and condition variables to signal when the buffer is full or empty.
- **Code Example:** The chapter provides a detailed code example (`producer_consumer.c`) demonstrating the correct use of condition variables to solve the producer/consumer problem.

### Covering Conditions

- **Problem:** When a thread signals a condition variable, it may not know which specific thread(s) to wake up.
- **Solution:** Use `pthread_cond_broadcast()` to wake up all waiting threads.
- **Example:** Memory allocator where multiple threads may be waiting for memory to become available.

### Important Considerations

- **Always use a while loop to check the condition after waking up from `pthread_cond_wait()`.** This is necessary because of Mesa semantics and the possibility of spurious wakeups.
- **Hold the lock associated with the condition variable while signaling.** This prevents race conditions.

## Chapter 31: Semaphores

### Key Concepts

- **Semaphores:** A synchronization primitive that can be used as both a lock and a condition variable.
- **Counting Semaphore:** A semaphore that can have a value greater than one, allowing multiple threads to access a resource concurrently.
- **Binary Semaphore:** A semaphore with a maximum value of one, used for mutual exclusion (like a lock).
- **sem_wait() (P()):** Decrements the semaphore value. If the value becomes negative, the calling thread blocks.
- **sem_post() (V()):** Increments the semaphore value. If there are waiting threads, one is woken up.

### Semaphore Use Cases

- **Mutual Exclusion (Locks):** Binary semaphores can be used to implement locks, ensuring only one thread can access a critical section at a time.
- **Ordering:** Semaphores can be used to enforce ordering constraints between threads, ensuring that one thread waits for another to complete a task before proceeding.
- **Bounded Buffers (Producer/Consumer):** Semaphores can be used to synchronize access to a bounded buffer, where producers add items and consumers remove them.
- **Reader-Writer Locks:** Semaphores can be used to implement reader-writer locks, allowing multiple readers or a single writer to access a shared resource.

### Implementing Semaphores

- Semaphores can be implemented using locks and condition variables.
- The semaphore value is stored in a variable.
- A lock protects access to the value.
- A condition variable is used to block and wake up threads.

### Dining Philosophers Problem

- A classic concurrency problem where philosophers compete for forks to eat.
- Illustrates the challenges of deadlock and starvation.
- Can be solved using semaphores to control access to the forks.

### Thread Throttling

- Semaphores can be used to limit the number of threads concurrently executing a specific section of code.
- This is useful for controlling resource usage and preventing overload.

## Chapter 32: Common Concurrency Problems

### Key Concepts

- **Concurrency Bugs:** Errors that occur due to the non-deterministic interleaving of thread executions.
- **Non-Deadlock Bugs:**
    
    - **Atomicity Violations:** When a sequence of instructions that should be atomic is interrupted.
    - **Order Violations:** When the required order of operations between threads is not enforced.
    
- **Deadlock:** A circular waiting situation where two or more threads are blocked, each waiting for a resource held by another.
- **Deadlock Conditions:** Mutual exclusion, hold-and-wait, no preemption, circular wait.
- **Deadlock Prevention:** Techniques to prevent one or more deadlock conditions from occurring.
- **Deadlock Avoidance:** Algorithms to dynamically avoid deadlock by carefully allocating resources.
- **Deadlock Detection and Recovery:** Allow deadlocks to occur and then detect and recover from them.

### Non-Deadlock Bugs

- **Atomicity Violations:**
    
    - Example: Two threads accessing and modifying a shared variable without proper synchronization.
    - Solution: Use locks to protect critical sections.
    
- **Order Violations:**
    
    - Example: One thread depends on the initialization performed by another thread, but the order is not guaranteed.
    - Solution: Use condition variables or semaphores to enforce ordering.
    

### Deadlock

- **Deadlock Conditions:** All four conditions must hold for deadlock to occur.
- **Deadlock Prevention:**
    
    - **Circular Wait:** Enforce a total or partial ordering on lock acquisition.
    - **Hold-and-Wait:** Acquire all locks atomically.
    - **No Preemption:** Allow locks to be preempted (not always practical).
    - **Mutual Exclusion:** Avoid the need for locks altogether (e.g., lock-free data structures).
    
- **Deadlock Avoidance:**
    
    - **Banker's Algorithm:** A classic algorithm for deadlock avoidance, but not widely used in practice.
    
- **Deadlock Detection and Recovery:**
    
    - Used in some database systems.
    - Periodically check for cycles in the resource allocation graph.
    - If deadlock is detected, take action to recover (e.g., abort a transaction).
    

## Chapter 33: Event-based Concurrency (Advanced)

### Key Concepts

- **Event-Based Concurrency:** An alternative to thread-based concurrency.
- **Event Loop:** The core of an event-based program. Waits for events and dispatches them to handlers.
- **Event Handler:** A function that processes a specific type of event.
- **select() and poll():** System calls used to wait for I/O events.
- **Asynchronous I/O:** I/O operations that do not block the calling thread.
- **Manual Stack Management:** The need to explicitly manage program state in event-based systems.
- **Continuations:** A programming language construct used to capture and resume execution state.

### Event-Based vs. Thread-Based Concurrency

- **Event-Based:**
    
    - Single-threaded.
    - Explicit control over scheduling.
    - No locks needed (in the single-threaded case).
    - Can be more complex to write.
    
- **Thread-Based:**
    
    - Multiple threads.
    - Scheduling controlled by the OS.
    - Requires locks for synchronization.
    - Can be simpler to write.

### Challenges of Event-Based Concurrency

- **Blocking System Calls:** Can be addressed with asynchronous I/O.
- **State Management:** Requires manual stack management or continuations.
- **Multi-Core Scalability:** Requires running multiple event loops, which can reintroduce locking issues.
- **Integration with Paging:** Page faults can cause blocking.

## Chapter 34: Summary Dialogue on Concurrency

### Key Points

- **Concurrency is hard:** Even simple code can become complex with concurrent execution.
- **Keep it simple:** Avoid complex thread interactions and use well-known patterns.
- **Use concurrency only when needed:** Avoid premature optimization.
- **Seek simpler forms of parallelism:** Explore alternatives like MapReduce.
- **Practice and learn:** Continuous learning and practice are key to mastering concurrency.

## Chapter 36: I/O Devices

### Key Concepts

- **I/O Devices:** Hardware for input/output (e.g., disks, keyboards, mice).
- **Device Drivers:** Software modules that manage the interaction between the OS and I/O devices.
- **Memory-Mapped I/O:** Device registers are mapped into the address space, allowing access via memory operations.
- **Polling:** The CPU repeatedly checks the device status register to see if it's ready.
- **Interrupts:** The device signals the CPU when it's ready, avoiding the need for polling.
- **Direct Memory Access (DMA):** The device can transfer data directly to/from memory without CPU involvement.

### Device Interaction

- **Device Registers:**
    - **Status Register:** Indicates the device's current status.
    - **Command Register:** Used to send commands to the device.
    - **Data Register:** Used to transfer data to/from the device.
- **Polling vs. Interrupts:**
    - Polling is simple but wastes CPU cycles.
    - Interrupts allow for overlap of computation and I/O.
- **Programmed I/O (PIO):** CPU-driven data transfer.
- **Direct Memory Access (DMA):** Hardware-driven data transfer.

### Device Drivers

- Software modules that encapsulate device-specific details.
- Provide a standard interface to the OS.
- Can be a major source of complexity and bugs in the OS.

### Case Study: Simple IDE Disk Driver (xv6)

- **`ide_rw()`:** Queues or issues a disk request.
- **`ide_start_request()`:** Sends a request to the disk.
- **`ide_wait_ready()`:** Waits for the disk to be ready.
- **`ide_intr()`:** Handles disk interrupts.

## Chapter 37: Hard Disk Drives

### Key Concepts

- **Disk Geometry:** Platters, surfaces, tracks, sectors.
- **Disk Head:** Reads and writes data to the disk surface.
- **Disk Arm:** Moves the head across the disk.
- **Seek Time:** Time to move the head to the correct track.
- **Rotational Delay:** Time for the desired sector to rotate under the head.
- **Transfer Time:** Time to transfer data to/from the disk.
- **Disk Scheduling:** Algorithms to optimize the order of disk requests (SSTF, SCAN, SPTF).

### Disk Performance

- **I/O Time:** `T_io = T_seek + T_rotation + T_transfer`
- **Random Workload:** Small reads to random locations.
- **Sequential Workload:** Large reads of contiguous data.
- **Disk Cache (Track Buffer):** Improves performance by caching recently accessed data.

### Disk Scheduling Algorithms

- **SSTF (Shortest Seek Time First):** Services requests on the nearest track first.
- **SCAN (Elevator):** Sweeps back and forth across the disk, servicing requests in track order.
- **SPTF (Shortest Positioning Time First):** Considers both seek time and rotational delay.

## Chapter 38: Redundant Arrays of Inexpensive Disks (RAIDs)

### Key Concepts

- **RAID:** Redundant Array of Inexpensive Disks.
- **Goal:** Improve performance, capacity, and reliability of storage systems.
- **RAID Levels:**
    - **RAID 0 (Striping):** Improves performance by striping data across multiple disks.
    - **RAID 1 (Mirroring):** Improves reliability by mirroring data on multiple disks.
    - **RAID 4/5 (Parity):** Uses parity to provide redundancy and tolerate single disk failures.
- **Parity:** A method for calculating redundant data to detect and correct errors.
- **XOR:** A common function used for parity calculation.
- **Small-Write Problem:** A performance issue in RAID 4 where parity updates become a bottleneck.
- **RAID 5:** Solves the small-write problem by distributing parity across disks.

### RAID Evaluation

- **Capacity:** How much usable storage space is available?
- **Reliability:** How many disk failures can the RAID tolerate?
- **Performance:**
    - **Single-Request Latency:** Time to service a single request.
    - **Throughput:** Overall bandwidth for multiple concurrent requests.

### RAID Level Comparisons

|RAID Level|Capacity|Reliability|Throughput (Sequential)|Throughput (Random)|Latency (Read)|Latency (Write)|
|:--|:--|:--|:--|:--|:--|:--|
|RAID 0|N * B|0|N * S|N * R|T|T|
|RAID 1|(N * B) / 2|1|(N / 2) * S|N * R|T|T|
|RAID 4|(N - 1) * B|1|(N - 1) * S|(N - 1) * R|T|2T|
|RAID 5|(N - 1) * B|1|(N - 1) * S|(N / 4) * R|T|2T|

## Chapter 39: Interlude: Files and Directories

### Key Concepts

- **File:** A linear array of bytes.
- **Directory:** A collection of (name, inode number) pairs.
- **Inode:** A data structure storing file metadata (e.g., size, permissions, timestamps, data block pointers).
- **Hard Link:** Multiple directory entries pointing to the same inode.
- **Symbolic (Soft) Link:** A file containing a path to another file.
- **Permissions:** Control access to files and directories (owner, group, others).
- **Access Control Lists (ACLs):** A more flexible way to control file access.

### File System Interface

- **`open()`:** Opens a file, returns a file descriptor.
- **`read()`:** Reads data from a file.
- **`write()`:** Writes data to a file.
- **`close()`:** Closes a file.
- **`lseek()`:** Changes the current file offset.
- **`unlink()`:** Removes a directory entry (deletes the file when the last link is removed).
- **`link()`:** Creates a hard link.
- **`mkdir()`:** Creates a directory.
- **`rmdir()`:** Removes an empty directory.
- **`readdir()`:** Reads directory entries.
- **`stat()`/`fstat()`:** Gets file information (metadata).

### File Descriptors and the Open File Table

- **File Descriptor:** An integer that represents an open file within a process.
- **Open File Table:** A system-wide table that tracks open files.
- **File Table Entry:** Stores information about an open file (e.g., current offset, permissions).

### Hard Links vs. Symbolic Links

- **Hard Link:** Multiple directory entries refer to the same inode.
- **Symbolic Link:** A file that contains a path to another file.

### Permissions and ACLs

- **Permissions:** Basic access control (read, write, execute) for owner, group, and others.
- **ACLs:** More fine-grained access control.

## Chapter 40: File System Implementation

### Key Concepts

- **File System:** A way to organize and store data on disk.
- **Data Structures:** Inodes, directories, bitmaps, superblock.
- **Access Methods:** How the file system translates file operations (e.g., open, read, write) into disk operations.
- **Free Space Management:** Keeping track of free blocks on disk.

### Overall Organization

- **Disk Blocks:** The basic unit of storage on disk.
- **Data Region:** Stores file data.
- **Inode Table:** Stores inodes (metadata about files).
- **Bitmaps:** Track free/allocated inodes and data blocks.
- **Superblock:** Stores information about the file system itself.

### File Organization: The Inode

- **Inode:** A data structure that stores metadata about a file.
- **Inode Number (i-number):** A unique identifier for each file.
- **Inode Fields:**
    
    - File type (regular, directory, etc.)
    - File size
    - Owner and permissions
    - Timestamps (creation, modification, access)
    - Data block pointers (direct, indirect, double indirect, triple indirect)
    

### Directory Organization

- **Directory:** A special type of file that stores (name, inode number) pairs.
- **"." and "..":** Special entries for the current directory and parent directory.

### Free Space Management

- **Bitmaps:** Used to track free/allocated inodes and data blocks.
- **Other Methods:** Free lists, B-trees (used in XFS).

### Access Paths: Reading and Writing

- **Reading:**
    
    2. Traverse the directory hierarchy to find the file's inode.
    4. Read the inode to get data block pointers.
    6. Read the data blocks from disk.
    
- **Writing:**
    
    2. Traverse the directory hierarchy to find the file's inode.
    4. Allocate new data blocks if needed.
    6. Update the inode and data bitmap.
    8. Write the data blocks to disk.

### Caching and Buffering

- **Page Cache:** Caches file data and metadata in memory to improve performance.
- **Write Buffering:** Delays writes to disk to allow for batching and better scheduling.

## Chapter 41: Locality and the Fast File System (FFS)

### Key Concepts

- **FFS (Fast File System):** A file system designed to improve performance by considering disk characteristics and locality.
- **Disk Awareness:** Organizing file system structures to minimize disk head movement and maximize sequential access.
- **Cylinder Groups (Block Groups):** Consecutive cylinders (or blocks) on the disk that store related files and metadata.
- **Inode Placement:** Inodes are placed in the same cylinder group as their data blocks.
- **Directory Placement:** Directories are placed in cylinder groups with low directory utilization and high free inode count.
- **Large File Exception:** Large files are spread across multiple cylinder groups to avoid filling up a single group.

### FFS Design Principles

- **Keep related stuff together:** Store files in the same directory within the same cylinder group.
- **Keep unrelated stuff far apart:** Place unrelated files in different cylinder groups.
- **Disk awareness:** Optimize layout for disk access patterns.

### FFS Locality

- **Namespace Locality:** Files in the same directory are often accessed together.
- **File Block Locality:** Blocks of the same file are often accessed sequentially.

### Large File Exception

- Large files are split into chunks and distributed across multiple cylinder groups to avoid filling up a single group.
- This can hurt sequential access performance, but the impact is minimized by choosing a large chunk size.

### Other FFS Features

- **Block Groups:** Replaces cylinder groups in modern implementations.
- **Sub-blocks:** Smaller allocation units (e.g., 512 bytes) to reduce internal fragmentation for small files.
- **Parameterized Placement:** Optimizes block placement based on disk parameters.

## Chapter 42: Crash Consistency: FSCK and Journaling

### Key Concepts

- **Crash Consistency:** Ensuring file system consistency after a crash.
- **fsck (File System Check):** A tool that scans and repairs file system inconsistencies after a crash.
- **Journaling (Write-Ahead Logging):** A technique for logging file system changes to ensure consistency.
- **Data Journaling:** Journals both data and metadata.
- **Metadata Journaling (Ordered Journaling):** Journals only metadata.
- **Write-Ahead Logging:** Writing a log entry before making changes to the file system.
- **Checkpoint:** Writing buffered data and metadata to their final locations on disk.
- **Redo Logging:** Replaying committed transactions from the journal during recovery.

### Crash Consistency Problem

- Crashes can occur during file system updates, leaving the disk in an inconsistent state.
- Inconsistencies can lead to data loss, corruption, or file system unavailability.

### fsck (File System Checker)

- Scans the file system for inconsistencies and attempts to repair them.
- Phases: superblock check, free block check, inode state check, inode link check, duplicate check, bad block check, directory check.
- Can be slow for large file systems.

### Journaling

- **Write-ahead logging:** Before modifying file system structures, write a log entry describing the changes.
- **Journal:** A circular log that stores transactions.
- **Transaction:** A sequence of file system operations that should be atomic.
- **Recovery:** After a crash, replay committed transactions from the journal to restore consistency.

### Journaling Modes

- **Data Journaling:** Journals both data and metadata.
- **Metadata Journaling (Ordered Journaling):** Journals only metadata, data is written directly to its final location.
- **Unordered Journaling:** Data can be written before or after metadata is journaled.

### Journaling Steps

1. **Journal Write:** Write transaction data to the log.
2. **Journal Commit:** Write a transaction commit block to the log.
3. **Checkpoint:** Write data and metadata to their final locations.
4. **Free:** Mark the transaction as free in the journal.

### Challenges and Solutions

- **Block Reuse:** Can lead to inconsistencies if a block is reused before a transaction is checkpointed. Solution: Use revoke records.
- **Log Size:** The log is finite and needs to be managed. Solution: Treat the log as a circular buffer.
- **Performance Overhead:** Journaling adds write overhead. Solution: Metadata journaling reduces overhead by not journaling data.

## Chapter 43: Log-Structured File Systems (LFS)

### Key Concepts

- **Log-Structured File System (LFS):** A file system that writes all updates sequentially to a log.
- **Segment:** A large chunk of data and metadata written to the log at once.
- **Inode Map (imap):** Maps inode numbers to their locations on disk.
- **Checkpoint Region (CR):** Stores pointers to the latest inode map segments.
- **Garbage Collection:** Reclaiming space occupied by obsolete data.
- **Cleaning:** The process of garbage collection in LFS.

### LFS Design Principles

- **Write sequentially:** All writes are appended to the log, improving write performance.
- **Never overwrite in place:** Avoids the need for complex crash recovery mechanisms.
- **Use a large segment size:** Amortizes the cost of disk seeks and rotations.

### LFS Structure

- **Checkpoint Region (CR):** Stores pointers to the latest inode map segments.
- **Inode Map (imap):** Maps inode numbers to their locations on disk.
- **Segments:** Contain file data, inodes, and other metadata.

### LFS Operations

- **Writing:** Buffer updates in memory, write a segment to disk when full.
- **Reading:** Read the checkpoint region, then the inode map, then the inode, and finally the data blocks.
- **Garbage Collection:** Read live data from old segments, write it to new segments, and free the old segments.

### Challenges and Solutions

- **Finding Inodes:** Use the inode map to locate inodes.
- **Garbage Collection:** Use a segment cleaning policy to reclaim space.
- **Crash Recovery:** Use the checkpoint region and roll-forward recovery to restore consistency.

## Chapter 44: Flash-based SSDs

### Key Concepts

- **Flash Memory:** A type of non-volatile memory used in SSDs.
- **Flash Cell:** The basic unit of storage in flash memory.
- **SLC (Single-Level Cell):** Stores one bit per cell.
- **MLC (Multi-Level Cell):** Stores two bits per cell.
- **TLC (Triple-Level Cell):** Stores three bits per cell.
- **Flash Page:** The smallest unit of data that can be read or programmed.
- **Flash Block:** A group of pages that must be erased together.
- **Flash Translation Layer (FTL):** Software that manages the mapping between logical block addresses and physical flash locations.
- **Wear Leveling:** Distributing writes evenly across flash blocks to prolong their lifespan.
- **Garbage Collection:** Reclaiming space occupied by invalid or obsolete data.

### Flash Operations

- **Read:** Read a page from flash.
- **Erase:** Erase an entire block.
- **Program:** Write data to a page within an erased block.

### FTL Design

- **Direct Mapped:** Simple but inefficient and unreliable.
- **Log-Structured:** Appends writes to a log, uses a mapping table to track logical-to-physical mappings.
- **Hybrid Mapping:** Combines log blocks with page-level mapping and data blocks with block-level mapping.

### Garbage Collection

- **Reclaims space by identifying and erasing blocks with invalid or obsolete data.**
- **Can be expensive and cause write amplification.**

### Wear Leveling

- **Distributes writes evenly across blocks to prevent premature wear-out.**
- **Can involve moving data from cold blocks to hot blocks.**

### SSD Performance and Cost

- **SSDs are much faster than HDDs for random reads and writes.**
- **SSDs are more expensive per unit of capacity than HDDs.**

## Chapter 45: Data Integrity and Protection

### Key Concepts

- **Data Integrity:** Ensuring that data is not corrupted or lost.
- **Checksum:** A small value computed over a block of data to detect errors.
- **Latent Sector Errors (LSEs):** Undetected errors in a disk sector.
- **Block Corruption:** Silent errors where a block contains incorrect data.
- **Misdirected Writes:** Writes to the wrong location on disk.
- **Lost Writes:** Writes that are reported as successful but never actually persisted.
- **Disk Scrubbing:** Periodically reading and verifying data to detect and repair errors.

### Checksumming

- **Checksum Functions:** XOR, addition, Fletcher, CRC.
- **Checksum Placement:** Stored with each block or in separate checksum blocks.
- **Checksum Usage:**
    1. Read data and checksum.
    2. Compute checksum over the data.
    3. Compare computed and stored checksums.
    4. If they match, data is likely valid.
    5. If they don't match, data is corrupted.

### Handling Errors

- **Latent Sector Errors (LSEs):**
    - Easily detected by the disk controller.
    - Recovery: Use redundancy (e.g., RAID) to retrieve correct data.
- **Block Corruption:**
    - Silent errors, harder to detect.
    - Checksums are used to detect corruption.
- **Misdirected Writes:**
    - Writes to the wrong location.
    - Solution: Include physical disk and block identifiers in checksums.
- **Lost Writes:**
    - Writes that are reported as successful but not persisted.
    - Solutions: Write verification, additional checksums in metadata (e.g., ZFS).

### Disk Scrubbing

- Periodically reading and verifying data to detect and repair errors.
- Helps prevent data loss due to undetected corruption.

### Checksum Overheads

- **Space Overhead:**
    - Disk: Checksums consume storage space.
    - Memory: Checksums need to be stored temporarily in memory.
- **Time Overhead:**
    - CPU cycles for checksum computation.
    - Potential extra I/O for reading and writing checksums.

## Chapter 46: Summary Dialogue on Persistence

### Key Points

- **Persistence:** Storing data durably on disk.
- **Challenges:** Handling crashes, ensuring data integrity, managing free space.
- **Techniques:** Journaling, checksums, RAID, LFS.
- **Trade-offs:** Durability vs. performance, space vs. time overheads.

### Student's Takeaways

- Managing persistent data is more complex than managing in-memory data.
- Recovery from crashes is a major concern.
- Disk scheduling and data protection are important for performance and reliability.
- New storage technologies (e.g., Flash) require adapting file system techniques.

## Chapter 48: Distributed Systems

### Key Concepts

- **Distributed Systems:** Systems where multiple computers work together to provide a service.
- **Challenges:**
    - **Failure:** Machines, disks, networks, and software can fail.
    - **Performance:** Network communication can be a bottleneck.
    - **Security:** Protecting data and ensuring secure communication.
- **Communication:** The foundation of distributed systems.
- **Unreliable Communication:** Packet loss and corruption are common.
- **Reliable Communication:** Built on top of unreliable communication using acknowledgments, timeouts, and retries.
- **Remote Procedure Call (RPC):** A mechanism for executing code on a remote machine.

### Communication Basics

- **Messages:** The basic unit of communication.
- **Unreliable Communication:** Messages can be lost or corrupted.
- **Reliable Communication:** Ensures messages are delivered reliably using acknowledgments and retransmissions.

### Unreliable Communication: UDP

- **UDP (User Datagram Protocol):** A connectionless, unreliable protocol.
- **Datagrams:** Fixed-size messages sent over UDP.
- **No guarantee of delivery or order.**

### Reliable Communication: TCP

- **TCP (Transmission Control Protocol):** A connection-oriented, reliable protocol.
- **Acknowledgments:** Used to confirm receipt of messages.
- **Timeouts and Retries:** Used to handle lost messages.
- **Sequence Numbers:** Ensure in-order delivery and duplicate detection.

### Communication Abstractions

- **Distributed Shared Memory (DSM):** Allows processes on different machines to share memory, but not widely used due to challenges with failure and performance.
- **Remote Procedure Call (RPC):** Makes remote function calls look like local function calls.

### Remote Procedure Call (RPC)

- **Goal:** Simplify distributed programming by abstracting communication details.
- **Components:**
    - **Stub Generator:** Generates client and server stubs.
    - **Runtime Library:** Handles communication, serialization, and other details.
- **Challenges:**
    - **Naming:** Locating remote services.
    - **Transport Protocol:** Choosing between TCP and UDP.
    - **Complex Arguments:** Marshaling and unmarshaling complex data structures.
    - **Server Organization:** Thread pools for concurrency.
    - **Byte Ordering:** Handling differences in endianness.
    - **Asynchronous RPC:** Allowing non-blocking calls.

## Chapter 49: Sun's Network File System (NFS)

### Key Concepts

- **NFS (Network File System):** A distributed file system that allows clients to access files stored on a remote server.
- **Stateless Protocol:** The NFS server does not maintain any client state, simplifying crash recovery.
- **Idempotent Operations:** NFS operations can be repeated without adverse effects, enabling easy recovery from failures.
- **File Handles:** Unique identifiers for files and directories.
- **Client-Side Caching:** Caching file data on the client to improve performance.
- **Cache Consistency:** Ensuring that clients see the most up-to-date version of files.
- **Flush-on-Close:** A cache consistency mechanism where updates are sent to the server when a file is closed.
- **Attribute Cache:** Caches file attributes (metadata) on the client to reduce server load.

### NFS Protocol

- **LOOKUP:** Obtains a file handle for a file or directory.
- **GETATTR:** Retrieves file attributes (metadata).
- **READ:** Reads data from a file.
- **WRITE:** Writes data to a file.
- **CREATE:** Creates a new file.
- **REMOVE:** Removes a file.
- **MKDIR:** Creates a new directory.
- **RMDIR:** Removes a directory.
- **READDIR:** Reads directory entries.

### NFS Implementation

- **Client-Side:**
    - Translates file system calls into NFS protocol messages.
    - Caches file data and metadata.
    - Handles cache consistency.
- **Server-Side:**
    - Processes NFS protocol messages.
    - Reads and writes data to disk.
    - Does not maintain client state.

### NFS Cache Consistency

- **Flush-on-Close:** Ensures updates are visible to other clients when a file is closed.
- **Attribute Cache:** Reduces server load by caching file attributes on the client.

### NFS Challenges

- **Cache Consistency:** Can be complex and lead to stale data.
- **Security:** Early versions had weak security.
- **Performance:** Network latency can be a bottleneck.

## Chapter 50: The Andrew File System (AFS)

### Key Concepts

- **AFS (Andrew File System):** A distributed file system designed for scalability and performance.
- **Whole-File Caching:** Caches entire files on the client's local disk.
- **Callbacks:** The server notifies clients when cached files are modified.
- **File Identifier (FID):** Unique identifier for files and directories.
- **Session Semantics:** Changes to files are only visible to other clients after the file is closed.

### AFS Protocol

- **Fetch:** Retrieves a file from the server and caches it on the client.
- **Store:** Sends a modified file back to the server.
- **Callback:** The server promises to notify the client if a cached file is modified.
- **TestAuth:** Checks if a cached file is still valid.

### AFS Implementation

- **Client-Side (Venus):**
    - Caches entire files on local disk.
    - Uses callbacks to maintain cache consistency.
- **Server-Side (Vice):**
    - Stores files and directories.
    - Handles client requests.
    - Sends callbacks to clients.

### AFS Cache Consistency

- **Callbacks:** Provide a simple and efficient way to maintain cache consistency.
- **Session Semantics:** Changes are only visible after the file is closed.
- **Last-Writer-Wins:** If multiple clients modify a file concurrently, the last one to close the file wins.

### AFS vs. NFS

- **AFS:** Whole-file caching, callbacks, session semantics.
- **NFS:** Block-level caching, stateless protocol, flush-on-close consistency.

### AFS Challenges

- **Crash Recovery:** More complex than NFS due to callbacks.
- **Scalability:** Limited by server resources and network bandwidth.

## Chapter 51: Summary Dialogue on Distribution

### Key Points

- **Distributed systems are complex:** They involve multiple machines, networks, and the potential for various failures.
- **Failure is a central challenge:** Components can fail, but the system should be designed to tolerate these failures.
- **Replication, retry, and other techniques:** Used to achieve fault tolerance and ensure system availability.
- **Communication is key:** Distributed systems rely on communication between components.
- **Protocols matter:** The design of communication protocols affects scalability, performance, and failure handling.

### Student's Takeaways

- **Everything can fail:** Distributed systems must be designed with failure in mind.
- **Redundancy and fault tolerance:** Techniques like replication and retry are essential for handling failures.
- **Protocol design is crucial:** Protocols impact scalability, performance, and error recovery.

## General Index

- This is a comprehensive index of terms and concepts covered in the book.
- It includes references to specific pages where the terms are defined or discussed.

## Asides

- Asides provide additional information or anecdotes related to the main text.
- They offer historical context, practical tips, or humorous remarks.

## Tips

- Tips offer general advice or lessons learned from experience in building operating systems.
- They provide guidance on design principles, implementation strategies, and performance considerations.

## Cruces

- Cruces highlight the key challenges or problems that need to be solved in operating system design.
- They serve as focal points for understanding the core issues and trade-offs involved in building operating systems.

---
## References

Operating Systems: Three Easy Pieces (available at http://www.ostep.org)
