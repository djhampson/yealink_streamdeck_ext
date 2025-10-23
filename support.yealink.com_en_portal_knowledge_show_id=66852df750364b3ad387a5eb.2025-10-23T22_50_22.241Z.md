![](https://support.yealink.com/static/img/yealink.png)

Except for necessary cookies, we may also use Functional cookies (including third party cookies) to deliver experience for you. You can turn them off by clicking “change settings”. Read [cookies policy](https://www.yealink.com/en/onepage/yealink-cookie-policy).

Privacy Policy  Change Settings

License Manager

![Yealink](https://support.yealink.com/static/img/logo.png)Support

Ticket

Warranty Service

License

Knowledge Base

Resource Center

Prime Care

- Academy
- Headset Compatibility
- Partner Center
- Headset Selector

Help Desk

- Login
- Sign Up
- Account application and permission description

EN中

More Modules

All Modules

![](https://support.yealink.com/static/img/empty.1ee4d7c4.png)

Sorry, no results found

Pro AV Solution

Content

Yealink SkySound Solution

Yealink AVONE Solution

3rd-Party Pro AV Solution with Yealink Conference Solution

Introduction

Deployment

System requirements

Third-party Integration

Room Control

Crestron Module Deployment Guide

DSP Device Compatible List

Central Control API

Basic Description of the Central Control Environment

Yealink RoomConnect Configuration

Socket API

HTTPS API

Mic and Camera Linkage Central Control Commands

Features

Home  Knowledge Base Pro AV Solution3rd-Party Pro AV Solution with Yealink Conference SolutionThird-party IntegrationCentral Control APIHTTPS API

Contents

Central control HttpApi authentication instructions

1\. Token usage method

2\. Business authentication failed.

3\. Handling Exceeding Limits

Central Control HttpApi Error Code Description

Admission Service

1\. Authentication

Basic information

1\. Access to system information

2\. Access to network information

3\. Get device list

4\. Retrieve app information list.

5\. Get call status

6\. Access to system information

7\. Get USB port connection status

8\. Check memory usage

9\. Read Device Status

10\. Set alert notification rules

11\. Get the current time

12\. Get the status of BYOD-EXTENDER

Control service

1\. System State Control

2\. Audio Control

3\. Camera control

Display control

5\. Multi-mode control

6\. Wireless Control

7\. Camera layout control

8\. App control

9\. API Permissions

10\. Other

Health services

1\. Setting Log Sever Address

2\. Access system logs

3\. Network diagnosis

4\. Start or stop packet capture file upload.

5\. Alarm

Update service

1\. Device upgrade

2\. Device upgrade cancellation

3\. Obtain upgrade status

Configuration Service

1\. Configuration File Update

HTTPS API

Last Update Time：2025-08-25

Pageviews：6948

Note: When downloading PDF files, videos, excessively wide tables, animated graphics, and other elements may not be displayed or may be displayed incompletely

Download PDF

Copy Link

Share

Favorite

Subscribe to this article

Subscribe to this section

Subscribe

Tips

# Central control HttpApi authentication instructions

Due to the addition of the authentication mechanism, you need to perform the authentication process first, after the success of the token, the subsequent interface calls attached to the token verification :::NOTE The token is valid for 2 hours. :::

Request authentication as a POST with the password parameter (value is the admin password of the requested device):

```lang-http

POST /centralcontrol/authentication

{
    "password": "0000"
}

```

If requested and verified successfully, a string of tokens will be obtained:

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "token":"6118C27AAC154D79BFC955A4F63E3C42"
    }
}

```

## 1\. Token usage method

The obtained token field is filled in the **"Authorization** " field in the https request header as the authentication check field value:

```lang-http

User-Agent: PostmanRuntime-ApipostRuntime/1.1.0
Cache-Control: no-cache
content-type: application/json
Accept: */*
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Authorization: Bearer 6118C27AAC154D79BFC955A4F63E3C42
Content-Length: 27

```

**All subsequent requests** need to bring the token in order to verify the success and perform the corresponding functions, if the access is app-related interfaces need to bring the app name parameter, to Apipost software as an example:

![](https://support.yealink.com/en/portal/knowledge/resource/https-request.png)

## 2\. Business authentication failed.

| Supported Models | MeetingBoard 65/86, MeetingBoard 65/75/86 Pro, MeetingEye 500/900, MeetingBar A10/A40, Yealink RoomConnect, UVC40 |
| --- | --- |

When a business request is made and authentication fails, the following response example will be returned:

- Response Example

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":500
}

```

At this point, the client can initiate a reauthentication request.

## 3\. Handling Exceeding Limits

| Supported Models | MeetingBoard 65/86, MeetingBoard 65/75/86 Pro, MeetingEye 500/900, MeetingBar A10/A40 |
| --- | --- |

If the concurrent number of business requests exceeds ten, the server's concurrency limit mechanism will be triggered, and the following response instance will be returned.

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 500,
    "data":
    {
        "error-code": 10007,
        "error-msg": "password-incorrect"
    }
}

```

# Central Control HttpApi Error Code Description

If the request fails, the status field will return "404" (for authentication-related issues, please refer to "Access Control Service" and "Authentication Description"). In this case, the API response will include the error-code and error-msg fields, which indicate the error code and message. You can use this information to identify the cause of the error. Specific definitions are as follows:

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 404,
    "data":
    {
        "error-code": 10002,
        "error-msg": "not-support"
    }
}

```

Error code/Error message description:

| Error code | Error Message | Explanation |
| --- | --- | --- |
| 10001 | unknown | Unknown error |
| 10002 | not-support | Not supported |
| 10003 | invalid-param | Parameter error |
| 10004 | busy | Device is busy—certain operations are not allowed (on a call) |
| 10005 | file-gen-fail | File generation failed |
| 10006 | permission-denied | You do not have permission to perform this action. |
| 10007 | password-incorrect | Authentication password error, failed to obtain authentication token |
| 10008 | refresh-token-fail | Failed to refresh authentication token |
| 10009 | authentication-required | Authentication failed |
| 10010 | exceed-maximum-concurrency | Exceeded the server's maximum concurrent connections |
| 10011 | task-process-no-exist | The task process no longer exists and needs to be restarted. <br>Example: If packet capture hasn't started or ends due to timeout, performing a get operation afterward. |

# Admission Service

Authentication and authorization

## 1\. Authentication

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/authentication

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingEye 500/900, MeetingBar A10/A40, Yealink RoomConnect, UVC40 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| password | string | NULL | Yes | authentication code |

**Return Value:**

| Name | Typology | Range of Values | Note |
| --- | --- | --- | --- |
| token | string | NULL | Successful authentication of the token |

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/authentication

{
    "password": "0000"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "token":"6118C27AAC154D79BFC955A4F63E3C42"
    }
}

```

# Basic information

Basic information query/retrieval (This document includes system information, network information, device list. For other system status, mute status, volume level, camera information, screen brightness, conference platform list, please refer to the Control Service document).

## 1\. Access to system information

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/version

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, UVC40 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Note |
| --- | --- | --- |
| model | string | Equipment type |
| firmware | string | Firmware version |
| hardware | string | hardware version |
| serialnumber | string | device sn number |
| macaddress | string | device mac address |
| cc-version | string | Center control version |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/version

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "model":"MeetingEye 500",
        "firmware":"128.423.253.104",
        "hardware":"263.0.19.0.3.0.36",
        "macaddress":"00:15:65:00:00:00",
        "serialnumber":"506607D117000009",
        "cc-version":"1.0.0.11"
    }
}

```

## 2\. Access to network information

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/network/info

| Supported Models | UVC40, MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, SmartVision 40 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Note |
| --- | --- | --- | --- |
| network-list | [network\_info](https://support.yealink.com/en/portal/knowledge/show?id=66852df750364b3ad387a5eb#network_info) \[\] | NULL | network information list |

**network\_info**

| Name | Typology | Range of Values | Note |
| --- | --- | --- | --- |
| type | int | \[0,1\] | Acquire network method <br>0: Dynamic acquisition <br>1: Static setting |
| port-type | int | \[0,1,2\] | Network Port Type <br>0: Wired Port 1 <br>1: Wired Port 2 <br>2: Wireless Port <br>3: AP Port |
| mode | int | \[0,1,2\] | IP type <br>0: IPv4 <br>1: IPv6 <br>2: IPv4 and IPv6 |
| ip | string | NULL | IP address |
| mask | string | NULL | subnet mask |
| gateway | string | NULL | Gateway |
| primary-dns | string | NULL | Preferred DNS server name |
| second-dns | string | NULL | Secondary DNS server name. |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/network/info

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data": {
        "network-list": [\
            {\
                "type": 0,\
                "port-type": 2,\
                "mode": 0,\
                "ip": "",\
                "mask": "",\
                "gateway": "",\
                "primary-dns": "",\
                "second-dns": ""\
            },\
            {\
                "type": 0,\
                "port-type": 0,\
                "mode": 0,\
                "ip": "10.50.149.143",\
                "mask": "255.255.255.0",\
                "gateway": "10.50.149.254",\
                "primary-dns": "10.100.1.10",\
                "second-dns": "192.168.1.22"\
            }\
        ]
    }
}

```

## 3\. Get device list

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/devices

| Supported Models | Yealink RoomConnect, MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, SmartVision 40 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Note |
| --- | --- | --- | --- |
| device-list | device\_info \[\] | NULL | List of device information |

**device\_info**

| Name | Typology | Note |
| --- | --- | --- |
| model | string | Equipment type |
| firmware | string | Firmware version |
| hardware | string | hardware version |
| serialnumber | string | device sn number |
| macaddress | string | device mac address |
| id | int | Device ID (used to set or get screen parameters) |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/devices

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "device-list": [\
            {\
                "model":"UVC86",\
                "firmware":"128.423.253.104",\
                "hardware":"263.0.19.0.3.0.36",\
                "macaddress":"00:15:65:00:00:00",\
                "serialnumber":"506607D117000009",\
                "id": 0\
            },\
            {\
                "model":"UVC84",\
                "firmware":"130.303.253.44",\
                "hardware":"261.0.5.10.43.0.58",\
                "macaddress":"00:24:13:00:00:00",\
                "serialnumber":"803032E070000031",\
                "id": 1\
            }\
        ]
    }
}

```

## 4\. Retrieve app information list.

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/app/info

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Note |
| --- | --- | --- | --- |
| app-list | app\_list \[\] | NULL | List of device information |

**app\_list**

| Name | Typology | Note |
| --- | --- | --- |
| id | string | App package name |
| name | string | App name |
| version | string | App version number |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/app/info

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "app-list": [\
            {\
                "id":"com.yealink.byod",\
                "name":"BYOD",\
                "version":"1.0"\
            },\
            {\
                "id":"com.yealink.projection",\
                "name":"投屏",\
                "version":"21.1.2-TS.2"\
            }\
        ]
    }
}

```

## 5\. Get call status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/call-state

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, SmartVision 40 <br>Note: 1. SmartVision 40 only supports incall and idle |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| call-state | string | \[incoming, incall, idle\] | incoming: Incoming call <br>incall: In call <br>idle: idle <br>Both incoming and incall statuses can be considered as ‘on a call’ |
| app-info | app\_info | NULL | app information during an ongoing call. If not on a call, all related fields will be set to "" |

**app\_info**

| Name | Typology | Note |
| --- | --- | --- |
| id | string | App package name |
| name | string | App name |
| version | string | App version number |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/call-state

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "status":200,
    "data":
    {
        "call-state": "incoming",
        "app-info": {
                "id":"com.yealink.projection",
                "name":"投屏",
                "version":"21.1.2-TS.2"
        }
    }
}

```

## 6\. Access to system information

**Basic Information**

**Method:** GET

**path:** /centralcontrol/system/sys-info

| Supported Models | SmartVision 40 |
| --- | --- |

**Request Parameters**

**Body:**

NULL

**Return Value:**

| Name | Typology | Parameter Description |
| --- | --- | --- |
| model | string | device models |
| firmware | string | firmware version |
| hardware | string | hardware version |
| serialnumber | string | device sn number |
| macaddress | string | device mac address |
| cc-version | string | center control version |
| vendor | string | Device Manufacturer Name |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/sys-info
{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"model": "SmartVision40",
		"firmware": "286.412.0.6",
		"hardware": "286.0.16.0.0.0.0",
		"serialnumber": "506656F110000056",
		"macaddress": "24:9a:d8:db:a2:3b",
		"cc-version": "1.0.0.16",
		"vendor": "Yealink"
	}
}

```

## 7\. Get USB port connection status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/pc-connect-status

| Supported Models | SmartVision 40 |
| --- | --- |

**Request Parameters**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Description |
| --- | --- | --- | --- |
| status | string | \[on,off\] | USB connection status: <br>on: Connected <br>off: Not connected |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/pc-connect-status

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"status": "on"
	}
}

```

## 8\. Check memory usage

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/memory-info

| Supported Models | SmartVision 40, MeetingBoard 65/86/65Pro/75Pro/86Pro, MeetingEye 500/900, MeetingBar A10/A40 |
| --- | --- |

**Request Parameters**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Description |
| --- | --- | --- | --- |
| memory-usage | int | \[0,100\] | Memory Usage |
| total-memory | int | >0 | Total memory, in MB |
| free-memory | int | >=0 | Unused memory, in Mb |
| used-memory | int | >0 | Memory Used, Unit: Mb |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/memory-info

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"memory-usage": 21,
		"total-memory": 953,
		"free-memory": 744,
		"used-memory": 209
	}
}

```

## 9\. Read Device Status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/alert-status

| Supported Models | SmartVision 40 |
| --- | --- |

**Request Parameters**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Description |
| --- | --- | --- | --- |
| normal | string | \[true,false\] | Device status normal if normal =!(memorytoohigh \|\| cpuusagetoohigh) |
| memorytoohigh | string | \[true,false\] | Is memory usage too high? By default, return true if it's greater than 80. |
| cpuusagetoohigh | string | \[true,false\] | Check if cpu usage is too high; returns true if it exceeds 80% by default |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/alert-status

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"normal": "true",
		"memorytoohigh": "false",
		"cpuusagetoohigh": "false"
	}
}

```

## 10\. Set alert notification rules

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/system/alert-rules

| Supported Models | SmartVision 40 |
| --- | --- |

**Request Parameters**

**Body:**

| Name | Typology | Range of Values | Parameter |
| --- | --- | --- | --- |
| cpu | int | \[0,100\] | Set the cpu usage threshold. Unit: %. The default is 80. If the request parameter is outside the valid range, it will be set to the default value. |
| memory | int | \[0,100\] | Set a high memory usage threshold (unit: %). The default is 80. If the request parameter value is outside of the acceptable range, it will be set to the default. |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/system/alert-rules

{
    "cpu":70,
    "memory":90
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200
}

```

## 11\. Get the current time

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/current-time

| Supported Models | SmartVision 40 |
| --- | --- |

**Request Parameters**

**Body:**

NULL

**Return Value:**

| Parameter | Typology | Range of Values | Description |
| --- | --- | --- | --- |
| value | int | NA | linux timestamp |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/current-time

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"value": 1725480149
	}
}

```

## 12\. Get the status of BYOD-EXTENDER

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/byod/extender-status

| Supported Models | Yealink RoomConnect |
| --- | --- |

**Request Parameters**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Description |
| --- | --- | --- | --- |
| status | string | \[available,in\_use, disconnected, unknown\] | USB connection status: <br>available: MVC-BYOD-Extender connected to host, but not using <br>in\_use: MVC-BYOD-Extender in use <br>disconnected: MVC-BYOD-Extender not connected <br>unknown: Unknown status |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/byod/extender-status

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"status": "available"
	}
}

```

# Control service

Remote control of audio and video devices, displays, and entire machines, including obtaining status information required for control.

## 1\. System State Control

### 1) Get system status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/status

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| status | string | \[sleeping,wake-up\] | System Status<br>sleeping: sleeping <br>wake-up: wake up |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/status

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "status":"wake-up"
    }
}

```

### 2) Set system status

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/system/status

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, Yealink RoomConnect, UVC40, SmartVision 40 <br>AP08, AVBridge, CM20, CM50 <br>**Note:**<br>**1\. Yealink RoomConnect/UVC only support restart and reset to factory**<br>**2\. Only Yealink RoomConnect supports sn parameter 3. SmartVision 40 only supports restart** 4\. AP08, AVBridge, CM20, CM50 only support reset and restart |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| status | string | \[sleeping,wake-up,reboot,reset\] | Yes | System Status <br>sleeping: sleep <br>wake-up: wake up <br>reboot: reboot <br>reset: factory restore |
| sn | string | NULL | No | Device unique identifier SN |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/system/status

{
    "status":"sleeping",
    "sn":"506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 3) Get Working Hours

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/uptime

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, SmartVision 40 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| value | int | >0 | Working Hours (in minutes) |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/uptime

{

}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "value":840
    }
}

```

### 4). Get CPU information

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/cpu-info

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, SmartVision 40 <br>Note: 1. SmartVision 40 supports cpu-temp |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| cpu-usage | int | \[1~100\] | cpu usage (in percentage points) |
| cpu-temp | int | \[-10,100\] | cpu temperature, unit: ℃ |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/cpu-info

{

}

```

SmartVision 40:

```lang-http

GET /centralcontrol/system/cpu-info

{

}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "cpu-usage":25
    }
}

```

SmartVision 40:

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"cpu-usage": 10,
		"cpu-temp": 67
	}
}

```

### 5). Set the current partition status of the device

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/system/division

| Supported Models | AP08 |
| --- | --- |

**Request Parameters:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| value | int | \[0, 1\] | Yes | 0: Merged Status 1: Split Status |

**Return Value:** NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/system/division

{
    "value":1
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 6). Get the current partition status of the device

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/division

| Supported Models | AP08 |
| --- | --- |

**Request Parameters:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| value | int | \[0, 1\] | Yes | 0: Merged Status 1: Split Status |

**Return Value:** NULL

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/division

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
	"data":{
		"value":1
	}
}

```

### 7). Query current hardware status of the device (deprecated, use 8 instead)

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/hardware

| Supported Models | AP08 |
| --- | --- |

**Request Parameters:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| » hardware\_list | body | object | Yes |
| »» type | body | string | Yes |
| »» index | body | string | No |

**Return Value:** NULL

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/hardware

{
	"hardware_list": [\
		{\
			"type": "gpio",\
			"index": [\
				"1",\
				"2"\
			]\
		}\
	]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"hardware_list": [\
			{\
				"type": "gpio",\
				"status": [\
					{\
						"index": "1",\
						"status": "0"\
					},\
					{\
						"index": "2",\
						"status": "1"\
					}\
				]\
			}\
		]
	}
}

```

### 8). Get gpio status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/system/hardware

| Supported Models | AP08 |
| --- | --- |

**Request Parameters:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| hardware\_list | object | - | Yes |

hal\_list

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| type | body | string | Yes |
| index | body | string | No |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/system/gpio-status

{
	"hardware_list": [\
		{\
			"type": "gpio",\
			"index": [\
				"1",\
				"2"\
			]\
		}\
	]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"hardware_list": [\
			{\
				"type": "gpio",\
				"status": [\
					{\
						"index": "1",\
						"status": "0"\
					},\
					{\
						"index": "2",\
						"status": "1"\
					}\
				]\
			}\
		]
	}
}

```

### 9). Enable device location switch

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/system/status

| Supported Models | AP08, AVBridge, CM20, CM50, CS10, CS10-D |
| --- | --- |

**Request Parameters**

**Body:**

| Name | Typology | Range of Values | Description |
| --- | --- | --- | --- |
| status | string | \[on,off\] | on:Enable Device Location <br>off:Disable Device Location |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/system/status
{
	"status":"on"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200
}

```

### 10). Set LED Light Switch

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/sysytem/led-preset/enable

| Supported Models | CM20, CM50, CS10, CS10-D |
| --- | --- |

**Request Parameters**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| enable | string | \[on,off\] | Yes | on:Turn on the LED light <br>off:Turn off the LED light |

**Return Value:**

**NULL**

**Note**

- **Example of a request**




```lang-http

POST /centralcontrol/system/led-preset/enable
{
    "enable":"off"
}

```

- **Response Example**




```lang-

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 200
}

```


### 11). Get LED On/Off Status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/sysytem/led-preset/enable

| Supported Models | CM20, CM50, CS10, CS10-D |
| --- | --- |

**Request Parameters**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| enable | string | \[on,off\] | on:Enabled <br>off:Disabled |

**Note**

- **Example of a request**




```lang-http

GET /centralcontrol/system/led-preset/enable
{
}

```

- **Response Example**




```lang-

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 200,
    "data":{
    	"enable":"on"
    }
}

```


### 12). Set LED light color presets

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/sysytem/led-preset/config

| Supported Models | CM20, CM50, CS10, CS10-D |
| --- | --- |

**Request Parameters**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| color | string | {red,green,oriange,#xxxxxx} | Yes | Supports three preset colors: red, green, and orange. Also supports any RGB hexadecimal color (except red, green, and orange). |
| event | string | {mute,unmute} | Yes | Event to be set |

**Return Value:**

**NULL**

**Note**

- **Example of a request**




```lang-http

POST /centralcontrol/sysytem/led-preset/config
{
    "color":"red",
    "event":"mute"
}

```

- **Response Example**




```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 200
}

```


### 13). Get LED color preset

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/sysytem/led-preset/config

| Supported Models | CM20, CM50, CS10, CS10-D |
| --- | --- |

**Request Parameters**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| event | string | {mute,unmute} | Yes | Event to query the light color |

**Return Value:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| color | string | {red,green,oriange,#xxxxxx} | Yes | Three preset colors: red, green, and orange. Or any RGB 16-digit color (except red, green, and orange). |
| event | string | {mute,unmute} | Yes | Corresponding event |

**Note**

- Example of a request

```lang-http

GET /centralcontrol/sysytem/led-preset/config
{
	"event":"unmute"
}

```

- Response Example
- ```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 200
    "data":{
    	"event":"unmute",
    	"color":"#145386"
    }
}

```


## 2\. Audio Control

### 1\. Obtain mute status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/mute

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, UVC40: These models are deprecated; it's recommended to use mic-mute <br>AP08, AVBridge, CM20, CM50: Retrieve the entire device's mute status |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| status | string | \[on,off\] | Mute status<br>on: on<br>off: off |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/mute

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "status":"on"
    }
}

```

### 2）. Setting the Mute State（ MVC）

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/mute

| Supported Models | UVC40, Yealink RoomConnect, SmartVision 40, AP08, AVBridge, CM20, CM50 <br>Note: <br>1\. Only Yealink RoomConnect supports passing the sn parameter <br>2\. On AP08, AVBridge, CM20, and CM50 models, the mute status set for the whole device and for the channels are not synchronized. If either one is muted, the entire channel will be muted. |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| status | string | \[on,off\] | Yes | Mute status<br>on: on<br>off: off |
| sn | string | NULL | No | Device unique identifier |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/mute

{
    "status": "off",
    "sn":"506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 3）. Setting the Mute State（ VCS）

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/button

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 Note: <br>1. This interface works in reverse from the actual microphone status: If currently unmuted, a POST will mute it; if muted, a POST will unmute. |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| key | string | \[mute\] | Yes | key name |

\\*\\* Return Value:

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/button

{
    "key": "mute"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 4) Get volume (mic)

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/volume

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, UVC40 <br>Note: <br>1\. UVC devices do not need to provide parameters when requesting this interface <br>2\. MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 can optionally specify volume type parameter; default is idle |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| type | string | \[idle,talk\] | No | Volume type<br>idle: ringer volume<br>talk: call volume |

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| value | int | \[0~15\] | loudness value |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/volume

{
    "type": "talk"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "value":5
    }
}

```

### 5) Adjust volume

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/volume

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 <br>Note: <br>1\. MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 can optionally specify volume type parameter, default is idle (In single volume mode, idle and talk volume will be synchronized) |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| value | int | \[0-15\] | Yes | loudness value |
| type | string | \[idle,talk\] | No | Volume type<br>idle: ringer volume<br>talk: call volume |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/volume

{
    "type": "idle",
    "value": 3
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 6). Get list of audio sources

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/source-info

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Parameter Description |
| --- | --- | --- |
| input-source | string | Input Source List |
| output-source | string | Output source list |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/source-info

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "input-source": [\
		"AUTO",\
		"WIRED_MIC",\
		"LINE",\
		"XLR"\
	],
	"output-source": [\
		"AUTO",\
		"HDMI",\
		"LINE",\
		"WIRED_SPEAKER"\
	]
    }
}

```

### 7) Set audio input source.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/input-source

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| type | string | Only supports retrieving audio source lists to obtain input source information. | Yes | Audio Input Source Identifier <br>AUTO: Automatic <br>VCP: CP96X Device <br>LINE: Line-in <br>USB\_LINE: USB to line-in <br>BUILT\_IN: Built-in Mic <br>HANDSET: Controller <br>BT\_HANDSET: Bluetooth handle <br>WIRED\_MIC: Wired mic <br>WIRELESS\_MIC: Wireless mic <br>XLR: Three-pin socket input |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/input-source

{
    "type": "AUTO"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 8) Set audio output source.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/output-source

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| type | string | Only supports obtaining the audio source list to retrieve output source information | Yes | Audio Output Source Identifier <br>AUTO: Automatic <br>VCP: CP96X Device <br>HDMI: HDMI <br>LINE: Line-out <br>USB\_LINE: USB to line-out <br>BUILT\_IN: Built-in speaker <br>HEADSET: Headset <br>BT\_HEADSET: Bluetooth Headphones <br>WIRED\_SPEAKER: Wired Speaker |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/output-source

{
    "type": "VCP"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 9) Set input audio noise reduction.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/input/noise-reduction

| Supported Models | Yealink RoomConnect <br>Note: 1. Supported models for ai-mode: avhub, uvc84, uvc86 <br>2\. Supported models for level: avhub, uvc84, uvc86, vcm34, vcm35, vcm38, cm20 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| ai-mode | string | \[on,off\] | No | AI intelligent noise reduction mode <br>on: enable <br>off: disable |
| level | int | \[0,1,2.3\] | No | Inhibition Level <br>0: Off <br>1: Weak <br>2: Normal <br>3: Strong |
| sn | string | NULL | No | Device unique identifier |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/input/noise-reduction

{
    "sn":"506607D117000009",
    "ai-mode": "on",
    "level":2
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 10) Set input audio gain.

**Basic information:**

**Method:** POST

**Path:** /centralcontrol/audio/input/gain

| Supported Models | Yealink RoomConnect Note: 1. The parameters "rca-value" and "line-value" only take effect on AVhub when adjusting the device |
| --- | --- |

**Request parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| status | string | \[on,off\] | Yes | Gain control status: <br>on - enabled <br>off - disabled |
| gain-value | int | \[-30~30\] | No | Gain adjustment value |
| rca-value | int | \[-12~40\] | No | RCA input adjustment value |
| line-value | int | \[-12~40\] | No | Line input adjustment value |
| attenuation-value | int | \[-30~30\] | No | Attenuation Adjustment Value |
| sn | string | NULL | No | Device unique identifier |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/input/gain

{
    "status":"on",
    "sn":"506607D117000009",
    "gain-value":20,
    "rca-value":-6,
    "attenuation-value":30,
    "line-value":12
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 11) Set up input audio echo cancellation.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/input/echo-cancellation

| Supported Models | Yealink RoomConnect |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| status | string | \[on,off\] | Yes | Echo cancellation status <br>on: enable <br>off: disable |
| suppress-level | int | \[0,1,2\] | No | Echo cancellation level <br>0: Low <br>1: Medium <br>2: High |
| reverb-level | int | \[0,1,2\] | No | Room reverberation level <br>0: Low <br>1: Medium <br>2: High |
| manual-dalay | string | \[on,off\] | No | Manual delay <br>on: Turn on <br>off: Turn off |
| delay-value | int | \[-100~500\] | No | Audio AEC delay count (unit: ms) |
| sn | string | NULL | No | Device unique identifier |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/input/echo-cancellation

{
    "status":"on",
    "sn":"506607D117000009",
    "suppress-level":1,
    "reverb-level":0,
    "manual-dalay":"on",
    "delay-value":200
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 12) Set input audio equalizer

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/input/equalizer

| Supported Models | Yealink RoomConnect |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| status | string | \[on,off\] | Yes | Equalizer status <br>on: enable <br>off: disable |
| mode | string | \[custom,bass-boost, `<br>` treble-boost,vocal-boost\] | Yes | Equalizer mode <br> custom Custom <br> bass-boost: Bass boost <br>treble-boost: Treble boost <br>vocal-boost: Vocal boost |
| frequency-range-list | int | \[-12~12\] | No | The custom mode frequency band list includes the following data: 20Hz, 63Hz, 125Hz, 250Hz, 500Hz, 1000Hz, 2000Hz, 4000Hz, 8000Hz, 20000Hz. |
| sn | string | NULL | No | Device unique identifier |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/input/equalizer

{
    "sn":"506607D117000009",
    "status": "on",
    "mode":"custom",
    "frequency-range-list":[12,5,-12,3,6,10,-5,2,0,3,9]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 13) Set output audio gain.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/output/gain

| Supported Models | Yealink RoomConnect |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| status | string | \[on,off\] | Yes | Gain control status: <br>on - enabled <br>off - disabled |
| gain-value | int | \[-30~30\] | No | Gain adjustment value |
| attenuation-value | int | \[-30~30\] | No | Attenuation Adjustment Value |
| line-value | int | \[-50-30\] | No | Line output adjustment value |
| sn | string | NULL | No | Device unique identifier |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/output/gain

{
    "status":"on",
    "sn":"506607D117000009",
    "gain-value":20,
    "attenuation-value":30,
    "line-value": 10
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 14) Set up output audio equalizer.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/output/equalizer

| Supported Models | Yealink RoomConnect |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| status | string | \[on,off\] | Yes | Equalizer status <br>on: enable <br>off: disable |
| mode | string | \[custom,bass-boost, `<br>` treble-boost,vocal-boost\] | Yes | Equalizer mode <br> custom Custom <br> bass-boost: Bass boost <br>treble-boost: Treble boost <br>vocal-boost: Vocal boost |
| frequency-range-list | int | \[-12~12\] | No | The custom mode frequency band list includes the following data: 20Hz, 63Hz, 125Hz, 250Hz, 500Hz, 1000Hz, 2000Hz, 4000Hz, 8000Hz, 20000Hz. |
| sn | string | NULL | No | Device unique identifier |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/output/equalizer

{
    "sn":"506607D117000009",
    "status": "on",
    "mode":"custom",
    "frequency-range-list":[12,5,-12,3,6,10,-5,2,0,3,9]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 15). Get mic mute status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/mic-mute

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, UVC40 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| status | string | \[on,off\] | Mute status<br>on: on<br>off: off |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/mute

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "status":"on"
    }
}

```

### 16). Get speaker mute status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/speaker-mute

| Supported Models | SmartVison 40 |
| --- | --- |

**Request Parameters**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Description |
| --- | --- | --- | --- |
| status | string | \[on,off\] | mute status: <br>on: Enabled <br>off: Disabled |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/speaker-mute

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"status": "off"
	}
}

```

### 17). Read Audio Fence switch status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/fence-enable

| Supported Models | SmartVision 40 |
| --- | --- |

**Request Parameters**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Description |
| --- | --- | --- | --- |
| status | string | \[on,off\] | Switch status of the audio wall: <br>on: Enabled <br>off: Disabled |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/fence-enable

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"status": "on"
	}
}

```

### 18). Get device audio channel information (deprecated, use 19 instead)

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/device-sound/channel-info

| Supported Models | CM50 |
| --- | --- |

**Request Parameters:**

Body: \*\* None

**Return Value:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| max\_channel\_count | int |  | Yes | Maximum number of channels |
| channel\_enable | bool \[\] |  | Yes | Channel Enable Status |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/device-sound/channel-info
{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
"max_channel_count": 8,
"channel_enable":
[\
    true,\
    true,\
    true,\
    true,\
    true,\
    true,\
    true,\
    true\
]
}

```

### 19). Get device audio channel information

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/lobe-enable

| Supported Models | CM50 |
| --- | --- |

**Request Parameters:**

Body: \*\* None

**Return Value:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| max\_channel\_count | int |  | Yes | Maximum number of channels |
| channel\_enable | bool \[\] |  | Yes | Channel Enable Status |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/lobe-enable
{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
"max_channel_count": 8,
"channel_enable":
[\
    true,\
    true,\
    true,\
    true,\
    true,\
    true,\
    true,\
    true\
]
}

```

### 20). Get the activation status of the device's audio source channel (deprecated, please use 21)

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/device-sound/active-status

| Supported Models | CM50 |
| --- | --- |

**Request Parameters:**

**Body:** NULL

**Return Value:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| active\_status | bool \[\] | NULL | Yes | Channel Activation Status |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/device-sound/active-status
{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
"active_status":
[\
    true,\
    true,\
    true,\
    true,\
    true,\
    true,\
    true,\
    true\
]
}

```

### 21). Get device audio channel activation status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/lobe-activation

| Supported Models | CM50 |
| --- | --- |

**Request Parameters:**

**Body:** NULL

**Return Value:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| active\_status | bool \[\] | NULL | Yes | Channel Activation Status |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/lobe-activation
{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
"active_status":
[\
    true,\
    true,\
    true,\
    true,\
    true,\
    true,\
    true,\
    true\
]
}

```

### 22). Get speaker position coordinates (deprecated; use 23 instead)

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/device-sound/talker-position

| Supported Models | CM50 |
| --- | --- |

**Request Parameters:**

**Body:** NULL

**Return Value:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| »doa | object | NULL | Yes | Device doa array information |
| »»dev\_type | string | NULL | Yes | Equipment type |
| »»dev\_sn | string | NULL | Yes | Device SN |
| »»snd\_src\_num | int | NULL | Yes | Device SN |
| »»snd\_src | object | NULL | Yes | Sound source data |
| »»»x | int | NULL | Yes | x-axis values |
| »»»y | int | NULL | Yes | y-axis value |
| »»»z | int | NULL | Yes | Z-axis value |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/device-sound/talker-position
{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "doa": [\
        {\
            "dev_type": "CM50",\
            "dev_sn": "sfsfsfsff",\
            "snd_src_num": 1,\
            "snd_src": [\
                {\
                    "x": 0,\
                    "y": 0,\
                    "z": 0\
                }\
            ]\
        }\
    ]
}

```

### 23). Get the speaker's location coordinates

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/sound-locate

| Supported Models | CM50 |
| --- | --- |

**Request Parameters:**

**Body:** NULL

**Return Value:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| doa | object | - | Yes | Device doa array information |

doa:

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| dev\_type | string | NULL | Yes | Equipment type |
| dev\_sn | string | NULL | Yes | Device SN |
| snd\_src\_num | int | NULL | Yes | Device SN |
| snd\_src | object | NULL | Yes | Sound source data |
| x | int | NULL | Yes | x-axis values |
| y | int | NULL | Yes | y-axis value |
| z | int | NULL | Yes | Z-axis value |

snd\_src:

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| x | int | NULL | Yes | x-axis values |
| y | int | NULL | Yes | y-axis value |
| z | int | NULL | Yes | Z-axis value |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/sound-locate
{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "doa": [\
        {\
            "dev_type": "CM50",\
            "dev_sn": "sfsfsfsff",\
            "snd_src_num": 1,\
            "snd_src": [\
                {\
                    "x": 0,\
                    "y": 0,\
                    "z": 0\
                }\
            ]\
        }\
    ]
}

```

### 24). Get audio parameter presets (deprecated, use 25 instead)

**Basic Information**

**Method:** GET

**Path:**/centralcontrol/audio/param/preset

| Supported Models | AP08, CM50, CM20 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Required | Constraint | Chinese Name | Description |
| --- | --- | --- | --- | --- | --- |
| »preset\_info | object | true | none | none | none |
| »»preset\_type | string | true | none | Preset Type | none |
| »»preset\_id | string | true | none | Preset ID | Preset Unique ID |
| »»preset\_name | string | true | none | Preset Name | When preset\_type is an official preset, name and id must be the same |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/param/preset
{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
"preset_info":{
	preset_type: "custom_preset",
	preset_id: "自定义1",
	preset_name: "OFQjdE",
}
}

```

### 25). Get audio parameter presets

**Basic Information**

**Method:** GET

**Path:**/centralcontrol/audio/preset

| Supported Models | AP08, CM50, CM20, AVBridge |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Description |
| --- | --- | --- | --- |
| preset\_info | preset\_info \[\] | - | none |

preset\_info:

| Name | Typology | Range of Values | Description |
| --- | --- | --- | --- |
| preset\_type | string | - | none |
| preset\_id | string | - | Preset Unique ID |
| preset\_name | string | - | When preset\_type is an official preset, name and id must be the same |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/preset
{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
"preset_info":{
	preset_type: "custom_preset",
	preset_id: "自定义1",
	preset_name: "OFQjdE",
}
}

```

### 26). Set audio parameter presets (deprecated, use 27 instead)

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/param/preset

| Supported Models | AP08, CM50, CM20 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| value | string |  | Yes | Preset Name |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/param/preset

{
    "value":"1"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 27). Set Audio Parameter Presets

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/preset

| Supported Models | AP08, CM50, CM20, AVBridge |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| value | string |  | Yes | Preset Name |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/preset

{
    "value":"1"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

### 28). Set gain (deprecated; use 29 instead)

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/gain

| Supported Models | AP08, CM50, CM20 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Required | Constraint | Chinese Name | Description |
| --- | --- | --- | --- | --- | --- |
| » arr\_gain\_info | object | true | none |  | none |
| »» name | string | true | none | Channel Name | Channel name displayed on the Designer UI |
| »» value | integer | true | \[-60, 20\] | Gain Value | none |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/gain

{
"arr_gain_info": [\
    {\
      "name": "USB-Input-1",\
      "value": 10\
    },\
    {\
      "name": "USB-Input-2",\
      "value": 10\
    }\
]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 29). Set channel gain

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/channel/gain

| Supported Models | AP08, CM50, CM20, AVBridge |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| arr\_gain\_info | arr\_gain\_info \[\] | - | Yes | none |
| »» name | string | true | none | Channel name displayed on the Designer UI |
| »» value | integer | true | \[-60, 20\] | none |

arr\_gain\_info:

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| name | string | - | Channel name displayed on the Designer UI |
| value | int | \[-60,20\] | Gain value |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/channel/gain

{
"arr_gain_info": [\
    {\
      "name": "USB-Input-1",\
      "value": 10\
    },\
    {\
      "name": "USB-Input-2",\
      "value": 10\
    }\
]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 30). Get Gain (deprecated, please use 31)

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/gain

| Supported Models | AP08, CM50, CM20 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Required | Constraint | Chinese Name | Description |
| --- | --- | --- | --- | --- | --- |
| » arr\_gain\_info | body | string | Yes | none |  |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/gain

{
"arr_gain_info": [\
    "USB-Input-1",\
    "USB-Input-2"\
]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
  		"arr_gain_info": [\
    	{\
      		"name": "USB-Input-1",\
      		"value": 10\
    	},\
    	{\
      		"name": "USB-Input-2",\
      		"value": 10\
    		}\
  		]
	}
}

```

### 31). Get channel gain

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/channel/gain

| Supported Models | AP08, CM50, CM20 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| arr\_gain\_info | string | Channel name on the designer | No | If the parameter is empty, the gain values for all channels will be returned by default. |

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| arr\_gain\_info | arr\_gain\_info \[\] | - |  |

arr\_gain\_info

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| name | string | - | Channel name to query |
| value | int | \[-60,20\] | The gain value for the corresponding channel |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/channel/gain

{
"arr_gain_info": [\
    "USB-Input-1",\
    "USB-Input-2"\
]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
  		"arr_gain_info": [\
    	{\
      		"name": "USB-Input-1",\
      		"value": 10\
    	},\
    	{\
      		"name": "USB-Input-2",\
      		"value": 10\
    		}\
  		]
	}
}

```

### 32). Set up external audio input noise reduction

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/audio/external-input/noise-reduction

| Supported Models | Yealink RoomConnect |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| level | int | \[0,1\] | Yes | Noise cancellation level <br>1: On <br>0: Off |
| sn | string | NULL | No | Device unique identifier |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/external-input/noise-reduction

{
"level": 0,
"sn":"506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 33). Set device channel mute status (deprecated, use 34 instead)

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/channel-mute

| Supported Models | AP08, CM50, CM20 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Required | Constraint | Chinese Name | Description |
| --- | --- | --- | --- | --- | --- |
| » channel\_mute | object | true | none |  | none |
| »» name | string | true | none | Channel Name | Channel name displayed on the Designer UI |
| »» status | string | true | \[off, on\] | mute status | none |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/channel-mute

{
	"channel_mute": [\
		{\
			"name": "Dante-Input-1",\
			"status": "on"\
		},\
		{\
			"name": "Dante-Input-2",\
			"status": "off"\
		},\
	]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 34). Set device channel mute status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/channel/mute

| Supported Models | AP08, CM50, CM20 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| channel\_mute | channel\_mute \[\] | - | true | none |

channel\_mute:

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| name | string | - | true | Channel name displayed on the Designer UI |
| status | string | \[on,off\] | true | none |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/audio/channel/mute

{
	"channel_mute": [\
		{\
			"name": "Dante-Input-1",\
			"status": "on"\
		},\
		{\
			"name": "Dante-Input-2",\
			"status": "off"\
		},\
	]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 35) Get device channel mute status (deprecated, use 36 instead)

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/channel-mute

| Supported Models | AP08, CM50, CM20 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Required | Constraint | Chinese Name | Description |
| --- | --- | --- | --- | --- | --- |
| » channel\_mute | body | string | Yes | none |  |
| »» name | string | true | none | Channel Name | Channel name displayed on the Designer UI |
| »» status | string | true | \[off, on\] | mute status | none |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/channel-mute

{
"channel_mute": [\
    "Dante-Input-1",\
    "Dante-Input-0"\
]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"channel_mute": [\
		{\
			"name": "Dante-Input-1",\
			"status": "on"\
		},\
		{\
			"name": "Dante-Input-0",\
			"status": "off"\
		},\
	]
}

```

### 36). Get the mute status of the device channel

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/audio/channel/mute

| Supported Models | AP08, CM50, CM20 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| channel\_mute | channel\_mute \[\] | - | No | An empty parameter means it will get the mute status of all input and output channels by default. |

channel\_mute:

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| name | string | - | none | Channel name displayed on the Designer UI |
| status | string | - | \[off, on\] | none |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/channel/mute

{
"channel_mute": [\
    "Dante-Input-1",\
    "Dante-Input-0"\
]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"channel_mute": [\
		{\
			"name": "Dante-Input-1",\
			"status": "on"\
		},\
		{\
			"name": "Dante-Input-0",\
			"status": "off"\
		},\
	]
}

```

### 37). Get Channel Volume

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/channel/volume

| Supported Models | AP08, AVBridge, CM20, CM50 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| arr\_gain\_info | string | - | Yes | Channel Name. To retrieve the volume of a channel, you must specify the channel name. If you want to get the volumes of all channels, you need to provide all channel names. <br> Interface is essentially the same underlying concept as channel gain; volume is simply a conversion of gain. |

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| arr\_gain\_info | arr\_gain\_info \[\] | - | - |

arr\_gain\_info:

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| name | string | - | Channel Name |
| value | int | \[0-100\] | Channel Volume |

**Note:**

- **Example of a request**

```lang-http

GET /centralcontrol/audio/channel/volume

{
"arr_gain_info": [\
    "Dante-Input-1",\
    "Dante-Input-0"\
]
}

```

- **Response example:**

```lang-

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"arr_gain_info": [\
		{\
			"name": "Dante-Input-1",\
			"value": "10"\
		},\
		{\
			"name": "Dante-Input-0",\
			"value": "50"\
		},\
	]
}

```

### 38). Set channel volume

Basic information:

**Method:** POST

**Path:** /centralcontrol/channel/volume

| Supported Models | AP08, AVBridge, CM20, CM50 |
| --- | --- |

**Request Parameters**

**Body:**

| Name | Typology | Compulsory | Range of Values | Parameter Description |
| --- | --- | --- | --- | --- |
| arr\_gain\_info | arr\_gain\_info \[\] | Yes | - | - |

arr\_gain\_info:

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| name | string | - | Channel Name |
| value | int | \[0-100\] | Channel Volume |

**Return Value:**

NULL

**Note**

- Example of a request




```lang-http

POST /centralcontrol/audio/channel/volume

{
    "arr_gain_info": [\
  	{\
  		"Dante-Input-1",\
  		"value":12\
  	},\
  	{\
  		"Dante-Input-0",\
  		"value":20\
  	}\
    ]
}

```

- Response Example




```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
      "status":200
}

```


## 3\. Camera control

### 1) Camera movement

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera/move

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, Yealink RoomConnect, UVC40, UVC85, UVC86, SmartVision 40, AVHub, SmartVision 80 <br>Note: <br>1\. For Yealink RoomConnect and AVHub, the sn parameter is required for this command. <br>2\. For MeetingBar A10/A40/A50, the sn parameter is optional. <br>3\. For MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, and MeetingEye 500/900, the sn parameter is optional if there is only one camera. If there are multiple cameras, you must specify the sn to control the correct camera. <br>4\. For UVC and SmartVision devices, there is no need to include the sn parameter. |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| direction | string | \[up,down<br>,left,right,stop\] | Yes | Camera movement direction <br>up: control camera direction up down: control camera direction down <br>left: control camera direction left right: control camera direction right <br>stop: control camera stop |
| sn | string | NULL | No | Camera Unique Identifier <br>Description <br>If the sn parameter is included in the command request, it means you are controlling the device with that sn. Otherwise, the first camera in the list will be controlled. |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera/move

{
    "direction": "up",
    "sn": "506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 2) Camera focal length

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera/zoom

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, Yealink RoomConnect, UVC40, UVC85, UVC86, SmartVision 40, AVHub, SmartVision 80 <br>Note: <br>1\. For Yealink RoomConnect and AVHub, the sn parameter is required for this command. <br>2\. For MeetingBar A10/A40/A50, the sn parameter is optional. <br>3\. For MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, and MeetingEye 500/900, the sn parameter is optional if there is only one camera. If there are multiple cameras, you must specify the sn to control the correct camera. <br>4\. For UVC and SmartVision devices, there is no need to include the sn parameter. |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| direction | string | \[in,out,stop\] | Yes | Camera focus direction <br>in: zoom in <br>out: zoom out <br>stop: control camera to stop changing |
| sn | string | NULL | No | Camera Unique Identifier <br>**Note: If the command is requested with the sn parameter, it means that the control is for the device with the specified sn, otherwise the control is for the first device in the camera list** |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera/zoom

{
    "direction": "in",
    "sn": "506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 3) Get the camera position

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/camera/position

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, Yealink RoomConnect, UVC40, UVC85, UVC86, SmartVision 40, AVHub, SmartVision 80 <br>Note: <br>1\. For Yealink RoomConnect and AVHub, the sn parameter is required for this command. <br>2\. For MeetingBar A10/A40/A50, the sn parameter is optional. <br>3\. For MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, and MeetingEye 500/900, the sn parameter is optional if there is only one camera. If there are multiple cameras, you must specify the sn to control the correct camera. <br>4\. For UVC and SmartVision devices, there is no need to include the sn parameter. |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| sn | string | NULL | No | Camera Unique Identifier <br>Description <br>If the sn parameter is included in the command request, the specified sn device will be retrieved. Otherwise, the first camera in the list will be retrieved. |

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| x | double | Reference range: \[0~3360\] <br>There are model differences, subject to actual acquisition | X-axis coordinate <br>Description <br>Limited by focal length value |
| y | double | Reference range: \[0~1890\] <br>There are model differences, subject to actual acquisition | Y-axis coordinate <br>Description <br>Limited by focal length value |
| z | double | Reference range: \[-1890~0\] <br>There are model differences, subject to actual acquisition | focal length |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/camera/position

{
    "sn": "506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "x":1050.5,
        "y":500,
        "z":-280
    }
}

```

### 4) Set camera position

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera/position

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, Yealink RoomConnect, UVC40, UVC85, UVC86, SmartVision 40, AVHub, SmartVision 80 <br>Note: <br>1\. For Yealink RoomConnect and AVHub, the sn parameter is required for this command. <br>2\. For MeetingBar A10/A40/A50, the sn parameter is optional. <br>3\. For MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, and MeetingEye 500/900, the sn parameter is optional if there is only one camera. If there are multiple cameras, you must specify the sn to control the correct camera. <br>4\. For UVC and SmartVision devices, there is no need to include the sn parameter. <br>5\. SmartVision 40 is a digital camera and its position can't be set arbitrarily. You must use a previously acquired camera position (for example, in preset scenarios). |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| sn | string | NULL | No | Camera Unique Identifier <br>Description <br>If the command request includes the sn parameter, it retrieves the specified device by sn; otherwise, it defaults to the first device in the camera list. |
| x | double | Reference range: \[0~3360\] <br>There are model differences, subject to actual acquisition | Yes | X-axis Coordinate <br>Description <br>The value is limited by focal length. The input must be of type double—even if it's an integer, you need to include a decimal point, or the command will fail. |
| y | double | Reference range: \[0~1890\] <br>There are model differences, subject to actual acquisition | Yes | Y-axis Coordinate <br>Description <br>The value is limited by focal length. The input must be of type double—even if it's an integer, you need to include a decimal point, or the command will fail. |
| z | double | Reference range: \[-1890~0\] <br>There are model differences, subject to actual acquisition | Yes | Focal Length <br>Description <br>The input must be of type double—even if it's an integer, you need to include a decimal point, or the command will fail. |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera/position

{
    "x":1050.0,
    "y":500.0,
    "z":-280.0,
    "sn": "506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 5) Get the list of cameras.

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/camera/list

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, Yealink RoomConnect, AVHub |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Parameter Description |
| --- | --- | --- |
| sn-list | string | Camera sn list |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/camera/list

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "sn-list":["803032E070000031"]
    }
}

```

### 6) Get detailed information of the camera

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/camera/detail

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, Yealink RoomConnect |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| sn | string | NULL | Yes | Camera unique identification |

**Return Value:**

| Name | Typology | Parameter Description |
| --- | --- | --- |
| ip | string | Camera ip |
| mac | string | Camera mac address |
| name | string | Camera name |
| firmware | string | Camera software version |
| hardware | string | Camera hardware version |
| spec | string | Camera specifications |
| model | string | Camera models |
| sn | string | Camera sn |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/camera/detail

{
    "sn": "506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "ip":"169.254.1.150",
        "mac":"80:5E:C0:60:00:62",
        "name":"Yealink UVC84 -1",
        "firmware":"262.302.5.5",
        "hardware":"262.0.96.0.0.0.0",
        "spec":"PTZ 12x Optical Zoom",
        "model":"UVC84",
        "sn":"506607D117000009"
    }
}

```

### 7) Set camera to AI mode.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera/ai-mode

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, Yealink RoomConnect, UVC40, UVC85, UVC86, SmartVision 40, AVHub, SmartVision 80 <br>**Note:**<br>**1. For Yealink RoomConnect, the sn parameter is mandatory for this command.**<br>**2. For MeetingBar A10/A40/A50, the sn parameter is optional. A10 only supports the following modes: "ptz, auto-frame, speaker-tracking, view-cropping, multi-screen, pip".**<br>**3. For MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, and MeetingEye 500/900, if there is only one camera, the sn parameter is optional; if there are multiple cameras, specify the camera with sn for correct operation.**<br>**4. UVC40 devices do not require the sn parameter; UVC40 only supports "ptz, auto-frame, speaker-tracking" modes.**<br>**5. MeetingEye 500, when connected to a UVC86 device, supports the following modes: "ptz, auto-frame, speaker-tracking, smart-gallery, presenter-tracking". When connected to a UVC84 device, only "ptz, auto-frame" modes are supported.**<br>**6. MeetingBoard 65/86 supports these modes: "ptz, auto-frame, speaker-tracking, multi-screen, pip, smart-gallery, presenter-tracking".**<br>**7. UVC86 devices do not require the sn parameter; UVC86 only supports "ptz, auto-frame, speaker-tracking, multi-screen, presenter-tracking" modes.**<br>**8. SmartVision 40 devices do not require the sn parameter; SmartVision 40 only supports "ptz, auto-frame, speaker-tracking, multi-screen, intellifocus, virtual-background, multi-stream-intelliframe" modes.**<br>**9. AVHub requires the sn parameter and only supports "ptz, auto-frame, speaker-tracking, multi-screen, presenter-tracking" modes.**<br>**10. UVC85 devices do not require the sn parameter; UVC86 only supports "ptz, auto-frame, speaker-tracking, multi-stream-intelliframe" modes.**<br>**11. SmartVision 80 devices do not require the sn parameter; SmartVision 80 only supports "ptz, auto-frame, speaker-tracking, multi-screen, presenter-tracking, intellifocus" modes.** |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| type | string | \[ptz,auto-frame,<br>speaker-tracking,<br>view-cropping,<br>multi-screen,smart-gallery,pip,multi-pip,presenter-tracking,intellifocus,virtual-background,multi-stream-intelliframe\] | Yes | Mode Types <br>ptz: Manual Control <br>auto-frame: auto Framing <br>speaker-tracking: speaker tracking <br>view-cropping: view cropping <br>multi-screen: multi-screen <br>smart-gallery: smart gallery/ multi-stream Mode <br>pip: Picture-in-Picture <br>multi-pip: multi-screen + Picture-in-Picture <br>presenter-tracking: presenter tracking <br>intellifocus: multi-speaker tracking <br>virtual-background: virtual background <br>multi-stream-Intelliframe: multi-stream Intelliframe |
| sn | string | NULL | No | Camera Unique Identifier <br>Note <br>If the command request includes the sn parameter, it refers to the specified device by serial number; otherwise, it will use the first device in the camera list. |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera/ai-mode

{
    "type": "ptz",
    "sn": "506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 8) Preset Position Application

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera/preset/recall

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, Yealink RoomConnect, AVHub, UVC85, UVC86, SmartVision 80 <br>**Note:**<br>**1\. For Yealink RoomConnect and AVHub, the sn parameter is mandatory when using this command**<br>**2\. For MeetingBar A10/A40/A50, the sn parameter is optional**<br>**3\. For MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, if there is only one camera, the sn parameter is optional; if there are multiple cameras, you need to use sn to specify the target camera for the correct operation**<br>**4\. UVC and SmartVision devices do not require the sn parameter** |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| id | int | \[1~99\] | Yes | Preset Position Identifier <br>The preset position values supported by AVHub and UVC86 devices range from \[1~9\] |
| sn | string | NULL | No | camera unique identification |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera/preset/recall

{
    "id": 1,
    "sn": "506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 9) Preset position setting

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera/preset

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, Yealink RoomConnect, AVHub, UVC85, UVC86, SmartVision 80 <br>**Note:**<br>**1\. For Yealink RoomConnect and AVHub, the sn parameter is mandatory when using this command**<br>**2\. For MeetingBar A10/A40/A50, the sn parameter is optional**<br>**3\. For MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, if there is only one camera, the sn parameter is optional; if there are multiple cameras, you need to use sn to specify the target camera for the correct operation**<br>**4\. UVC and SmartVision devices do not require the sn parameter** |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| id | int | \[1~99\] | Yes | Preset Position Identifier The preset position values supported by AVHub and UVC86 devices range from \[1~9\] |
| sn | string | NULL | No | camera unique identification |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera/preset

{
    "id": 1,
    "sn": "506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 10) Non-sleep mode switch

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera/keep-alive/switch

| Supported Models | Yealink RoomConnect <br>Note <br>The sn parameter is required for issuing this command to YRC. |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| status | string | \[on,off\] | Yes | Non-sleep mode status <br>on: enable <br>off: disable |
| sn | string | NULL | No | camera unique identification |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera/keep-alive/switch

{
    "status: "on",
    "sn": "506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 11) Video Fence switch

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera/video-fence/switch

| Supported Models | Yealink RoomConnect <br>Note <br>The sn parameter is required for issuing this command to YRC. |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| status | string | \[on,off\] | Yes | Video Fence status<br>on: open<br>off: closed |
| sn | string | NULL | No | camera unique identification |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera/video-fence/switch

{
    "status: "on",
    "sn": "506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 12) Set Multi-camera Tracking

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera/multi-camera-tracking-function

| Supported Models | AVHub,Yealink RoomConnect |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| type | string | \[close,multi-camera-intellifocus, <br>mic-camera-linkage,multi-stream-intelliframe,multi-camera-speaker-tracking\] | Yes | Mode Types <br>close: Off <br>multi-camera-intellifocus: multi-speaker tracking <br>mic-camera-linkage: mic-camera linkage <br>multi-stream-IntelliFrame: IntelliFrame <br>multi-camera-speaker-tracking: Single speaker tracking |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera/multi-camera-tracking-function

{
    "type": "multi-camera-intellifocus"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 13). Check camera usage status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/camera/status

| Supported Models | SmartVision 40 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| status | string | \[available,in\_used\] | Camera Usage Status: <br>available: Not in Use <br>in\_used: In Use |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/camera/status

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"status": "in_used"
	}
}

```

### 14). Identify and read the status of the Video Fence switch

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/camera/video-fence-enable

| Supported Models | SmartVision 40 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| status | string | \[on,off\] | Video Wall Status: <br>on: Enabled <br>off: Disabled |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/camera/video-fence-enable

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"value": "on"
	}
}

```

### 15). Read the number of People counted by AI People Count

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/camera/people-count

| Supported Models | SmartVision 40 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| quantity | int | \[-1, non-negative integer\] | -1:Closed status <br>Non-negative integer: number of people detected in open status |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/camera/people-count

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"quantity": 1
	}
}

```

### 16). Read camera parameters

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/camera/video-parameter

| Supported Models | SmartVision 40 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Parameter type | Parameter range | Description |
| --- | --- | --- | --- |
| Brightness | int | value \[0,100\] or -1 (nosupport) | SmartVision 40 supports returning value |
| Staturation | int | value \[0,100\] or \[0,10\] | SmartVision 40: \[0,100\] |
| Contrast | int | value \[0,100\] or -1 (nosupport) | SmartVision 40 supports returning value |
| WhiteBalance | int | value \[2800,6800\] or -1 (nosupport) | value is only returned when the manual white balance mode is enabled. |
| WhiteBalanceMode | string | \[AutoWhiteBalance,ManualWhiteBalance,OnePush, `<br>` Incandescent,Fluorescent,Daylight,CloudyDaylight,Shade\] | SmartVision 40 supports AutoWhiteBalance, ManualWhiteBalance, OnePush |
| sharp | int | \[0-31\] | SmartVision 40 range is \[0-31\] |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/camera/video-parameter

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
	"status": 200,
	"data": {
		"whiteBalance": 3610,
		"whiteBalanceMode": "ManualWhiteBalance",
		"contrast": 50,
		"brightness": 50,
		"saturation": 50,
		"sharpness": 19
	}
}

