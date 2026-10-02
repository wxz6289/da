package stack;

public interface StackInterface<T> {
    /**
    * adds a new entry to the top of this stack.
    * @param newEntry an object to be added to the stack.
    * */
    void push(T newEntry);

    /**
    * Remove and return this stack's top entry.
    * @return  The Object at the top of the stack.
    * @throws  EmptyStackException if the stack is empty.
    * */
     T pop();

    /**
    * Retrives this stack's top entry.
    * @return The Object at the top of the stack.
    * @throws  EmptyStackException if the stack is empty.
    * */
    T peek();

    /**
    * Detects whether this stack is empty.
    * @return True if the stack is empty.
    * */
    boolean isEmpty();

    /**
    * Remove all entries from this stack.
    * */
    void clear();
}