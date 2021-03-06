const mcs = require("../lib/mcs");
const http = require("sf-core/net/http");
const Http = new http();
const getImage = require("../lib/getImage");

exports.deleteApprovedLeaveRequest = deleteApprovedLeaveRequest;
exports.deleteWaitingLeaveRequest = deleteWaitingLeaveRequest;
exports.deleteRejectedLeaveRequest = deleteRejectedLeaveRequest;
exports.getPendingLeaveApprovals = getPendingLeaveApprovals;
exports.getApprovedLeaveApprovals = getApprovedLeaveApprovals;
exports.getApprovedLeaveRequests = getApprovedLeaveRequests;
exports.getWaitingLeaveRequests = getWaitingLeaveRequests;
exports.getRejectedLeaveRequests = getRejectedLeaveRequests;
exports.getLeaveRequestsChart = getLeaveRequestsChart;


function deleteApprovedLeaveRequest(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "approvedleaverequests"
    }), {
        method: "DELETE",
        onLoad: function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        onError: function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    });
    if (request)
        requestOptions.body = JSON.stringify(request);


    Http.request(requestOptions);
}

function deleteWaitingLeaveRequest(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "waitingleaverequests"
    }), {
        method: "DELETE",
        onLoad: function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        onError: function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions);
}

function deleteRejectedLeaveRequest(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "rejectedleaverequest"
    }), {
        method: "DELETE",
        onLoad: function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        onError: function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions);
}

function getPendingLeaveApprovals(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "pendingleaveapprovals"
    }), {
        method: "GET",
        onLoad: function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
                responseBody.forEach(function(item) {
                    item.image = getImage(item.image);
                });
            }
            finally {}
            callback && callback(null, responseBody);
        },
        onError: function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions);
}

function getApprovedLeaveApprovals(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "approvedleaveapprovals"
    }), {
        method: "GET",
        onLoad: function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
                responseBody.forEach(function(item) {
                    item.image = getImage(item.image);
                });
            }
            finally {}
            callback && callback(null, responseBody);
        },
        onError: function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions);
}

function getApprovedLeaveRequests(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "approvedleaverequests"
    }), {
        method: "GET",
        onLoad: function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        onError: function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions);
}

function getWaitingLeaveRequests(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "waitingleaverequests"
    }), {
        method: "GET",
        onLoad: function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        onError: function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions);
}

function getRejectedLeaveRequests(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "rejectedleaverequest"
    }), {
        method: "GET",
        onLoad: function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        onError: function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions);
}

function getLeaveRequestsChart(request, callback) {
    if (!callback && request) {
        callback = request;
        request = null;
    }
    var requestOptions = Object.assign(mcs.createRequestOptions({
        apiName: "SelfService",
        endpointName: "leaverequestschart"
    }), {
        method: "GET",
        onLoad: function(response) {
            var responseBody = response.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(null, responseBody);
        },
        onError: function(e) {
            var responseBody = e.body.toString();
            try {
                responseBody = JSON.parse(responseBody);
            }
            finally {}
            callback && callback(responseBody);
        }
    
    });
    if (request)
        requestOptions.body = JSON.stringify(request);

    Http.request(requestOptions);
}
