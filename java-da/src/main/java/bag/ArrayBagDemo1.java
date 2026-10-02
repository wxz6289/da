package bag;

public class ArrayBagDemo1 {
    public static void main(String[] args) {
        System.out.println("Testing an initially empty bag with sufficient capacity the capacity to hold at least 6 strings:");
        BagInterface<String> aBage = new ArrayBag<>();
        String[] contentOfBag1 = { "A", "A", "B", "A", "C", "A"};
        testAdd(aBage, contentOfBag1);
        System.out.println("Testing an initially empty bag that will be filled to capacity:");
        aBage = new ArrayBag<>(7);
        String[] contentOfBag2 = {"A", "B", "A", "C", "B", "C", "D", "another string"};
        testAdd(aBage, contentOfBag2);
//        displayBag(aBage);
    }

    private static void testAdd(BagInterface<String> aBag, String[] content) {
        System.out.println("Adding the following " + content.length + " strings to the bag:");
        for(int index = 0; index < content.length; index++) {
            if(aBag.add(content[index])){
                System.out.print(content[index] + " ");
            } else {
                System.out.println();
                System.out.print("Unable to add " + content[index] + " to the bag.");
            }
        }
        System.out.println();
        displayBag(aBag);

    }

    private static void displayBag(BagInterface<String> aBag) {
        System.out.println("The bag contains the following string(s):");
        Object[] bagArray = aBag.toArray();
        for(int index = 0; index < bagArray.length; index++) {
            System.out.print(bagArray[index] + " ");
        }
        System.out.println();
    }
}
