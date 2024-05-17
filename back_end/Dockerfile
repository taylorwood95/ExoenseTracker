FROM openjdk:17

VOLUME [ "/temp" ]
EXPOSE 8080
ARG JAR_FILE=target/ExpenseTracker-0.0.1-SNAPSHOT.jar
ADD ${JAR_FILE} app.jar
ENTRYPOINT [ "java", "-jar", "/app.jar" ]
