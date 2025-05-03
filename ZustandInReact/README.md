**# Zustand store notes:**
**# Importing the 'create' function from zustand to build the store**

1. **It's not compulsory to have both state and action.**
2. **You can have only state, only action, or even an empty store like create(() => ({})).**

3. **Creating the custom Zustand store hook, any name you can give here.**
4. **Zustand doesn’t care what you name things.**
5. **There is no special useState() like React.**
6. **Zustand’s store automatically creates state from whatever values you return inside create(...).**
7. **It just stores everything you return — you decide what is state vs action.**
8. **Keep data values as state**
9. **Keep functions as actions**
10. **Every data value you put in the store (like number, string, object) = it's a state.**

11. **Object or array is still state. Each value inside (like name, age, items[0]) can be updated separately via actions.**

12. **create() gives set only inside the function you pass. So only the actions inside the store can use set.**
13. **Because: State (like count) is just a value. Actions (like increment) need set to change that value.**
14. **set() is used inside actions to update state**
15. **count: 0,  // Initial value of the count state is 0. This is the state**

16. **Type definition for the store using TypeScript:**
   - **count: number;**  **// state: a number to store the current count**
   - **increment: () => void;**  **// action: function to increase count**
   - **decrement: () => void;**  **// action: function to decrease count**

17. **count: 0 -> State: You define it with a key (e.g., count).**
   - **increment: () => set(state => ({ count: }))** **-> Action: You use that same key in the action (e.g., count).**
   - **{:state.count - 1} -> State access/update: You refer to the state using state.count.**

18. **state is just a parameter. It can be anything as a name. It holds the current values of your store.**
   - **You use it when you want to update something based on its existing value.**

19. **Zustand returns a custom hook (always ✅).**
   - **Name can be anything — but if you start with `use`, React treats it like a hook in DevTools.**
   - **If you don’t use `use` prefix, it still works, but:**
     - **May confuse other developers ❗**
     - **Won’t show properly in React DevTools ❌**
   - **🟢 So: It’s always a hook — prefix is just for clarity.**
20. **this how u can access values or action**
    **const { increment, decrement} = useCounter();**
    **const {count} = useCounter();**