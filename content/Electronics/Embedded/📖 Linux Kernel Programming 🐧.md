---
title: '"📖 Linux Kernel Programming 🐧"'
date: 2024-05-15
Version: 
description: 
tags: 
draft:
---
## Chapter 1: Kernel Workspace Setup

- A modern desktop PC or laptop is needed to work with Linux kernel development.
- Recommended to use a recent Linux distribution, preferably as a virtual machine (VM), to avoid data loss due to potential system crashes.
- VirtualBox or VMware Workstation are recommended for virtualization.
- For optimal performance, install Oracle VirtualBox Guest Additions within the guest VM.
- Allocate sufficient disk space to the guest VM (50GB or more recommended).
- Regularly update the guest VM for security.
- The Raspberry Pi is a popular choice for experimenting with kernel development on ARM architecture.
- QEMU can be used to emulate the Raspberry Pi if a physical device is not available.
- Ubuntu, CentOS, or Fedora are recommended Linux distributions for kernel development.
- Install essential software packages like git, make, perl, and others for kernel development.
- For cross-compilation (building code on one architecture to run on another), install a cross-toolchain and QEMU.

## Chapter 2: Building the 5.x Linux Kernel from Source - Part 1

- Linux kernel development is a community-driven process, with the Linux Foundation overseeing the project.
    
- The kernel version number follows a specific nomenclature: major.minor[.patchlevel][-extraversion].
    
- The kernel development workflow involves a merge window for new code, followed by release candidate (rc) kernels for bug fixing, and finally a stable release.
    
- Different types of kernel source trees exist: -next (bleeding edge), prepatch/rc (release candidates), stable (vanilla), distribution, LTS (long-term support), and SLTS (super long-term support).
    
- Steps to build the kernel from source:
    
    1. Obtain the kernel source tree (download or clone from Git).
    2. Extract the kernel source tree (if downloaded as a compressed file).
    3. Configure the kernel (using make menuconfig or similar).
    4. Build the kernel and modules.
    5. Install the modules.
    6. Generate the initramfs image and set up the bootloader.
    7. Customize the GRUB bootloader (optional).
- The kbuild system is used for kernel configuration and build, involving Kconfig files, Makefiles, and the .config file.
    
- Different approaches exist for obtaining a default kernel configuration: using the default config, the existing distribution's config, or a custom config based on loaded modules (localmodconfig).
    
- The make menuconfig interface provides a user-friendly way to customize the kernel configuration.
    

## Chapter 3: Building the 5.x Linux Kernel from Source - Part 2

- This chapter continues the kernel build process from the previous chapter.
    
- Steps covered in this chapter:
    
    1. Building the kernel image and modules (make).
    2. Installing kernel modules (make modules_install).
    3. Generating the initramfs image (mkinitramfs or dracut).
    4. Setting up the bootloader (GRUB).
    5. Customizing the GRUB bootloader menu (optional).
    6. Verifying the new kernel's configuration.
- The initramfs (initial RAM filesystem) is a temporary root filesystem used during the early boot process.
    
- It contains essential files and modules needed before the actual root filesystem is mounted.
    
- The bootloader (GRUB) is responsible for loading the kernel and initramfs into memory and starting the boot process.
    
- The chapter also covers cross-compiling the kernel for the Raspberry Pi (ARM architecture) using a cross-toolchain.
    

## Chapter 4: Writing Your First Kernel Module - LKMs Part 1

- Kernel modules (LKMs) allow adding functionality to the Linux kernel without rebuilding the entire kernel.
- LKMs are typically used for device drivers, filesystems, and other kernel extensions.
- The chapter covers the basic structure of a kernel module, including module initialization (module_init) and exit (module_exit) functions.
- Kernel modules have specific macros for providing metadata (MODULE_AUTHOR, MODULE_DESCRIPTION, MODULE_LICENSE, MODULE_VERSION).
- The printk function is used for kernel logging, similar to printf in user space.
- Different log levels (KERN_EMERG, KERN_ALERT, KERN_CRIT, KERN_ERR, KERN_WARNING, KERN_NOTICE, KERN_INFO, KERN_DEBUG) can be used to categorize messages.
- The dmesg command is used to view the kernel log buffer.

