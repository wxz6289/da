package queue;

public interface PriorityQueueInterface<T extends Comparable<? super T>> {
    /**
     * Adds a new entry to the priority queue.
     * @param newEntry An object to be added.
     * */
    void add(T newEntry);

    /**
     * Removes and returns the entry having the highest priority.
     * @return Either the object having the highest priority or, if the priority queue is empty before the operation, null.
     * */
    T remove();

    /**
     * Retrieves the entry having the highest priority.
     * @return Either the object having the highest priority or, if the priority queue is empty, null.
     * */
    T peek();

    /**
     * Detects whether this priority queue is empty.
     * @return True if the priority queue is empty, or false otherwise.
     * */
    boolean isEmpty();

    /**
     * Gets the size of this priority queue.
     * @return The number of entries currently in the priority queue.
     * */
    int getSize();

    /**
     * Remove all entries from this priority queue.
     * */
    void clear();
}
