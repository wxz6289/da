package stack;

import java.util.EmptyStackException;
import java.util.Vector;

public class VectorStack<T> implements StackInterface<T> {

    private Vector<T> stack;
    private boolean initialized = false;
    private static final int DEFAULT_CAPACITY = 50;
    private static final int MAX_CAPACITY = 10000;

    public VectorStack() {
        this(DEFAULT_CAPACITY);
    }

    public VectorStack(int initialCapacity) {
        checkCapacity(initialCapacity);
        stack = new Vector<T>(initialCapacity);
        initialized = true;
    }

    private void checkCapacity(int initialCapacity){
        if(initialCapacity > MAX_CAPACITY){
            throw new IllegalStateException(String.format("Attempt to create a stack whose capacity allowed maximum of %d ", MAX_CAPACITY));
        }
    }

    private boolean checkInitialization() {
        return initialized;
    }
    /**
     * adds a new entry to the top of this stack.
     *
     * @param newEntry an object to be added to the stack.
     */
    public void push(T newEntry) {
        checkInitialization();
        stack.add(newEntry);
    }

    /**
     * Remove and return this stack's top entry.
     *
     * @return The Object at the top of the stack.
     * @throws EmptyStackException if the stack is empty.
     */
    public T pop() {
        checkInitialization();
        if(isEmpty()){
            throw new EmptyStackException();
        } else {
           return stack.remove(stack.size() -1);
        }
    }

    /**
     * Retrives this stack's top entry.
     *
     * @return The Object at the top of the stack.
     * @throws EmptyStackException if the stack is empty.
     */
    public T peek() {
        checkInitialization();
        if(isEmpty()){
            throw new EmptyStackException();
        } else {
            return stack.lastElement();
        }
    }

    /**
     * Detects whether this stack is empty.
     *
     * @return True if the stack is empty.
     */
    public boolean isEmpty() {
        return stack.isEmpty();
    }

    /**
     * Remove all entries from this stack.
     */
    public void clear() {
        stack.clear();
    }
}
