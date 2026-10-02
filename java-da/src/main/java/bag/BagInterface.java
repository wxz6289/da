package bag;

public interface BagInterface<T> {
    /**
    * Gets the current number of entries in this bag.
    * @return The integer number of entries currently in the bag.
    * */
    int getCurrentSize();

    /**
     * Sees whether this bag is empty.
     * @ return True is bag is empty, or false if not.
     * */
    boolean isEmpty();

    /**
     * Adds a new entry to this bag.
     * @param newEntry The object to be added as a new entry.
     * @return True if the addition is successfully, or false if not.
     * */
    boolean add(T newEntry);

    /**
     * Removes one unspecified entry from this bag, if possible.
     * @return Either the removed entry, if the removal was successful, or null.
     * */
    T remove();

    /**
     * Removes one occurrence of a given entry from this bag, if possible.
     * @param anEntry The entry to be removed.
     * @return True if the removal was successful, or false if not.
     * */
    boolean remove(T anEntry);

    /**
     * Removes all entries from this bag.
     * */
    void clear();

    /**
     * Counts the number of times a given entry appears in the bag.
     * @param anEntry The entry to be counted.
     * @return The number of times anEntry appears int the bag.
     * */
    int getFrequencyOf(T anEntry);

    /**
     * Tests whether this bag contains a given entry.
     * @param anEntry The entry to locate.
     * @return True if the bag contains anEntry, or false if not.
     * */
    boolean contains(T anEntry);

    /**
     * Retrieves all entries that are in this bag.
     * @return A newly allowed array of all entries in the bag.
     *         Note: if the bag is empty, the returned array is empty.
     * */
    T[] toArray();
}
