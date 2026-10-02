package queue;

//import org.
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

public class LinkedQueueTest {
    private LinkedQueue lq = new LinkedQueue();

    @Test
    void testIsEmpty(){
       assertTrue(lq.isEmpty());
    }

    @Test
    void testEnqueue(){
        lq.enqueue("LinkedQueue");
        assertFalse(lq.isEmpty());
        assertEquals("LinkedQueue",lq.getFront());
    }

    @Test
    void testDequeue(){
        assertTrue(lq.isEmpty());
        lq.enqueue("Java");
        assertEquals("Java",lq.dequeue());
        assertTrue(lq.isEmpty());
    }
}