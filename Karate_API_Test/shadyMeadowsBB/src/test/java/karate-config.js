function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log("karate.env system property was:", env);
  if (!env) {
    env = "dev";
  }
  var config = {
    env: env,
    baseUrl: "https://automationintesting.online/api",
  };

  karate.configure("headers", {
    Accept: "application/json",
    "Content-Type": "application/json",
    "User-Agent": "Karate-Automation-SEDET",
  });

  karate.configure("connectTimeout", 5000);
  karate.configure("readTimeout", 5000);

  return config;
}
