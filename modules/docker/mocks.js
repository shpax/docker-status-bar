
let counter = 1;

const service = (envName, usersCount, serviceType = 'manager-service') => ({
  id: ++counter,
  envName,
  usersCount,
  serviceType,
  status: {
    rabbit: true,
    redis: false,
    // elasticsearch: true
  }
});

const session = (hash, userId, projectId, errors = false, actions) => ({
  hash, userId, projectId, errors, actions
});

const containerInfo = {
  config: {"_core":{"databaseMemory":{"driverName":"redis","options":{"namespace":"ws","package":"ioredis","host":"redis","port":6379,"database":0,"timeout":10,"checkTimeout":10,"ttl":120000}},"databaseRemote":{"driverName":"api-v5","options":{"host":"https://dev3.pdffiller.com/","url":"https://dev3.pdffiller.com/api_v3","urlGallery":"https://dev3.pdffiller.com/api_v3"}},"databaseCollection":{"driverName":"mongodb","options":{"url":"mongodb://localhost:27017/main"}},"messaging":{"driverName":"rabbitmq","options":{"host":"rabbit","reconnectTimeout":2000}},"api":{},"redis":{"options":{}},"elasticsearch":{"host":"elasticsearch:9200","log":"error"}},"logger":{"driverName":"winston","app":"ws-pdf-services-activity-history","transports":{"Console":{"enable":true,"json":false,"timestamp":true,"formatter":false,"colorize":true,"level":"err"},"File":{"enable":true,"formatter":true,"json":false,"timestamp":true,"filename":"./log/ws-pdf.json","level":"err","datePattern":".yyyy-MM-dd-HH"},"Slack":{"enable":true,"formatter":true,"url":"https://hooks.slack.com/services/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","level":"warning"}},"exceptionHandlers":{"Console":{"enable":true,"formatter":false,"json":false,"timestamp":true,"colorize":true,"level":"err"},"File":{"enable":true,"formatter":true,"json":false,"timestamp":true,"filename":"/var/log/websocket/ws2-exceptions.json","level":"err","datePattern":".yyyy-MM-dd-HH"},"Mail":{"enable":false,"host":"smtp.gmail.com","port":465,"ssl":true,"username":"assasinmailbox@gmail.com","password":"qwerty12345678","subject":"Exception","to":"...@pdffiller.com","cc":"vmysiur@pdffiller.com","json":false,"timestamp":true,"colorize":true,"level":"err"}}},"paths":{"ROOT":"/home/max/WebstormProjects/ws-pdf-services"},"AdminService":{"options":{"host":"localhost","port":8084,"driverName":"rest","frontendScriptsUrl":"https://front-dev.pdffiller.com/dev178","frontendStyleUrl":"https://dev_static.pdffiller.com"}},"RestAPIService":{"options":{"host":"localhost","port":8083,"driverName":"rest","frontendScriptsUrl":"https://front-dev.pdffiller.com/dev178","frontendStyleUrl":"https://dev_static.pdffiller.com"}},"WebSocketConnectionService":{"transport":{"driverName":"ws","options":{"port":8082}},"connection":{"delay_for_ping":5000,"delay_for_auto_close":10000,"heartbeat_package":"{}","disconnect_time":3000000},"code":{"close":4000,"clientClose":4001}},"ActivityHistoryService":{"redis":{"transport":{"indexPrefix":"ahs_","key":"ACTIVITIES","transportKey":"ACTIVITIES_HEAP_","transportKeys":"ACTIVITIES_HEAP_KEYS","maxIndexItems":100,"ttl":60000}}},"Busy":{"timeout":60,"location":"http://dev178.pdffiller.com/en/forms.htm","message":"message to show before go to location"},"awilix":{"options":{"registrationOptions":{"lifetime":"SINGLETON"}}},"LogSystem":{"activityHistoryPoints":["SESSION_INIT","SYSTEM_ERROR","AUTH_INPUT","AUTH_OUTPUT","OPERATIONS_INPUT","OPERATIONS_OUTPUT","DESTROY_INPUT","DESTROY_OUTPUT"]},"ManagerService":{"disconnectTimeoutMs":3600000},"pdf_status_time":500,"pdf_status_time_check":60000,"clientId":1,"serversActive":1,"actionsInsertLimit":10000,"actionsInsertInterval":5000,"tempStorageUrl":"https://dev178.pdffiller.com","staticUrl":"https://front-dev.pdffiller.com/dev178","appKey":"Node_GslkioQb54Va*3"},
  clients: [
    session('f10e2821bbbea527ea02200352313bc059445190', '123123', '56765756756', false, )
  ]
}

const containers = [
  service('ws_exp1', 24, 'wsc-service'),
  service('ws_exp1', 24, 'wsc-service'),
  service('ws_exp1', 12, 'manager-service'),
  service('ws_exp1', 12, 'manager-service'),
  service('ws_exp1', 12, 'manager-service'),
  service('ws_exp1', 12, 'manager-service'),
  service('ws_exp1', 0, 'rest-service'),
  service('ws_exp1', 0, 'ah-service'),
  service('ws_exp1', 0, 'admin-service'),
  service('ws_prod', 24, 'wsc-service'),
  service('ws_prod', 24, 'wsc-service'),
  service('ws_prod', 12, 'manager-service'),
  service('ws_prod', 12, 'manager-service'),
  service('ws_prod', 12, 'manager-service'),
  service('ws_prod', 12, 'manager-service'),
  service('ws_prod', 0, 'rest-service'),
  service('ws_prod', 0, 'ah-service'),
  service('ws_prod', 0, 'admin-service'),
];

module.exports = {
  containers
};