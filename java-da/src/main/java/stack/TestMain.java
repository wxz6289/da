package stack;

public class TestMain {
    public static void main(String[] args) {
   /*
      ArrayStack<Integer> arrayStack = new ArrayStack<Integer>(10);
      arrayStack.push(2);
      arrayStack.push(23);
      arrayStack.push(56);
      while (!arrayStack.isEmpty()){
        System.out.println(arrayStack.pop());
      }
      System.out.println(arrayStack.isEmpty());
      */
   /*
      VectorStack<String> vectorStack = new VectorStack<String>();
      vectorStack.push("Hello");
      vectorStack.push("World");
      System.out.println(vectorStack.peek());
      vectorStack.push("Dreamer King");
      System.out.println(vectorStack.peek());
      System.out.println(vectorStack.isEmpty());
      while (!vectorStack.isEmpty()){
        System.out.println(vectorStack.pop());
      }
      */

      Node<String> firstNode = new Node<String>("Hello",null);
      LinkedStack<String> linkedStack = new LinkedStack<String>(firstNode);
      linkedStack.push("World");
      linkedStack.push("DreamerKing");
      System.out.println(linkedStack.peek());
      System.out.println(linkedStack.pop());
      System.out.println(linkedStack.isEmpty());
      while (!linkedStack.isEmpty()){
        System.out.println(linkedStack.pop());
      }
      System.out.println(linkedStack.isEmpty());
    }
}
