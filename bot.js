
const { ActivityHandler, MessageFactory } = require('botbuilder');
const { LuisRecognizer } = require('botbuilder-ai');
const request = require('request');

class EchoBot extends ActivityHandler {
    constructor(luisRecognizer) {
        super();
        this.luisRecognizer = luisRecognizer;
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            this.context = context;
            console.log('mybot luisRecognizer2 => ', luisRecognizer.isConfigured);
            const luisResult = await luisRecognizer.executeLuisQuery(context);
            console.log('luisResult ==>', JSON.stringify(luisResult));
            const luisIntentStr = LuisRecognizer.topIntent(luisResult);
            console.log('luisIntentStr ==>', luisIntentStr);
            switch (luisIntentStr) {
            case 'getname' : {
                const content = '就叫张三吧~';
                await context.sendActivity(MessageFactory.text(content, content));
                await next();
                break;
            }
            case 'QueryFood' : {
                await this.requestFoot('火锅', '上海', async function result(data) {
                    console.log('query foot list data success === = = =>');
                    const content = JSON.stringify(data);
                    await context.sendActivity(MessageFactory.text(content, content));
                    await next();
                }, function error(e) {
                    console.log('error === = = =>', e);
                });
                await context.sendActivities([
                    { type: 'typing' },
                    { type: 'delay', value: 14999 },
                    { type: 'message', text: ' Finished  typing' }
                ]);
                break;
            }
            default : {
                const content = '没太懂你的意思~';
                await context.sendActivity(MessageFactory.text(content, content));
                await next();
                break;
            }
            }

            // const replyText = `Echo: ${ context.activity.text }`;
            // await context.sendActivity(MessageFactory.text(replyText, replyText));
            // By calling next() you ensure that the next BotHandler is run.
            // await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            const welcomeText = 'Hello and welcome!';
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    await context.sendActivity(MessageFactory.text(welcomeText, welcomeText));
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }

    async requestFoot(data, city, result, error) {
        const host = process.env.FoodHost;
        const url = host + 'voice/food/search';
        console.log('foot url =', url);
        const params = {};
        params.offset = '0';
        params.limit = '5';
        params.query = data;
        params.devicetype = 'android';
        params.city = city;
        params.deal = false;
        console.log('params =', params);
        request({
            url: url,
            method: 'POST',
            json: true,
            headers: {
                'content-type': 'application/json'
            },
            body: params
        }, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                result(body.data);
            } else {
                return error(body);
            }
        });
    }
}

module.exports.EchoBot = EchoBot;
