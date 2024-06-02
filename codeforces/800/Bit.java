import java.util.Scanner;

public class Bit {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int n = sc.nextInt();
            String[] qa = new String[n];
            for(int i=0;i<n;i++){
                qa[i]=sc.next();
            }
            int count=0;
            for(int i=0;i<n;i++){
                if(qa[i].contains("+")) count++;
                else count--;
            }
            System.out.println(count);
        }
    }
}
