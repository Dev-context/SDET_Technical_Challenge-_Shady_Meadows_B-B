package feature.rooms;

import com.intuit.karate.junit5.Karate;

public class RoomsRunner {

    @Karate.Test
    Karate roomsTest() {
        return Karate.run("rooms").relativeTo(getClass());
    }
}
