const { PubSub } = require('@google-cloud/pubsub');
const { pubsub } = require('firebase-functions/v1');
const pubsubClient = new PubSub();

exports.sendMessage = functions.https.onRequest(async (req, res) => {


    const { topic, data } = req.body;

    const [exists] = await pubsubClient.topic(topic).exists();

    if (!exists) {
        await pubsubClient.createTopic(topic);
    }


    const id = await pubsubClient.topic(topic).publishJSON(data)

    res.send(id)

})