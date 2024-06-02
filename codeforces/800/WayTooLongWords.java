import java.util.ArrayList;
import java.util.Scanner;

public class WayTooLongWords {
    public static void main(String args[]){
        try (Scanner sc = new Scanner(System.in)) {
            int n = sc.nextInt();
            ArrayList<String> qa = new ArrayList<String>();
            for(int i=0;i<n;i++){
                String q = sc.next();
                qa.add(q);
            }
            int ql = qa.size();
            ArrayList<String> ans = new ArrayList<String>(ql);
            for(int i=0;i<ql;i++){
                String word = qa.get(i);
                if(word.length()<11){
                    ans.add(word);
                }else{
                    char first = word.charAt(0);
                    char last = word.charAt(word.length()-1);
                    int between = word.length() - 2;
                    ans.add(""+first+between+last);
                }
            }
            for(int i=0;i<ql;i++){
                System.out.println(ans.get(i));
            }
        }
    }
}


