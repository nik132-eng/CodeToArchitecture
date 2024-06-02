import java.util.Stack;

public class LexicographicallyMinimumString {
    public static void main(String[] args) {
        String s = "aaba*";
        System.out.println(removeStars(s));  // Output should be "aab"
    }

    public static String removeStars(String s) {
        Stack<Character> stack = new Stack<>();

        for (char ch : s.toCharArray()) {
            if (ch == '*') {
                // Remove the smallest character to the left of '*'
                if (!stack.isEmpty()) {
                    stack.pop();
                }
            } else {
                stack.push(ch);
            }
        }

        // Build the resulting string from the stack
        StringBuilder result = new StringBuilder();
        for (char ch : stack) {
            result.append(ch);
        }

        return result.toString();
    }
}
