# Mealy Finite State Machines

In a Mealy FSM, the output depends on the **current state AND inputs**:  

- Transitions depend on state + inputs
- Output also depends on state + inputs 

**Advantages**:

- Often possible to encode complex logic with fewer states 

**Disadvantages:**

- Output not synchronized with the clock

**Example Mealy FSM module template:**

```verilog
reg state, next_state; 

always @(*) begin
   // next state & output logic 
   state = next_state; 
end

always @(posedge clk) 
   current_state <= next_state;
```

So in summary, Mealy FSMs produce output based on state & inputs, allowing for more compact state encoding but unsynchronized transitions.