```

### 17). Set Active Camera

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera/active

| Supported Models | MeetingBoard 65/86/75-Pro, MeetingEye 500/900, Avhub |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| sn | string | NULL | No | camera unique identification |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera/active

{
    "sn": "506607D117000009"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

## Display control

### 1\. Get screen brightness.

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/screen/brightness

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| id | int | NULL | No | screen id (value taken from the device ID in the device list information) |

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| value | int | \[1~100\] | screen brightness value |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/screen/brightness

{
    "id":0
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "value":60
    }
}

```

### 2) Set screen brightness.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/screen/brightness

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| id | int | NULL | No | screen id (value taken from the device ID in the device list information) |
| value | int | \[1~100\] | Yes | screen brightness value |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/screen/brightness

{
    "id":0,
    "value":60
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 3). Get signal source list

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/input-source/list

| Supported Models | MeetingBoard 65/86,Meeting Display |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Note |
| --- | --- | --- | --- |
| input-source-list | source\_list \[\] | NULL | Input Source List |

**source\_list**

| Name | Typology | Note |
| --- | --- | --- |
| type | string | Screen Input Source Type <br>Default: Default Input <br>android: android System <br>windows: windows System <br>HdmiIn: hdmi Input <br>typec: Type-C Input <br>HdmiIn 1: hdmi 1 Input <br>HdmiIn 2: hdmi 2 Input <br>HdmiIn 3: hdmi 3 Input |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/input-source/list

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {

        "input-source-list": [\
            {\
                "type": "Default"\
            },\
            {\
                "type": "Android"\
            },\
            {\
                "type": "Windows"\
            },\
            {\
                "type": "HdmiIn"\
            },\
            {\
                "type": "TypeC"\
            }\
	]
    }
}

