package queue;
import  stack.Node;

public final class LinkedQueue<T> implements QueueInterface<T> {

    private Node firstNode;
    private Node lastNode;

    public LinkedQueue() {
        firstNode = null;
        lastNode = null;
    }

    /**
     * Adds a new entry to the back of this queue.
     *
     * @param newEntry An object to be added.
     */
    public void enqueue(T newEntry) {
      Node newNode = new Node(newEntry, null);
      if(isEmpty()){
          firstNode = newNode;
      } else {
          lastNode.setNext(newNode);
      }
      lastNode = newNode;
    }

    /**
     * Removes and returns the entry at the front of this queue.
     *
     * @return The object at the front of the queue.
     * @throws EmptyQueueException if the queue is empty before the operation.
     */
    public T dequeue() {
        T front = getFront();
        assert firstNode != null;
        firstNode.setData(null);
        firstNode = firstNode.getNext();
        if(firstNode == null){
            lastNode = null;
        }
        return front;
    }

    /**
     * Retrieves the entry at the front of this queue.
     *
     * @return The object at the front of the queue.
     * @throws EmptyQueueException if the queue is empty.
     */
    public T getFront() {
        if(isEmpty()){
            throw new EmptyQueueException();
        } else {
            return (T)firstNode.getData();
        }
    }

    /**
     * Detects whether this queue is empty.
     *
     * @return True if the queue is empty, or false otherwise.
     */
    public boolean isEmpty() {
        return (firstNode == null) && (lastNode == null);
    }

    /**
     * Remove all entries from this queue.
     */
    public void clear() {
        firstNode = null;
        lastNode = null;
    }
}
