import java.util.Scanner;

public class CoverInWater {
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int n = sc.nextInt();
            for(int i=0;i<n;i++){
                int l = sc.nextInt();
                String str = sc.next();
                System.out.println(answer(str,l));
            }
        }
    }

    private static Integer answer(String str, int l){
        int c_num = 0;
        int max_num = 0;
        for(int i=0;i<l;i++){
            if(str.charAt(i)=='.'){
                c_num++;
                max_num++;
                if(c_num>2) return 2;
            }else{
                c_num = 0;
            }
        }
        return max_num;
    }
}