```

### 4) Get current signal source

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/input-source/current

| Supported Models | MeetingBoard 65/86,Meeting Display |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| type | string | Only supports retrieving the screen source list to obtain input source information. | Screen Input Source Type <br>Default: Default Input <br>android: android System <br>windows: windows System <br>HdmiIn: hdmi Input <br>typec: Type-C Input <br>HdmiIn 1: hdmi 1 Input <br>HdmiIn 2: hdmi 2 Input <br>HdmiIn 3: hdmi 3 Input |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/input-source/current

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "type": "Default"
    }
}

```

### 5). Set current signal source

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/input-source/current

| Supported Models | MeetingBoard 65/86,Meeting Display |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| type | int | Only supports retrieving the screen source list to obtain input source information. | Yes | Screen Input Source Type <br>Default: Default Input <br>android: android System <br>windows: windows System <br>HdmiIn: hdmi Input <br>typec: Type-C Input <br>HdmiIn 1: hdmi 1 Input <br>HdmiIn 2: hdmi 2 Input <br>HdmiIn 3: hdmi 3 Input |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/input-source/current

{
    "type": "Windows"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 6). Get the default input source on startup

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/input-source/default

| Supported Models | MeetingBoard 65/86,Meeting Display |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| type | int | Only supports retrieving the screen source list to obtain input source information. | Yes | Screen Input Source Type <br>Default: Default Input <br>android: android System <br>windows: windows System <br>HdmiIn: hdmi Input <br>typec: Type-C Input <br>HdmiIn 1: hdmi 1 Input <br>HdmiIn 2: hdmi 2 Input <br>HdmiIn 3: hdmi 3 Input |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/input-source/default

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "type": "Windows"
    }
}

