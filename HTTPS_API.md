# HTTPS API

## Central Control HttpApi Authentication Instructions

Due to the addition of the authentication mechanism, you need to perform the authentication process first, after the success of the token, the subsequent interface calls attached to the token verification.

:::NOTE The token is valid for 2 hours. :::

Request authentication as a POST with the password parameter (value is the admin password of the requested device):

```
POST /centralcontrol/authentication
{
    "password": "0000"
}
```

If requested and verified successfully, a string of tokens will be obtained:

```
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

### 1. Token Usage Method

The obtained token field is filled in the "Authorization" field in the https request header as the authentication check field value:

```
User-Agent: PostmanRuntime-ApipostRuntime/1.1.0
Cache-Control: no-cache
content-type: application/json
Accept: */*
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Authorization: Bearer 6118C27AAC154D79BFC955A4F63E3C42
Content-Length: 27
```

All subsequent requests need to bring the token in order to verify the success and perform the corresponding functions. If the access is app-related interfaces need to bring the app name parameter.

### 2. Business Authentication Failed

**Supported Models**: MeetingBoard 65/86, MeetingBoard 65/75/86 Pro, MeetingEye 500/900, MeetingBar A10/A40, Yealink RoomConnect, UVC40

When a business request is made and authentication fails, the following response example will be returned:

**Response Example**:
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "status":500
}
```

At this point, the client can initiate a reauthentication request.

### 3. Handling Exceeding Limits

**Supported Models**: MeetingBoard 65/86, MeetingBoard 65/75/86 Pro, MeetingEye 500/900, MeetingBar A10/A40

If the concurrent number of business requests exceeds ten, the server's concurrency limit mechanism will be triggered, and the following response instance will be returned.

**Response Example**:
```
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

## Central Control HttpApi Error Code Description

If the request fails, the status field will return "404" (for authentication-related issues, please refer to "Access Control Service" and "Authentication Description"). In this case, the API response will include the error-code and error-msg fields, which indicate the error code and message. You can use this information to identify the cause of the error. Specific definitions are as follows:

```
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

### Error code/Error message description:

| Error code | Error Message | Explanation |
|------------|---------------|-------------|
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
| 10011 | task-process-no-exist | The task process no longer exists and needs to be restarted. Example: If packet capture hasn't started or ends due to timeout, performing a get operation afterward. |

## Admission Service

### Authentication and authorisation

#### 1. Authentication

**Basic Information**:
- **Method**: POST
- **Path**: `/centralcontrol/authentication`

**Supported Models**: MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingEye 500/900, MeetingBar A10/A40, Yealink RoomConnect, UVC40

**Request Parameters**:

Body:

| Name | Typology | Range of Values | Compulsory | Parameter Description |
|------|----------|-----------------|------------|----------------------|
| password | string | NULL | Yes | authentication code |

**Return Value**:

| Name | Typology | Range of Values | Note |
|------|----------|-----------------|------|
| token | string | NULL | Successful authentication of the token |

**Example of a request**:
```
POST /centralcontrol/authentication
{
    "password": "0000"
}
```

**Response Example**:
```
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

## Basic Information

Basic information query/retrieval (This document includes system information, network information, device list. For other system status, mute status, volume level, camera information, screen brightness, conference platform list, please refer to the Control Service document).

### 1. Access to System Information

**Basic Information**:
- **Method**: GET
- **Path**: `/centralcontrol/system/version`

**Supported Models**: MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, UVC40

**Request Parameters**:

Body: NULL

**Return Value**:

| Name | Typology | Note |
|------|----------|------|
| model | string | Equipment type |
| firmware | string | Firmware version |
| hardware | string | hardware version |
| serialnumber | string | device sn number |
| macaddress | string | device mac address |
| cc-version | string | Centre control version |

**Example of a request**:
```
GET /centralcontrol/system/version
{
}
```

**Response Example**:
```
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

### 2. Access to Network Information

**Basic Information**:
- **Method**: GET
- **Path**: `/centralcontrol/network/info`

**Supported Models**: UVC40, MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, SmartVision 40

**Request Parameters**:

Body: NULL

**Return Value**:

| Name | Typology | Range of Values | Note |
|------|----------|-----------------|------|
| network-list | network_info [] | NULL | network information list |

**network_info**:

| Name | Typology | Range of Values | Note |
|------|----------|-----------------|------|
| type | int | [0,1] | Acquire network method<br>0: Dynamic acquisition<br>1: Static setting |
| port-type | int | [0,1,2] | Network Port Type<br>0: Wired Port 1<br>1: Wired Port 2<br>2: Wireless Port<br>3: AP Port |
| mode | int | [0,1,2] | IP type<br>0: IPv4<br>1: IPv6<br>2: IPv4 and IPv6 |
| ip | string | NULL | IP address |
| mask | string | NULL | subnet mask |
| gateway | string | NULL | Gateway |
| primary-dns | string | NULL | Preferred DNS server name |
| second-dns | string | NULL | Secondary DNS server name. |

**Example of a request**:
```
GET /centralcontrol/network/info
{
}
```

**Response Example**:
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "status":200,
    "data": {
        "network-list": [
            {
                "type": 0,
                "port-type": 2,
                "mode": 0,
                "ip": "",
                "mask": "",
                "gateway": "",
                "primary-dns": "",
                "second-dns": ""
            },
            {
                "type": 0,
                "port-type": 0,
                "mode": 0,
                "ip": "10.50.149.143",
                "mask": "255.255.255.0",
                "gateway": "10.50.149.254",
                "primary-dns": "10.100.1.10",
                "second-dns": "192.168.1.22"
            }
        ]
    }
}
```

### 3. Get Device List

**Basic Information**:
- **Method**: GET
- **Path**: `/centralcontrol/system/devices`

**Supported Models**: Yealink RoomConnect, MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, SmartVision 40

**Request Parameters**:

Body: NULL

**Return Value**:

| Name | Typology | Range of Values | Note |
|------|----------|-----------------|------|
| device-list | device_info [] | NULL | List of device information |

**device_info**:

| Name | Typology | Note |
|------|----------|------|
| model | string | Equipment type |
| firmware | string | Firmware version |
| hardware | string | hardware version |
| serialnumber | string | device sn number |
| macaddress | string | device mac address |
| id | int | Device ID (used to set or get screen parameters) |

**Example of a request**:
```
GET /centralcontrol/system/devices
{
}
```

**Response Example**:
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "status":200,
    "data":
    {
        "device-list": [
            {
                "model":"UVC86",
                "firmware":"128.423.253.104",
                "hardware":"263.0.19.0.3.0.36",
                "macaddress":"00:15:65:00:00:00",
                "serialnumber":"506607D117000009",
                "id": 0
            },
            {
                "model":"UVC84",
                "firmware":"130.303.253.44",
                "hardware":"261.0.5.10.43.0.58",
                "macaddress":"00:24:13:00:00:00",
                "serialnumber":"803032E070000031",
                "id": 1
            }
        ]
    }
}
```

### 4. Retrieve App Information List

**Basic Information**:
- **Method**: GET
- **Path**: `/centralcontrol/app/info`

**Supported Models**: MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50

**Request Parameters**:

Body: NULL

**Return Value**:

| Name | Typology | Range of Values | Note |
|------|----------|-----------------|------|
| app-list | app_list [] | NULL | List of device information |

**app_list**:

| Name | Typology | Note |
|------|----------|------|
| id | string | App package name |
| name | string | App name |
| version | string | App version number |

**Example of a request**:
```
GET /centralcontrol/app/info
{
}
```

**Response Example**:
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
    "status":200,
    "data":
    {
        "app-list": [
            {
                "id":"com.yealink.byod",
                "name":"BYOD",
                "version":"1.0"
            },
            {
                "id":"com.yealink.projection",
                "name":"投屏",
                "version":"21.1.2-TS.2"
            }
        ]
    }
}
```

### 5. Get Call Status

**Basic Information**:
- **Method**: GET
- **Path**: `/centralcontrol/system/call-state`

**Supported Models**: MeetingBoard 65/86/65 Pro/75 Pro/86 Pro, MeetingDisplay, MeetingEye 500/900, MeetingBar A10/A40/A50, SmartVision 40

**Note**: 1. SmartVision 40 only supports incall and idle

**Request Parameters**:

Body: NULL

**Return Value**:

| Name | Typology | Range of Values | Parameter Description |
|------|----------|-----------------|----------------------|
| call-state | string | [incoming, incall, idle] | incoming: Incoming call<br>incall: In call<br>idle: idle<br>Both incoming and incall statuses can be considered as 'on a call' |
| app-info | app_info | NULL | app information during an ongoing call. If not on a call, all related fields will be set to "" |

**app_info**:

| Name | Typology | Note |
|------|----------|------|
| id | string | App package name |
| name | string | App name |
| version | string | App version number |

**Example of a request**:
```
GET /centralcontrol/system/call-state
{
}
```

**Response Example**:
```
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

### 6. Access to System Information

**Basic Information**:
- **Method**: GET
- **Path**: `/centralcontrol/system/sys-info`

**Supported Models**: SmartVision 40

**Request Parameters**:

Body: NULL

**Return Value**:

| Name | Typology | Parameter Description |
|------|----------|----------------------|
| model | string | device models |
| firmware | string | firmware version |
| hardware | string | hardware version |
| serialnumber | string | device sn number |
| macaddress | string | device mac address |
| cc-version | string | centre control version |
| vendor | string | Device Manufacturer Name |

**Example of a request**:
```
GET /centralcontrol/system/sys-info
{
}
```

**Response Example**:
```
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

### 7. Get USB Port Connection Status

**Basic Information**:
- **Method**: GET
- **Path**: `/centralcontrol/system/pc-connect-status`

**Supported Models**: SmartVision 40

**Request Parameters**:

Body: NULL

**Return Value**:

| Name | Typology | Range of Values | Description |
|------|----------|-----------------|-------------|
| status | string | [on,off] | USB connection status:<br>on: Connected<br>off: Not connected |

**Example of a request**:
```
GET /centralcontrol/system/pc-connect-status
{
}
```

**Response Example**:
```
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
{
 "status": 200,
 "data": {
  "status": "on"
 }
}
```

### 8. Check Memory Usage

**Basic Information**:
- **Method**: GET
- **Path**: `/centralcontrol/system/memory-info`

**Supported Models**: SmartVision 40, MeetingBoard 65/86/65Pro/75Pro/86Pro, MeetingEye 500/900, MeetingBar A10/A40

**Request Parameters**:

Body: NULL

**Return Value**:

| Name | Typology | Range of Values | Description |
|------|----------|-----------------|-------------|
| memory-usage | int | [0,100] | Memory Usage |
| total-memory | int | >0 | Total memory, in MB |
| free-memory | int | >=0 | Unused memory, in Mb |
| used-memory | int | >0 | Memory Used, Unit: Mb |

**Example of a request**:
```
GET /centralcontrol/system/memory-info
{
}
```

**Response Example**:
```
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

### 9. Read Device Status

**Basic Information**:
- **Method**: GET
- **Path**: `/centralcontrol/system/alert-status`

**Supported Models**: SmartVision 40

**Request Parameters**:

Body: NULL

**Return Value**:

| Name | Typology | Range of Values | Description |
|------|----------|-----------------|-------------|
| normal | string | [true,false] | Device status normal if normal =!(memorytoohigh \|\| cpuusagetoohigh) |
| memorytoohigh | string | [true,false] | Is memory usage too high? By default, return true if it's greater than 80. |
| cpuusagetoohigh | string | [true,false] | Check if cpu usage is too high; returns true if it exceeds 80% by default |

**Example of a request**:
```
GET /centralcontrol/system/alert-status
{
}
```

**Response Example**:
```
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

---

*Note: This is a partial conversion of the PDF. The document continues with more API endpoints and detailed specifications. Due to the length of the document, I've included the first major sections. Would you like me to continue with additional sections?*
