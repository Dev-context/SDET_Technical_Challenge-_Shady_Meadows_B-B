package feature.brandings;

import com.intuit.karate.junit5.Karate;

public class BrandingsRunner {

    @Karate.Test
    Karate brandinsTest() {
        return Karate.run("brandings").relativeTo(getClass());
    }

}
