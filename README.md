# CSC Apps
CSC Apps is a Systems Status Monitoring Solution

# Prerequisites
Before you can run the application on your machine you need to follow the steps below, download and install some required frameworks and tools.

### 1. NodeJS
  Download and install Node (https://nodejs.org/en/download/). This will automatically get you NPM too, which is also a requirement to run the app.
  
    - While installing Node, please allow the installer to include additional tools.
### 2. MySQL
  2.1 Download and Install MySQL Workbench (https://dev.mysql.com/downloads/workbench/).
  
  2.2 Download and Install MySQL Server (https://dev.mysql.com/downloads/installer/).
    
    - While installing:
      
      - Set and remember your 'root password' (you will need it later).
      
      - When prompted to choose authentication type, choose Legacy Authentication (bottom option).
### 3. Yarn
  Download and install Yarn (https://classic.yarnpkg.com/en/docs/install/#windows-stable).
### 4. IntelliJ
  Download and install IntelliJ Community Edition (https://www.jetbrains.com/idea/download/#section=windows).
    
    - Once installed, load IntelliJ and download 'OpenJDK' from within the 'Project Structure' menu.
# Setup
Before you can run the application, you need to do some further setup.

### 1. Install NPM
  Open a command terminal as administrator and navigate to the project folder .\..\csc-apps and run the following commands.
  
      npm install
      npm install -g yarn
    
  Next, navigate to the 'Frontend' folder '.\..\csc-apps\Frontend' and run the following command.
  
      npm install
### 2. Re-create MySQL Database
  Open MySQL Workbench and login to localhost using your root password.
  
  Next, perform the following three steps.
      
      1.Create new schema and name it "all_apps".
      
      2.Open all_apps.sql file, located in the csc-apps directory.
      
      3.Run the query and save.
      
# Start CSC Apps
You are now ready to run the application.

1. Open a command terminal and navigate to the application folder "..\csc-apps"
      
      Now run the following command.
          
          npx nodemon install.js
2. Open a separate command terminal and navigate to the 'Frontend' folder inside the CSC Apps directory. "..\csc-apps\Frontend"
      
      Now run the following command.
          
          yarn start
          
Now you should see a browser window popping up and CSC App is loaded and running, actively monitoring the database you re-created.
  
   - You can now make changes directly to the database and see them on the monitor instantly, without the need of a refresh.
  
Next you should open IntelliJ Community Edition and load the Java project within the StatusUpdater folder, which you cloned as part of cloning the csc-apps repository.

   - Now run "Main", open the Systems Monitor and observe its functionality fully automated. The Java application will make changes to the database at set time intervals. 
     You will be able to see said changes in real time on the Systems Monitor.