```

### 7). Set the default input source on startup

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/input-source/default

| Supported Models | MeetingBoard 65/86,Meeting Display |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| type | int | Only supports retrieving the screen source list to obtain input source information. | Yes | Screen Input Source Type <br>Default: Default Input <br>android: android System <br>windows: windows System <br>HdmiIn: hdmi Input <br>typec: Type-C Input <br>HdmiIn 1: hdmi 1 Input <br>HdmiIn 2: hdmi 2 Input <br>HdmiIn 3: hdmi 3 Input |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/input-source/default

{
    "type": "windows"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 8). Get display parameters

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/screen/display-parameter

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay |
| --- | --- |

**Request Parameters:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| id | int | NULL | No | screen ID (value taken from the device identifier in the device list information), default is 0 |

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| contrast | int | \[1~100\] | Screen contrast ratio |
| saturation | int | \[1~100\] | Screen Saturation Value |
| color-temperature | int | \[0~3\] | Color Temperature <br>0: Warm <br>1: Default <br>2: Cool <br>3: Custom |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/screen/display-parameter

{
     "id": 0
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "contrast": 60，
        "saturation": 60，
        "color-temperature": 0
    }
}

```

### 9). Get color temperature information list

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/screen/color-temperature/info

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay |
| --- | --- |

