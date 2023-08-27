import java.util.Scanner;

public class Main {
    
    /**
     * * A multiple choice practice
     */
    public static void UserSelect() {
        String question = "What is the largest planet in solar system";
        String choiceOne = "earth";
        String choiceTwo = "jupiter";
        String choiceThree = "saturn";

        String correctAnswer = choiceTwo;
        System.out.println(question);
        System.out.println("choose one of the following" + choiceOne + " or " + choiceTwo + " or " + choiceThree);
        try (Scanner scanner = new Scanner(System.in)) {
            String input = scanner.next();

            if (correctAnswer.equals(input)) {
                System.out.println("congrats! thats the correct answer");
            } else {
                System.out.println("You are incorrect, the correct answer is " + correctAnswer);
            }
        }
    }

    /**
     * * Calculate worker salary
     * @param hoursPerWeek
     * @param amountPerHour
     * @param vacationDays
     * @return total Salaries
     */
    public static double salaryCal(double hoursPerWeek, double amountPerHour, int vacationDays) {
        if (hoursPerWeek < 0 || amountPerHour < 0) {
            return -1;
        }
        
        double weeklyPayCheck = hoursPerWeek * amountPerHour;
        double unpaidTime = vacationDays * amountPerHour * 8;
        
        return weeklyPayCheck * 52 - unpaidTime;
    }

    /**
     * !Main Entrance
     */
    public static void main(String[] args) {
        // UserSelect();

        // System.out.println("the total salary is: " + salaryCal(40, 30, 15));

        /*
        Triangle triangleA = new Triangle(15, 8, 15, 8, 3);
        Triangle triangleB = new Triangle(16, 9, 14, 8, 3);
        double triangleAArea = triangleA.findArea();
        double triangleBArea = triangleB.findArea();
        System.out.println("tri A area is: " + triangleAArea);
        */

        StudentProfile profileOne = new StudentProfile("Allen", "Xie", "EE", 10, 2019);
        StudentProfile profileTwo = new StudentProfile("Lisa", "xue", "EE", 9.9, 2021);

        profileTwo.incrementExpectedGraduationYear();
        System.out.println("firstStu gradute at " + profileOne.expectedYearToGraduate);
        System.out.println("SecondStu gradute at " + profileTwo.expectedYearToGraduate);
    }
}