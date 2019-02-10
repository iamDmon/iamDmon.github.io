import java.io.*;

public class main {
    public static void main(String args[]) throws IOException {
        for (int i = 0; i < 100; i++) {
            System.out.println(i +"% { background-color: #" + String.format("%02d", (int)(Math.random()*9)) + String.format("%02d", (int)(Math.random()*15)) + String.format("%02d", (int )(Math.random()*12)) + " }");
        }
    }
}