package helpers;

import java.util.List;

import com.github.javafaker.Faker;

public class DataGenerator {

    private static final Faker faker = new Faker();

    public static String getRandomFirstName() {
        return faker.name().firstName();
    }

    public static String getRandomLastName() {
        return faker.name().lastName();
    }

    public static boolean getRandomDepositpaid() {
        return faker.bool().bool();
    }

    public static String getRandonChekinDate(String checkin) {

        return "";

    }

    public static String getRandonCheckoutDate(String checkoutDate) {
        return "";
    }

    public static int getRandomRoomId(List<Integer> list) {
        return list.get(faker.random().nextInt(list.size()));
    }

}
