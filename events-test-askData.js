const users = [];
const activityList = [];
const dates = [];

const askDate = function(){
    process.stdout.write(`Please input preferred date in DDMMYY format.\n\n`);
    process.stdin.on('data', data => {
        users.length == activityList.length ?
        dates.push(data.toString().trim()) :
        false
        console.log('Thank you. Your answers were:');
        console.log(users, activityList, dates);
        process.exit();
    });
};

const askActivity = () => {
    process.stdout.write(`Thank you {identify user}. Please list the activity you are registering for.\n\n`);
    process.stdin.on('data', data => {
        activityList.length == dates.length ?
        activityList.push(data.toString().trim()) && askDate() :
        false
    });
};

const askName = () => {
    process.stdout.write('what is your first and last name\n\n');
    process.stdin.on('data', data => {
        users.length == (dates.length && activityList.length)?
        users.push(data.toString().trim()) && askActivity() :
        false
    });
};

askName();

//next, match key value pairs + properties
//const user = {properties such as userName: , activity: , date: };

//could also try const [, , userFirst, userLast, activity, date] = process.argv;
//could also try using emitter.emit('input', userFirst, userLast, activity, date);

//format date

//later: RSVP list = [users]
//later: RSVP by eventName = [users?]
//later: date.lengths ??