**Request Parameters:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| id | int | NULL | No | screen ID (value taken from the device identifier in the device list information), default is 0 |

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Note |
| --- | --- | --- | --- |
| color-temperature-list | color\_temperature\_list \[\] | NULL | Color Temperature Information List |

color\_temperature\_list

| Name | Typology | Note |
| --- | --- | --- |
| value | int | Color Temperature Mode |
| name | string | Color Temperature Name |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/screen/color-temperature/info

{
    "id": 0
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "color-temperature-list": [\
            {\
                "value":0,\
                "name":"warm"\
            },\
            {\
                "value":1,\
                "name":"default"\
            },\
            {\
                "value":2,\
                "name":"cold"\
            },\
            {\
                "value":3,\
                "name":"custom"\
            }\
        ]
    }
}

```

### 10). Set display parameters

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/screen/display-parameter

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| id | int | NULL | screen ID (value taken from the device identifier in the device list information), default is 0 |
| contrast | int | \[1~100\] | Screen contrast ratio |
| saturation | int | \[1~100\] | Screen Saturation Value |
| color-temperature | int | \[0~3\] | Color Temperature <br>0: Warm <br>1: Default <br>2: Cool <br>3: Custom |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/screen/display-parameter

{
    "id":0,
    "contrast":68,
    "saturation":65,
    "color-temperature":3
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 11). Reset display parameters

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/screen/reset-display-parameter

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| id | int | NULL | screen ID (value taken from the device identifier in the device list information), default is 0 |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/screen/reset-display-parameter

{
    "id":0
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 12). Set custom color temperature

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/screen/color-temperature/custom

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay <br>Note: <br>The color temperature settings only apply when the mode is set to 3 (custom). |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| id | int | NULL | No | screen ID (value taken from the device identifier in the device list information), default is 0 |
| red | int | \[0~255\] | Yes | Red temperature value |
| green | int | \[0~255\] | Yes | Green temperature value |
| blue | int | \[0~255\] | Yes | Blue Color Temperature |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/screen/color-temperature/custom

{
    "id":0,
    "red":128,
    "green":116,
    "blue":131
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

## 5\. Multi-mode control

### 1) Get the list of conference platforms

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/meeting-platform/mode-list

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 <br>Notes <br>1\. The available meeting platforms displayed are based on which are installed/present on the device. |
| --- | --- |
| \-\-\------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| mode-list | string | Reference range: \[ume,yms,zoom,general <br>,tencent,feishu,byod\] | List of meeting platforms for devices: |

ume: UME meeting

yms: YMS meeting

zoom: Zoom meeting

general: Yealink meeting

tencent: Tencent meeting

feishu: Feishu meeting

byod: BYOD mode

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/meeting-platform/mode-list

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "mode-list":["ume","yms","zoom"]
    }
}

```

