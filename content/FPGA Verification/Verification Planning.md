## FPGA vs ASIC Verification

- FPGA has no tapeout constraint, so less pressure on verification timeline
- Lower investment into verification process
    - Involve designers more
    - Gradual testbench development
- Portability requires replicating lab issues in verification

## Verification Goals

- Develop overall verification strategy
- Reduce reliance on lab testing
- Assist designers with block-level verification
- Provide debugging capability for lab testing
- Support design stability with regression testing

## **Planning:**

- [[Verification Stages]]
- [[Test Scenarios]]
- [[Verification Methods]]
- [[Verification Levels]]

## **Testbench Development**

### Requirements

- Modular to allow gradual enhancement
- Directed tests first, add randomness later
- Reusable components between testbenches
- Transaction-based to abstract signal-level
- Random repeatability

### Levels

- **Signal-level:** Drivers, responders, monitors, checkers
- **Transaction-level:** Scoreboards, checkers, transactors

- [[Testbench Transactions]]
- [[Testbench Patterns]]
- [[Common Testbench Support]]

## **Advanced Verification**

### Statistical Checks

- Verify testbench correctness early on
- Compare statistics between testbench components

### Scoreboards

- Check DUT functionality through interfaces
- Input transactions => expected output transactions
- Constantly compare expected vs actual

- [[Functional Coverage]]
- [[Assertions]]
- [[Simulation Debugging]]
- [[Regression Testing]]

### Completion Criteria

- Simulation metrics (coverage etc)
- No new bugs found
- Lab testing passes