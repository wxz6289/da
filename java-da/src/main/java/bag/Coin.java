package bag;

public class Coin {
    private String name;
    private int value;

    public Coin(int name, int value) {
        this.name = Integer.toString(name);
        this.value = value;
    }

    public String getCoinName() {
        return name;
    }

    public int getValue() {
        return value;
    }
}
