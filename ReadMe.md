## CSV Upload

This is simple csv file reader when user can upload a csv file and view file in tabular form.

## Features

- Upload any csv file into the system .
- Display a list of all uploaded csv files .
- When the user selects a file, display all the data (with column headers) in a table on the page
- There is a search box which searches on the front end itself and displays the matching rows
  of the table only.
- Different CSV FILES With differnt column Headers can be upladed and table headers is dynamic.
- A validation on the front end and server side on being able to upload only csv
  type of files

## Tech Stack

Node.js, MongoDB, express, Ejs

## Installation

##### Clone the Repository

`git clone https://github.com/ayushmaan32/CSV_upload`

```bash
  npm install
  npm start
```

## Folder Structure

| --- assets<br>
| --- | -- css<br>
| --- | -- | -- csv<br>
| --- | -- | -- header<br>
| --- | -- | -- home<br>
| --- | -- js<br>
| --- | -- | -- viewfile<br>
| --- config<br>
| --- | -- mongoose.js<br>
| --- controllers<br>
| --- | -- csv_controller<br>
| --- | -- home_controller<br>
| --- models<br>
| --- | -- csv<br>
| --- routes<br>
| --- | -- index<br>
| --- | -- uploads<br>
| --- | -- | -- files<br>
| --- views<br>
| --- | -- \_header<br>
| --- | -- home<br>
| --- | -- layout<br>
| --- | -- viewfile<br>
| --- .gitignore<br>
| --- index<br>
| --- package-lock.json<br>
| --- package.json<br>
| --- ReadMe.md<br>
