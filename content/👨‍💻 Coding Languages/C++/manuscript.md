# 1. Introduction to programming


Introduction to computer programming: CPU help is processing the computer program.

## Programming Languages 
---
We need language to communicate with a computer too! A [[#Computer Program/Application|computer program]] is a set of instructions written in a programming language that tells a computer what tasks to perform. 
Programming language are set of rules that consist of instructions for computers. There are many programming languages like [[#C++]], [[C|C]], [[#Python|python]], JavaScript, Go, [[2. Behavioral Modeling|Verilog]] etc.
### Python 
---
Python is a high-level, general-purpose [[#Programming Languages|programming language]]. It emphasizes code readability using significant indentation.
### C++
---
C++ is a compiled, statically typed, general-purpose [[#Programming Languages|programming language]] supporting multiple paradigms. It has imperative, object-oriented and generic programming features.

### Source code
---
A computer program in its human-readable form is called **source code**.
Here's a simple C++ program displaying "Hello World": 
[[3. Getting started with C++#Deep dive into the Boilerplate code| Boiler plate]]

```cpp
#include<iostream>
using namespace std;

int main(){
	//your code goes here
	cout << "Hello World";
	return 0;
}
```

**Source code** needs another computer program to execute because computers can only execute their native machine instructions.
Therefore, Source code may be translated to machine instructions using the language's [[2. Environment Setup#^compiler| compiler]].

**Machine language** is a set of instructions executed directly by a computer's central processing unit (CPU). Each instruction performs a very specific task, such as a load, a jump, or an ALU operation on a unit of data in a CPU register or memory. Every program directly executed by a <u>CPU is made of a series of such instructions.</u>

**Program Execution**
When a program starts executing, then the **operating system** loads it into memory and starts a process. The CPU starts executing the instructions written in the program and any required data is also loaded into memory (RAM).





---

# 2. Environment Setup


The C++ development environment consists of:

- A text editor to write C++ code
- A compiler to convert code into an executable
- Tools to run and debug the executable

## Editors
---
Popular editors for C++ include:
- [Visual Studio Code](https://code.visualstudio.com/download) - Free, open-source, extensions available
- Xcode (Mac only)
- CLion - Paid

## Compilers
---
The most common C++ compilers are:
- g++ (Linux & Mac)
- MinGW (Windows)
- Visual C++ (Windows)

Compilers convert C++ source code into machine code the computer can run.

To compile with g++ on command line:

```
g++ myProgram.cpp -o myProgram
```

> [!NOTE]
> The `-o` flag names the output executable file.

## Local IDE
---
An integrated development environment (IDE) is software for building applications that combines common developer tools into a single graphical user interface (GUI).

IDE is a software that allows you to **create, edit, run, test & debug** your code from a single GUI.

To run a C++ on our machine, we need
- Text editor 
- C++ [[#Compilers compiler|compiler]]
- Command line/ Terminal to invoke the computer 

## Absolute vs Relative Paths
---
Absolute path specifies the full location of a file or folder from the root of the file system. For example:

```
/User/name/Documents/program.cpp
```

A relative path specifies the location relative to the current working directory. For example, if you are already in the Documents folder:

```
program.cpp
```

Using the correct path is important when accessing files from terminals or code.

---

# 3. Getting started with C++


# History
---
- C++ is a cross-platform language that can be used to create a **high-performance applications**.
- C++ was developed by [Bjarne Stroustrup](https://www.stroustrup.com/), in 1979 at bell Labs as an extension to the the [[C as a Low-Level Language]] .
- C++ gives programmers a high level of control over system resources and memory.
- The language was updated multiple times leading to various C++11, C++14, C++17, C++20, C++23.

## Applications
---
- [[1. Introduction to programming|C++]] can be found in code of **operating systems**
- **Graphical User Interfaces** and **embedded systems** 
- Many **gaming engines** are written in C++ 
- Web browsers like **Mozilla, Chrome** are written in C++ 
- Banking applications Libraries & Frameworks for Machine learning like tensor-flow by google.

## Deep dive into the Boilerplate code:
---
Boilerplate code:
```cpp
include<iostream>
using namespace std;

int main(){
	//your code goes here
	cout << "Hello World";
	return 0;
}
```

`#include` : Pre-processor Directive : Gives instruction to the compiler for the pre-processing of the code.

`iostream` : Header file : For adding additional functionality in your code using a pre-written code file.

`using namespace std` : C++ standard namespace like `cout`, `cin` etc.

`cout` : Cout object : We want to output something in the console or the terminal.

`int main()` : Functions : Entry point : program starts executing from the main & any logic that you will define will go in the main. Each function will return something.

`return 0` : defines successful execution of the main function.

> [!NOTE]
> Compilation happens for every line which is line 1 - 7.
> Execution happens for line 4 - 7.

# Input -Output
---
## Variables
---
To store data from user input we need to create buckets in the memory, the buckets are called [[#Variables|variables]]. Each variable is of a certain datatype.

```cpp
#include<iostream>
using namespace std;

int main(){
	//creating variables
	int a, b, c;

	//reading inputs
	cin >> a;
	cin >> b;
	cin >> c;

	## outputs
	cout << "A:" << a << "B:" << b << "C:" << c << endl;

	//sum
	int sum  = a + b + c;
	cout << sum << endl;
	// optional : cout << (a + b + c) << endl;
return 0;
}
```
> [!FAQ]
> C++ is a case sensitive language.

## Comments
---
Single line comment : 
```cpp
// this is a comment
```
Multi line comment : 
```cpp
/*
This is a multi line
commment in C++
*/
```


---

# 4. Variables and Datatypes


Every program has set of instructions which work on some **data**.

# Variables
---
Variables are the buckets in the memory that hold **some type of** data, for example:
- Integer : 4
- Float : 2.5
- Character : a
- String : "Hello"

**Variable name**: A label for a memory location.
**Value**: The something that would be stored in a variable.
**Storage**: A place where data can be stored.
**Declaration**: Announcing a variable (usually) at the beginning of a program.
**Naming Convention**: A set of rules about the names of variables.
**Assignment**: Giving (setting) a variable a value.

## Naming Convention 
---
- For variable name we can use uppercase and lowercase letters, digits from 1 to 9 and underscore.
- First character must be underscore or letter.
- C++ is **strongly typed language**. So every variable needs to be declare before using it.
```cpp
// Valid names
int topics = 3;
int marks = 20;
int student_i = 5;

// Invalid names 
1_student = 8;
```

## Variable Initialization
---
Variables when just declared have garbage value until they are assigned a value for the first time.
We can assign a specific value from the moment variable is declared, called as _initialization of variable_.
```cpp
// Declare 
int marks; // will contain some garbage data

// Declare + Assign (Init)
int x = 10;
```

## Variable assignment 
---
We can assign a specific  value to the variable using '=' operator, called as assignment of a value to a variable.
Variables by default contain a **garbage value**.
```cpp
// Declare 
int marks;

// Assignment 
marks = 20;

// Assignment 
marks = marks + 20;
```

## Basic Arithmetic Operators
---
Arithmetic operators are used to perform arithmetic operations on variables and data.
We can perform basic operations on variables using operators:

| Operator | Function |
| ---- | ---- |
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulo |

> [!FAQ]
> Division Operation (a / b) in our program. The / operator is the division operator. If an integer is by another integer, we will get the quotient.
> However, if either divisor or dividend is a floating-point number, we will get the result in decimals.

> [!NOTE]
> The modulo operator % computes the remainder. When a = 9 us divided by b = 4, the remainder is 1.

# Datatype
---
Data comes in different types - such as integer, floats, string, boolean values etc. When you create the variable, you reserve some space in memory.
Memory is allocated based on the variable's datatype. The amount of memory required depends on the datatype.
```cpp
// Here int, char, bool, are the datatypes

int marks = 80;
char letter = 'A';
bool isRainy = false;
```

## Basic Data Types [[#Variables]] 
---
Also know as primitives & it types are as follows:
- int : 5, 37, 17834276
- char : 'M', '@', 'a', '5'
- bool : true or false
- float : 16.25, 17.6756
- double : Higher precision; for e.g. value of a pi
- void : nothing

```cpp
#include<iostream>
#include<iomanip>
using namespace std;

int main(){
	// Variable Init
	int a = 10;
	float b = 20.56; // By default it will print the output upto 4 places of decimal
	double e = 20.7876786587;
	char c = 'A';
	bool d = true;
	
	// Print
	cout << a << endl;
	cout << b << endl;
	cout << fixed << setprecision(6) << e << endl;
	cout << c << endl;
	cout << d << endl;
	
	return 0;
}
```

## Size of Operator 
---
The sizeof is a **keyword**, but it is a **compile-time operator** that determines the size, **in bytes**, of a variable or data type.
The sizeof operator can be used to get the size of variables, classes, structures like [[10. Arrays|10. Arrays]], and any other user defines datatype.

```cpp
#include<iostream>
using namespace std;

int main(){
	int marks = 10;
	
	cout << sizeof(marks) << endl; // Output = 4 bytes & 1 byte = 8 bits
	cout << sizeof(float) << endl; // Output = 4
	cout << sizeof(double) << endl; // Output = 8
	cout << sizeof(char) << endl; // Output = 1
	cout << sizeof(boolean) << endl; // Output = 1
	return 0;
}
```

## Data Type Modifiers
---
- Long : 64 bit which is double the normal int type.
- Short : 16 bit which is half the normal int type.
- Signed : if MSB is 1 then it is negative number & if MSB is 0 then it is a positive number. The remaining 31 bits represent the magnitude. **By default all integers are signed** and MSB is also called the signed bit.
- Unsigned : All 32 bits will be using for storing the data.

```cpp
#include<iostream>
using namespace std;

int main(){
	int marks = 10;
	
	long int number = 12232132132312322321; // more than 10^9
	int number_int = number; // memory overflow will happen 

	cout << number << endl;
	cout << number_int << endl;
	return 0;
}
```

# Typecasting
---
## Implicit Typecasting 
---
```cpp
#include<iostream>
using namespace std;

int main(){
	cout << (5/3) << endl // output = 1

	// Typecasting -> change of the result datatype and the output will be on the basis of the priority list
	
	// Implicit Typecasting (Compiler automatically changes the result)
	// Float + Int 
	cout << (5/3.0) << endl; // output = 1.66667
	cout << (5.0/3) << endl; // output = 1.66667

	// Char + Int
	char letter = 'A';
	cout << letter + 1 << endl; // output = 66
	letter = letter + 1;
	cout << letter << endl;  // output = B

	// Boolean + Int = Int 
	cout << (false + 5) << endl; // output = 5
	return 0;
}
```

Priority list:
- `Floot` or `double` 
- `Int`
- `char` 
- `bool`
## Explicit Typecasting 
---
```cpp
#include<iostream>
using namespace std;

int main(){
	// Int 
	cout << (float)5/3 << endl; // output = 1.66667

	// Char + Int
	char letter = 'A';
	cout << char(letter + 1) << endl; // output = B
	return 0;
}
```


---

# 5. Operators and Expression


# Expressions
---
## Expressions Vs Statements 
---
```cpp
// Statements 
int total_marks = pyhsics + chem + math; // statements 
x = y = z;

// Expressions
int x = 10; // 10 is a expression 
int y = 20, z = 30;
x = y = z + 10;
```
- Any [[4. Variables and Datatypes#Variables|variable]] name (x, y, z, ...), constant, or literal is an expression.
- One or more expressions combined by an operator constitute an expression, e.g., x + y or x * y  + z

In [[3. Getting started with C++|C++]], assignment is also an expression, e.g., x = y + z. As a consequence, it can be used within another assignment: x2 = x = y + z.
**Assignments are evaluated from right to left.**
# Statements
---
Any of the expressions above followed by a semicolon is a statement.

The variable and constant declarations we have seen before are also statements. As the initial value of a variable or constant, we can use any expression.

A single semicolon is an empty statement, and we can thus put as many semicolons after an expression as we want.
```cpp
int marks = 10 // statement 

5 + 3 // expression 
5 + 3; // statement 

int z = 5 + 3; // statement 
int total = marks; // statement 

// Control Statements 
if (...){

}
```
# Operators 
---
## [[4. Variables and Datatypes#Basic Arithmetic Operators|Arithmetic Operators]]
---
## Relational Operators 
---
A relational operator  is used to check the relationship between two operands.

| Operator | Function |
| ---- | ---- |
| == | isEqual to  |
| != | Not Equal to |
| > | Greater than |
| < | Lesser than |
| >= | Greater than or Equal to |
| <= | Lesser than or Equal to  |
## Logical Operators
---
Logical operators are used to check whether an expression is true or false. If the expression is true, it returns 1 whereas if the expression is false, it returns 0.

| Operator | Function |
| ---- | ---- |
| && | Logical AND |
| \|\| | Logical OR |
| ! | Logical NOT |
## Bitwise Operators 
---
In C++, bitwise operators are used to perform operations on individual bits. They can only be used alongside `char` and `int` data types.

| Operator | Function |
| ---- | ---- |
| & | Binary AND |
| \| | Binary OR |
| ^ | Binary XOR (Exclusive OR) |
| ~ | Binary one compliment (Flip all bits of a number) |
| << | Left Shift |
| >> | Right Shift |
## Assignment Operators 
---
Also known as **compound assignment operators** (combine binary operator with assignment operator).

| Operator | Function |
| ---- | ---- |
| = | Assignment  |
| += | Compound Addition |
| -= | Compound Subtraction |
| *= | Compound Multiplication |
| /= | Compound Division |
| %= | Compound Modulo  |
## Misc Operators 
---
Here's a list of some other common operators available in C++.

| Operator | Function |
| ---- | ---- |
| \[\[4. Variables and Datatypes#Size of Operator\|sizeof\]\] | returns size of datatype |
| \[\[6. Conditional Statements#Ternary Operator\|?:\]\] | Ternary operator |
| & | Address of operator |
| . | Dot operator |
| * | Dereference operator  |
| -> | Access members of objects |
### Increment Decrement
---
Arithmetic operators are used to perform arithmetic operations on variables and data.

| Operator | Function |
| ---- | ---- |
| ++ | Increment  |
| -- | Decrement  |
```cpp
int a = 10;

a++; // postincrement
++a; // preincrement

a--; // postdecrement
--a; // predecrement
```


# Associativity & Precedence
---
- [ ] Pending

---

# 6. Conditional Statements


> [!NOTE]
> Control flow = Conditional Statements

# if
---
Use the `if` statement to specify a block of C++ code to be executed if a condition is true.
```cpp
if(condition){
	// Block gets executed if the condition is true
	// Some logic here
}
```

```cpp
#include<iostream>
using namespace std;

int main(){

	int phone = 15; // 15k
	int money;
	
	cout << "Enter the money you have" << endl;
	//Read money 
	cin >> money;
	
	if(money>=phone){
		cout << "Lets buy the phone" << endl;
		}
	else{
		cout << "Lets wait for the sale" << endl;	
		}
	
	cout << "Thanks for shopping" << endl; // Always get executed 
	return 0;
}
```
# if-else 
---
## else statement 
---
The `else` statement is used along with the `if` block.
Use the `else` statement to specify a block of code to be executed if the condition us _false_.
```cpp
if(condition){
	// Block gets executed if the condition is true
	// Some logic here
}
else{
	// Some code, execute when the condition is false 
}
```

## Multiple If's
---
```cpp
#include<iostream>
#include<cstring>
using namespace std;

int main(){

	int phone = 15; // 15k
	string weather;
	int money;
	
	cin >> money >> weather;
	// cout << "Enter the money you have" << endl;
	// Multiple If Blocks
	// Shopping 
	if(money>phone){
		cout << "Lets buy the phone" << endl; // condition 1
		}
	// Picnic
	if(weather==pleasant){
		cout << "Lets go for a picnic" << endl; // condition 2
		}
	else{
		cout << "Lets play indoor games" << endl;// else block only depends upon condition 2
		}
	return 0;
}
```
# else-if
---
Use the `else if` statement to specify a new condition if the previous block condition _false_.
```cpp
if (condition1){
	// Block of code to be executed if condition1 is true
}
else if (condition2){
	// Block of code to be executed if the condition1 is false  and condition2 is true
}
else {
// Block of code to be executed if the condition1 and condition2 both are false
}
```

# Ternary Operator [?:]
---
- It consist of three operands, hence the name is ternary operator.
- It is often used to replace simple `if else` statements. 
```cpp
// Syntax
variable = (condition) ? expressionTrue : expressionFalse 
```

```cpp
#include<iostream>
#include<cstring>
using namespace std;

int main(){

	string weather;
	int temp;
	cin >> temp;
	
	/* Replaceable code
	
	if(temp>30){
		weather = "hot";
		}
	else{
		weather  = "Pleasant";
		}
		*/
	
	// Ternary operator 
	weather = temp > 30 ? "Hot" : "Pleasant";
	cout << weather << endl;
	return 0;
}
```
# Switch Case
---
Use the `switch` statement to select one of many code blocks to be executed.
```cpp
switch(expression){
	case x:
		// code block 
		break;
	case y:
		// code block
		break;
	default:
		// code block
}
```
- The `switch` expression is evaluated once.
- The value of the expression is compared with the values of each case.
- No complex conditions for a case.
- If there is a match, the associated block of code is executed.

---

# 7. Loops


# Loops 
---
When you need to repeat a block of code multiple times, use loops in C++. Loops allow you to automate repetitive tasks efficiently.

Main types of loops in C++:
- [[#Loops|Loops]] 
- [[#While Loop|While Loop]]
- [[#For Loop|For Loop]] 
- [[#Do While Loop|Do While Loop]]
- [[#Nested Loops|Nested Loops]]

## While Loop
---
The `while loop` loops through a block of code as long as a specified condition is true.

```cpp
// initialization

while(condition){
	// code block 
	// update
}
```

- Initializes a variable before the loop
- Checks condition each iteration
- Updates variable inside loop body

```cpp
// Example 

int i = 0;
while(i<5){
	cout << i << "\n";
	i++;
}

/* Output:
0
1
2
3
4
*/
```

> [!FAQ]
> `\n` is used for adding new lines while displaying the output.

```cpp
#include<iostream>
using namespace std;

int main(){
	// Read N Numbers and find their sum
	int n;
	cin >> n;
	
	int i = 1; // Track the number of times loop is going to run 
	int sum = 0;
	while(i<=n){
		// cout << i << endl;
		int num;
		cint >> num;
		sum = sum + num;
		i = i+1;
	}
	
	// Final sum
	cout << sum << endl;
}
```

## For Loop 
---
The `For loop` is very similar to while loop, it combines the 3 steps that have seen in a single line. Both [[#For Loop|for loop]] and [[#While Loop]] can be be used interchangeably and have some performance.

```cpp
for(inttialization; condition; update){
	// code block 
}
```

- Often used when number of iterations is known
- Easier to read than while loops

```cpp
for(int step=1; step<=5; step=step+1){
	
	// code block 
	cout << step << endl;
}
```

```cpp
#include<iostream>
using namespace std;

int main(){
	
	// Scope of i is restricted and it became local to the loop
	// But if we declared it outside as well
	int i;
	
	// For loop 1
	for(int i=0; i<=5; i=i+1){
		cout << i << endl;
	}

	// For loop 2
	for(; \i<=5; ){
		cout << i << endl;
		i=i+1;
	}

	cout << "After the loop:" << i << endl;
}
```

```cpp
#include<iostream>
using namespace std;

int main(){
	
	// Read N Numbers and find the sum of numbers which are even
	int n;
	cin >> nn:
	
	int sum = 0;
	
	// For Loop
	for(int i=1; i<=n; i++){ 
		int num;
		cin >> num;
		
		// Conditional Statement 
		if(num%2==0){ 
			sum = sum + num;
			}
	}
	
	cout << "Sum of even numbers:" << sum << endl;
}
```

> [!FAQ]
> Both `while` and `for` loops are **Entry Controlled** Loops.

## Do While Loop 
---
The `do while` loop is a **exit controlled loop**.
This loop will execute the **code block at-least once**, before checking if the condition is true, then it will repeat the loop as the condition is true

```cpp
do {
   // code block 
} while(condition);
```

```cpp
int i=0;
do {
	cout << i << "\n"
	i++;
}
while (i < 5)
```

```cpp
#include<iostream>
using namespace std;

int main(){
	// Do while loops 
	int money =5;
	
	do{
		cout << "Shopping with money: " << money << endl;
		money = money - 1;
	}
	while(money>0);

	return 0;
}

/* Output:
Shopping with money: 5
Shopping with money: 4
Shopping with money: 3
Shopping with money: 2
Shopping with money: 1
*/
```

```cpp
#include<iostream>
using namespace std;

int main(){
	
	// Read numers until I don't get negatove number 
	// 10, 2, 54, 22, -9 Stops 
	
	int number;
	do{
		cin >> number;
		cout << number;
	}
	while(number>=0);
}
```

## Nested Loops 
---
You can place a loop inside another loop to create `nested loops`. Useful for iterating through multidimensional data.

```cpp
for(int i=0; i<3; i++) {
  
  for(int j=0; j<5; j++) {
    // inner loop 
  } 

}
```

## Break Statement 
---
`Break Statement` is used to **explicitly terminate** the loop based upon a certain condition.
As soon as the `break statement` is encountered from within a loop, the loop stops and control returns from the loop immediately to the first statement after the loop.

```cpp
while(condition1){

		if(condition2){
			break;
	}
}
```

```cpp
#include<iostream>
using namespace std;

int main(){

	int cal = 0;
	int mom_calls_up = 10;
	
	while(cal<50){
		cout << "Running and Burning " << cal << endl;
		if(cal == mom_calls_up){
			break;
		}
		cal = cal + 1;
	}
	cout << "Workout complete " << cal << endl;
	
	return 0;
}
```

> [!NOTE]
> The `break` statement allows you to terminate the nearest enclosing loop statement immediately.

### Break example - Prime checker:
```cpp
#include<iostream>
using namespace std;

int main(){
	int N;
	cin >> N;
	// Check if the hiven N is prime or not
	
	int i;
	for(i = 2; i < N; i++){
		// if N is divisible by i
		if(N%i==0){
			break; // N is divisible - not prime
		}
	}
	
	if(i==N){
		// Loop ended normally
		cout << "Prime" << endl;
	}
	else{
		cout << "Not Prime" << endl;
	}
	return 0;
}
```
Here `break` exits the loop early if a factor is found. After the loop, we can check if it iterated all the way to N to determine if N is prime.

## Continue Statement 
---
It is also a **control statement**, The `continue` statement skips the current iteration of a loop but does **not** terminate the loop. Execution jumps to the next iteration.
```cpp

while(....){
		if(condition){
				continue;
		}
	
	// Rest of loop body
}
```

When `continue` is executed, the remaining statements in the loop body are skipped and the next loop iteration begins.

Continue example - Skipping multiples of 7:
```cpp
#include<iostream>
using namespace std;

int main(){
	
	int i = 0;
	while(i<=20){
	
		if(i%7==0){
			cout << "Mutiple of 7" << endl;
			i = i+1;
			continue;
		}
		
		cout << i << endl;
		i++
	}
	return 0;
}
```

Here when `i` is a multiple of 7 we print a message and use `continue` to skip printing `i`.

> [!NOTE]
> The key difference from `break` is that `continue` moves to the next _iteration_ rather than terminating the whole loop.

---

# 8. Functions


# Topics
---
- Motivation: Real-world examples where functions are useful (e.g. code organization, reusability)
- [[#Functions|Functions]]: Definition, declaration, call
- [[#Parameters|Parameters]]: Definition, passing data, default values
- [[#Return Values|Return values]]: Definition, return statement
- Default values 
- [[#Function Overloading|Function Overloading]]

# Functions 
---
Functions organize code into reusable, modular blocks that only execute when called.

**Benefits:**

- Code organization
- Reusability
- Modularity
- Readability
- Maintainability

```cpp
void play_music(){
	cout << "Playing Music";
}

int main(){
	play_music(); // call the function 
	
	return 0;
}
```

**Definition:** A function is a block of code that executes when "called".

**Declaration:** Defines the function name, return type, and parameters.

**Definition:** Provides the body/logic of the function.

**Call:** Executes the function code block followed by two parentheses () and a semicolon ;

```cpp
// Declaration + Definition = Functions 

// Declaration 
void play_music(){
// Definition/Logic
	cout << "Enter your favourite song : ";
	int song;
	cin >> song:
	cout << "Playing song : " << song;
}

// Function Call
play_music();
```
## Forward Declaration
---
A forward declaration tells the compiler about a function before it is defined. This allows you to call the function before defining it.

**Why use forward declarations?**

- It allows you to declare functions in any order, instead of having to define a function before calling it. This improves code organization.
- It avoids ordering dependencies and circular dependencies between functions that call each other.

**Example:**

```cpp
#include<iostream>
using namespace std;

// Forward Declaration 
void playMusic();

int main(){
	playMusic();
	return 0;
}

// This will give compile time error untill unless Forward declaration is not there

void playMusic(){
	cout << "Playing Music";
}
```

Without the forward declaration above `main()`, the code would fail to compile due to `playMusic()` not being defined at the point it is called.

> [!TIP] Some key points:
> - The declaration only needs the function name, parameters, and return type.
> - You can put the full definition anywhere later.
> - This relaxes restrictions on ordering compared to no forward declaration.
> 
>> [!NOTE]
>>Compilation happen from Top-to-Bottom of a code.
>>Execution happen for the main() block of the code.
# Parameters 
---
Parameters allow passing data into a function.

**Why Use Parameters?**
- It enables code reusability - same function can be used for different values
- It allows making functions more dynamic and configurable
- Eliminates need for global variables to pass data
### Passing Data through 'Parameters '
---
You can pass data, known as parameters, into a function. Parameters act as variables inside the function. You can add as many parameters as you want, just separate them into a comma.

```cpp
void play_music(int song_id){ // int song_id is a parameter
	cout << "Playing song" << song_id;
}

int main(){
	
	play_music(5);
	return 0;
	
}
```

```cpp
#include<iostream>
using namespace std;

void playMusic(int songID, float Duration){ // int songID is a parameter
	cout << "Playing Song " << songID << " for" << Duration << " minutes" << endl;
}

int main(){
	playMusic(1, 5.00); // value 1, 5.00 is an argument
	playMusic(2, 3.21);
	playMusic(3, 3);
	return 0;
}
```
## Default Values of Parameters 
---
You can also set default parameter values that are used if no argument is passed, by using the equal sign (=). If we call the function without an argument, it uses the default value.

```cpp
// default value parameters should come after parameters with no-default 
void play_music(int song1=1, int song2=2, int song3 =3){

	cout << "Playing Song " << song1 << song2 << song3 << endl;
}

int main(){
	play_music(5);
	return 0;
}
```
# Return Values 
---
If you want the function to `return` a value, you can use a data type (such as `int`, `string`, etc.) instead of `void`, and use the return keyword inside the function.

```cpp
bool login(String username){
	// some logic 
	return true;
}

int countFriends(){
	// some logic 
	return 5;
}

void play_music(int song1=1, int song2=2, intsong3=3){
	cout << "Playing song " << song1 << song2 << song3;
}
```

Functions can also return some data back to the place from where they are called using a `return` keyword and specifying a return type.
The void keyword used in the below examples, indicates that the function should not return a value.

```cpp
void play_music(int song1=1, int song2=2, intsong3=3){
	cout << "Playing song " << song1 << song2 << song3;
}
```

**Example:**
```cpp
#include<iostream>
using namespace std;

int multiply(int a, int b) {
  int result = a * b;
  return result; 
}

int main() {
  
  int x = 5, y = 3;
  
  int product = multiply(x, y);
  
  cout << "Product is: " << product; // Prints 15
  
}
```

> [!TIP] Some key points:
> - T- Return type of `main()` should be `int` instead of `void` to return exit status code.
> - Return values can be ignored if not required by calling code.
# Function Example - Factorial 
---
Let's look at an example function that calculates the factorial of a number.

The factorial of a number N is defined as:

`Factorial(N) = 1 x 2 x 3 x ... x N`

For example:

`Factorial(5) = 1 x 2 x 3 x 4 x 5 = 120`

Here is how we can write a factorial function:

```cpp
#include<iostream>
using namespace std;

// Function declaration 
int factorial(int N);

int main() {

  int num; 
  cin >> num;

  // Function call
  int result = factorial(num); 
  
  cout << "The factorial of " << num << " is " << result << endl;
  
  return 0;
}

// Function definition
int factorial(int N) {   

  int factorial = 1;
  
  for(int i=1; i<=N; i++) {
    factorial *= i; // factorial = factorial * i
  }

  return factorial; 
}
```

**Explanation:**
- We first declare the function prototype before `main()`.
- We get user input and call `factorial()` in main().
- The factorial() function:
	- Initializes `factorial = 1`
	- Runs a loop calculating the product from 1 to N
	- Returns the factorial values 
- We print the final factorial value in `main()`

This demonstrates how we can break logic into reusable functions that can be called from anywhere inside code.
# Function Overloading 
---
Function overloading allows creating multiple functions with the **same name** but **different parameters**.

**Why Use Function Overloading?**

- It improves code readability by using the same function name to represent similar operations.
- You don't have to remember different function names that essentially do the same thing.
- It eliminates naming conflicts.

**Ways to Overload a Function**

There are two main ways to overload functions:

1. By using different **data types** for parameters 
```cpp
void print(int x) {
  // Print int  
}

void print(double x) {
  // Print double
}

void print(char* x) {
 // Print string   
}   
```
2. By using a **different number of arguments** 
```cpp
int sum(int x, int y) {
  return x + y;
}

int sum(int x, int y, int z) {
  return x + y + z;
}
```

## Functions Overloading - using Variable parameters 
---
```cpp
#include<iostream>
using namespace std;

// Functtion Overloading Demo -> Multiple Functions, same name
int area(int l, int b){
	return l*b;
}

int area(int l){
	return l*l;
}

int main(){
	cout << area(5) << endl;
	cout << area(5,3) << endl;
	
	return 0;
}
```
## Function Overloading Datatypes
---
```cpp
#include<iostream>
#include<vector>
using namespace std;

// Functtion Overloading Demo -> Multiple Functions, same name

// Create a Print function that accepts different types if datatypes 
void print(int a){
	cout << a << endl;
}

void print(vector<int> a){
	for(int x : a){
	cout << " , ";
	}
	cout << endl;
}

void print(char *arr){
	cout << arr << endl;
}

int main(){
	int a = 5;
	vector<in> arr = {1,2,3,4,5};
	char carr[] = "abcd" // after the last " it will hit the null
	
	print(a);
	print(arr);
	print(carr);
	
	return 0;
}


/* Output:
5
1, 2, 3, 4, 5
abcd
*/
```


---

# 9. Pointers


# Topics
---
 - [[#& Operator|& Operator]]
 - [[#Pointers|Pointers]] 
 - [[#Reference Variables|Reference Variables]] 
 - [[#1. Pass by Value|Pass by Value]] vs [[#2. Pass by Reference|Pass by Reference]] 
 
# & Operator
---
`Address Of` Operator (&)

- To get the address of a variable, we can use the address-of operator (&)
- Address will be in Hexadecimal number, i.e. $(16)^{Base}$
- Hexadecimal number starts with 0x.........

```cpp
int p=5;   
cout << p << endl; // 5 
cout << &p << endl; // Address of p
```

- The & operator returns a pointer to its operand
- It can be applied to variables, arrays, functions, etc.
- Does not allocate new memory, simply returns existing address

| Input | Operator | Type | Explanation | 
| ---- | ---- | ---- | ---- |  
| 5 & 3 | Bitwise AND | Binary | Performs a bitwise AND operation on the binary representations of 5 and 3 |
| &x | Address of | Unary | Returns a pointer to the variable x. This does not perform a bitwise operation. |
The key things to understand:
- The & operator behaves differently depending on the context
    - With two numeric operands (e.g. 5 & 3), it performs a bitwise AND operation
    - With a single variable operand (e.g. &x), it returns the memory address of that variable
- Bitwise AND operates on the binary representations of integers
    - Compares each bit position and sets to 1 only if both bits are 1
- Address of returns a pointer
    - This is a memory address that can be used to access the variable
    - Allows passing variables by reference instead of by value 

> [!NOTE]  Summary
> - & with two numbers → bitwise AND
> - & with a variable → address of operator

**Example**
```cpp
#include<iostream>
using namespace std;

int main(){

  int x = 10;

  cout << &x << endl; 
  // Prints memory address of x in hexadecimal format

  float y;

  cout << &y << endl;
  // Prints memory address of uninitialized float variable y

  char letter = 'A'; 

  cout << &letter << endl;  
  // Prints address of char variable letter

  cout << (void *)&letter << endl; 
  // Casts &letter to a void* pointer 
  // Allows printing as hexadecimal address instead of char

  int arr[100];

  cout << arr << endl; 
  // Prints base address of array arr
  // Array name represents address of first element

  cout << &arr << endl;
  // Prints address of entire array variable

  return 0;
}
```

Key points:
- & operator prints the memory address
- Works for regular variables, uninitialized vars, arrays
- Arrays have a base address that points to the first element
- Char pointers print ASCII character by default, need to cast to print address

# Pointers
---
In [[1. Introduction to programming#C++|C++]], a pointer is a variable that holds the address of another variable.

To declare a pointer:
```cpp
dataType *pointerName;
```

- dataType is the type of data the pointer points to
- The * indicates it is a pointer variable

```cpp
int x = 10, y = 20;

// Declare a Pointers 
int * xPtr = &x; // A pointer to an integer value 
int * yptr; // Declare 
yptr = &x; // Assign
```

## Dereference Operator `*`
---
An interesting property of pointers is that they can be used to access the variable they point directly. This is done by preceding the pointer name with the dereference operator (`*`). The operation itself can be read as value pointed to by"

```cpp
int x = 10; y = 20;

// Declaring a Pointer 
int * xPtr = &x; // a pointer to an integer value 

cout << xPtr; // Address of X
cout << *xPtr; // Value of X (Dereference Operator)
```

**Example:**
```cpp
#include<iostream>
using namespace std;

int main(){
	int x = 10;
	int * xPtr = &x;
	
	cout << x << endl; // 10
	cout << xPtr << endl // address 
	cout << &xPtr << endl; // address of pointer bucket 
	cout << *xPtr << endl; // x -> 10
	cout << *(&x) << endl; // 10
	
	return 0;
}
```

## Null Pointer
---
A null pointer points to address 0 (nothing):
```cpp
int x = 10, y = 20;

// Declaring a Pointer 
int * xPtr = &x; // a pointer to an integer value 

// Setting to NULL
xPtr = 0;
int *p = 0;
int *q = NULL;
```
- Always check for null before dereferencing
- Dereferencing null pointer causes errors

## Double Pointers
---
C++ allows pointers that point to other pointers, called double pointers:
```cpp
int **varPtr; // Holds address of another pointer
```

The rules of dereferencing apply, but an additional `*` is required:

```cpp
cout << **varPtr;
```

# Reference Variables
---
- References are like constant pointers that are automatically dereferenced
- A reference variable us an alias, that is another name for an already existing value (Not to a new memory)
- Declared using `&` instead of `*`

```cpp
int x = 10;
int &xRef = x; // Reference to x
```

- Once initialized, a reference cannot be changed to reference another variable
- More efficient and easier syntax than pointers in many cases

**Example**
```cpp
#include<iostream>
using namespace std;

int main(){
	int x = 10;
	int &y = x;
	
	cout << x << endl; // 10
	cout << y << endl; // 10
	
	return 0;
}
```

# Passing data to functions 
---
There are two main ways to pass data to functions in C++ - by value and by reference:
## 1. Pass by Value
---
Function gets a copy of the arguments, does not modify original
```cpp
void func(int x) {
  x++; // local copy only
}

int n = 10;
func(n); // n unchanged
```

- Changes to parameters not reflected outside
- Okay for basic data types
## 2. Pass by Reference 
---
Function gets a copy of the arguments, does not modify original

- using pointers 

```cpp
#include<iostream>
using namespace std;

void incMoney(int *moneyPtr){
	cout << moneyPtr << endl;
	// De-reference Operator 
	(*moneyPtr) = 2*(*moneyPtr);
}

int main(){
	int money = 10;
	// Pass by reference using pointer variables 
	incMoney(&money);
	cout << "Main : " << money << endl;
	
	return 0;
}
```

- using reference variables 

> [!NOTE]
> - More efficient than copying large data
> - Allows modifying passed parameters
> - Use const to prevent modification

```cpp
#include<iostream>
using namespace std;

// Pass by reference using Reference Variables 
void incMoney(int &myMoney){
	myMoney = 2*myMoney;
	cout << "My Money : " << myMoney << endl;
	
}

int main(){
	int money = 10;
	incMoney(money);
	
	cout << "Main money : " << money << endl;
	
	return 0;
}
```

---

# 10. Array


# Introduction 
---
Array basics: 
- Contiguous block of memory
- Elements of same data type
- Fixed size set at creation
- Faster access than other data structures
- Stored in stack memory
- Address is read-only
- Can create variable length arrays in C++

## Declaration & Allocation
---
```cpp
dataType arrayName[arraySize];
```

## Accessing Elements
---
Use index to access elements within bounds
```cpp
arrayName[0]; // First element
arrayName[i]; // ith element
```

## Initialization 
---
```cpp
int arr[3] = {1, 2, 3}; // Initializer list 
int arr2[3] = {}; // Default initialization
```

# Array Creation
---
```cpp
#include<iostream>
using namespace std;

int main(){
	// Create
	int arr[100] = {1,2,3,4};
	
	cout << arr[0] << endl;
	cout << arr[1] << endl;
	cout << arr[2] << endl;
	
	int n = sizeof(arr)/sizeof(int);
	cout << n << endl;
	
	// Print all the elements of the array 
	for(int i=0, i<=n, i++){
		cout << arr[i] << " , ";
	}
	cout << endl;
	
	return 0;
}
```

> [!NOTE] The key things to note:
> - `sizeof(arr)` returns the total size in bytes of the array `arr`
>- Each integer element occupies 4 bytes
>- There are X elements in the array
>- So total size = X * size of each element
>- By dividing the total size by the size of 1 element, we get the number of elements, which is X
# Array Input
---
To take array input from the user:
```cpp
#include<iostream>
using namespace std;

int main(){
	
	// Take size of array
	int n;
	cin >> n;
	
	// Declare array
	int arr[n];
	
	// Take input for each element
	for(int i=0; i<n; i++){
		cin >> arr[i];
	}
	
	// Print all the elements of the array 
	for(int i=0; i<n; i++){
		cout << arr[i] << " , "
	}
	cout << endl;
}
```

- First take size of array `n`
- Declare array of size `n` dynamically
- Run loop till n and use `cin` to input element by element 

We can also calculate total array size using:
```cpp
int size = sizeof(arr)/sizeof(int);
```

# Passing Arrays to Functions
---
Arrays can be passed to functions in two ways:

## Passing entire array
---
```cpp
#include<iostream>
using namespace std;


// Array name is an address which is read only
// Pointer variable can hold the address of any bucket/array in the memory 
void print(int * myArray){
	cout << sizeof(myArray) << endl;
}

int main(){
	
	// Take Input N
	int n;
	cin >> n;
	
	// Create
	int arr[n];
	for(int i; i=0; i++){
		cin >> arr[i];
	}
	
	// Array capacity 
	cout << sizeof(arr)/sizeof(int) << endl;
	
	print(arr);
	
	return 0;
}

// When done without pointer 
// 1 warning
/*Output
5
12345
20 <- Main loop <- Size of the array 
8 <- Size of Pointer variable
*/ 
```
## Passing pointer to first element
---
```cpp
#include<iostream>
using namespace std;


// Array name is an address which is read only
// Pointer variable can hold the address of any bucket/array in the memory 
void print(int * myArray,int n){
	
	for(int i=0; i < n; i++){
		cout << myArray[i] << endl;
	}
}

int main(){
	
	// Take Input N
	int n;
	cin >> n;
	
	// Create
	int arr[n];
	for(int i; i=0; i++){
		cin >> arr[i];
	}
	
	// Array capacity 
	cout << sizeof(arr)/sizeof(int) << endl;
	
	print(arr, n);
	
	return 0;
}
```

In both cases, modifications to array in function are reflected in original array.

Time Complexity: Passing array only passes address. So it takes constant time O(1).

# Linear Search 
---
Linear search is used to find the position of a given element in an array.

It works by traversing the array sequentially and comparing each element to the search value.

```cpp
#include<iostream>
using namespace std;

void print(int * myArray,int n){
	
	for(int i=0; i < n; i++){
		cout << myArray[i] << " , ";
	}
	cout << endl;
}

// Return index if present, otherwise -1
int linearSearch(int arr[], int n, int key) {

  for(int i = 0; i < n; i++) {
   
    // If key is found
    if(arr[i] == key) {  
      return i; 
    }

  }

  // If key not found 
  return -1; 
}

int main(){
	
	// Take Input N
	int n;
	cin >> n;
	
	// Input an array
	int arr[n];
	for(int i; i=0; i++){
		cin >> arr[i];
	}
	
	// Output an array 
	print(arr, n);
	
	// Which element to search 
	int key;
	cin >> key;
	
	int res = linearSearch(arr, n, key);
	if(res==-1){
		cout << "Element not found" << endl;
	}
	else{
		cout << "Present at index : " << endl;
	}
	return 0;
}
```

**Implementation:**

- Start from the first element
- Compare each element with search key
- If match found, return index
- If no match, return -1

**Time Complexity:**

- O(n) - Linear scan of entire array

**Applications:**

- Find if an element is present or not
- Find index/position of an element 

# Reversing an Array
---
Reversing an array means changing the order of elements to opposite direction.

For example, if original array is:
```cpp
1, 2, 3, 4, 5
```
Reversed array would be: 
```cpp 
5, 4, 3, 2, 1
```

There are two common methods:

## Using Loop
---
```cpp
void reverseArray(int arr[], int n) {
  for(int i = n-1; i >= 0; i--) {
    cout << arr[i] << " "; 
  }
}  
```  

- Start from end of array
- Print each element in reverse

## By Index Manipulation
---
```cpp  
void reverseArray(int arr[], int n){
  
  for(int i = 0; i < n; i++){
    cout << arr[n - i - 1] << " "; 
  } 
}
```

- Print $i^{th}$ element from end
- E.g. $0^{th}$ element from end is n-1

Time Complexity: O(n) to traverse array once

# Reversing In-Place
---
In-place reversal modifies array within same memory.

```cpp
void reverseInPlace(int arr[], int n) {
  
  int start = 0;
  int end = n-1; 
  
  while(start < end) {
    swap(arr[start], arr[end]);
    start++; 
    end--;
  }  
}
```  

- Initialize start and end index
- In loop, swap elements from ends 
- Increment start, decrement end
- Repeat till start < end

Benefits:
- Does not require extra memory
- Modifies array in-place

# Subarrays
---
A subarray is a contiguous part of an array.

For an array `arr[]` of size n, we can form different subarrays as follows:
```cpp
#include<iostream>
using namespace std;

int main(){
	
	// Subarray 
	int arr[] = {1, 2, 3, 4, 5}; 
	int n = sizeof(arr)/sizeof(int);
	
	// Generate all subarrays
	for(int i = 0; i < n; i++) {
	  for(int j = i; j < n; j++) {
	   
	    // Print current subarray
	    for(int k = i; k <= j; k++) {
	      cout << arr[k] << " "; 
	    }
	    cout << endl; 
	
	  }
	}
	return 0;
}
```

This generates subarrays starting from `arr[i]` to `arr[j]`.

For example for above array, it will print:

```cpp
1  
1 2 
1 2 3
1 2 3 4
1 2 3 4 5
2
2 3
2 3 4 
2 3 4 5
3
3 4
3 4 5
4 
4 5
5
```

So in this way, we can generate all subsequences of an array.

**Applications:**

- Finding maximum sum contiguous subarray (Kadane's algorithm)
- Finding longest contiguous subarray with a given property
- Many other array/string problems

Time Complexity:

- O(N^3) to print all subarrays
- Can be optimized to O(N^2) using better loops 

# Multidimensional Arrays
---
- Arrays containing other arrays
- Create [[#2D Arrays|2D]], 3D etc arrays
- Access elements using multiple indices

# 2D Arrays
---
A 2D array is an array of arrays. It is a table of elements arranged in rows and columns. 

For example:
```cpp
1 2 3
4 5 6
7 8 9
```

## Declaration
We declare a 2D array by specifying the number of rows and columns:

```cpp
int arr[100][100]; // Declares a 2D array of size 100 x 100
```

## Initialization
A 2D array can be initialized by nested for loops:

```cpp 
for(int i=0; i<rows; i++){
  for(int j=0; j<cols; j++){
    cin >> arr[i][j]; 
  }
} 
```

This allows us to initialize each element one by one.

## Accessing Elements
To access a particular element, we use two index values - row index and column index:

```cpp
arr[i][j] // ith row and jth column   
```

For example:
```cpp
arr[2][3] = 5; // Row 3, Column 4 element
```

## Traversal
We can traverse a 2D array using nested for loops. 

To print all elements:

```cpp
for(int i=0; i<rows; i++){
  for(int j=0; j<cols; j++){
	 cout << arr[i][j] << " ";
  }
  cout << endl; 
}
```

## Applications
- Tabular data
- Matrices
- Images 
- Games like chess, sudoku etc.

2D arrays allow us to represent multi-dimensional data for various applications. The elements are stored contiguously in row-major order in memory for fast access.

> [!NOTE]
> Defining columns is a must .

```cpp
#include<iostream>
using namespace std;

int main(){
	
	// 2D arrays
	int arr[100][100];
	
	// Rows, columns
	int rows;
	int cols;
	cout << "Rows: "; 
	cin >> rows; 
	cout << "Columns: "; 
	cin >> cols;
	
	// Read a 2D array 
	for(int i=0; i<rows; i++){
		for(int j=0; j<cols; j++){
			cin >> arr[i][j];
		}
		cout << endl;
	}
	
	// Print a 2D array 
	for(int i=0; i<rows; i++){
		for(int j=0; j<cols; j++){
			cout << arr[i][j] << " ";
		}
		cout << endl;
	}
	
	
	return 0;
}
```

## Memory (Row Major Order)

Even though a 2D array is conceptualized as a table of rows and columns, physically the elements are stored linearly in memory.

In **row major order**, the elements are stored row-wise i.e first all elements of row 1, then row 2 and so on.

For example:

```cpp
1 2 3
4 5 6
7 8 9 
```

This is stored in memory in the following linear sequence:

```cpp
1 2 3 4 5 6 7 8 9
```

Row major order allows easy access along rows, since each row's elements are stored contiguously. 

So if we access `arr[1][2]`:
  - Go to 2nd row (address is calculated based on number of cols)
  - Go to 3rd position within that row

This access takes constant time **O(1)**.

However, column-wise access may be slower as the column elements are not contiguous. To fetch a column we may need to traverse through multiple rows.

Overall, the linear row-major storage allows simplicity in computing locations, since 2D logical coordinates can be mapped to 1D physical location.

# Wave Print
---
Wave print refers to printing the elements of a 2D array column-wise in a wave pattern.

For example, for the following array:
```cpp
1 2 3 
4 5 6  
7 8 9
```

Wave print would be:
```cpp
1 4 7 8 5 2 3 6 9
```

Here is an implementation in C++:
```cpp
#include<iostream>
using namespace std;

void wavePrint(int arr[][100], int rows, int cols){
	
	// Iterate on every column
	for(int col = 0; col < cols; col++){
		if(col%2==0){
			for(int row=0; row <= rows-1; row++){
				cout << arr[row][col] << " ";
			}
		}
		else{
			for(int row = rows-1; row >= 0; row--){
				cout << arr[row][col] << " ";
			}
		}
	}
	cout << endl;
}

int main(){
	
	// 2D arrays
	int arr[100][100];
	
	// Rows, columns
	int rows;
	int cols;
	cout << "Rows: "; 
	cin >> rows; 
	cout << "Columns: "; 
	cin >> cols;
	
	// Read a 2D array 
	for(int i=0; i<rows; i++){
		for(int j=0; j<cols; j++){
			cin >> arr[i][j];
		}
		cout << endl;
	}
	
	// Print a 2D array 
	for(int i=0; i<rows; i++){
		for(int j=0; j<cols; j++){
			cout << arr[i][j] << " ";
		}
		cout << endl;
	}
	
	wavePrint(arr, rows, cols);
	
	return 0;
}
```

The key steps are:
- Iterate through each column
- Check if column is even or odd using `col%2`
- If even column:
    - Print from top to bottom
- If odd column:
    - Print from bottom to top

The time complexity is O(rows x cols) since we are iterating through every element once.

> [!INFO]
> Wave print can be useful for problems where we need to traverse a 2D array in zig-zag fashion from top left to bottom right. It is an alternative way to traverse a 2D array.

---

# 11. Sorting


# C++ sort function syntax
---
```cpp
sort(startIterator, endIterator);
```

Where:
- `startIterator` - Points to the first element to sort
- `endIterator` - Points to one past the last element to sort

For an array, to sort the entire array, we need to pass the start and end + 1 pointers:

```cpp
int arr[n]; // Array 

sort(arr, arr + n);
```

Here:
- `arr`: Points to first element of array
- `arr + n`: Points to one past the last element of array

We can also derive this as:

```cpp
start = arr 
end = arr + (n - 1) // Last element
end + 1 = arr + n
```

Therefore:

```cpp
sort(start, end + 1);
sort(arr, arr + (n-1) + 1);
sort(arr, arr + n);
```

So that statement breaks down the start and end pointers passed to sort function for an array.
# Sorting an Arrays 
---
- Sorting refers to arranging the elements of a container (like array or vector) in a logical order - ascending, descending etc.
- - The `std::sort()` algorithm from C++ standard library can sort elements in **O(NlogN)** time on average.
- `std::sort()` takes the array start and end positions. To sort the entire array:

```cpp
std::sort(arr, arr + n);
```

- `std::sort()` internally uses compare functions to compare elements and reorder them. By default, it sorts in ascending order.

> [!TIP]
> Inbuilt Sort function can’t be directly applied on 2D Arrays

```cpp
#include <iostream>
#include <algorithm> // for sort
using namespace std;

// User-defined descending comparator 
bool desc(int a, int b) {
  return a > b;
}

// Print array 
void printArray(int arr[], int n) {
  for(int i = 0; i < n; i++) {
    cout << arr[i] << " "; 
  }
  cout << endl;
}

int main() {

  int arr[] = {5, 2, 8, 3, 6}; 
  int n = sizeof(arr)/sizeof(arr[0]);

  // Sort array in ascending order (default comparator)
  sort(arr, arr + n); 
  printArray(arr, n);

  // Sort array in descending order (custom comparator)
  sort(arr, arr + n, desc);
  printArray(arr, n);
  
  return 0;
}
```

> [!NOTE] Explanation:
> - Includes required headers like `<algorithm>`
> - Defines a print array function for clarity
> - Custom descending comparator `desc`
> - Sorts array first in ascending order (default sort)
> - Then sorts again using `desc` comparator to sort descending
> - Prints sorted array after each sort

# Different Sorting Algorithms: 
---
- **Bubble Sort** - O(N^2) time, compares adjacent elements and swaps them if required
- **Insertion Sort** - O(N^2) time, grows a sorted array from left to right
- **Selection Sort** - O(N^2) time, selects minimum/maximum from unsorted part and puts in sorted part
- **Merge Sort** - O(NlogN) time, divides array into parts and merges them
- **Quick Sort** - O(NlogN) time on average, picks a pivot and partitions the array around it
- **Heap Sort** - O(NlogN) time, can be implemented using heaps
- **Counting Sort** - O(N+k) time, works on integers within a specific range
- **Radix Sort** - O(N) time, sorts based on individual digits/characters

# Comparators in Sorting
---
We can provide custom **comparator functions** to control the sorting logic of `std::sort()`.

A comparator function takes two elements as arguments and returns a bool value - true if first element goes before second element when sorting.

Some ways to define custom comparators:

## 1. Function Pointer

```cpp
bool desc(int a, int b) {
  return a > b; 
}

std::sort(arr, arr+n, desc);
```

## 2. Functor Class

```cpp
struct Descending {
  bool operator()(int a, int b) {
    return a > b;
  }  
};

std::sort(arr, arr+n, Descending()); 
```

## 3. Lambda Function 

```cpp 
std::sort(arr, arr+n, [](int a, int b){
  return a > b; 
});
```

## 4. Built-in Function Objects

Like `std::greater<T>` : 

- Function object (functor) that compares elements in **descending** order
- Defined in `<functional>` header

```cpp
std::sort(arr, arr+n, greater<int>()); // Descending sort 
```

Internally, `greater<int>()` implements:

```cpp
bool operator()(int a, int b) {
  return b < a; 
}
```

We can use it for any data type like `greater<string>()`. Custom comparators give flexibility to customize sorting logic.


## Example
---
Demonstrating the use of `greater<int>()` with `std::sort()`:

```cpp
#include <iostream>
#include <algorithm> // for sort 
using namespace std;

// Print function 
void print(int arr[], int n) {
  for(int i = 0; i < n; i++){
     cout << arr[i] << " ";  
  }
  cout << endl; 
}

int main() {

  int n;
  cin >> n;
  
  int arr[n];
  
  // Get array input
  for(int i=0; i<n; i++) {
    cin >> arr[i]; 
  }

  // Sort array in descending order  
  sort(arr, arr + n, greater<int>());

  // Print sorted array 
  print(arr, n);
  
  return 0;
}```


---

# 12. Character Arrays and Strings


# Char Array Basics
---
- The size of char data type is 1 Byte in C++ and 2 bytes in Java. In C++, char is defined as 1 byte by the language specification.
- The preferred method to read a string with whitespaces in C++ is `std::getline((std::cin, string))`. This is defined in the `<string>`header.
- `std::string` class is preferred over C-style character arrays because it provides many useful member functions for common string operations.

```cpp
#include<iostream>
#include <string>
using namespace std:

int main(){
	
	// Character arrays 
	char arr[100];
	
	// Assigning Values
	arr[0] = 'a';
	arr[1] = 'b';
	arr[2] = 'c
	arr[3] = '\0';
	
	cout << arr[0] << endl;
	cout << arr[1] << endl;
	cout << arr[2] << endl;
	
	cout << arr << endl; // will give content of array rather than the address of the array 
	// Special functionality of the character array
	
	// For getting the address of the character array 
	char * ptr = arr;
	cout << ptr << endl; //abc
	cout << (void *)ptr << endl; // address 
	
	// More ways to create a character array 
	char b[] = {'x', 'y', 'z', '\0'} // Character array must be null terminated
	cout << sizeof(b) << endl; // 4 byte
	cout << b << endl; //xyz
	
	// Another way
	char c[] = "hello"; // Double quotes means null terminated array
	cout << sizeof(c) << endl; // 6 byte
	cout << c << endl; //hello
	
	return 0;
}
```

## Strlen and Strcpy
---
The `strlen()` and `strcpy()` functions operate on null-terminated C-style strings. With C++ strings, equivalent functionality is provided through member functions:

```cpp
#include<iostream>
#include <string>
using namespace std:

int main(){
	
	// Char array Creation & Printing
	char arr[100] = "hello";
	
	// assign some new value inside it
	//strcpy(dest, src);
	strcpy(arr, "hi everyone");
	
	// length
	cout << "Length of string is " << strlen(arr) << endl; // 11
	cout << "Size of array is " << sizeof(arr) << endl; // 100
	
	// Print 
	cout << arr << endl;
	
	return 0;
}
```

# Input using Cin.GetLine
---
The `cin.getline()` function is used to read an entire line of input from the user, including spaces. This is in contrast to the `cin >>` operator which only reads a single word at a time.

Some key properties of `cin.getline()`:

- It takes the input character array and max length as parameters:

```cpp
char arr[100];
cin.getline(arr, 100); 
```

- By default it stops reading input at the newline '\\n' character. This allows it to read an entire line.

- An optional 3rd parameter can specify a different delimiter:

```cpp 
cin.getline(arr, 100, '$');
```

Now the input will stop at '$' instead of newline.

- Input is stored in the array along with the delimiter. So array size should account for that extra character.

- The newline '\\n' input also gets stored in the array. So a max length of 100 can actually only store 99 characters.

- A null terminator '\\0' is automatically added after the input.

Here is example code demonstrating cin.getline() to read line input:

```cpp
char name[100];
cin.getline(name, 100); //reads a name

char sentence[1000];
cin.getline(sentence, 1000, '.'); //reads sentence ending in '.'
```

> [!TIP]
> `cin.getline()` is the preferred method in C++ to read entire lines including space separated words. The parameters allow handling delimiters and max array size.

# Input using Cin.Get
---
The `cin.get()` function in C++ is used to read a single character input from the user. 

Some key properties of `cin.get()`:

- It reads and returns the next character immediately available in the input stream.

- It can read whitespace characters like space ' ' and newline '\n' which are ignored by `cin >>`.

- The returned character can be stored in a char datatype:

```cpp
char ch;
ch = cin.get();
```

- An IF check can then be used to take action based on the input character:

```cpp
if(ch == ' ') {
  // user entered space
} else if(ch == '\n') {
  // user entered newline 
} else {
  // user entered regular character
}
```

- stdin stream state is maintained, so `cin.get()` picks up right where previous input functions left off.

- Useful for taking precise character level input, or checking for specific delimiter keys.

Here is some sample code showing usage of cin.get():

```cpp 
char ch;
cout << "Enter any character: "; 

ch = cin.get(); //get input  

if(ch >= 'a' && ch <= 'z') {
  cout << "You entered: " << ch << endl;
} else {
  cout << "Not an alphabet" << endl; 
}
```

> [!TIP]
> `cin.get()` allows reading direct single character input in C++ and applying customized logic based on the input.

# String Length 
---
The C++ library provides the `strlen()` function to get the length of a null-terminated string. However, we can also create our own string length functionality.

Here is an example custom `length()` function to find the length of a char array:

```cpp
#include<iostream>
#include <string>
using namespace std:

int length(char *arr) {

  int count = 0;

  while(arr[count] != '\0') {
    count++; 
  }

  return count;

}

int main() {

  char arr[100] = "hello";
  
  int len = length(arr); // len = 5

  return 0;

}
```

The key aspects of this function:

- It accepts the character array as a parameter
- Initializes a count variable to track length
- Iterates through array until null terminator `\0` is reached
- Returns the final count value

We can compare this to the built-in `strlen()`:

```cpp
int len = strlen(arr); // len = 5
```

> [!TIP]
> While `strlen()` is preferred, a custom `length()` shows how string lengths can be determined by iterating through arrays until the null termination.

# Readline
---
The C++ library provides `cin.getline()` to read an entire line from input. However we can create our own custom `readline()` functionality as well for learning purposes.

Here is an example implementation:
```cpp
#include<iostream>
#include <string>
using namespace std:

// Create a function to read character array without using library functions such as cin.getline
void readLine(char * arr, int len, int delim){
	// line terminates at '\n'
	// Read + Store array 
	int cnt = 0;
	char ch;
	while(true){
		ch = cin.get();
		arr[cnt] = ch;
		
		if(cnt==len-1 || ch==delim){
			break;
		}
		cnt++; 
	}
	// terminates the array also with a null character 
	arr[cnt] = '\0';
	cout << cnt << endl;
}

int main(){
	
	char arr[10];
	readLine(arr, 10, 'n');
	cout << arr << endl;
	cout << strlen(arr) << endl;
	
	return 0;
}
```

The key aspects are:

- It takes in the character array, max length, and an optional custom delimiter
- Reads input character-by-character using `cin.get()` in a loop
- Checks if delimiter reached or array is filled
- Sets array end to null terminator

Using default newline delimiter, it replicates cin.getline() functionality of reading entire line as input.

# Largest string example
---
```cpp
#include <iostream>
#include <string>

using namespace std;

int main() {

  // Read number of strings
  int n;
  cin >> n;
  
  // Consume newline
  cin.ignore();
  
  // Track largest string
  string largest;
  
  // Track length of largest string
  int maxLen = 0; 
  
  // Read n strings
  for(int i = 0; i < n; i++) {
  
    string current;
    getline(cin, current);
    
    // Update largest string if current string is longer
    if(current.length() > maxLen) {
      largest = current;
      maxLen = current.length();
    }
    
  }

  // Print result
  cout << "Largest String: " << largest << endl;
  cout << "Length: " << maxLen << endl;

  return 0;
}
```

> [!NOTE] Notes:
> - Use C++ strings instead of C-style character arrays
> - `getline(cin, string)` reads a line including spaces
> - Access `.length()` member function instead of `strlen()`
> - No need to manually copy strings, just assign strings naturally

---

# 13. Pointers & Arrays


# Pointer vs Arrays 
---
- Recap : [[9. Pointers| Pointers]] refer to memory addresses
	- Pointer arithmetic useful for array traversal
- Recap : [[10. Array|Arrays]] are Contiguous memory blocks
	- Array names decay to pointers to the first element
	- Array name is constant referring to the address of array 
	- Array name behaves like a pointer in certain ways
	- (arr + i) gives address of ith element of array 

## Pointer Arithmetic
---
`ptr++`
- Take me to next cell
- Useful for traversing arrays sequentially

`ptr--`
- Decrements the pointer to previous element

`+`, `+=`
- Adding integer moves pointer ahead by that amount
- Helps jump around array without index

`-`, `-=`
- Subtracting integer moves pointer backward

```cpp
int arr[5] = {1,2,3,4,5}; 
int* ptr = arr; //ptr points to arr[0]

ptr++; //now points to arr[1]  // not useful operation

ptr += 2; //points to arr[3]
ptr - 2; //points back to arr[1]

int offset = ptr - arr; //distance between pointers
```

- Incrementing pointer traverses array
- Adding/subtracting integers moves pointer
- Subtracting pointers gives distance/offset

Example:

```cpp
#include<iostream>
using namespace std;

int main(){
	
	int arr[10] = {1,2,3,4,5,6,7,8,9,10};
	
	int *ptr = arr; // Read only pointer 
	
	// Traverse
	for(int i=0; i<4; i++){
		cout << ptr << " Data " << *(ptr) << endl;
		ptr = ptr + 1;
	}
	
	//reset to begining of the array
	ptr = arr; 
	
	// Print
	for(int i=0; i<10; i++){
		cout << *(arr + i) << " , "; // arr[i] // using dereference operator
	}
	
	return 0;
}
```

> [!NOTE]
> - ptr1 + ptr2 : doesn't make any sense 
> - ptr1 - ptr2 : does makes sense for arrays 

# Pointers to Arrays
---
We can have pointers to individual elements or the entire array:

```cpp
int arr[10] = {1,2,3,4,5,6,7,8,9,10}; 

// Pointer to single element  
int* p1 = arr; 

// Pointer to entire array
int (*ptr)[10] = &arr; 
```

**Pointer to Element**

This points to the single element:

```cpp
p1++; // Points to arr[1]

cout << p1 << endl;  
cout << *p1 << endl;
```

**Pointer to Array**

This points to the whole array:  

```cpp 
cout << "Address of Array: " << ptr << endl;
```

Can get next array address:  

```cpp
cout << ptr + 1 << endl; 
```

Jumps by complete array size (not just 1 element).

**Dereferencing**

Gives access to array:

```cpp
cout << (*ptr)[0] << endl; // Element arr[0]  
```

Example:

```cpp
#include<iostream>
using namespace std;

int main(){
	
	int arr[10] = {1,2,3,4};
	
	cout << arr << endl;
	cout << &arr << endl;
	cout << arr + 1 << endl;
	
	// Pointer to 0th element of the array 
	int * p1 = arr;
	p1++;
	
	cout << p1 << endl;
	cout << (*p1) << endl;
	
	// Pointer to the entire array 
	int (*ptr)[5]; // Pointer to an array of 5 elements
	ptr = &arr;
	
	cout << "Pointer to Array " << ptr << endl;
	
	cout << ptr << endl;
	cout << ptr + 1 << endl; // location after the array 
	// address jump will be of 40 bytes
	
	// int *ptr[5]; // Any array of pointer of size 5
	
	return 0;
}
```

# Dereferencing Pointers to Arrays
---
We can have a pointer to an individual element or the entire array:  

```cpp 
int arr[5] = {1,2,3,4,5};

// Pointer to single element
int* ptr1 = arr; 

// Pointer to entire array
int (*ptr2)[5] = &arr;
```

**Dereferencing Element Pointer**

This gives the element value:

```cpp
cout << *ptr1; // Prints 1
```

Can access elements like array:

```cpp 
ptr1[0]; // 1
ptr1[1]; // 2
```

**Dereferencing Array Pointer**  

This gives the array itself:

```cpp
cout << (*ptr2)[0]; // Prints 1  
cout << (*ptr2)[1]; // Prints 2
```

Essentially simplifies array syntax:

```cpp  
(*ptr2)[i]; // Same as arr[i]
```

We dereference array pointer and can use like a normal array.

The array pointer will increment by the size of array (not by 1 element).

Example:

```cpp
#include<iostream>
using namespace std;

int main(){
	
	int arr[10] = {1,2,3,4};
	
	cout << arr << endl;
	cout << &arr << endl;
	cout << arr + 1 << endl;
	
	// Pointer to 0th element of the array 
	int * p1 = arr;
	p1++;
	
	cout << p1 << endl;
	cout << (*p1) << endl;
	
	// Pointer to the entire array 
	int (*ptr)[5]; // Pointer to an array of 5 elements
	ptr = &arr;
	
	cout << "Pointer to Array " << ptr << endl;
	
	cout << ptr << endl;
	cout << ptr + 1 << endl; // location after the array 
	// address jump will be of 40 bytes
	
	// int *ptr[5]; // Any array of pointer of size 5
	
	// Dereferencing the pointer to an array 
	cout << (*p1) << endl // a[0]
	cout << (*ptr) << endl; // arr 
	
	return 0;
}
```

# Row Pointers in 2D Arrays
---
In a 2D array, each element is actually a 1D array representing a row. Rows are stored sequentially in memory([[10. Array#Memory (Row Major Order)|Row major form]]).

```cpp
int arr[3][4]; // 3 rows, 4 cols
```

This can be visualized as an array of **row pointers**:

```cpp
arr --> [row1] -> [row2] -> [row3]
```

Where:

- `arr` - Pointer to first row
- `row1`, `row2`, `row3` - Pointers to each row array

The array name `arr` itself acts as a pointer to the first row:  

```cpp
int (*row1)[4] = arr;
```

We can traverse rows by incrementing the array name:

```cpp
cout << arr << endl; // Address of row1
cout << arr+1 << endl; // Address of row2
cout << arr+2 << endl; // Address of row3
```

**Accessing Elements**

To access any element `arr[i][j]`: 

```
1. Index row pointer to get row 
2. Index into that row to get element
```

Example:

```cpp
#include<iostream>
using namespace std;

int main(){
	
	// Pointers and 2D Arrays (Multi-Dimension Arrays)
	int arr[3][4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12} };
	
	cout << "Arr "<< arr << endl;
	cout << "Address of the 0,0 element " << &arr[0][0] << endl;
	cout << "Address of the 0,1 element " << &arr[0][1] << endl;
	cout << "Arr + 1 " << arr + 1 << endl; // Row pointer which jumps to next row
	cout << "Address of the 1,0 element " << &arr[1][0] << endl;
	
	return 0;
}
```

# 2D Arrays and Pointer
---
In a 2D array, each element itself is a 1D array representing a row. 2D arrays are stored in row-major order in memory.

```cpp
int arr[3][4] = {  
  {1, 2, 3, 4}, 
  {5, 6, 7, 8},
  {9, 10, 11, 12}
};
```

- `arr` - Pointer to first row array
- `arr[0]` - Pointer to first element of first row

The array name decays into a pointer to the first row:

```cpp
cout << arr; // Prints address of first row
```

## Passing 2D Arrays to Functions

```cpp
#include<iostream>
using namespace std;

// Method 1 - Using pointer to array  
void accept2DArray(int (*ptr)[4]){
	cout << "Address of Row 0 " << ptr << endl;
	cout << "Address of Row 1 " << ptr + 1 << endl;
	
	int i = 1;
	int j = 2;
	
	cout << "Row 1, Col 2: " << *(*(ptr+i) + j) << endl;
	cout << "Row 1, Col 2: " << ptr[i][j] << endl;
}

// Method 2 - Using 2D array syntax 
void printArray2(int arr[][4]) { 
	cout << "Row 2, Col 3: " << arr[2][3] << endl; 
}


int main(){
	
	// Pointers and 2D Arrays (Multi-Dimension Arrays)
	int arr[3][4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12} };
	
	// Pass as pointer 
	accept2DArray(arr);
	
	// Pass using array syntax 
	printArray2(arr);
	
	return 0;
}
```

The output of this would be:

```cpp
Row 1, Col 2: 7
Row 2, Col 3: 12
```

> [!NOTE]
> - `arr` decays to a pointer to the first row
> - Both methods allow accessing any element `arr[i][j]`

---

# 14. Maths and Problems


# Prime Numbers 
---
**Definition** 
- A prime number is a whole number greater than 1 that has only two divisors - 1 and itself 
- For example, 2, 3, 5, 7, 11, 13 are prime numbers 
- Composite numbers have more than two divisors (4, 6, 8, 9, 10 etc.) 

## Checking if a Number is Prime 
---
### Naive Method
```cpp
#include<iostream>
using namespace std;

// Basic method 
// Time Complexity: O(n) 

bool isPrime(int n) {
  if(n == 1) return false;
  
  for(int i = 2; i < n; i++) {
    if(n % i == 0) {
      return false;  
    }
  }

  return true;
}

int main(){
	
	int n;
	cin >> n;
	cout << (isPrime(n) ? "Prime" : "Non-Prime");
	
	return 0;
}
```

- Checks all numbers from 2 to n-1 to see if they are factors
- Simple, but not efficient for large numbers 

### Optimized Method
```cpp
#include<iostream>
using namespace std;

// More optimized
// Time Complexity: O(sqrt(n))

bool isPrimeOptimized(int n) {
  if(n == 1) return false;
  
  for(int i = 2; i*i <= n; i++) {
    if(n % i == 0) {
       return false;
    }
  }

  return true; 
}

int main(){
	
	int n;
	cin >> n;
	cout << (isPrimeOptimized(n) ? "Prime" : "Non-Prime");
	
	return 0;
}
```

- Only checks up to sqrt(n)
- Based on the fact that all factors greater than sqrt(n) must have corresponding factor less than sqrt(n)
- Much faster than naive method 

## Generating Prime Numbers
---
```cpp
#include<iostream>
using namespace std;

bool isPrimeOptimized(int n){
	
	if(n==1 || n==0){return false;}
	for(int i=2; i*i<=n; i++){
		if(n%i==0){
			// atleast 1 divisor other than 1 & N
			return false;
		}
	}
	return true;
}

void printPrimes(int a, int b) {

  for(int i = a; i <= b; i++) {
    if(isPrimeOptimized(i)) {
      cout << i << " "; 
    }
  }

}

int main(){
	printPrimes(10, 20);
	
	return 0;
}
```

- Prints all primes between two numbers a and b
- Uses isPrime() to check each number

## Prime Factorization
---
- Expressing a number as product of its prime factors
- Important for many areas like encryption

## Applications
---
- Cryptography (RSA algorithm)
- Random number generation
- Hash functions
- And many more...