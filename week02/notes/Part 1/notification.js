const EventEmitter = require('events');
class Notification extends EventEmitter{
    constructor(channelName){
        super();
        this.channelName = channelName;
        this.on(this.channelName, (message) =>{
            console.log(`[${this.channelName}] ${message}`);
            
        })
    }

    send(message){
        this.emit(this.channelName, message);
    }
}

const myTwitchChat = new Notification('twitc')
const myYoutubeChat = new Notification('ytb')


const allMyChats = [myTwitchChat,myYoutubeChat];

