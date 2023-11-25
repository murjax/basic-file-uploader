# Basic File Uploader

A React + Express demo application for processing file uploads. The frontend form contains a basic file input.
Upload results are rendered below the form. The backend API receives the file at `POST /uploads` and saves it locally to an `uploads` folder.
To demonstrate invalid uploads, PDF and TXT file types are rejected. A Cypress test suite is included to demonstrate fixture file usage.

### Requirements
- Node 17 (or greater)

### Local Setup
1. Clone project: `git@github.com:murjax/basic-file-uploader.git`
2. Navigate into folder `cd basic-file-uploader`
3. Install Cypress dependencies from root folder `npm install`
4. Open at least three shells.
5. Navigate into the server and install dependencies. `cd server; npm install`
6. Navigate into the client and install dependencies. `cd client; npm install`
7. Start the client (in client folder). `npm start`
8. Start the server (in server folder). `node index.js`
9. Run the tests (in root folder). `npm run cypress:open`
