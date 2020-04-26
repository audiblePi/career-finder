# career-finder

CareerFind is a fun and easy to use website designed to help middle school students find a career. It features user authentication and session tracking so that teachers are able to manage career and user data.

## Setup Overview

The only configurable portion of CareerFind is the MongoDB connection string. This is specified by adding the environment variable  MONGODB_URI  to your web server. Once you have run the data scripts you can log into the site with the username 'admin' and password 'admin'.

Start by following the steps outlined in 'Getting Started'. After that refer to one of the following:

	- the readme in ./app for information useful for further development
	- 'Cloud-Based Deployment' for notes regarding Heroku deployment
	- 'Local Deployment' for notes on hosting the web and database server yourself
	
For more detailed instructions regarding installation and deployment please see Section 9 in the [CareerFind SRS](https://github.com/audiblePi/career-finder/blob/master/docs/careerFindSRS.docx).

## Getting Started

1. Install the [Git Client](https://git-scm.com/downloads).

2. Clone the project and navigate to the project directory:
```
git clone https://github.com/audiblePi/career-finder
cd career-finder
```

3. Install [Node.js 13.6.0](https://nodejs.org/en/download/releases/).

4. Install supporting libraries:
```
cd app
npm install
npm run-script install-all
```

## Deplolyment Options

CareerFind supports cloud and local deployments. Note that you will need to open an account with Heroku and provision an mLab MongoDB instance from them which requires a credit card number for cloud deployment.

### Cloud-Based Deployment with Heroku

5. Install the [Heroku 7.38.2 CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

6.	Create a new Heroku app and Git remote:
```
heroku login
heroku create
```

7.	Provision a database:
```
heroku addons:create mongolab:sandbox
```
Note: While mLab’s sandbox option is free you will still need to provide a credit card number to provision the database. If you need to scale you can change your payment plan from your Heroku account.

8.	Ensure the MONGODB_URI environment variable was set to your database's connection string once provisioning has completed:
```
heroku config
```

9.	Deploy CareerFind to Heroku:
```
git subtree push --prefix app heroku master
```

10. Run data scripts to load initial data:
```
npm run-script test-restart
```
Once the scripts finish you can access CareerFind with username: admin  and password: admin  .


### Local Deployment

5. Install MongoDB 3.6.12 and create a database instance:
Refer to the [MongoDB documentation](https://docs.mongodb.com/v3.6/administration/install-community/) for download and installation instructions. By default the new database instance should be configured to use the ip address 127.0.0.1 and port 27017 . Run the mongo shell to confirm that this is the case and make a note of the connection string being used if these values are different.

Note: By default MongoDB is configured to ‘bind localhost’ which means that the database instance will refuse remote connections. If you want to allow remote connections follow the steps in the [MongoDB Security Checklist](https://docs.mongodb.com/manual/administration/security-checklist/) to enable appropriate security measures before doing so.

6. Create the  MONGODB_URI  environment variable and assign it your database connection string.
If you are using the local database instance with default configuration the connection string should be:
mongodb://127.0.0.1:27017/CareerFind

7. Run data scripts to load initial data:
```
npm run-script test-restart
```
Once the scripts finish you can access CareerFind with username: admin  and password: admin  .

8. Build and host CareerFind from ./app/client :
```
npm run build
npm install -g serve
npm serve -s build
```

CareerFind should now be available at port 5000 of your web server.