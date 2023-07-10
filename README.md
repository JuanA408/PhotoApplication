[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6197048&assignment_repo_type=AssignmentRepo)
# CSC 317 Term Project

## Purpose

The purpose of this repository is to store all the code for your web application. This also includes the history of all commits made and who made them. Only code submitted on the master branch will be graded.

Please follow the instructions below and fill in the information requested when prompted.

## Student Information

|               | Information   |
|:-------------:|:-------------:|
| Student Name  | Juan Aguirre     |
| Student ID    | 920490711       |
| Student Email | jaguirre7@mail.sfsu.edu   |



# Build/Run Instructions
LINK to REPO:
## Build Instructions
1. Inside the terminal, navigate into the 'application' directory within the project folder.
2. Once in the 'application' directory type: npm install
3. If necessary, npm install some of the tools used that are at the top of app.js, for instance 'npm i express-flash'
4. Copy and paste, one by one the code inside config/csc317db_... into a mySQL tab and run, in order to create the database.

## Run Instructions
1. After npm install finishes installing packages and while in 'application' directory,
    type: npm start
2. If npm start is successful, then you should open your web-browser of preference,
    and go to the following url: 'http://localhost:3000' which should have your website running.
    You will also see in the terminal, 'GET...' requests, as well as other type of requests.
3. If you want to test Logging in using an existing user...You can look at the Usernames from, the 'config/csc317db_users.sql' and the PASSWORD for all of them is 12345678Q!
4. One important note, the name for my 'description' column in the database has typo, so it is 'dsecription', keep that in mind in case you plan on using that column for something else.