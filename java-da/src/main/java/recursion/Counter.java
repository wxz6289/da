package recursion;

public class Counter {
    public void sayNumber(int number){
        System.out.println(number);
        if(number > 0){
           sayNumber(number - 1);
        }
    }

    public int sumOf(int n){
        if(n == 1){
            return 1;
        } else {
            return n + sumOf(n - 1);
        }
    }

    public void displayArray(int[] array, int first, int last) {
        if(first == last) {
            System.out.println(array[first]);
        } else {
            int mid = first + (last - first) / 2;
            displayArray(array,first, mid);
            displayArray(array,mid + 1,last);
        }
    }

    public static void main(String[] args) {
        Counter counter = new Counter();
//        counter.sayNumber(10);
//        System.out.println(counter.sumOf(10));
        int[] a = {1,3,6,2,9,3,7,9};
        counter.displayArray(a,2,5);
    }
}
