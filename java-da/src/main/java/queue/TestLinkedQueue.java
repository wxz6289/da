package queue;

public class TestLinkedQueue {
    public static void main(String[] args) {
        LinkedQueue linkedQueue = new LinkedQueue();
        linkedQueue.enqueue("Hello");
        linkedQueue.enqueue("World");
        linkedQueue.enqueue("Java");
        System.out.println(linkedQueue.dequeue());
        System.out.println(linkedQueue.isEmpty());
        System.out.println(linkedQueue.getFront());
        while (!linkedQueue.isEmpty()){
            System.out.println(linkedQueue.dequeue());
        }
    }
}
