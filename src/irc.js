
function log(m){console.log(m);};
var net = require('net');
var client = new net.Socket();

var serverIP = '192.168.0.106';//'irc.freenode.net';
var serverPort = 6667;

//连接到服务器
client.connect(serverPort, serverIP, function() {
    log('CONNECTED TO: ' + serverIP + ':' + serverPort);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据
    //client.write('PASS 12341234\r\n');
    client.write('NICK guozk2\r\n');
    client.write('USER guozhaokui 8 * : my real name is js chat client\r\n');
});

function recvMsg(){
  var recv = '';
  this.onData=function(data){
    recv+=data;
  }
  this.getMsg=function(){
    var sp = recv.indexOf('\r\n');
    if(sp>0){
      var msg = recv.substr(0,sp);
      recv=recv.substr(sp+2);
      return msg;
    }
    return null;
  }
}

function handleMsg(tcp){
  this.onPing=function(){
    tcp.write('PONG irc.androiddebug.net\r\n');
  }
}


var recv = new recvMsg();
var handle = new handleMsg(client);

client.on('data',function(data){
  recv.onData(data);
  var msg=null;
  while( msg = recv.getMsg()){
    log(msg);
    var msgparts=msg.split(' ');
    if(msgparts&&msgparts[0]=='PING'){
      handle.onPing();
    }
    //log(msgparts);
  }
})

//查询频道
setTimeout(function(){
  client.write('LIST\r\n');
},3000);


//修改昵称

//进入频道
setTimeout(function(){
  client.write('JOIN #Blade2\r\n')
},6000)

//收发消息
setInterval(function(){
  client.write('PRIVMSG #Blade2 :hi o o\r\n')
},2000,8000);

//发送文件
