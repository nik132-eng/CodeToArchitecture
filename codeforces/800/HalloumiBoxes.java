import java.util.Scanner;

public class HalloumiBoxes {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int t = scanner.nextInt(); // Number of test cases

        for (int i = 0; i < t; i++) {
            int n = scanner.nextInt(); // Number of boxes
            int k = scanner.nextInt(); // Maximum length of subarray to reverse

            int[] boxes = new int[n];
            for (int j = 0; j < n; j++) {
                boxes[j] = scanner.nextInt(); // Numbers written on boxes
            }

            System.out.println(canSort(boxes, k) ? "YES" : "NO");
        }

        scanner.close();
    }

    private static boolean canSort(int[] boxes, int k) {
        if (k <= 1) {
            for (int i = 1; i < boxes.length; i++) {
                if (boxes[i] < boxes[i - 1]) {
                    return false; // Array is not sorted, and k <= 1, so can't sort
                }
            }
            return true; // Array is already sorted
        }

        // If k > 1, we can sort the array by repeatedly reversing subarrays of length 2
        for (int i = 0; i < boxes.length - 1; i++) {
            if (boxes[i] > boxes[i + 1]) {
                reverse(boxes, i, i + 1);
            }
        }

        return true; // Array is now sorted
    }

    private static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}