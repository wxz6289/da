package stack;

import java.util.EmptyStackException;

public final class LinkedStack<T> implements StackInterface<T> {

    private Node<T> topNode;

    public LinkedStack(Node topNode) {
        this.topNode = topNode;
    }

    /**
     * adds a new entry to the top of this stack.
     *
     * @param newEntry an object to be added to the stack.
     */
    public void push(T newEntry) {
        Node newNode = new Node(newEntry, topNode);
        topNode = newNode;
    }

    /**
     * Remove and return this stack's top entry.
     *
     * @return The Object at the top of the stack.
     * @throws EmptyStackException if the stack is empty.
     */
    public T pop() {
        T top = peek();
        assert topNode != null;
        topNode = topNode.getNext();
        return top;
    /*
        if(isEmpty()){
            throw new EmptyStackException();
        } else {
            T top = topNode.getData();
            topNode = topNode.getNext();
            return top;
        }
    */
    }

    /**
     * Retrives this stack's top entry.
     *
     * @return The Object at the top of the stack.
     * @throws EmptyStackException if the stack is empty.
     */
    public T peek() {
        if(isEmpty()){
            throw new EmptyStackException();
        }else {
            return topNode.getData();
        }
    }

    /**
     * Detects whether this stack is empty.
     *
     * @return True if the stack is empty.
     */
    public boolean isEmpty() {
        return topNode == null;
    }

    /**
     * Remove all entries from this stack.
     */
    public void clear() {
        topNode = null;
    }
}