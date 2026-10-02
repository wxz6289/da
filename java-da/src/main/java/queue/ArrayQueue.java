package queue;

public class ArrayQueue<T> implements QueueInterface<T> {

    private T[] queue;
    private int frontIndex;
    private int backIndex;
    private boolean initialized = false;
    private static final int DEFAULT_CAPACITY = 50;
    private static final int MAX_CAPACITY = 10000;

    public ArrayQueue() {
        this(DEFAULT_CAPACITY);
    }

    public ArrayQueue(int initialCapacity) {
        checkCapacity(initialCapacity);
        @SuppressWarnings("unchecked")
        T[] tempQueue = (T[]) new Object[initialCapacity + 1];
        queue = tempQueue;
        frontIndex = 0;
        backIndex = initialCapacity;
        initialized = true;
    }

    private void checkCapacity(int initialCapacity){

    }

    private boolean checkInitialization() {
        return initialized;
    }

    /*
     * Double the size of the array queue if it is full.
     * Precondition: checkInitialization has been called.
     */

    private void ensureCapacity(){
       if(frontIndex == ((backIndex + 2) % queue.length)){
           T[] oldQueue = queue;
           int oldSize = oldQueue.length;
           int newSize = 2 * oldSize;
           checkCapacity(newSize);
           @SuppressWarnings("unchecked")
           T[] tempQueue = (T[]) new Object[newSize];
           queue = tempQueue;
           for(int index = 0; index < oldSize - 1; index++){
               queue[index] = oldQueue[frontIndex];
               frontIndex = (frontIndex + 1) % oldSize;
           }
           frontIndex = 0;
           backIndex = oldSize -2;
       }
    }

    /**
     * Adds a new entry to the back of this queue.
     *
     * @param newEntry An object to be added.
     */
    public void enqueue(T newEntry) {
        checkInitialization();
        ensureCapacity();
        backIndex = (backIndex + 1) % queue.length;
        queue[backIndex] = newEntry;
    }

    /**
     * Removes and returns the entry at the front of this queue.
     *
     * @return The object at the front of the queue.
     * @throws EmptyQueueException if the queue is empty before the operation.
     */
    public T dequeue() {
        if(isEmpty()){
            throw  new EmptyQueueException();
        } else {
            T front = queue[frontIndex];
            queue[frontIndex] = null;
            frontIndex = (frontIndex + 1) % queue.length;
            return front;
        }
    }

    /**
     * Retrieves the entry at the front of this queue.
     *
     * @return The object at the front of the queue.
     * @throws EmptyQueueException if the queue is empty.
     */
    public T getFront() {
        checkInitialization();
        if(isEmpty()){
            throw new EmptyQueueException();
        } else {
            return queue[frontIndex];
        }
    }

    /**
     * Detects whether this queue is empty.
     *
     * @return True if the queue is empty, or false otherwise.
     */
    public boolean isEmpty() {
        return frontIndex == ((backIndex + 1) % queue.length);
    }

    /**
     * Remove all entries from this queue.
     */
    public void clear() {
        while(!isEmpty()){
            dequeue();
        }
    }
}
