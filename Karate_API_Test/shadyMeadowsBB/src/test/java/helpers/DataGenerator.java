package helpers;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

import com.github.javafaker.Faker;

public class DataGenerator {

    private static final Faker faker = new Faker();
    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");

    public static String getRandomFirstName() {
        return faker.name().firstName();
    }

    public static String getRandomLastName() {
        return faker.name().lastName();
    }

    public static boolean getRandomDepositpaid() {
        return faker.bool().bool();
    }

    public static String getRandomCheckinDate() {
        return LocalDate.now()
                .plusDays(faker.number().numberBetween(1, 10))
                .format(formatter);
    }

    public static Map<String, String> getRandomPairOfDates() {

        LocalDate start = LocalDate.now().plusDays(new Faker().number().numberBetween(1, 60));
        LocalDate end = start.plusDays(2);
        Map<String, String> dates = new HashMap<>();

        dates.put("checkin", start.format(DateTimeFormatter.ISO_LOCAL_DATE));
        dates.put("checkout", end.format(DateTimeFormatter.ISO_LOCAL_DATE));

        return dates;

    }

}
