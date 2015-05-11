
function log(m){console.log(m);};
var net = require('net');
var client = new net.Socket();

var serverIP = '192.168.0.106';//'irc.freenode.net';
var serverPort = 6667;

//连接到服务器
client.connect(serverPort, serverIP, function() {
    log('CONNECTED TO: ' + serverIP + ':' + serverPort);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据
    //client.write('<policy-file-request/>');
    client.write('PASS 12341234\r\n');
    client.write('NICK guozk\r\n');
    client.write('USER guozhaokui 8 * : my real name is js chat client\r\n');
});

client.on('data',function(data){
  log(''+data);
})

//修改昵称

//进入频道

//收发消息

//发送文件