### 2) Set up the conference platform.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/meeting-platform

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| type | string | Reference range: \[ume,yms,zoom, <br>general,tencent, <br>feishu,byod\] | Yes | Device installed conference platform |

ume: ume meeting

yms: yms meeting

zoom: zoom meeting

general: Yealink meeting

tencent: Tencent meeting

feishu: Feishu meeting

byod: BYOD mode

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/meeting-platform

{
    "type": "ume"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 3) Get current platform.

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/meeting-platform/current-mode

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| name | string | NULL | Current platform name |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/meeting-platform/current-mode

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "name":"zoom"
    }
}

```

## 6\. Wireless Control

### 1) Enable Bluetooth.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/bluetooth

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| status | string | \[on,off\] | Yes | Bluetooth status <br>off: off <br>on: on |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/bluetooth

{
    "status": "on"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

## 7\. Camera layout control

### 1) Set camera layout status

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera-layout/switch

| Supported Models | Yealink RoomConnect |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| status | string | \[on,off\] | Yes | Camera layout status <br>on: enabled <br>off: disabled |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera-layout/switch

{
    "status": "on"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 2) Set camera layout type

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera-layout/type

| Supported Models | Yealink RoomConnect, MeetingEye 500 <br>Instructions <br>1\. The allowed values for the type parameter of the MeetingEye 500 model are: fullscreen, divide, 1xN. <br>2\. The supported values for the type parameter in Yealink RoomConnect are: fullscreen, div2~div9, 1x1~1x8, pip. <br>When setting fullscreen mode, you need to use the camera layout position setting feature to specify the camera at position 0 in order to apply fullscreen mode. <br>3\. Only Yealink RoomConnect uses the small-screen-position, small-screen-size, main-screen-type, and second-screen-type parameters. These four parameters are only effective when using the picture-in-picture layout. <br>4\. Only Yealink RoomConnect supports the sn parameter. <br>5\. Only the MeetingEye 500 model supports the focus-camera parameter. |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| type | string | \[fullscreen,<br>div2div9,1x11x8,1xN,divide,pip\] | Yes | Layout type<br> fullscreen: single full-screen layout<br> div2~div9: two-split~nine-split layout <br>divide: equal split layout<br>1xN：1+N layout <br>1x1~1x8: 1+1~1+8 layout<br>pip：pip layout |
| sn | string | NULL | No | The sub-camera sn parameter serves as a unique identifier (only Yealink RoomConnect) |
| focus-camera | string | NULL | No | The unique identifier of the camera in the layout for the large image display.(only VCS device) |
| pip-param | object | NULL | No | Set of parameters related to PiP |
| >>small-screen-position | string | \[top-left,bottom-left,top-right,bottom-right\] | No | Small screen position (supported only by YRC) <br>top-left: top left <br>bottom-left: bottom left <br>top-right: top right <br>bottom-right: bottom right <br>Note <br>These settings are only effective for picture-in-picture layout. |
| >>small-screen-size | string | \[one-fourth,one-ninth\] | No | Small screen size (supported only by YRC) <br>one-fourth: one fourth <br>one-ninth: one ninth <br>Note <br>These settings are only effective for picture-in-picture layout. |
| >>main-screen-type | string | \[panorama,close-up\] | No | Main camera screen type (supported only by YRC) <br>panorama: panoramic view <br>close-up: close-up view <br>Note <br>These settings are only effective for picture-in-picture layout. |
| >>second-screen-type | string | \[panorama,auto-frame\] | No | Secondary camera screen type (supported only by YRC) <br>panorama: panoramic view <br>auto-frame: auto-framing <br>Note <br>These settings are only effective for picture-in-picture layout. |

**Return Value:**

NULL

**Note**

- **Example of a request (YRC)**

```lang-http

