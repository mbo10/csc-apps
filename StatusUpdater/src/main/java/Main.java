import java.sql.*;

public class Main {
    public static void main(String[] args)

        throws InterruptedException {

            String url = "jdbc:mysql://localhost:3306/all_apps?useSSL=false&useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
            String user = "root";
            String password = "987m654";

            try {

                Connection myConn = DriverManager.getConnection(url, user, password);
                Statement myStmt = myConn.createStatement();
                System.out.println("Connected successfully");

                myStmt.executeUpdate("update applications" + " set state = 'Running'" + "where app_id = 2");
                System.out.println("State: Running. Stopping in 5 seconds.");
                Thread.sleep(5000);

                myStmt.executeUpdate("update applications" + " set state = 'Stopped'" + "where app_id = 2");
                System.out.println("State: Stopped. Will run again in 5 seconds.");
                Thread.sleep(5000);

                myStmt.executeUpdate("update applications" + " set state = 'Running'" + "where app_id = 2");
                System.out.println("State: Running. New app will connect in 5 seconds.");
                Thread.sleep(5000);

                myStmt.executeUpdate("insert into applications" + "(app_name,environment_name,version_num,owner,last_updated,state)" + "values('AdSmart','1D','1.102','CSP-Enrichment','05/05/2020','Running')");
                System.out.println("AdSmart connected to monitor.");
                System.out.println("AdSmart will stop running in 5 seconds.");
                Thread.sleep(5000);

                myStmt.executeUpdate("update applications" + " set state = 'Stopped'" + " where app_name = 'AdSmart'");
                System.out.println("State: Stopped. AdSmart will start again in 5 seconds.");
                Thread.sleep(5000);

                myStmt.executeUpdate("update applications" + " set state = 'Running'" + " where app_name = 'AdSmart'");
                System.out.println("AdSmart state: Running.");
                Thread.sleep(5000);

                System.out.println("AdSmart will disconnect in 5 seconds.");
                Thread.sleep(5000);

                myStmt.executeUpdate("delete from applications" + " where app_name = 'AdSmart'");
                System.out.println("AdSmart disconnected from monitor.");

            } catch (SQLException e) {

                e.printStackTrace();

            }
        }
}
