
function log(m){console.log(m);};
var net = require('net');
var client = new net.Socket();

var serverIP = 'irc.freenode.net';
var serverPort = 6667;

log('xxx');
//连接到服务器
client.connect(serverPort, serverIP, function() {

    log('CONNECTED TO: ' + serverIP + ':' + serverPort);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据
    //client.write('<policy-file-request/>');
});

//修改昵称

//进入频道

//收发消息

//发送文件