POST /centralcontrol/camera-layout/type

{
    "type": "fullscreen",
    "sn":"8703018090000132",
    "pip-param":
    {
        "small-screen-position":"top-left",
        "small-screen-size":"one-fourth",
        "main-screen-type":"panorama",
        "second-screen-type":"auto-frame"
    }
}

```

- **Example of a request (VCS)**

```lang-http

POST /centralcontrol/camera-layout/type

{
    "type": "fullscreen",
    "focus-camera": "8703018090000132"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 3) Set up camera layout and camera position.(MVC)

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera-layout/position

| Supported Models | AVhub |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| position-list | object | NULL | Yes（AVhub） | Getting a list of cameras |
| >> | sn |  | Yes（AVhub） | Camera unique identification |
| >> | left | \[0~1920\] | Yes（AVhub） | Left coordinate of the camera layout screen position. |
| >> | top | \[0~1080\] | Yes（AVhub） | Camera layout screen display position left coordinate |
| >> | width | \[0~1920\] | Yes（AVhub） | Width of the camera layout screen display. |
| >> | height | \[0~1080\] | Yes（AVhub） | Height of the camera layout screen display. |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-

POST /centralcontrol/camera-layout/position

{
    "position-list":[\
         {\
             "sn":"806009E070000512",\
             "left":0,\
             "top":134,\
             "width":1440,\
             "height":810\
         },\
         {\
             "sn":"806007D120000442",\
             "left":1440,\
             "top":134,\
             "width":480,\
             "height":270\
         }\
     ]
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 4） Setting up camera layout and camera position（YRC)

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/camera-layout/position

| Supported Models | Yealink RoomConnect <br>Note: <br>When setting fullscreen mode, you need to use the camera layout position setting feature to specify the camera at position 0 in order to apply fullscreen mode |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| sn | string | NULL | Yes | Camera unique identification |
| position | int | \[0~8\] | Yes | Location identifier |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/camera-layout/position

{
    "sn":"8703018090000132",
    "position": 4
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

Layout positions follow left-to-right order, with equal divisions based on the maximum quantity of 1+N as a reference:

Equal parts:

![](https://support.yealink.com/en/portal/knowledge/resource/%E7%AD%89%E5%88%86.png)

1+N：

![](https://support.yealink.com/en/portal/knowledge/resource/1+N.png)

### 5) Obtain camera layout type

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/camera-layout/type

| Supported Models | MeetingEye 500 <br>Instructions <br>1\. The allowed values for the type parameter of the MeetingEye 500 model are: fullscreen, divide, 1xN. |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| type | string | \[fullscreen,1xN,divide\] | Layout type<br> fullscreen: single full-screen layout<br> divide: equal split layout <br>1xN: 1+ layout |
| focus-camera | string | NULL | The unique identifier of the camera in the layout for the large image display. |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/camera-layout/type

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "type":"fullscreen",
        "focus-camera":"8703018090000132"
    }
}

```

## 8\. App control

### 1) Bring the App to the foretend.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/app/start

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| id | string | Retrieve the ID value from the app information list by referring to the basic information document interface. | Yes | App package name |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/app/start

{
    "id": "com.yealink.byod"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

参数错误：
{
    "status":400
}

```

### 2). Get the front-end app

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/app/foreground

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Note |
| --- | --- | --- |
| id | string | App package name |
| name | string | App name |
| version | string | App version number |

- **Example of a request**

```lang-http

GET /centralcontrol/app/foreground

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "status":200,
    "data":
    {
        "id":"com.yealink.byod",
        "name":"BYOD",
        "version":"1.0"
    }
}

```

## 9\. API Permissions

### 1). Get physical interface list

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/phiysical-interface/list

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| type | string | NULL | Yes | Interface Type <br>ALL: All Types <br>AUDIO: Audio Interfaces <br>VIDEO: Video Interfaces <br>OTHERS: Other Interfaces |

**Return Value:**

| Name | Typology | Range of Values | Note |
| --- | --- | --- | --- |
| interface-list | interface\_list \[\] | NULL | List of device information |

interface\_list

| Name | Typology | Note |
| --- | --- | --- |
| id | int | Interface ID |
| name | string | Interface name |
| type | string | Interface Type <br>AUDIO: AUDIO Interfaces <br>VIDEO: VIDEO Interfaces <br>OTHERS: Other Interfaces |
| connected | bool | Interface Connection Status <br>true: Connected <br>false: Not Connected |
| status | string | Interface status <br>on: enabled <br>off: disabled |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/phiysical-interface/list

{
    "type":"ALL"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "interface-list": [\
            {\
                "id":0,\
                "name":"VCH",\
                "type":"VIDEO",\
                "connceted":true,\
                "status":"on"\
            },\
            {\
                "id":0,\
                "name":"LINE_IN",\
                "type":"AUDIO",\
                "connceted":false,\
                "status":"on"\
            }\
        ]
    }
}

```

### 2). Set the physical interface switch

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/phiysical-interface/enable

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| name | string | NULL | Yes | Interface name |
| id | int | NULL | Yes | Get the actual interface ID |
| status | string | \[on,off\] | Yes | Interface status on: enabled off: disabled |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

""POST /centralcontrol/phiysical-interface/enable

{
    "name": "VCH",
    "id": 0,
    "status": "on"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

## 10\. Other

### 1) Remote control button operation

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/button

| Supported Models | MeetingEye 500, UVC40 <br>Note <br>1\. UVC40 only supports "volume+" and "volume-". |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| key | string | \[power,F1,F2,F3,volume+,volume-,zoom+,zoom-,up,<br> down,right,left,select,mute,back,call,delete,hangup,0~9\*#\] | Yes | Remote control button name |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/button

{
    "key": "left"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 2) Set the status of the meeting room to be dividable.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/splitroom/status

| Supported Models | Yealink RoomConnect |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| sn | string | NULL | Yes | Requestor identification |
| value | int | \[0~3\] | Yes | Splittable Meeting Room Status <br>0: Splittable meeting room feature disabled <br>Note <br>If Avhub devices are already connected and the splittable meeting room feature is enabled, please perform room split/merge operations in YRC for specific rooms. Do not directly disable the splittable meeting room feature. If you want to disable the divisible meeting room feature, you'll need to disconnect the cables connected to the AVHub CodeC port. <br>1: Standalone mode in splittable meeting room <br>2: Merged room in splittable meeting room <br>3: Main control room in splittable meeting room |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/splitroom/status

{
    "sn":"8703018090000132",
    "value": 0
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

### 3) Set up divisible meeting rooms

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/division-room/config

| Supported Models | ap08 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| room\_info | room\_info \[\] | NULL | Yes | Divide the room into several separate rooms. |

**room\_info**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| room\_id | int \[\] | Element range: \[1,3\] | Yes | The IDs contained in the room must be unique. |

**Return Value:**

NULL

**Note:**

- **Example of a request**




```lang-http

POST /centralcontrol/division-room/config
{
  	"room_info":[\
  		{\
  			"room_id":[\
  				1,\
  				2\
  			]\
  		},\
  		{\
  			"room_id": [\
  				3\
  			]\
  		}\
  	]
}

```


Note: Divide the space into 2 rooms. The first room includes two minimum splittable rooms (1 and 2), and the second room includes one minimum splittable room (3).

- **Response Example**




```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
      "status":200
}

```


### **4). Get Split Meeting Room Status**

Basic Information

**Method:** GET

**Path:** /centralcontrol/division-room/config

| Supported Models | ap08 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| room\_info | room\_info \[\] | NULL | Yes | Divide the room into several separate rooms. |

**room\_info**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| room\_id | int \[\] | Element range: \[1,3\] | Yes | The IDs contained in the room must be unique. |

**Note:**

- **Example of a request**

```lang-http

GET /centralcontrol/division-room/config
{
}

```

- **Response Example**




```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
      "status":200,
      "data":
      {
          "room_info":[\
  		{\
  			"room_id":[\
  				1\
  			]\
  		},\
  		{\
  			"room_id":[\
  				2\
  			]\
  		},\
  		{\
  			"room_id":[\
  				3\
  			]\
  		}\
  	]
      }
}