## Chapter 5: Writing Your First Kernel Module - LKMs Part 2

- This chapter provides a more advanced Makefile template for kernel modules, including targets for code style checking, static analysis, and packaging.
- Cross-compiling kernel modules for different architectures (e.g., ARM) is explained.
- The chapter covers gathering system information from within a kernel module (using the utsname struct).
- Licensing kernel modules is important, and the MODULE_LICENSE macro is used to specify the license.
- Emulating library-like features in kernel modules is possible using two techniques: linking multiple source files or module stacking.
- Module parameters allow passing values to a kernel module at load time (using the module_param macro).
- Floating-point operations are generally avoided in kernel space due to performance overhead.
- Auto-loading kernel modules at boot time can be achieved using /etc/modules or /etc/modules-load.d/.
- Kernel module security is discussed, including the use of module signing and blacklisting.
- The chapter concludes with information on kernel coding style guidelines and contributing to the mainline kernel.

## Chapter 6: Kernel Internals Essentials - Processes and Threads

- **Process and Interrupt Contexts:** Kernel code can execute in two contexts: process context (entered via system calls or exceptions) and interrupt context (entered via hardware interrupts).
- **Process Virtual Address Space (VAS):** Each process has its own virtual address space, divided into segments (text, data, heap, stack, etc.).
- **Threads and Stacks:** Each thread within a process has its own kernel stack and user stack. Kernel threads only have a kernel stack.
- **Task Structure (task_struct):** The kernel represents each thread with a `task_struct` structure, containing information about the thread's state, memory, scheduling, etc.
- **Accessing the Task Structure:** The `current` macro points to the `task_struct` of the currently running thread.
- **Iterating Task Lists:** The kernel maintains task lists (circular doubly linked lists) to organize tasks. You can iterate over these lists to access information about all processes or threads in the system.

## Chapter 7: Memory Management Internals - Essentials

- **Virtual Memory (VM) Split:** The virtual address space is divided between user space and kernel space. The split ratio varies depending on the architecture (e.g., 3:1 on x86, 2:2 on ARM).
- **Virtual Addressing and Address Translation:** Virtual addresses are translated to physical addresses by the Memory Management Unit (MMU) using page tables.
- **Process VAS:** The process VAS includes text, data, heap, stack, and library segments.
- **Kernel Segment:** The kernel segment contains kernel code, data structures, and other kernel-related information.
- **Virtual Memory Areas (VMAs):** VMAs are kernel data structures that represent contiguous regions of memory within a process's address space.
- **Kernel Memory Layout:** The kernel segment layout is architecture-dependent but includes regions for direct-mapped RAM (low memory), vmalloc, kernel modules, and possibly high memory (on 32-bit systems).
- **KASLR (Kernel Address Space Layout Randomization):** KASLR randomizes the base address of the kernel to make it harder for attackers to exploit known addresses.

## Chapter 8: Kernel Memory Allocation for Module Authors - Part 1

### Kernel Memory Allocators

The kernel provides two main memory allocators: the page allocator (buddy system allocator) and the slab allocator.

- **Page Allocator:** Allocates memory in power-of-two-sized chunks (pages). It can suffer from internal fragmentation when the requested size is not a power of two.
- **Slab Allocator:** Built on top of the page allocator, it provides caches for frequently used objects and smaller memory allocations, reducing fragmentation.

### Page Allocator APIs

