package bag;

public class OnlineShopper {
    public static void main(String[] args) {
        Item[] items = {
                new Item("Bird feeder", 2050),
                new Item("Squired guard", 1547),
                new Item("Bird bath", 4499),
                new Item("sunflower seeds", 1295) };
        BagInterface shoppingCart = new ArrayBag<>();
        int totalCost = 0;
        for(int index = 0; index < items.length; index++) {
            Item nextItem = items[index];
            shoppingCart.add(nextItem);
            totalCost = totalCost + nextItem.getPrice();
        }

        while (!shoppingCart.isEmpty()) {
            System.out.println(shoppingCart.remove());
        }
        System.out.println(String.format("Total cost:\t$ %d.%d", totalCost / 100, totalCost % 100 ));
    }
}
