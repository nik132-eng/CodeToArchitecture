import java.util.*;
public class Watermelon {
    public static void main(String arg[]){
        try (Scanner sc = new Scanner(System.in)) {
            int num = sc.nextInt();
            System.out.println(divide(num));
        }
    }

    private static String divide(int num) {        
        if(num==0 || num==2) return "NO";
        if(num%2==0) return "YES";
        else return "NO";
    }
}