```


# Health services

Monitor the health status of devices and provide an alert mechanism.

## 1\. Setting Log Sever Address

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/system/log-server

| Supported Models | UVC40, MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 <br>**Attention:**<br>**1\. You can omit other parameters when disabling the log server; otherwise, parameters are required.**<br>**2\. Recommended parameters: facility (16), level (6), transport-type (0)** |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| enable | int | \[0,1\] | Yes | Log server function switch <br>1: Enable <br>0: Disable |
| facility | int | \[0-23\] | Yes | Log storage device <br>0: kernel messages<br>1: User message <br>2: Mail system<br>3: System daemon <br>4: security/authorization messages<br>5: Internal system generated information <br>6: printing subsystem<br>7: network messaging subsystem<br>8: UUCP subsystem<br> Clock daemon <br>10: security/authorization messages<br>11: FTP daemon<br>12: NTP subsystem<br>13: Log audit <br>14: log warning15: Clock daemon <br>16: For local use 0<br>17: For local use 1<br>18: For local use 2<br>19: For local use 3<br>20: For local use 4<br>21: For local use 5<br>22: For local use 6<br>23: For local use 7 |
| level | int | \[1-7\] | Yes | Log level |
| transport-type | int | \[0,1,2\] | Yes | Transmission type <br>0: UDP<br>1: TCP<br>2: TLS |
| port | int | NULL | Yes | ports |
| server | string | NULL | Yes | The server address for log synchronization. |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/system/log-server

{
    "enable": 1,
    "server":"syslog.test.yealink.com",
    "port":514,
    "facility":1,
    "level":6,
    "transport-type":0
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

## 2\. Access system logs

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/diagnostics/log

| Supported Models | Yealink RoomConnect, MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

NULL

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| File stream | file | NULL | (The file can only be obtained by actively triggering the download) |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/diagnostics/log

{
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

file

```

## 3\. Network diagnosis

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/diagnostics/network

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| action | string | ping<br>traceroute | Yes | ping command: ping -c num ip<br>traceroute command: traceroute -m num -I ip |
| num | int | 1~30 | Yes | Number of ping attempts; or maximum number of hops for traceroute tracking |
| ip | string | NULL | Yes | Target IP/domain |

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| result | string | NULL | Executing statement returns content |

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/diagnostics/network

{
    "action": "ping",
    "num": 5,
    "ip": "10.50.150.1",
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "result": "PING 10.50.150.146 (10.50.150.146) 56(84) bytes of data.
           64 bytes from 10.50.150.146: icmp_seq=1 ttl=64 time=0.164 ms
           64 bytes from 10.50.150.146: icmp_seq=2 ttl=64 time=0.087 ms
           64 bytes from 10.50.150.146: icmp_seq=3 ttl=64 time=0.091 ms

           --- 10.50.150.146 ping statistics ---
           3 packets transmitted, 3 received, 0% packet loss, time 2051ms
           rtt min/avg/max/mdev = 0.087/0.114/0.164/0.035 ms"
    }
}

参数错误：
{
    "status":400
}

```

## 4\. Start or stop packet capture file upload.

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/diagnostics/packetcapture

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 <br>Note: \` <br>1\. You can retrieve packet capture data using get only when the packet capture cache reaches 5MB. After using get, the data will be cleared. You'll need to wait until it reaches 5MB again before you can retrieve new data. 2. If real-time data retrieval is not required, it is recommended to stop capturing the current collected packet data directly. 3. Capturing 5MB of packets is necessary because if the cache is too small, asynchronous packet capturing may result in incomplete packet data. |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| filter | string | Filtering by IP, port, protocol, etc. is possible. | No | Filter condition |
| interface | string | wan: currently active network interface | Yes (start capturing packets) | Interface name |
| filter-type | int | 0: Custom |  |  |

1: SIP or H245 or H225

2: RTP

3: Not RTP\| Yes (start capturing packets)\| Filter type; the filter takes effect if the value is 0.

\| operation\| string\| start: start capturing packets

stop: stop capturing packets

get: retrieve captured packet files\| Yes\| Packet capturing action; when stopping or getting, there is no need to carry the above three parameters.

Note:

1\. It is recommended to send the get command every 5 minutes after starting the packet capturing to obtain the packet capture file. The packet capture files need to be concatenated by yourself (you may get empty files because the device side has not yet generated the file at this time); if more than 10 minutes have passed without getting, it is considered to abandon the most recent packet capture file and stop capturing.

2\. When stopping, the device side responds that the most recent file has not been uploaded.

**Return Value:**

File:

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| Packet capture file | file | NULL | Respond to get/stop operations; upload the packet capture file itself without a file type extension. |

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/diagnostics/packetcapture

自定义过滤抓包开始：
{
    "filter": "tcp",
    "interface": "wan",
    "filter-type": 0,
    "operation": "start"
}

指定过滤条件抓包开始：
{
    "filter": "",
    "interface": "wan",
    "filter-type": 2,
    "operation": "start"
}

获取抓包文件：
{
    "operation": "get"
}

停止抓包：
{
    "operation": "stop"
}

```

- **Response Example**

When the start operation is successful, the response for capturing packets begins:

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
}

```

When the get/stop operation is performed, the device end has already generated the file and sent it.

```lang-http

HTTP/1.1 200 OK
Content-Type: application/octet-stream

file

```

## 5\. Alarm

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/diagnostics/alert

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| severity | string | critical: severe |  |  |

major: primary

minor: minor

all: all\| No\| If severity is not specified, it defaults to critical.

\| from-time\| long\| Unit: seconds;

the earliest time point is 7 days ago.\| No\| 1. Respond with a list of alarm events between the from-time and the time the command is sent.

2\. If from-time is not specified, default to responding with a list of alarm events from the last ten minutes.

3\. The timestamp refers to the number of seconds elapsed between a certain moment and "00:00:00" UTC on January 1, 1970.

**Return Value:**

| Name | Typology | Range of Values | Note |
| --- | --- | --- | --- |
| alert-list | alert\_list \[\] | NULL | List of device information |

**alert\_list**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| name | string | Disk slave disconnect: Accessory disconnected |  |

Update Configuration failure: Configuration file update failed

Update Firmware failure: Firmware upgrade failed

Wireless microphone low battery: Low battery for wireless microphone\| Event Name

\| severity\| string\| critical: severe

major: primary

minor: minor\| NULL

\| action-time\| long\| Unit: seconds\| Alarm timestamp

\| mac\| string\| NULL\| device mac address

\| ip\| string\| NULL\| Device IP address

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/diagnostics/alert

{
    "severity": "major",
    "from-time": 1701138336
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "status":200,
    "data":
    {
        "alert-list": [\
           {\
            "name": "Update Configuration failure",\
            "severity": "major",\
            "action-time": 1701138336,\
            "mac": "00:00:00:00:00:00",\
            "ip": "10.50.15.1"\
           },\
           {\
            "name": "Dsk slave disconnect",\
            "severity": "critical",\
            "action-time": 1701138336,\
            "mac": "00:00:00:00:00:00",\
            "ip": "10.50.15.1"\
           }\
        ]
    }
}

```

# Update service

Update the firmware of the device itself and its peripheral accessories.

## 1\. Device upgrade

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/upgrade/firmware/start

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, Yealink RoomConnect <br>Note: <br>1\. Only Yealink RoomConnect supports passing the sn and device parameters. You must provide at least one of these parameters: sn or device. <br>2\. In theory, you should only fill in sn or device, not both. If both are provided, only the sn parameter will take effect. |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| sn | string | NULL | No | Device serial number for upgrade. |
| device | string | NULL | No | Upgraded device type |
| url | string | NULL | Yes | Firmware upgrade address (URL address or local path) |
| time | int | -1~23 | No | Upgrade time <br> -1：Upgrade immediatly 0~23: Upgrade time |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/upgrade/firmware/start

{
    "sn":"803032E070000031",
    "url": "https://packet-nexus.yealink.com/service/rest/repository/browse/repo-packet-release/AllRom/MeetingEye500-rom/280.321.0.17/MeetingEye500-280.321.0.17.rom",
    "time":-1
}

```

```lang-http

POST /centralcontrol/upgrade/firmware/start

{
    "device":"uvc86",
    "url": "https://packet-nexus.yealink.com/service/rest/repository/browse/repo-packet-release/AllRom/MeetingEye500-rom/280.321.0.17/MeetingEye500-280.321.0.17.rom",
    "time":-1
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

## 2\. Device upgrade cancellation

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/upgrade/firmware/cancel

| Supported Models | Yealink RoomConnect <br>Note: 1. In theory, you should only fill in sn or device, not both. If both are provided, only the sn parameter will take effect. <br>2. If neither sn nor device is provided, all upgrades will be canceled. |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| sn | string | NULL | No | Device serial number that stopped upgrading |
| device | string | NULL | No | Upgraded device type |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/upgrade/firmware/cancel

{
    "sn":"803032E070000031"
}

```

```lang-http

POST /centralcontrol/upgrade/firmware/cancel

{
    "deivce":"uvc84"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200
}

```

## 3\. Obtain upgrade status

**Basic Information**

**Method:** GET

**Path:** /centralcontrol/upgrade/firmware/status

| Supported Models | Yealink RoomConnect |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| sn | string | NULL | Yes | Get the serial number of the device in upgrade status. |

**Return Value:**

| Name | Typology | Range of Values | Parameter Description |
| --- | --- | --- | --- |
| status | string | \[downloading,upgrading,success,fail\] | Download status: <br>downloading：downloading<br>upgrading: upgrading <br> success：success<br>fail: failed |
| progress | int | 0~100 | Upgrade progress, return a normal value if upgrading, otherwise return -1. |

**Note**

- **Example of a request**

```lang-http

GET /centralcontrol/upgrade/firmware/status

{
    "sn":"803032E070000031"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status":200,
    "data":
    {
        "status":"upgrading",
        "progress": 48
    }
}

```

# Configuration Service

## 1\. Configuration File Update

This operation lets you update settings for a range of toggles such as Wi-Fi, wireless hotspot, and Bluetooth (Note: Configuration file updates are not allowed during a call.)

**Basic Information**

**Method:** POST

**Path:** /centralcontrol/config/update

| Supported Models | MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50/A50 |
| --- | --- |

**Request Parameters:**

**Body:**

| Name | Typology | Range of Values | Compulsory | Parameter Description |
| --- | --- | --- | --- | --- |
| url | string | If empty, trigger autop default update | Yes | Configuration file address (autop update URL) |

**Return Value:**

NULL

**Note**

- **Example of a request**

```lang-http

POST /centralcontrol/config/update

{
    "url": "http://1.1.1.1/test.cfg"
}

```

- **Response Example**

```lang-http

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
    "status": 200
}

设备繁忙：
{
    "status": 400
}

```

Did this article solve your problem？

YES

NO

Search Tips

Cancel  Submit

Select the content with the mouse, and quickly feedback the problem

Select the doubtful content in the document to quickly feedback the problem, and we will follow up in time.

Example：

![](https://support.yealink.com/static/img/pic_feedback_guide_en.ea0ef53b.png)

Don't prompt againOK, I know

AI Assistant  \[Beta\]

![](https://support.yealink.com/support-service/attachment/downLoadFile?fileCode=30d85dcff92b4046)

Did this article solve your problem？

YES

NO

Feedback

Cancel  OK

Copyright © 2025 Yealink Inc. All rights reserved.

Privacy PolicyCookies Management

License Manager

Search Tips

Search Tips

![](https://support.yealink.com/static/img/support-upgrade-pop.png)

Experience Now