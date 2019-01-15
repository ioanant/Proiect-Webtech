const Sequelize= require('sequelize');
const db={};
const dbConfig= require("../config/proiect_webtech.json");
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const TOKEN_PATH = 'token.json';
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const sequelize= new Sequelize(dbConfig.database,dbConfig.username,dbConfig.password, {
    dialect:'mysql',
    host:dbConfig.host,
    operatorsAliases: false
})
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

fs.readFile('./backend/route/credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Calendar API.
  authorize(JSON.parse(content), listEvents);
});

function authorize(credentials, callback) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getAccessToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client);
  });
}
function getAccessToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

/**
 * Lists the next 10 events on the user's primary calendar.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listEvents(auth) {
  const calendar = google.calendar({version: 'v3', auth});
  calendar.events.list({
    calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 30,
    singleEvents: true,
    orderBy: 'startTime',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const events = res.data.items;
    if (events.length) {
      console.log('Upcoming 30 events:');
      events.map((event, i) => {
        const start = event.start.dateTime;
        console.log(`${start} - ${event.summary}`);
        // var sql = "INSERT INTO appointments (id,name,data) VALUES ("+ (i+10) +",'" + event.summary + "','" + start +"');";
        // db.sequelize.query(sql).then(()=> {
        //     console.log("1 record inserted");
        //     }).catch((err)=>{
        //         console.log(err);
        //     })
      });
    } else {
      console.log('No upcoming events found.');
    }
      });
  

sequelize.authenticate().then(() => {
			console.log('Conectiunea s-a stabilit cu succes');
		})
		.catch((err) => {
			console.log('Nu s-a putut conecta', err);
		});
		

     
db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.Calandar=require('./Calendar')(sequelize,Sequelize);
db.Notes=require('./Notes')(sequelize,Sequelize);


module.exports=db;
}