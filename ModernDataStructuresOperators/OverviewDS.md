# Data Structures Overview

## 1 - Source of Data:

- From the program itself: Data written directly in source code
- From the UI: Data input from the user or data written in DOM
- From external sources: Data fetched, for example, from web API

When we usually get a collection of data that needs to be stored somewhere, we use **Data Structures**.

_Note: Data from web APIs usually comes in a special data format called JSON, which can be easily converted into a JavaScript object because it uses the same formatting._

There are 6 built-in data structures in JavaScript:

1. **Array**
2. **Objects**
3. **Maps**
4. **Sets**
5. **WeakMap**
6. **WeakSet**

### Which one should we use?

1. **Arrays:**

   - Use when you need an ordered list of values (might contain duplicates).
   - Use when you need to manipulate data.

2. **Sets:**

   - Use when you need to work with unique values.
   - Use when high-performance is crucial.
   - Use to remove duplicates from arrays.

3. **Objects:**

   - More "traditional" key/value store ("abused" objects).
   - Easier to write and access values with dot notation (.) and square brackets ([]).
   - Use when you need to include functions (methods).
   - Use when working with JSON.

4. **Maps:**
   - Better performance.
   - Keys can have any data type.
   - Easy to iterate.
   - Easy to compute size.
   - Use when you simply need to map keys to values.
   - Use when you need keys that are not strings.

There are also non-built-in data structures like Queues, Linked Lists, Trees, Hash Tables, etc.
