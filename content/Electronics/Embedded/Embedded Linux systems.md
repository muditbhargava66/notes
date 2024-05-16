---
title: '"Embedded Linux systems"'
date: 2024-03-01
Version: 
description: 
tags: 
draft: true
---
1. Real-Time Systems
    - Hard Real-Time Systems
        - Systems where missing a deadline can cause catastrophic failure
        - Used in safety-critical or mission-critical applications (e.g. medical, spacecraft)
    - Soft Real-Time Systems
        - Missing deadlines affects performance but not catastrophic
        - Used in video streaming, audio, web servers etc.
2. Building Linux Kernel
    - Download kernel source code from kernel.org
    - Configure kernel (make menuconfig)
        - Enable/disable features
        - Match target system requirements
    - Compile (make zImage)
    - Create bootloader (e.g. U-Boot)
    - Copy kernel image to boot partition
    - Copy bootloader image to boot partition
    - Reboot device
3. Compilers
    - Cross-Compiler
        - Runs on one platform (host)
        - Generates code for another platform (target)
        - Used for embedded system development
    - Native Compiler
        - Generates code for platform it runs on
4. Bootloader
    - First software loaded on boot
    - Loads kernel into memory
    - initializes hardware
    - Launches kernel
    - Provides boot options interface
5. Memory Optimization
    - Kernel:
        - Configure to enable only needed services
        - Use lightweight kernel version
    - Services:
        - Disable unneeded services
        - Tune enabled services for lower memory
    - Applications:
        - Use memory efficient languages (Python, Ruby)
        - Compile apps for target architecture
    - Libraries:
        - Use optimized libraries (uClibc)
        - Disable unneeded library features
    - Compression:
        - Compress in-memory data
        - Reduce physical memory needs
6. Embedded Filesystems
    - ext2/ext3/ext4: Linux standard filesystems
    - VFAT: Compatible with many OSes
    - JFFS2: Journaling Flash File System
    - YAFFS: Yet Another Flash File System
    - UBIFS: Unsorted Block Image FS
7. Debugging
    - Kernel tracing (SystemTap, FTrace)
    - Serial console logging
    - Logic analyzer for hardware
    - Oscilloscope for electrical signals
8. Real-Time vs Standard Kernel
    - Real-Time
        - Optimized for quick, reliable response
        - Priority-based preemptive scheduler
        - More configurability
    - Standard
        - Assumes 'normal' task priorities
        - Not optimized for real-time apps