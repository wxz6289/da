package stack;

import java.util.Arrays;
import java.util.EmptyStackException;

public final class ArrayStack<T> implements StackInterface<T> {
    private T[] stack;
    private int topIndex;
    private boolean initilalized =false;
    private static final  int DEAFAULT_CAPACITY = 50;
    private static final int MAX_CAPACITY = 10000;

    public ArrayStack(){
        this(DEAFAULT_CAPACITY);
    }

    public ArrayStack(int initilalCapacity) {
       checkCapacity(initilalCapacity);
       @SuppressWarnings("unchecked")
       T[] tempStack = (T[]) new Object[initilalCapacity];
       stack = tempStack;
       topIndex = -1;
       initilalized = true;
    }

    private void checkCapacity(int initilalCapacity){
        if(initilalCapacity > MAX_CAPACITY){
            throw new IllegalStateException(String.format("Attempt to create a stack whose capacity allowed maximum of %d ", MAX_CAPACITY));
        }
    }

    private boolean checkInitialization(){
        return initilalized;
    }

    private void ensureCapacity(){
        if(topIndex == stack.length -1) {
            int newLength = 2 * stack.length;
            checkCapacity(newLength);
            stack = Arrays.copyOf(stack, newLength);
        }
    }

    /**
     * adds a new entry to the top of this stack.
     *
     * @param newEntry an object to be added to the stack.
     */
    public void push(T newEntry) {
        checkInitialization();
        ensureCapacity();
        stack[topIndex + 1] = newEntry;
        topIndex++;
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
            T top = stack[topIndex];
            stack[topIndex] = null;
            topIndex--;
            return top;

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
            return stack[topIndex];
        }
    }

    /**
     * Detects whether this stack is empty.
     *
     * @return True if the stack is empty.
     */
    public boolean isEmpty() {
        return topIndex < 0;
    }

    /**
     * Remove all entries from this stack.
     */
    public void clear() {
        for(int i = 0; i < topIndex; i++ ) {
            stack[i] = null;
        }
        topIndex = -1;
    }
}
