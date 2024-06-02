// https://codeforces.com/problemset/problem/231/A
import java.util.Scanner;

public class Team {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int n = sc.nextInt();
            int[][] answers = new int[n][3];
            for(int i=0;i<n;i++){
                answers[i][0]=sc.nextInt();
                answers[i][1]=sc.nextInt();
                answers[i][2]=sc.nextInt();
            }
            int count = 0;
            for(int i=0;i<n;i++){
                if(answers[i][0]+answers[i][1]+answers[i][2]>=2){
                    count++;
                }
            }
            System.out.println(count);
        }
    }
}
