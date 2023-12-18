 ## Modeling Sequential Logic

- Edge-triggered flipflops using `always @(posedge clk)` 

- D Latch:
    ```verilog
    always @(D or Clk)
        if (Clk) 
            Q = D;
    ```

- D Flipflop: 
    ```verilog
     always @(posedge Clk)
        Q <= D; 
    ```

- Async Reset Flipflop:
    ```verilog
    always @(negedge Resetn or posedge Clock)
        if (!Resetn)
            Q <= 0;  
        else
            Q <= D;
    ```

## Finite State Machines

- Moore vs Mealy
    - [[Moore]]: Output depends only on state
    - [[Mealy]]: Output depends on state + input

- FSM Verilog Template:

    ```verilog
    reg [state vars]  
    parameter [state encodings]
    
    always @(posedge clk) 
        case (state)
            [transitions] 
        endcase
        
    assign output = f(state); 
    ```

## Sequence Detector Example 

- Detect sequence of 3 consecutive 1s 
- Moore and Mealy versions

## Vending Machine Example

- Moore and Mealy FSM designs 
- Dispenses gum after 15 cent deposit

