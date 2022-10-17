

exports.handleMessage = functions.pubsub.topic('test').onPublish( async (message, context) => {


    const data = message.json;

    console.log(data)

})