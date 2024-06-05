import java.util.Scanner;

public class LineTrip {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int l=sc.nextInt();

            for(int i=0;i<l;i++){
                int n=sc.nextInt();
                int x=sc.nextInt();
                int[] arr = new int[n];
                for(int j=0;j<n;j++){
                    arr[j]=sc.nextInt();
                }
                System.out.println(answer(arr,x));
            }
        }
    }

    private static int answer(int[] arr, int x) {
        int max = arr[0]-0;
        for(int i=0;i<arr.length-1;i++){
            max = max < arr[i+1]-arr[i] ? arr[i+1]-arr[i] : max;
        }
        int lastd = 2*(x- arr[arr.length-1]);
        return Math.max(max, lastd);
    }
}