- `__get_free_pages()`, `alloc_pages()`: Allocate 2order physically contiguous page frames. Allocated memory will have random content; the return value is a pointer to the just-allocated memory's kernel logical address.
- `__get_free_page()`, `alloc_page()`: Allocates exactly one page frame. The allocated memory will have random content; a wrapper over the alloc_pages() API; the return value is a pointer to the just-allocated memory's page metadata structure; can convert it into a kernel logical address via the page_address() function.
- `get_zeroed_page()`: Allocates exactly one page frame; its contents are set to ASCII zero (NULL; that is, it's zeroed out); the return value is a pointer to the just-allocated memory's kernel logical address.

### GFP Flags

Allocation flags (e.g., `GFP_KERNEL`, `GFP_ATOMIC`) specify how the allocator should behave.

- If in process context and it is safe to sleep, use the GFP_KERNEL flag. If it is unsafe to sleep (typically, when in any type of interrupt context or when holding some types of locks), you must use the GFP_ATOMIC flag.

### Freeing Pages

- `__free_pages()`: Free multiple pages that were allocated via the `__get_free_pages()` or `alloc_pages()` APIs (it's actually a wrapper over `__free_pages()`).
- `free_pages()`: Free a (single) page that was allocated via the `__get_free_page()`, `get_zeroed_page()`, or `alloc_page()` APIs; it's a simple wrapper over the `free_pages()` API.

### Slab Allocator APIs

- `kmalloc()`: Allocate memory.
- `kzalloc()`: Allocate memory and zero it.
- `kfree()`: Free memory.

### Object Caching

The slab allocator caches objects to improve performance.

### kmalloc-N Caches

The kernel provides kmalloc caches for various sizes (e.g., kmalloc-8, kmalloc-16, etc.).

### Resource-Managed APIs

- `devm_kmalloc()` and `devm_kzalloc()` are resource-managed versions that automatically free memory when the device is removed.

## Chapter 9: Kernel Memory Allocation for Module Authors - Part 2

### Custom Slab Caches

You can create custom slab caches using `kmem_cache_create()` for frequently allocated objects.

2. Creating a custom slab cache of a given size with the `kmem_cache_create()` API. This is often done as part of the init code path of the kernel module (or within the probe method when in a driver).
4. Using the slab cache.
    
    2. Issue the `kmem_cache_alloc()` API to allocate a single instance of the custom object(s) within your slab cache.
    4. Use the object.
    6. Free it back to the cache with the `kmem_cache_free()` API.
    
6. Destroying the custom slab cache when done with `kmem_cache_destroy()`. This is often done as part of the cleanup code path of the kernel module (or within the remove/detach/disconnect method when in a driver).

### Debugging Slab Allocations

Techniques like slab poisoning and red zoning help detect memory errors.

- **Slab Poisoning:** This involves filling the allocated memory with a specific pattern (e.g., 0x5a5a5a5a) to detect uses of uninitialized memory.
- **Red Zoning:** This involves adding guard zones around the allocated memory to detect buffer overruns and underruns.

### vmalloc()

Allocates virtually contiguous memory, useful for large buffers.

- **Key Points:**
    
    - Allocates contiguous virtual memory.
    - No guarantee of physical contiguity.
    - Memory contents are usually random (use `vzalloc()` for zeroed memory).
    - Must be called from process context.
    - Returns a kernel virtual address (KVA).
    - Memory is page-aligned.
    - Allocated memory might be larger than requested.
    

### Memory Allocation Guidelines

- **kzalloc():** Use for small allocations that need zeroing.
- **kmalloc():** Use for small allocations that don't need zeroing.
- **vmalloc():** Use for large, virtually contiguous allocations.
- **alloc_pages():** Use for large, physically contiguous allocations (power of 2).
- **alloc_pages_exact():** Use for large, physically contiguous allocations (not a power of 2).

### OOM Killer

A kernel mechanism that kills processes when the system runs out of memory.

- **Overcommit and the OOM Killer:** Linux allows overcommitting memory, meaning it can allocate more virtual memory than physically available. The OOM killer is a last resort when memory pressure becomes too high.
- **OOM Score:** Each process has an OOM score, indicating its likelihood of being killed by the OOM killer.
- **Controlling the OOM Killer:** You can adjust the OOM score of a process using `/proc/<pid>/oom_adj` or the `choom` utility.

## Chapter 10: The CPU Scheduler - Part 1

- **Kernel Scheduling Entity (KSE):** In Linux, the thread is the KSE, the unit of scheduling.
- **POSIX Scheduling Policies:** Linux supports SCHED_OTHER (default), SCHED_FIFO (real-time), SCHED_RR (real-time), SCHED_BATCH, and SCHED_IDLE.
- **Modular Scheduling Classes:** The scheduler is designed with modular scheduling classes: stop-sched, deadline, rt (real-time), fair, and idle.
- **Completely Fair Scheduler (CFS):** The default scheduler for regular tasks, aiming for fairness and throughput.
- **vruntime:** A virtual runtime value used by CFS to track a task's CPU usage.

## Chapter 11: The CPU Scheduler - Part 2

- **Visualizing Scheduling:** Tools like LTTng, trace-cmd, and perf can be used to visualize CPU scheduling events and analyze system behavior.
- **CPU Affinity:** The CPU affinity mask controls which CPUs a thread is allowed to run on.
- **Cgroups:** Cgroups (control groups) provide a way to manage and limit resource usage (CPU, memory, etc.) for groups of processes.
- **Real-Time Linux (RTL):** A patchset that converts the mainline Linux kernel into a real-time operating system (RTOS).
- **Latency Measurement:** Tools like cyclictest and BPF-based tools (runqlat, runqslower) can be used to measure scheduling latencies.

## Chapter 12: Kernel Synchronization - Part 1

### Critical Sections, Exclusive Execution, and Atomicity

- **Critical Section:** A code segment that accesses shared data and requires protection from concurrent access to prevent race conditions.
- **Exclusive Execution:** Only one thread can execute a critical section at a time.
- **Atomicity:** An operation that is indivisible and cannot be interrupted.
- **Locks:** Mechanisms used to enforce exclusive execution of critical sections.
- **Concurrency Concerns in the Kernel:**
    - Multicore systems can lead to data races.
    - Preemptible kernels and blocking I/O can introduce race conditions.
    - Hardware interrupts can cause concurrency issues.
- **Locking Guidelines:**
    - Keep critical sections short.
    - Lock data, not code.
    - Establish a lock hierarchy and acquire locks in a consistent order.
    - Avoid recursive locking.
    - Prevent starvation by releasing locks promptly.
- **Deadlocks:** A situation where two or more threads are blocked, each waiting for a lock held by another.
- **Mutex vs. Spinlock:**
    - **Mutex:** A sleeping lock suitable for process context where blocking is allowed.
    - **Spinlock:** A busy-waiting lock suitable for interrupt context or short critical sections in process context.

### Using the Mutex Lock

- **Mutex Initialization:** Use `DEFINE_MUTEX` for static initialization or `mutex_init` for dynamic initialization.
- **Mutex Locking/Unlocking:** Use `mutex_lock` to acquire the lock and `mutex_unlock` to release it.
- **Mutex Variants:**
    - `mutex_lock_interruptible`: Allows the lock to be interrupted by signals.
    - `mutex_trylock`: Attempts to acquire the lock without blocking.
    - `mutex_lock_killable`: Allows the lock to be interrupted by fatal signals.
    - `mutex_lock_io`: Indicates that the lock is associated with I/O operations.

### Using the Spinlock

- **Spinlock Initialization:** Use `DEFINE_SPINLOCK` for static initialization or `spin_lock_init` for dynamic initialization.
- **Spinlock Locking/Unlocking:** Use `spin_lock` to acquire the lock and `spin_unlock` to release it.
- **Spinlock Variants:**
    - `spin_lock_irq`: Disables interrupts before acquiring the lock.
    - `spin_lock_irqsave`: Saves the current interrupt state, disables interrupts, and then acquires the lock.
    - `spin_unlock_irqrestore`: Restores the saved interrupt state after releasing the lock.
    - `spin_lock_bh`: Disables software interrupts (bottom halves) before acquiring the lock.

## Chapter 13: Kernel Synchronization - Part 2

### Atomic Operations on Integers (atomic_t and refcount_t)

- **atomic_t:** A data type for atomic operations on 32-bit integers.
- **refcount_t:** A newer data type for reference counting, providing better protection against integer overflow and use-after-free errors.
- **Atomic Operations:**
    - `atomic_read`, `atomic_set`, `atomic_inc`, `atomic_dec`, `atomic_add`, `atomic_sub`, etc.
    - `refcount_read`, `refcount_set`, `refcount_inc`, `refcount_dec`, `refcount_add`, `refcount_sub`, etc.

### Read-Modify-Write (RMW) Atomic Operations

- **RMW Operations:** Atomic operations that read a value, modify it, and write it back in a single, indivisible step.
- **Bitwise Operations:** `set_bit`, `clear_bit`, `change_bit`, `test_and_set_bit`, `test_and_clear_bit`, `test_and_change_bit`.
- **Finding Bits:** `find_first_bit`, `find_next_bit`, `find_first_zero_bit`, etc.

### Reader-Writer Locks

- **rwlock_t:** A data type for reader-writer spinlocks.
- **Reader-Writer Semantics:** Allows multiple readers or a single writer to hold the lock simultaneously.
- **Potential Issues:** Writer starvation and cache ping-pong effects.

### Lockless Programming with Per-CPU Variables

- **Per-CPU Variables:** Each CPU core has its own copy of a per-CPU variable, eliminating the need for locking in certain scenarios.
- **Benefits:** Improved performance and scalability by avoiding lock contention.
- **Usage:** Use `DEFINE_PER_CPU` for static allocation, `alloc_percpu` for dynamic allocation, and `get_cpu_var`/`put_cpu_var` to access per-CPU variables.

### Lock Debugging

- **Debug Kernel:** Enable lock debugging options in the kernel configuration (e.g., `CONFIG_DEBUG_MUTEXES`, `CONFIG_DEBUG_SPINLOCK`, etc.).
- **lockdep:** A runtime lock validator that detects potential deadlocks and other locking errors.
- **Lock Statistics:** Gather information about lock contention using `/proc/lock_stat`.

### Memory Barriers

- **Memory Barriers:** Instructions that enforce ordering of memory operations, preventing compiler and hardware reordering.
- **Types:** `rmb()` (read barrier), `wmb()` (write barrier), `mb()` (general memory barrier).
- **Use Cases:** Primarily used in device drivers for DMA operations and other scenarios where strict memory ordering is required.

---
### References

Billimoria, K. N. (2021). _Linux Kernel Programming_. Packt Publishing.

### Further Reading

- The Linux Kernel documentation: [https://www.kernel.org/doc/html/latest/](https://www.kernel.org/doc/html/latest/)
- Linux Kernel Newbies: [https://kernelnewbies.org/](https://kernelnewbies.org/)
- LWN (Linux Weekly News): [https://lwn.net/](https://lwn.net/)
- The Linux Kernel Mailing List (LKML) Archive: [https://lkml.org/](https://lkml.org/)
- Brendan Gregg's Blog (Performance Analysis): [http://www.brendangregg.com/](http://www.brendangregg.com/)
- The Linux Driver Verification (LDV) Project: [http://linuxtesting.org/](http://linuxtesting.org/)
- The Eudyptula Challenge (for learning kernel development): [https://github.com/agelastic/eudyptula](https://github.com/agelastic/eudyptula)
- [https://github.com/kaiwan](https://github.com/kaiwan)