

exports.someBackgroundJob = functions.pubsub.schedule('* * * * *').onRun(async (context => {

    return null;

}))