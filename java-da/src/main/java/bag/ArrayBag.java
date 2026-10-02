package bag;

public class ArrayBag<T> implements BagInterface<T> {
    private boolean initialized = false;
    private final T[] bag;
    private int numberOfEntries;
    private static final  int DEFAULT_CAPACITY = 25;
    private static final int MAX_CAPACITY = 10000;

    public ArrayBag(int capacity) {
        if(capacity <= MAX_CAPACITY) {
            @SuppressWarnings("unchecked")
            T[] tempBag = (T[]) new Object[capacity];
            bag = tempBag;
            numberOfEntries = 0;
            initialized =true;
        } else {
          throw new IllegalStateException("Attempt to create a bag whose capacity exceeds allowed maximum.");
        }

    }

    public ArrayBag() {
        this(DEFAULT_CAPACITY);
    }

    private boolean isArrayFull(){
        return numberOfEntries >= bag.length;
    }

    private void checkInitialization(){
        if(!initialized){
            throw new SecurityException("ArrayBag object is not initialized property.");
        }
    }

    private T removeEntry(int givenIndex){
        T result = null;
        if(!isEmpty()&& givenIndex >= 0){
            result = bag[givenIndex];
            bag[givenIndex] = bag[numberOfEntries - 1];
            bag[numberOfEntries - 1] = null;
            numberOfEntries--;
        }
        return result;
    }

    private int getIndexOf(T anEntry) {
        boolean found = false;
        int index = 0, where = -1;
        while(!found && (index < numberOfEntries)) {
            if(anEntry.equals(bag[index])){
                found = true;
                where = index;
            }
            index++;
        }
        return where;
    }

    /**
     * Gets the current number of entries in this bag.
     *
     * @return The integer number of entries currently in the bag.
     */
    @Override
    public int getCurrentSize() {
        return numberOfEntries;
    }

    /**
     * Sees whether this bag is empty.
     *
     * @ return True is bag is empty, or false if not.
     */
    @Override
    public boolean isEmpty() {
        return numberOfEntries == 0;
    }

    /**
     * Adds a new entry to this bag.
     *
     * @param newEntry The object to be added as a new entry.
     * @return True if the addition is successfully, or false if not.
     */
    @Override
    public boolean add(T newEntry) {
        checkInitialization();
        boolean result = true;
        if(isArrayFull()){
            result = false;
        } else {
            bag[numberOfEntries] = newEntry;
            numberOfEntries++;
        }
        return result;
    }

    /**
     * Removes one unspecified entry from this bag, if possible.
     *
     * @return Either the removed entry, if the removal was successful, or null.
     */
    @Override
    public T remove() {
        checkInitialization();

        T result = removeEntry(numberOfEntries - 1);
      /*  if(numberOfEntries > 0) {
            result = bag[numberOfEntries - 1];
            bag[numberOfEntries - 1 ] = null;
            numberOfEntries--;
        }*/
        return result;
    }

    /**
     * Removes one occurrence of a given entry from this bag, if possible.
     *
     * @param anEntry The entry to be removed.
     * @return True if the removal was successful, or false if not.
     */
    @Override
    public boolean remove(T anEntry) {
     // boolean removed = false;
        int index = getIndexOf(anEntry);
        T result = removeEntry(index);
      /*  for(int index = 0, len = bag.length; (index < len) && !removed; index++) {
            if(anEntry.equals(bag[index])){
               bag[index] = bag[numberOfEntries - 1];
               bag[numberOfEntries - 1] = null;
               numberOfEntries--;
               removed = true;
            }
        }*/
        return anEntry.equals(result);
    }

    /**
     * Removes all entries from this bag.
     */
    @Override
    public void clear() {
        while (!isEmpty()){
            remove();
        }
    }

    /**
     * Counts the number of times a given entry appears in the bag.
     *
     * @param anEntry The entry to be counted.
     * @return The number of times anEntry appears int the bag.
     */
    @Override
    public int getFrequencyOf(T anEntry) {
        checkInitialization();
        int counter = 0;
        for(int index = 0; index < numberOfEntries; index++) {
            if(anEntry.equals(bag[index])) {
                counter++;
            }
        }
        return counter;
    }

    /**
     * Tests whether this bag contains a given entry.
     *
     * @param anEntry The entry to locate.
     * @return True if the bag contains anEntry, or false if not.
     */
    @Override
    public boolean contains(T anEntry) {
        checkInitialization();
        return getIndexOf(anEntry) > -1;
     /*   boolean found = false;
        for(int index = 0, len = bag.length; index < len && !found; index++) {
            if(anEntry.equals(bag[index])){
                found = true;
            }
            index++;
        }
        return found;*/
    }

    /**
     * Retrieves all entries that are in this bag.
     *
     * @return A newly allowed array of all entries in the bag.
     * Note: if the bag is empty, the returned array is empty.
     */
    @Override
    public T[] toArray() {
        @SuppressWarnings("unchecked")
        T[] result = (T[]) new Object[numberOfEntries];
        for(int index = 0; index < numberOfEntries; index++) {
            result[index] = bag[index];
        }
        return result;
    }
}
