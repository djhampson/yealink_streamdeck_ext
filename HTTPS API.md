> <img src="./gt3w5izl.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**HTTPS** **API**

> **Central** **control** **HttpApi** **authentication**
> **instructions**
>
> Due to the addition of the authentication mechanism, you need to
> perform the authentication process first, after the success of the
> token, the subsequent interface calls attached to the token
> verification :::NOTE The token is valid for 2 hours. :::
>
> <img src="./nboawcvp.png"
> style="width:7.35417in;height:1.13542in" />Request authentication as a
> POST with the password parameter (value is the admin password of the
> requested device):
>
> POST /centralcontrol/authentication
>
> {
>
> "password": "0000" }
>
> If requested and verified successfully, a string of tokens will be
> obtained:
>
> <img src="./njugvxu0.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "token":"6118C27AAC154D79BFC955A4F63E3C42" }
>
> }
>
> **1.** **Token** **usage** **method**
>
> <img src="./aagrtp55.png"
> style="width:7.35417in;height:1.63542in" />The obtained token field is
> filled in the **"Authoriizatiion** " field in the https request header
> as the authentication check field value:
>
> User-Agent: PostmanRuntime-ApipostRuntime/1.1.0 Cache-Control:
> no-cache
>
> content-type: application/json Accept: \*/\*
>
> Accept-Encoding: gzip, deflate, br Connection: keep-alive
>
> Authorization: Bearer 6118C27AAC154D79BFC955A4F63E3C42 Content-Length:
> 27
>
> **Allll** **subsequent** **requests** need to bring the token in order
> to verify the success and perform the corresponding functions, if the
> access is app-related interfaces need to bring the app name parameter,
> to Apipost software as an example:
>
> 1
>
> <img src="./xj2pznno.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**2.** **Busiiness** **authentiicatiion** **faiilled.**

||
||
||

> <img src="./xsmwasns.png"
> style="width:7.35417in;height:1.30208in" />When a business request is
> made and authentication fails, the following response example will be
> returned: Response Example
>
> HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":500 }
>
> At this point, the client can initiate a reauthentication request.

**3.** **Handlliing** **Exceediing** **Liimiits**

||
||
||

> If the concurrent number of business requests exceeds ten, the
> server's concurrency limit mechanism will be triggered, and the
> following response instance will be returned.
>
> **Response** **Examplle**
>
> <img src="./wmxr12la.png"
> style="width:7.35417in;height:2.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 500, "data":
>
> {
>
> "error-code": 10007,
>
> "error-msg": "password-incorrect" }
>
> }

**Central** **Control** **HttpApi** **Error** **Code** **Description**

> If the request fails, the status field will return "404" (for
> authentication-related issues, please refer to "Access Control
> Service" and "Authentication Description"). In this case, the API
> response will include the error-code and error-msg fields, which
> indicate the error code and message. You can use this information to
> identify the cause of the error. Specific definitions are as follows:
>
> 2
>
> <img src="./dhf5ilw3.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./23qxjyr2.png"
> style="width:7.35417in;height:2.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 404, "data":
>
> {
>
> "error-code": 10002, "error-msg": "not-support"
>
> } }
>
> Error code/Error message description:

||
||
||
||
||
||
||
||
||
||
||
||
||
||

**Admission** **Service**

> Authentication and authorization

**1.** **Authentiicatiion**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/authentication

||
||
||

> 3
>
> <img src="./uxlaxxkg.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./idfyo0ss.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/authentication
>
> {
>
> "password": "0000" }
>
> **Response** **Examplle**
>
> <img src="./nmlyrobf.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "token":"6118C27AAC154D79BFC955A4F63E3C42" }
>
> }

**Basic** **information**

> Basic information query/retrieval (This document includes system
> information, network information, device list. For other system
> status, mute status, volume level, camera information, screen
> brightness, conference platform list, please refer to the Control
> Service document).

**1.** **Access** **to** **system** **iinformatiion**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/version

||
||
||

**Request** **Parameters:** **Body:**

> 4
>
> <img src="./jo3n3pzw.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> NULL

**Return** **Vallue:**

||
||
||
||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./4maxecsa.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/system/version
>
> { }
>
> **Response** **Examplle**
>
> <img src="./jo4nk2jw.png"
> style="width:7.35417in;height:2.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "model":"MeetingEye 500", "firmware":"128.423.253.104",
> "hardware":"263.0.19.0.3.0.36", "macaddress":"00:15:65:00:00:00",
> "serialnumber":"506607D117000009", "cc-version":"1.0.0.11"
>
> } }

**2.** **Access** **to** **network** **iinformatiion**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/network/info

||
||
||

**Request** **Parameters:** **Body:**

> NULL
>
> 5
>
> <img src="./oyca2n2a.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Return** **Vallue:**

||
||
||
||

**network_iinfo**

||
||
||
||
||
||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./wdo3yxmb.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/network/info
>
> { }
>
> **Response** **Examplle**
>
> 6
>
> <img src="./k4nwpoyj.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./0pq5pm0b.png"
> style="width:7.35417in;height:5.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data": {
>
> "network-list": \[ {
>
> "type": 0, "port-type": 2, "mode": 0, "ip": "", "mask": "", "gateway":
> "",
>
> "primary-dns": "", "second-dns": ""
>
> }, {
>
> "type": 0, "port-type": 0, "mode": 0,
>
> "ip": "10.50.149.143", "mask": "255.255.255.0", "gateway":
> "10.50.149.254", "primary-dns": "10.100.1.10", "second-dns":
> "192.168.1.22"
>
> } \]
>
> } }

**3.** **Get** **deviice** **lliist**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/devices

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**deviice_iinfo**

||
||
||
||

> 7
>
> <img src="./g5g1ahfr.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./2wwitbmp.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/system/devices
>
> { }
>
> **Response** **Examplle**
>
> <img src="./ohw4vmgq.png"
> style="width:7.35417in;height:4.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "device-list": \[ {
>
> "model":"UVC86", "firmware":"128.423.253.104",
> "hardware":"263.0.19.0.3.0.36", "macaddress":"00:15:65:00:00:00",
> "serialnumber":"506607D117000009", "id": 0
>
> }, {
>
> "model":"UVC84", "firmware":"130.303.253.44",
> "hardware":"261.0.5.10.43.0.58", "macaddress":"00:24:13:00:00:00",
> "serialnumber":"803032E070000031", "id": 1
>
> } \]
>
> } }

**4.** **Retriieve** **app** **iinformatiion** **lliist.**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/app/info

> 8
>
> <img src="./h1fi2a5m.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**app_lliist**

||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./s1qmovqv.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/app/info
>
> { }
>
> **Response** **Examplle**
>
> <img src="./fsc1gfxc.png"
> style="width:7.35417in;height:3.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "app-list": \[ {
>
> "id":"com.yealink.byod", "name":"BYOD", "version":"1.0"
>
> }, {
>
> "id":"com.yealink.projection", "name":"投屏", "version":"21.1.2-TS.2"
>
> } \]
>
> } }

**5.** **Get** **callll** **status**

> 9
>
> <img src="./pyfce5cg.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/call-state

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||
||

**app_iinfo**

||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./hjvhonbs.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/system/call-state
>
> { }
>
> **Response** **Examplle**
>
> 10
>
> <img src="./hk45g44y.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./joxg4250.png"
> style="width:7.35417in;height:2.63542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8 {
>
> "status":200, "data":
>
> {
>
> "call-state": "incoming", "app-info": {
>
> "id":"com.yealink.projection", "name":"投屏", "version":"21.1.2-TS.2"
>
> } }
>
> }

**6.** **Access** **to** **system** **iinformatiion**

**Basiic** **Informatiion** **Method:** GET

**path:** /centralcontrol/system/sys-info

||
||
||

**Request** **Parameters** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||
||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./d5vipx31.png"
> style="width:7.35417in;height:0.80208in" />GET
> /centralcontrol/system/sys-info {
>
> }
>
> **Response** **Examplle**
>
> 11
>
> <img src="./4xmxlgqe.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./kekqlqi5.png"
> style="width:7.35417in;height:2.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "model": "SmartVision40", "firmware": "286.412.0.6", "hardware":
> "286.0.16.0.0.0.0",
>
> "serialnumber": "506656F110000056", "macaddress": "24:9a:d8:db:a2:3b",
> "cc-version": "1.0.0.16",
>
> "vendor": "Yealink" }
>
> }

**7.** **Get** **USB** **port** **connectiion** **status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/pc-connect-status

||
||
||

**Request** **Parameters** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./gdxew3nj.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/system/pc-connect-status
>
> { }
>
> **Response** **Examplle**
>
> 12
>
> <img src="./dxb4unbz.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./iz5ouiql.png"
> style="width:7.35417in;height:1.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "status": "on" }
>
> }

**8.** **Check** **memory** **usage**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/memory-info

||
||
||

**Request** **Parameters** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./ap5dp23n.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/system/memory-info
>
> { }
>
> **Response** **Examplle**
>
> 13
>
> <img src="./xsutt0xr.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./py2jlyxf.png"
> style="width:7.35417in;height:2.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "memory-usage": 21, "total-memory": 953, "free-memory": 744,
> "used-memory": 209
>
> } }

**9.** **Read** **Deviice** **Status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/alert-status

||
||
||

**Request** **Parameters** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./1d0zmjry.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/system/alert-status
>
> { }
>
> **Response** **Examplle**
>
> 14
>
> <img src="./aui0dtfm.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./4fozhxbk.png"
> style="width:7.35417in;height:2.13542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "normal": "true", "memorytoohigh": "false", "cpuusagetoohigh": "false"
>
> } }

**10.** **Set** **allert** **notiifiicatiion** **rulles**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/system/alert-rules

||
||
||

**Request** **Parameters** **Body:**

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./al3jmg3c.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/system/alert-rules
>
> {
>
> "cpu":70, "memory":90
>
> }
>
> **Response** **Examplle**
>
> 15
>
> <img src="./tlnhzisv.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./mfuluot4.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200 }

**11.** **Get** **the** **current** **tiime**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/current-time

||
||
||

**Request** **Parameters** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./nakdykwz.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/system/current-time
>
> { }
>
> **Response** **Examplle**
>
> <img src="./ndp3wnsc.png"
> style="width:7.35417in;height:1.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "value": 1725480149 }
>
> }

**12.** **Get** **the** **status** **of** **BYOD-EXTENDER**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/byod/extender-status

||
||
||

> 16
>
> <img src="./y1iua3rh.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Request** **Parameters** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./0aywkdkm.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/byod/extender-status
>
> { }
>
> **Response** **Examplle**
>
> <img src="./kflgjjbm.png"
> style="width:7.35417in;height:1.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "status": "available" }
>
> }

**Control** **service**

> Remote control of audio and video devices, displays, and entire
> machines, including obtaining status information required for control.

**1.** **System** **State** **Controll**

**1)** **Get** **system** **status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/status

||
||
||

**Request** **Parameters:**

> 17
>
> <img src="./o2oe2pnk.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Body:** NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./sg31pyul.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/system/status
>
> { }
>
> **Response** **Examplle**
>
> <img src="./nwppb0zg.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "status":"wake-up" }
>
> }

**2)** **Set** **system** **status**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/system/status

||
||
||

**Request** **Parameters:** **Body:**

||
||
||

> 18
>
> <img src="./snfn0ano.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./o3zppqql.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/system/status
>
> {
>
> "status":"sleeping", "sn":"506607D117000009"
>
> }
>
> **Response** **Examplle**
>
> <img src="./3cwpxcg5.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**3)** **Get** **Workiing** **Hours**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/uptime

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> 19
>
> <img src="./2zfarcgu.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./htb4ntwk.png"
> style="width:7.35417in;height:1.13542in" />GET
> /centralcontrol/system/uptime
>
> {
>
> }
>
> **Response** **Examplle**
>
> <img src="./zi0igqmb.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "value":840 }
>
> }

**4)..** **Get** **CPU** **iinformatiion**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/cpu-info

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./m4zyv15j.png"
> style="width:7.35417in;height:1.13542in" />GET
> /centralcontrol/system/cpu-info
>
> {
>
> }
>
> SmartVision 40:
>
> 20
>
> <img src="./qj5q3ye2.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./lh1vjxwv.png"
> style="width:7.35417in;height:1.13542in" />GET
> /centralcontrol/system/cpu-info
>
> {
>
> }
>
> **Response** **Examplle**
>
> <img src="./gtg2kequ.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "cpu-usage":25 }
>
> }
>
> SmartVision 40:
>
> <img src="./t1puvs4c.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "cpu-usage": 10, "cpu-temp": 67
>
> } }

**5)..** **Set** **the** **current** **partiitiion** **status** **of**
**the** **deviice**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/system/division

||
||
||

**Request** **Parameters:**

||
||
||
||

**Return** **Vallue:** NULL **Note**

> **Examplle** **of** **a** **request**
>
> <img src="./xh0n5vfc.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/system/division
>
> {
>
> "value":1 }
>
> 21
>
> <img src="./25iw3ae5.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> **Response** **Examplle**
>
> <img src="./eaepesfe.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**6)..** **Get** **the** **current** **partiitiion** **status** **of**
**the** **deviice**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/division

||
||
||

**Request** **Parameters:**

||
||
||
||

**Return** **Vallue:** NULL **Note**

> **Examplle** **of** **a** **request**
>
> <img src="./tvs1kfct.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/system/division
>
> { }
>
> **Response** **Examplle**
>
> <img src="./vcpb3hsr.png"
> style="width:7.35417in;height:1.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":{
>
> "value":1 }
>
> }

**7)..** **Query** **current** **hardware** **status** **of** **the**
**deviice** **(deprecated,,** **use** **8** **iinstead)**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/hardware

||
||
||

**Request** **Parameters:**

||
||
||

> 22
>
> <img src="./5ebipm0d.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||

**Return** **Vallue:** NULL **Note**

> **Examplle** **of** **a** **request**
>
> <img src="./tk1y1rde.png"
> style="width:7.35417in;height:2.46875in" />GET
> /centralcontrol/system/hardware
>
> {
>
> "hardware_list": \[ {
>
> "type": "gpio", "index": \[
>
> "1", "2"
>
> \] }
>
> \] }
>
> **Response** **Examplle**
>
> <img src="./okebtcmw.png"
> style="width:7.35417in;height:4.13542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "hardware_list": \[ {
>
> "type": "gpio", "status": \[
>
> {
>
> "index": "1", "status": "0"
>
> }, {
>
> "index": "2", "status": "1"
>
> } \]
>
> } \]
>
> } }

**8)..** **Get** **gpiio** **status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/system/hardware

||
||
||

> 23
>
> <img src="./f5bf3lza.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Request** **Parameters:**

||
||
||
||

> hal_list

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./cj5y3fso.png"
> style="width:7.35417in;height:2.46875in" />GET
> /centralcontrol/system/gpio-status
>
> {
>
> "hardware_list": \[ {
>
> "type": "gpio", "index": \[
>
> "1", "2"
>
> \] }
>
> \] }
>
> **Response** **Examplle**
>
> 24
>
> <img src="./ydwo2nx2.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./fkawyfgz.png"
> style="width:7.35417in;height:4.13542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "hardware_list": \[ {
>
> "type": "gpio", "status": \[
>
> {
>
> "index": "1", "status": "0"
>
> }, {
>
> "index": "2", "status": "1"
>
> } \]
>
> } \]
>
> } }

**9)..** **Enablle** **deviice** **llocatiion** **swiitch**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/system/status

||
||
||

**Request** **Parameters** **Body:**

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./vm2ihylv.png"
> style="width:7.35417in;height:0.96875in" />POST
> /centralcontrol/system/status {
>
> "status":"on" }
>
> **Response** **Examplle**
>
> 25
>
> <img src="./tfzzrcm2.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./lmoytela.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200 }

**10)..** **Set** **LED** **Liight** **Swiitch**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/sysytem/led-preset/enable

||
||
||

**Request** **Parameters** **Body:**

||
||
||
||

**Return** **Vallue:** **NULL**

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./q1yytcfu.png"
> style="width:7.08333in;height:0.96875in" />POST
> /centralcontrol/system/led-preset/enable {
>
> "enable":"off" }
>
> **Response** **Examplle**
>
> <img src="./ywtpbvez.png"
> style="width:7.08333in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200 }

**11)..** **Get** **LED** **On/Off** **Status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/sysytem/led-preset/enable

||
||
||

**Request** **Parameters** **Body:**

> NULL
>
> 26
>
> <img src="./xkizoq52.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./c4aatrzb.png"
> style="width:7.08333in;height:0.80208in" />GET
> /centralcontrol/system/led-preset/enable {
>
> }
>
> **Response** **Examplle**
>
> <img src="./0sqqy5zh.png"
> style="width:7.08333in;height:1.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data":{
>
> "enable":"on" }
>
> }

**12)..** **Set** **LED** **lliight** **collor** **presets**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/sysytem/led-preset/config

||
||
||

**Request** **Parameters** **Body:**

||
||
||
||
||

**Return** **Vallue:** **NULL**

**Note**

> 27
>
> <img src="./pm5y4k1l.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> **Examplle** **of** **a** **request**
>
> <img src="./a1lndnov.png"
> style="width:7.08333in;height:1.13542in" />POST
> /centralcontrol/sysytem/led-preset/config {
>
> "color":"red", "event":"mute"
>
> }
>
> **Response** **Examplle**
>
> <img src="./ocetndt0.png"
> style="width:7.08333in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200 }

**13)..** **Get** **LED** **collor** **preset**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/sysytem/led-preset/config

||
||
||

**Request** **Parameters** **Body:**

||
||
||
||

**Return** **Vallue:**

||
||
||
||
||

**Note**

> Example of a request
>
> <img src="./ubz402ob.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/sysytem/led-preset/config {
>
> "event":"unmute" }
>
> Response Example
>
> 28
>
> <img src="./tgwagnxh.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./holoacgj.png"
> style="width:7.08333in;height:2.01042in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200 "data":{
>
> "event":"unmute", "color":"#145386"
>
> } }

**2.** **Audiio** **Controll**

**1..** **Obtaiin** **mute** **status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/mute

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./udyqetd5.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/audio/mute
>
> { }
>
> **Response** **Examplle**
>
> 29
>
> <img src="./xzsb4htt.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./rpnpjosn.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "status":"on" }
>
> }

**2）..** **Settiing** **the** **Mute** **State（** **MVC）**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/mute

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./34hzv1cq.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/audio/mute
>
> {
>
> "status": "off", "sn":"506607D117000009"
>
> }
>
> **Response** **Examplle**
>
> 30
>
> <img src="./xbgvp2de.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./dqynxxos.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**3）..** **Settiing** **the** **Mute** **State（** **VCS）**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/button

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

> \*\* Return Value: NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./3eiiywyk.png"
> style="width:7.35417in;height:1.13542in" />POST /centralcontrol/button
>
> {
>
> "key": "mute" }
>
> **Response** **Examplle**
>
> <img src="./3tqp2ngr.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**4)** **Get** **vollume** **(miic)**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/volume

> 31
>
> <img src="./13xprhox.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./2ksqmcnt.png"
> style="width:7.35417in;height:1.13542in" />GET
> /centralcontrol/audio/volume
>
> {
>
> "type": "talk" }
>
> **Response** **Examplle**
>
> <img src="./j5kbuwzy.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "value":5 }
>
> }

**5)** **Adjjust** **vollume**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/volume

> 32
>
> <img src="./yqxwh20x.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./s15p0hs5.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/audio/volume
>
> {
>
> "type": "idle", "value": 3
>
> }
>
> **Response** **Examplle**
>
> <img src="./0yd14ksx.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**6)..** **Get** **lliist** **of** **audiio** **sources**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/source-info

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

> 33
>
> <img src="./as22cnlb.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./wmub4gec.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/audio/source-info
>
> { }
>
> **Response** **Examplle**
>
> <img src="./fdksn4uw.png"
> style="width:7.35417in;height:3.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "input-source": \[ "AUTO", "WIRED_MIC", "LINE",
>
> "XLR" \],
>
> "output-source": \[ "AUTO",
>
> "HDMI", "LINE",
>
> "WIRED_SPEAKER" \]
>
> } }

**7)** **Set** **audiio** **iinput** **source..**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/input-source

||
||
||

**Request** **Parameters:** **Body:**

||
||
||

> 34
>
> <img src="./zuzqmyd1.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./iwecdk3x.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/audio/input-source
>
> {
>
> "type": "AUTO" }
>
> **Response** **Examplle**
>
> <img src="./wyjypfhk.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**8)** **Set** **audiio** **output** **source..** **Basiic**
**Informatiion**

> 35
>
> <img src="./xbjvdzwy.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Method:** POST

**Path:** /centralcontrol/audio/output-source

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./n4fguuhy.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/audio/output-source
>
> {
>
> "type": "VCP" }
>
> **Response** **Examplle**
>
> 36
>
> <img src="./i33qjbry.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./i1vtecby.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**9)** **Set** **iinput** **audiio** **noiise** **reductiion..**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/input/noise-reduction

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./lggtgb2v.png"
> style="width:7.35417in;height:1.46875in" />POST
> /centralcontrol/audio/input/noise-reduction
>
> {
>
> "sn":"506607D117000009", "ai-mode": "on",
>
> "level":2 }
>
> **Response** **Examplle**
>
> 37
>
> <img src="./zggkwn0s.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./oezcl3vn.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**10)** **Set** **iinput** **audiio** **gaiin..**

**Basiic** **iinformatiion:** **Method:** POST

**Path:** /centralcontrol/audio/input/gain

||
||
||

**Request** **parameters:** **Body:**

||
||
||
||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./j13odzhm.png"
> style="width:7.35417in;height:1.96875in" />POST
> /centralcontrol/audio/input/gain
>
> {
>
> "status":"on", "sn":"506607D117000009", "gain-value":20,
>
> "rca-value":-6, "attenuation-value":30, "line-value":12
>
> }
>
> **Response** **Examplle**
>
> 38
>
> <img src="./qomvmsxy.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./rqtnf3jy.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**11)** **Set** **up** **iinput** **audiio** **echo**
**cancellllatiion..**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/input/echo-cancellation

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> 39
>
> <img src="./fz53j45t.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./pqz1h1zs.png"
> style="width:7.35417in;height:1.96875in" />POST
> /centralcontrol/audio/input/echo-cancellation
>
> {
>
> "status":"on", "sn":"506607D117000009", "suppress-level":1,
>
> "reverb-level":0, "manual-dalay":"on", "delay-value":200
>
> }
>
> **Response** **Examplle**
>
> <img src="./tqvrzbx3.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**12)** **Set** **iinput** **audiio** **equalliizer**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/input/equalizer

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> 40
>
> <img src="./i3fty0wc.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> **Examplle** **of** **a** **request**
>
> <img src="./qhmyzwdf.png"
> style="width:7.35417in;height:1.63542in" />POST
> /centralcontrol/audio/input/equalizer
>
> {
>
> "sn":"506607D117000009", "status": "on", "mode":"custom",
>
> "frequency-range-list":\[12,5,-12,3,6,10,-5,2,0,3,9\] }
>
> **Response** **Examplle**
>
> <img src="./plwhi5dj.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**13)** **Set** **output** **audiio** **gaiin..**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/output/gain

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> 41
>
> <img src="./vlxsom4a.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./ysnom3o4.png"
> style="width:7.35417in;height:1.80208in" />POST
> /centralcontrol/audio/output/gain
>
> {
>
> "status":"on", "sn":"506607D117000009", "gain-value":20,
> "attenuation-value":30, "line-value": 10
>
> }
>
> **Response** **Examplle**
>
> <img src="./d0qqs4t3.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**14)** **Set** **up** **output** **audiio** **equalliizer..**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/output/equalizer

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> 42
>
> <img src="./mrqtym5l.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./ftur3v51.png"
> style="width:7.35417in;height:1.63542in" />POST
> /centralcontrol/audio/output/equalizer
>
> {
>
> "sn":"506607D117000009", "status": "on", "mode":"custom",
>
> "frequency-range-list":\[12,5,-12,3,6,10,-5,2,0,3,9\] }
>
> **Response** **Examplle**
>
> <img src="./rtziuyza.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**15)..** **Get** **miic** **mute** **status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/mic-mute

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./objpreg0.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/audio/mute
>
> { }
>
> **Response** **Examplle**
>
> 43
>
> <img src="./2pbizlvv.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./wqgxmjps.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "status":"on" }
>
> }

**16)..** **Get** **speaker** **mute** **status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/speaker-mute

||
||
||

**Request** **Parameters** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./qh2dch2x.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/audio/speaker-mute
>
> { }
>
> **Response** **Examplle**
>
> <img src="./xr3jbxb3.png"
> style="width:7.35417in;height:1.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "status": "off" }
>
> }

**17)..** **Read** **Audiio** **Fence** **swiitch** **status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/fence-enable

> 44
>
> <img src="./tfd3m3qd.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Request** **Parameters** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./fozpnfjj.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/audio/fence-enable
>
> { }
>
> **Response** **Examplle**
>
> <img src="./ggz3xhpl.png"
> style="width:7.35417in;height:1.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "status": "on" }
>
> }

**18)..** **Get** **deviice** **audiio** **channell** **iinformatiion**
**(deprecated,,** **use** **19** **iinstead)**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/device-sound/channel-info

||
||
||

**Request** **Parameters:** Body: \*\* None **Return** **Vallue:**

||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> 45
>
> <img src="./f2ipnj2o.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./kdn2xvir.png"
> style="width:7.35417in;height:0.80208in" />GET
> /centralcontrol/audio/device-sound/channel-info {
>
> }
>
> **Response** **Examplle**
>
> <img src="./fnftti3o.png"
> style="width:7.35417in;height:3.13542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "max_channel_count": 8, "channel_enable":
>
> \[ true, true, true, true, true, true, true, true
>
> \] }

**19)..** **Get** **deviice** **audiio** **channell** **iinformatiion**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/lobe-enable

||
||
||

**Request** **Parameters:** Body: \*\* None **Return** **Vallue:**

||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./hl2rfijm.png"
> style="width:7.35417in;height:0.80208in" />GET
> /centralcontrol/audio/lobe-enable {
>
> }
>
> **Response** **Examplle**
>
> 46
>
> <img src="./rklnjel0.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./ywmbbjkk.png"
> style="width:7.35417in;height:3.13542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "max_channel_count": 8, "channel_enable":
>
> \[ true, true, true, true, true, true, true, true
>
> \] }

**20)..** **Get** **the** **actiivatiion** **status** **of** **the**
**deviice''s** **audiio** **source** **channell** **(deprecated,,**
**pllease** **use** **21)**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/device-sound/active-status

||
||
||

**Request** **Parameters:** **Body:** NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./3eiee12n.png"
> style="width:7.35417in;height:0.80208in" />GET
> /centralcontrol/audio/device-sound/active-status {
>
> }
>
> **Response** **Examplle**
>
> 47
>
> <img src="./5d2hyzhu.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./35mh3mbz.png"
> style="width:7.35417in;height:2.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> { "active_status": \[
>
> true, true, true, true, true, true, true, true
>
> \] }

**21)..** **Get** **deviice** **audiio** **channell** **actiivatiion**
**status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/lobe-activation

||
||
||

**Request** **Parameters:** **Body:** NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./ojnpkzvc.png"
> style="width:7.35417in;height:0.80208in" />GET
> /centralcontrol/audio/lobe-activation {
>
> }
>
> **Response** **Examplle**
>
> 48
>
> <img src="./y2khybmk.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./ysvtjsbm.png"
> style="width:7.35417in;height:2.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> { "active_status": \[
>
> true, true, true, true, true, true, true, true
>
> \] }

**22)..** **Get** **speaker** **posiitiion** **coordiinates**
**(deprecated;;** **use** **23** **iinstead)**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/device-sound/talker-position

||
||
||

**Request** **Parameters:** **Body:** NULL

**Return** **Vallue:**

||
||
||
||
||
||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./msbfs320.png"
> style="width:7.35417in;height:0.80208in" />GET
> /centralcontrol/audio/device-sound/talker-position {
>
> }
>
> **Response** **Examplle**
>
> 49
>
> <img src="./axrgn1eq.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./idzubhl5.png"
> style="width:7.35417in;height:3.46875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "doa": \[ {
>
> "dev_type": "CM50", "dev_sn": "sfsfsfsff", "snd_src_num": 1,
> "snd_src": \[
>
> {
>
> "x": 0, "y": 0, "z": 0
>
> } \]
>
> } \]
>
> }

**23)..** **Get** **the** **speaker''s** **llocatiion** **coordiinates**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/sound-locate

||
||
||

**Request** **Parameters:** **Body:** NULL

**Return** **Vallue:**

||
||
||
||

> doa:

||
||
||
||
||
||
||
||
||
||

> snd_src:

||
||
||

> 50
>
> <img src="./0hbt34ii.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./ywi0fahz.png"
> style="width:7.35417in;height:0.80208in" />GET
> /centralcontrol/audio/sound-locate {
>
> }
>
> **Response** **Examplle**
>
> <img src="./wu0wg2mz.png"
> style="width:7.35417in;height:3.46875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "doa": \[ {
>
> "dev_type": "CM50", "dev_sn": "sfsfsfsff", "snd_src_num": 1,
> "snd_src": \[
>
> {
>
> "x": 0, "y": 0, "z": 0
>
> } \]
>
> } \]
>
> }

**24)..** **Get** **audiio** **parameter** **presets** **(deprecated,,**
**use** **25** **iinstead)**

**Basiic** **Informatiion** **Method:** GET

**Path:**/centralcontrol/audio/param/preset

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

> 51
>
> <img src="./dfywpnym.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./j0yjwk4w.png"
> style="width:7.35417in;height:0.80208in" />GET
> /centralcontrol/audio/param/preset {
>
> }
>
> **Response** **Examplle**
>
> <img src="./ajtucsax.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> { "preset_info":{
>
> preset_type: "custom_preset", preset_id: "⾃定义1", preset_name:
> "OFQjdE",
>
> } }

**25)..** **Get** **audiio** **parameter** **presets**

**Basiic** **Informatiion** **Method:** GET

**Path:**/centralcontrol/audio/preset

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

> preset_info:

||
||
||
||
||

> 52
>
> <img src="./c41re22t.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./trjn0fps.png"
> style="width:7.35417in;height:0.80208in" />GET
> /centralcontrol/audio/preset {
>
> }
>
> **Response** **Examplle**
>
> <img src="./iyblz31k.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> { "preset_info":{
>
> preset_type: "custom_preset", preset_id: "⾃定义1", preset_name:
> "OFQjdE",
>
> } }

**26)..** **Set** **audiio** **parameter** **presets** **(deprecated,,**
**use** **27** **iinstead)**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/param/preset

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./gcjykodj.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/audio/param/preset
>
> {
>
> "value":"1" }
>
> **Response** **Examplle**
>
> 53
>
> <img src="./wb2nhpqa.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./oatoskxy.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**27)..** **Set** **Audiio** **Parameter** **Presets**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/preset

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./iasmnr2p.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/audio/preset
>
> {
>
> "value":"1" }
>
> **Response** **Examplle**
>
> <img src="./oynxsygy.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }

**28)..** **Set** **gaiin** **(deprecated;;** **use** **29**
**iinstead)**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/gain

||
||
||

**Request** **Parameters:** **Body:**

> 54
>
> <img src="./xuk21mp0.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./pj30kg1w.png"
> style="width:7.35417in;height:2.63542in" />POST
> /centralcontrol/audio/gain
>
> {
>
> "arr_gain_info": \[ {
>
> "name": "USB-Input-1", "value": 10
>
> }, {
>
> "name": "USB-Input-2", "value": 10
>
> } \]
>
> }
>
> **Response** **Examplle**
>
> <img src="./fqouewra.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**29)..** **Set** **channell** **gaiin**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/channel/gain

||
||
||

**Request** **Parameters:** **Body:**

||
||
||

> 55
>
> <img src="./qa0z5vtj.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||

> arr_gain_info:

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./4bh5qjar.png"
> style="width:7.35417in;height:2.63542in" />POST
> /centralcontrol/audio/channel/gain
>
> {
>
> "arr_gain_info": \[ {
>
> "name": "USB-Input-1", "value": 10
>
> }, {
>
> "name": "USB-Input-2", "value": 10
>
> } \]
>
> }
>
> **Response** **Examplle**
>
> <img src="./ejjtcow1.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**30)..** **Get** **Gaiin** **(deprecated,,** **pllease** **use**
**31)**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/gain

||
||
||

**Request** **Parameters:** **Body:**

> 56
>
> <img src="./5h2ndp5q.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./riktjota.png"
> style="width:7.35417in;height:1.63542in" />GET
> /centralcontrol/audio/gain
>
> {
>
> "arr_gain_info": \[ "USB-Input-1", "USB-Input-2"
>
> \] }
>
> **Response** **Examplle**
>
> <img src="./tyivg5j0.png"
> style="width:7.35417in;height:3.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "arr_gain_info": \[ {
>
> "name": "USB-Input-1", "value": 10
>
> }, {
>
> "name": "USB-Input-2", "value": 10
>
> } \]
>
> } }

**31)..** **Get** **channell** **gaiin**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/channel/gain

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

> 57
>
> <img src="./luxxkon1.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Return** **Vallue:**

||
||
||
||

> arr_gain_info

||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./ylhstjva.png"
> style="width:7.35417in;height:1.63542in" />GET
> /centralcontrol/audio/channel/gain
>
> {
>
> "arr_gain_info": \[ "USB-Input-1", "USB-Input-2"
>
> \] }
>
> **Response** **Examplle**
>
> <img src="./a4bblswx.png"
> style="width:7.35417in;height:3.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "arr_gain_info": \[ {
>
> "name": "USB-Input-1", "value": 10
>
> }, {
>
> "name": "USB-Input-2", "value": 10
>
> } \]
>
> } }

**32)..** **Set** **up** **externall** **audiio** **iinput** **noiise**
**reductiion**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/audio/external-input/noise-reduction

||
||
||

**Request** **Parameters:** **Body:**

> 58
>
> <img src="./vpagict5.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./o1yycgg3.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/audio/external-input/noise-reduction
>
> {
>
> "level": 0, "sn":"506607D117000009"
>
> }
>
> **Response** **Examplle**
>
> <img src="./ablsnxqx.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**33)..** **Set** **deviice** **channell** **mute** **status**
**(deprecated,,** **use** **34** **iinstead)**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/channel-mute

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||

**Return** **Vallue:** NULL

> 59
>
> <img src="./laavr4p3.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./o2db5v3e.png"
> style="width:7.35417in;height:2.63542in" />POST
> /centralcontrol/audio/channel-mute
>
> {
>
> "channel_mute": \[ {
>
> "name": "Dante-Input-1", "status": "on"
>
> }, {
>
> "name": "Dante-Input-2", "status": "off"
>
> }, \]
>
> }
>
> **Response** **Examplle**
>
> <img src="./kvhr5trv.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**34)..** **Set** **deviice** **channell** **mute** **status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/channel/mute

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

> channel_mute:

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> 60
>
> <img src="./bkhydkr3.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./ad4yu1nr.png"
> style="width:7.35417in;height:2.63542in" />POST
> /centralcontrol/audio/channel/mute
>
> {
>
> "channel_mute": \[ {
>
> "name": "Dante-Input-1", "status": "on"
>
> }, {
>
> "name": "Dante-Input-2", "status": "off"
>
> }, \]
>
> }
>
> **Response** **Examplle**
>
> <img src="./0twdm1zw.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**35)** **Get** **deviice** **channell** **mute** **status**
**(deprecated,,** **use** **36** **iinstead)**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/channel-mute

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> 61
>
> <img src="./twl5wrye.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./1r5qpcnc.png"
> style="width:7.35417in;height:1.63542in" />GET
> /centralcontrol/audio/channel-mute
>
> {
>
> "channel_mute": \[ "Dante-Input-1", "Dante-Input-0"
>
> \] }
>
> **Response** **Examplle**
>
> <img src="./zsja0jsx.png"
> style="width:7.35417in;height:2.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "channel_mute": \[ {
>
> "name": "Dante-Input-1", "status": "on"
>
> }, {
>
> "name": "Dante-Input-0", "status": "off"
>
> }, \]
>
> }

**36)..** **Get** **the** **mute** **status** **of** **the** **deviice**
**channell**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/audio/channel/mute

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

> channel_mute:

||
||
||
||
||

**Return** **Vallue:** NULL

> 62
>
> <img src="./younb1eb.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./hxbvvrpa.png"
> style="width:7.35417in;height:1.63542in" />GET
> /centralcontrol/audio/channel/mute
>
> {
>
> "channel_mute": \[ "Dante-Input-1", "Dante-Input-0"
>
> \] }
>
> **Response** **Examplle**
>
> <img src="./202ro1mn.png"
> style="width:7.35417in;height:2.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "channel_mute": \[ {
>
> "name": "Dante-Input-1", "status": "on"
>
> }, {
>
> "name": "Dante-Input-0", "status": "off"
>
> }, \]
>
> }

**37)..** **Get** **Channell** **Vollume**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/channel/volume

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:**

||
||
||

> 63
>
> <img src="./n0ikuxow.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

> arr_gain_info:

||
||
||
||
||

**Note:**

> **Examplle** **of** **a** **request**
>
> <img src="./ebibzy0k.png"
> style="width:7.35417in;height:1.63542in" />GET
> /centralcontrol/audio/channel/volume
>
> {
>
> "arr_gain_info": \[ "Dante-Input-1", "Dante-Input-0"
>
> \] }
>
> **Response** **examplle:**
>
> <img src="./e1eo5hq4.png"
> style="width:7.35417in;height:2.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "arr_gain_info": \[ {
>
> "name": "Dante-Input-1", "value": "10"
>
> }, {
>
> "name": "Dante-Input-0", "value": "50"
>
> }, \]
>
> }

**38)..** **Set** **channell** **vollume**

Basic information: **Method:** POST

**Path:** /centralcontrol/channel/volume

||
||
||

**Request** **Parameters** **Body:**

||
||
||
||

> arr_gain_info:
>
> 64
>
> <img src="./rykl4dsf.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> Example of a request
>
> <img src="./bv43kbb1.png"
> style="width:7.08333in;height:2.63542in" />POST
> /centralcontrol/audio/channel/volume
>
> {
>
> "arr_gain_info": \[ {
>
> "Dante-Input-1", "value":12
>
> }, {
>
> "Dante-Input-0", "value":20
>
> } \]
>
> }
>
> Response Example
>
> <img src="./eq2g1ypq.png"
> style="width:7.08333in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**3.** **Camera** **controll**

**1)** **Camera** **movement**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera/move

> 65
>
> <img src="./kuzm4thh.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

<img src="./3xzpj3zn.png"
style="width:3.11458in;height:1.57292in" />**Request** **Parameters:**
**Body:**

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> 66
>
> <img src="./dk5sux2k.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./hbkg5xfr.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/camera/move
>
> {
>
> "direction": "up",
>
> "sn": "506607D117000009" }
>
> **Response** **Examplle**
>
> <img src="./gwmruwqk.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**2)** **Camera** **focall** **llength**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera/zoom

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||

**Return** **Vallue:** NULL

> 67
>
> <img src="./sed1c4sd.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./tves0hga.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/camera/zoom
>
> {
>
> "direction": "in",
>
> "sn": "506607D117000009" }
>
> **Response** **Examplle**
>
> <img src="./1xero4q4.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**3)** **Get** **the** **camera** **posiitiion**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/camera/position

||
||
||

<img src="./5d32yted.png"
style="width:3.11458in;height:1.36458in" />**Request** **Parameters:**
**Body:**

**Return** **Vallue:**

> 68
>
> <img src="./wnod1sx4.png"
> style="width:1.00028in;height:0.20839in" />HTTPS
> API<img src="./3ksth4nh.png"
> style="width:1.8125in;height:0.94792in" /><img src="./rvcc5a2s.png"
> style="width:1.8125in;height:0.94792in" />

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./0duq2xnr.png"
> style="width:7.35417in;height:1.13542in" />GET
> /centralcontrol/camera/position
>
> {
>
> "sn": "506607D117000009" }
>
> **Response** **Examplle**
>
> <img src="./03hp3ajj.png"
> style="width:7.35417in;height:2.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "x":1050.5, "y":500, "z":-280
>
> } }

**4)** **Set** **camera** **posiitiion**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera/position

> 69
>
> <img src="./aknqfvfj.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

<img src="./3sdnkjrl.png"
style="width:2.77083in;height:1.36458in" /><img src="./zo3gnhuj.png"
style="width:2.77083in;height:1.57292in" /><img src="./vqvjcl23.png"
style="width:2.77083in;height:1.57292in" />**Request** **Parameters:**
**Body:**

> 70
>
> <img src="./zfcopqf1.png"
> style="width:1.00028in;height:0.20839in" />HTTPS
> API<img src="./wzpjugkq.png"
> style="width:2.77083in;height:1.36458in" />

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./luinwto4.png"
> style="width:7.35417in;height:1.63542in" />POST
> /centralcontrol/camera/position
>
> {
>
> "x":1050.0, "y":500.0, "z":-280.0,
>
> "sn": "506607D117000009" }
>
> **Response** **Examplle**
>
> <img src="./z44squmr.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**5)** **Get** **the** **lliist** **of** **cameras..**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/camera/list

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> 71
>
> <img src="./nbf4sd4z.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./daijuwwr.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/camera/list
>
> { }
>
> **Response** **Examplle**
>
> <img src="./hsoptkr4.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "sn-list":\["803032E070000031"\] }
>
> }

**6)** **Get** **detaiilled** **iinformatiion** **of** **the**
**camera**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/camera/detail

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:**

||
||
||
||
||
||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> 72
>
> <img src="./4vqjjw1i.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./acvkbhzn.png"
> style="width:7.35417in;height:1.13542in" />GET
> /centralcontrol/camera/detail
>
> {
>
> "sn": "506607D117000009" }
>
> **Response** **Examplle**
>
> <img src="./shls5b1x.png"
> style="width:7.35417in;height:3.13542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "ip":"169.254.1.150", "mac":"80:5E:C0:60:00:62", "name":"Yealink UVC84
> -1", "firmware":"262.302.5.5", "hardware":"262.0.96.0.0.0.0",
> "spec":"PTZ 12x Optical Zoom", "model":"UVC84",
> "sn":"506607D117000009"
>
> } }

**7)** **Set** **camera** **to** **AII** **mode..**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera/ai-mode

> 73
>
> <img src="./z2fpd5ik.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Request** **Parameters:** **Body:**

||
||
||

> 74
>
> <img src="./ry4wxq5c.png"
> style="width:1.00028in;height:0.20839in" />HTTPS
> API<img src="./fifdzsfc.png"
> style="width:1.96875in;height:1.98958in" />

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./htxnli2x.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/camera/ai-mode
>
> {
>
> "type": "ptz",
>
> "sn": "506607D117000009" }
>
> **Response** **Examplle**
>
> 75
>
> <img src="./5wrbfw2r.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./gpgktavq.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**8)** **Preset** **Posiitiion** **Applliicatiion**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera/preset/recall

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./sylr4a4f.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/camera/preset/recall
>
> {
>
> "id": 1,
>
> "sn": "506607D117000009" }
>
> **Response** **Examplle**
>
> 76
>
> <img src="./bxyk4z45.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./ylsfoxnd.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**9)** **Preset** **posiitiion** **settiing**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera/preset

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./3rpk5isx.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/camera/preset
>
> {
>
> "id": 1,
>
> "sn": "506607D117000009" }
>
> **Response** **Examplle**
>
> 77
>
> <img src="./qgdabg2z.png"
> style="width:1.00028in;height:0.20839in" />HTTPS
> API<img src="./g3zybkxf.png"
> style="width:5.39583in;height:0.73958in" />
>
> <img src="./r114y2q5.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**10)** **Non-slleep** **mode** **swiitch**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera/keep-alive/switch

**Request** **Parameters:** **Body:**

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./yk2ye3ml.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/camera/keep-alive/switch
>
> {
>
> "status: "on",
>
> "sn": "506607D117000009" }
>
> **Response** **Examplle**
>
> <img src="./vle1exz5.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**11)** **Viideo** **Fence** **swiitch** **Basiic** **Informatiion**

> 78
>
> <img src="./puks4hds.png"
> style="width:1.00028in;height:0.20839in" />HTTPS
> API<img src="./cho1u3e0.png"
> style="width:5.39583in;height:0.73958in" />

**Method:** POST

**Path:** /centralcontrol/camera/video-fence/switch

**Request** **Parameters:** **Body:**

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./01q5qmpc.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/camera/video-fence/switch
>
> {
>
> "status: "on",
>
> "sn": "506607D117000009" }
>
> **Response** **Examplle**
>
> <img src="./fxafzfl4.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**12)** **Set** **Mulltii-camera** **Trackiing**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera/multi-camera-tracking-function

||
||
||

**Request** **Parameters:** **Body:**

> 79
>
> <img src="./bdrjnfuy.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./rtjc30cu.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/camera/multi-camera-tracking-function
>
> {
>
> "type": "multi-camera-intellifocus" }
>
> **Response** **Examplle**
>
> <img src="./cyghlv52.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**13)..** **Check** **camera** **usage** **status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/camera/status

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

> 80
>
> <img src="./qri4f233.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./ns1fggtd.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/camera/status
>
> { }
>
> **Response** **Examplle**
>
> <img src="./xc3olplp.png"
> style="width:7.35417in;height:1.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "status": "in_used" }
>
> }

**14)..** **IIdentiify** **and** **read** **the** **status** **of**
**the** **Viideo** **Fence** **swiitch**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/camera/video-fence-enable

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./lgrhtejz.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/camera/video-fence-enable
>
> { }
>
> 81
>
> <img src="./d4j4dlzw.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> **Response** **Examplle**
>
> <img src="./ovs1hrh4.png"
> style="width:7.35417in;height:1.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "value": "on" }
>
> }

**15)..** **Read** **the** **number** **of** **Peoplle** **counted**
**by** **AII** **Peoplle** **Count**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/camera/people-count

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./jpj3orrj.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/camera/people-count
>
> { }
>
> **Response** **Examplle**
>
> <img src="./dcyy5fpl.png"
> style="width:7.35417in;height:1.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "quantity": 1 }
>
> }

**16)..** **Read** **camera** **parameters**

**Basiic** **Informatiion** **Method:** GET

> 82
>
> <img src="./4wha52jr.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Path:** /centralcontrol/camera/video-parameter

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./ybftwofd.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/camera/video-parameter
>
> { }
>
> **Response** **Examplle**
>
> <img src="./ewuzvokg.png"
> style="width:7.35417in;height:2.63542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200, "data": {
>
> "whiteBalance": 3610,
>
> "whiteBalanceMode": "ManualWhiteBalance", "contrast": 50,
>
> "brightness": 50, "saturation": 50, "sharpness": 19
>
> } }
>
> 83
>
> <img src="./meryhxyb.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**17)..** **Set** **Actiive** **Camera**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera/active

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./zsw55eoz.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/camera/active
>
> {
>
> "sn": "506607D117000009" }
>
> **Response** **Examplle**
>
> <img src="./j334b4as.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**Diispllay** **controll**

**1..** **Get** **screen** **briightness..**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/screen/brightness

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:**

> 84
>
> <img src="./3mzjotvp.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./f4umyxfa.png"
> style="width:7.35417in;height:1.13542in" />GET
> /centralcontrol/screen/brightness
>
> {
>
> "id":0 }
>
> **Response** **Examplle**
>
> <img src="./zoo4q5ok.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "value":60 }
>
> }

**2)** **Set** **screen** **briightness..**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/screen/brightness

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> 85
>
> <img src="./s5yjdpzv.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./pm2x4knh.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/screen/brightness
>
> {
>
> "id":0, "value":60
>
> }
>
> **Response** **Examplle**
>
> <img src="./3ie3v0si.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**3)..** **Get** **siignall** **source** **lliist**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/input-source/list

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**source_lliist**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> 86
>
> <img src="./iqmg5gjv.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./gwz5e2oe.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/input-source/list
>
> { }
>
> **Response** **Examplle**
>
> <img src="./zgwljdmw.png"
> style="width:7.35417in;height:4.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "input-source-list": \[ {
>
> "type": "Default" },
>
> {
>
> "type": "Android" },
>
> {
>
> "type": "Windows" },
>
> {
>
> "type": "HdmiIn" },
>
> {
>
> "type": "TypeC" }
>
> \]
>
> } }

**4)** **Get** **current** **siignall** **source**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/input-source/current

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||

> 87
>
> <img src="./vseyhqaj.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./x2jcppxs.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/input-source/current
>
> { }
>
> **Response** **Examplle**
>
> <img src="./1x3telly.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "type": "Default" }
>
> }

**5)..** **Set** **current** **siignall** **source**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/input-source/current

||
||
||

**Request** **Parameters:** **Body:**

> 88
>
> <img src="./1olrpw2j.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./gpxev0ro.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/input-source/current
>
> {
>
> "type": "Windows" }
>
> **Response** **Examplle**
>
> 89
>
> <img src="./kzuyjrky.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./5dqk0xah.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**6)..** **Get** **the** **defaullt** **iinput** **source** **on**
**startup**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/input-source/default

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

> 90
>
> <img src="./m0cvkzdv.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./afkxtjvb.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/input-source/default
>
> { }
>
> **Response** **Examplle**
>
> <img src="./ntfxxm3o.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "type": "Windows" }
>
> }

**7)..** **Set** **the** **defaullt** **iinput** **source** **on**
**startup**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/input-source/default

||
||
||

**Request** **Parameters:** **Body:**

||
||
||

> 91
>
> <img src="./utp4ogja.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./1sxwn55b.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/input-source/default
>
> {
>
> "type": "windows" }
>
> **Response** **Examplle**
>
> <img src="./wuikk5hf.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**8)..** **Get** **diispllay** **parameters**

> 92
>
> <img src="./1igynu3h.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/screen/display-parameter

||
||
||

**Request** **Parameters:**

||
||
||
||

**Body:** NULL

**Return** **Vallue:**

||
||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./0qqudcut.png"
> style="width:7.35417in;height:1.13542in" />GET
> /centralcontrol/screen/display-parameter
>
> {
>
> "id": 0 }
>
> **Response** **Examplle**
>
> <img src="./xj4hkchy.png"
> style="width:7.35417in;height:2.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "contrast": 60， "saturation": 60， "color-temperature": 0
>
> } }

**9)..** **Get** **collor** **temperature** **iinformatiion** **lliist**

> 93
>
> <img src="./euzu31gq.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/screen/color-temperature/info

||
||
||

**Request** **Parameters:**

||
||
||
||

**Body:** NULL

**Return** **Vallue:**

||
||
||
||

> color_temperature_list

||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./tel4g2qm.png"
> style="width:7.35417in;height:1.13542in" />GET
> /centralcontrol/screen/color-temperature/info
>
> {
>
> "id": 0 }
>
> **Response** **Examplle**
>
> 94
>
> <img src="./n00bepvi.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./rux0nztn.png"
> style="width:7.35417in;height:4.80208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "color-temperature-list": \[ {
>
> "value":0, "name":"warm"
>
> }, {
>
> "value":1, "name":"default"
>
> }, {
>
> "value":2, "name":"cold"
>
> }, {
>
> "value":3, "name":"custom"
>
> } \]
>
> } }

**10)..** **Set** **diispllay** **parameters**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/screen/display-parameter

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||
||

**Return** **Vallue:** NULL

> 95
>
> <img src="./t4qz0mdj.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./sk4otdqj.png"
> style="width:7.35417in;height:1.63542in" />POST
> /centralcontrol/screen/display-parameter
>
> {
>
> "id":0, "contrast":68, "saturation":65,
>
> "color-temperature":3 }
>
> **Response** **Examplle**
>
> <img src="./rx43ujt4.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**11)..** **Reset** **diispllay** **parameters**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/screen/reset-display-parameter

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./x5ie5bi4.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/screen/reset-display-parameter
>
> {
>
> "id":0 }
>
> **Response** **Examplle**
>
> 96
>
> <img src="./bz1n4baj.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./uyhkiiin.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**12)..** **Set** **custom** **collor** **temperature**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/screen/color-temperature/custom

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./lqpfghm0.png"
> style="width:7.35417in;height:1.63542in" />POST
> /centralcontrol/screen/color-temperature/custom
>
> {
>
> "id":0, "red":128, "green":116, "blue":131
>
> }
>
> **Response** **Examplle**
>
> <img src="./31n0fvjb.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }
>
> 97
>
> <img src="./xum0o5an.png"
> style="width:1.00028in;height:0.20839in" />HTTPS
> API<img src="./qmw3dd53.png"
> style="width:6.11458in;height:0.94792in" />

**5.** **Mulltii-mode** **controll**

**1)** **Get** **the** **lliist** **of** **conference** **pllatforms**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/meeting-platform/mode-list

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

> ume: UME meeting
>
> yms: YMS meeting
>
> zoom: Zoom meeting
>
> general: Yealink meeting
>
> tencent: Tencent meeting
>
> feishu: Feishu meeting

byod: BYOD mode **Note**

> **Examplle** **of** **a** **request**
>
> 98
>
> <img src="./acxevure.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./0weddgyb.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/meeting-platform/mode-list
>
> { }
>
> **Response** **Examplle**
>
> <img src="./jbh020fp.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "mode-list":\["ume","yms","zoom"\] }
>
> }

**2)** **Set** **up** **the** **conference** **pllatform..**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/meeting-platform

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

> ume: ume meeting
>
> yms: yms meeting
>
> zoom: zoom meeting
>
> general: Yealink meeting
>
> tencent: Tencent meeting
>
> feishu: Feishu meeting
>
> 99
>
> <img src="./cuwkhk15.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

byod: BYOD mode **Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./5kru1o5t.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/meeting-platform
>
> {
>
> "type": "ume" }
>
> **Response** **Examplle**
>
> <img src="./kpf4cpop.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**3)** **Get** **current** **pllatform..**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/meeting-platform/current-mode

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./0rq0wtc3.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/meeting-platform/current-mode
>
> { }
>
> **Response** **Examplle**
>
> 100
>
> <img src="./hvkhh02z.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./svhj5y4u.png"
> style="width:7.35417in;height:1.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "name":"zoom" }
>
> }

**6.** **Wiirelless** **Controll**

**1)** **Enablle** **Blluetooth..**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/bluetooth

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./qz0ee5cp.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/bluetooth
>
> {
>
> "status": "on" }
>
> **Response** **Examplle**
>
> <img src="./gju34y4t.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**7.** **Camera** **llayout** **controll**

> 101
>
> <img src="./alxms2xq.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**1)** **Set** **camera** **llayout** **status**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera-layout/switch

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./5ahvvkij.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/camera-layout/switch
>
> {
>
> "status": "on" }
>
> **Response** **Examplle**
>
> <img src="./xvddmelp.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**2)** **Set** **camera** **llayout** **type**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera-layout/type

> 102
>
> <img src="./tm5gi1nq.png"
> style="width:1.00028in;height:0.20839in" />HTTPS
> API<img src="./5hd3y0tz.png"
> style="width:6.11458in;height:2.82292in" />

**Request** **Parameters:** **Body:**

||
||
||
||
||
||
||

> 103
>
> <img src="./1ffj2nuz.png"
> style="width:1.00028in;height:0.20839in" />HTTPS
> API<img src="./51anqoul.png"
> style="width:2.53125in;height:0.94792in" /><img src="./2ze4crn4.png"
> style="width:2.53125in;height:0.94792in" /><img src="./x5rdch32.png"
> style="width:2.53125in;height:0.94792in" /><img src="./5ruo0mam.png"
> style="width:2.53125in;height:0.94792in" />

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request** **(YRC)**
>
> 104
>
> <img src="./ewdc2cgd.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./40im1v5o.png"
> style="width:7.35417in;height:2.46875in" />POST
> /centralcontrol/camera-layout/type
>
> {
>
> "type": "fullscreen", "sn":"8703018090000132", "pip-param":
>
> {
>
> "small-screen-position":"top-left", "small-screen-size":"one-fourth",
> "main-screen-type":"panorama", "second-screen-type":"auto-frame"
>
> } }
>
> **Examplle** **of** **a** **request** **(VCS)**
>
> <img src="./lrmhnaft.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/camera-layout/type
>
> {
>
> "type": "fullscreen",
>
> "focus-camera": "8703018090000132" }
>
> **Response** **Examplle**
>
> <img src="./fef22hsp.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**3)** **Set** **up** **camera** **llayout** **and** **camera**
**posiitiion..(MVC)**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera-layout/position

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||

> 105
>
> <img src="./oh2ggsf0.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./toipypdw.png"
> style="width:7.35417in;height:3.63542in" />POST
> /centralcontrol/camera-layout/position
>
> {
>
> "position-list":\[ {
>
> "sn":"806009E070000512", "left":0,
>
> "top":134, "width":1440, "height":810
>
> }, {
>
> "sn":"806007D120000442", "left":1440,
>
> "top":134, "width":480, "height":270
>
> } \]
>
> }
>
> **Response** **Examplle**
>
> <img src="./mbaqrl3y.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**4）** **Settiing** **up** **camera** **llayout** **and** **camera**
**posiitiion（YRC)**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/camera-layout/position

||
||
||

> 106
>
> <img src="./regwma4v.png"
> style="width:1.00028in;height:0.20839in" />HTTPS
> API<img src="./a3kwf5zu.png"
> style="width:5.91667in;height:0.94792in" />

**Request** **Parameters:** **Body:**

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./yqliiqic.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/camera-layout/position
>
> {
>
> "sn":"8703018090000132", "position": 4
>
> }
>
> **Response** **Examplle**
>
> <img src="./45chn0un.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }
>
> Layout positions follow left-to-right order, with equal divisions
> based on the maximum quantity of 1+N as a reference:
>
> Equal parts:
>
> 1+N：

**5)** **Obtaiin** **camera** **llayout** **type**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/camera-layout/type

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

> 107
>
> <img src="./hylun3fl.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./yhc0wwkm.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/camera-layout/type
>
> { }
>
> **Response** **Examplle**
>
> <img src="./ppvllpfv.png"
> style="width:7.35417in;height:2.13542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "type":"fullscreen",
>
> "focus-camera":"8703018090000132" }
>
> }

**8.** **App** **controll**

**1)** **Briing** **the** **App** **to** **the** **foretend..**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/app/start

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:**

> 108
>
> <img src="./neea4pvg.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> NULL **Note**
>
> **Examplle** **of** **a** **request**
>
> <img src="./pypzvfns.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/app/start
>
> {
>
> "id": "com.yealink.byod" }
>
> **Response** **Examplle**
>
> <img src="./juvkkh4u.png"
> style="width:7.35417in;height:2.13542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }
>
> 参数错误： {
>
> "status":400 }

**2)..** **Get** **the** **front-end** **app**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/app/foreground

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||
||
||

> **Examplle** **of** **a** **request**
>
> <img src="./wweycpde.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/app/foreground
>
> { }
>
> **Response** **Examplle**
>
> 109
>
> <img src="./42hji404.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./ywros4yd.png"
> style="width:7.35417in;height:2.13542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8 {
>
> "status":200, "data":
>
> {
>
> "id":"com.yealink.byod", "name":"BYOD", "version":"1.0"
>
> } }

**9.** **API** **Permiissiions**

**1)..** **Get** **physiicall** **iinterface** **lliist**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/phiysical-interface/list

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:**

||
||
||
||

> interface_list

||
||
||
||
||
||

> 110
>
> <img src="./jwvvoewk.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./vfkuje2c.png"
> style="width:7.35417in;height:1.13542in" />GET
> /centralcontrol/phiysical-interface/list
>
> {
>
> "type":"ALL" }
>
> **Response** **Examplle**
>
> <img src="./iygc5w2j.png"
> style="width:7.35417in;height:4.63542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "interface-list": \[ {
>
> "id":0, "name":"VCH", "type":"VIDEO", "connceted":true, "status":"on"
>
> }, {
>
> "id":0, "name":"LINE_IN", "type":"AUDIO", "connceted":false,
> "status":"on"
>
> } \]
>
> } }

**2)..** **Set** **the** **physiicall** **iinterface** **swiitch**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/phiysical-interface/enable

||
||
||

**Request** **Parameters:**

> 111
>
> <img src="./c3benir1.png"
> style="width:1.00028in;height:0.20839in" />HTTPS
> API<img src="./utrekup0.png"
> style="width:5.13542in;height:0.73958in" />

**Body:**

||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./cxrv0tb0.png"
> style="width:7.35417in;height:1.46875in" />""POST
> /centralcontrol/phiysical-interface/enable
>
> {
>
> "name": "VCH", "id": 0, "status": "on"
>
> }
>
> **Response** **Examplle**
>
> <img src="./lrpo1bcf.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**10.** **Other**

**1)** **Remote** **controll** **button** **operatiion**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/button

**Request** **Parameters:** **Body:**

||
||
||

> 112
>
> <img src="./sbghkxvv.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./sf2q0xms.png"
> style="width:7.35417in;height:1.13542in" />POST /centralcontrol/button
>
> {
>
> "key": "left" }
>
> **Response** **Examplle**
>
> <img src="./hhvanwdg.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**2)** **Set** **the** **status** **of** **the** **meetiing** **room**
**to** **be** **diiviidablle..**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/splitroom/status

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

> 113
>
> <img src="./d0wvckh0.png"
> style="width:1.00028in;height:0.20839in" />HTTPS
> API<img src="./edrnhizk.png"
> style="width:3.11458in;height:2.40625in" />

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./d14pjwii.png"
> style="width:7.35417in;height:1.30208in" />POST
> /centralcontrol/splitroom/status
>
> {
>
> "sn":"8703018090000132", "value": 0
>
> }
>
> **Response** **Examplle**
>
> <img src="./c5kzy0dh.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**3)** **Set** **up** **diiviisiiblle** **meetiing** **rooms**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/division-room/config

> 114
>
> <img src="./a242y43b.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**room_iinfo**

||
||
||
||

**Return** **Vallue:** NULL

**Note:**

> **Examplle** **of** **a** **request**
>
> <img src="./saf54min.png"
> style="width:7.08333in;height:2.96875in" />POST
> /centralcontrol/division-room/config {
>
> "room_info":\[ {
>
> "room_id":\[ 1,
>
> 2 \]
>
> }, {
>
> "room_id": \[ 3
>
> \] }
>
> \] }
>
> Note: Divide the space into 2 rooms. The first room includes two
> minimum splittable rooms (1 and 2), and the second room includes one
> minimum splittable room (3).
>
> **Response** **Examplle**
>
> <img src="./5mqgtbpl.png"
> style="width:7.08333in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }
>
> 115
>
> <img src="./uf1gjspq.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**4)..** **Get** **Splliit** **Meetiing** **Room** **Status**

Basic Information **Method:** GET

**Path:** /centralcontrol/division-room/config

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**room_iinfo**

||
||
||
||

**Note:**

> **Examplle** **of** **a** **request**
>
> <img src="./phh5blqg.png"
> style="width:7.35417in;height:0.80208in" />GET
> /centralcontrol/division-room/config {
>
> }
>
> 116
>
> <img src="./iso5yqke.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> **Response** **Examplle**
>
> <img src="./dsgvhivw.png"
> style="width:7.08333in;height:4.46875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8 {
>
> "status":200, "data":
>
> {
>
> "room_info":\[ {
>
> "room_id":\[ 1
>
> \] }, {
>
> "room_id":\[ 2
>
> \] }, {
>
> "room_id":\[ 3
>
> \] }
>
> \]
>
> } }

**Health** **services**

> Monitor the health status of devices and provide an alert mechanism.

**1.** **Settiing** **Log** **Sever** **Address**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/system/log-server

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

> 117
>
> <img src="./vznwsjwn.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> 118
>
> <img src="./5cmuqzig.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./wrvinmio.png"
> style="width:7.35417in;height:1.96875in" />POST
> /centralcontrol/system/log-server
>
> {
>
> "enable": 1, "server":"syslog.test.yealink.com", "port":514,
>
> "facility":1, "level":6, "transport-type":0
>
> }
>
> **Response** **Examplle**
>
> <img src="./xgtpamdr.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**2.** **Access** **system** **llogs**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/diagnostics/log

||
||
||

**Request** **Parameters:** **Body:**

> NULL

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./m2gsfckk.png"
> style="width:7.35417in;height:0.96875in" />GET
> /centralcontrol/diagnostics/log
>
> { }
>
> **Response** **Examplle**
>
> 119
>
> <img src="./vr5ziqkh.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./f42wctny.png"
> style="width:7.35417in;height:0.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> file

**3.** **Network** **diiagnosiis**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/diagnostics/network

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||

**Return** **Vallue:**

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./ioxze3en.png"
> style="width:7.35417in;height:1.46875in" />POST
> /centralcontrol/diagnostics/network
>
> {
>
> "action": "ping", "num": 5,
>
> "ip": "10.50.150.1", }
>
> **Response** **Examplle**
>
> 120
>
> <img src="./zzftnvmh.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./x12bryns.png"
> style="width:7.35417in;height:3.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "result": "PING 10.50.150.146 (10.50.150.146) 56(84) bytes of data. 64
> bytes from 10.50.150.146: icmp_seq=1 ttl=64 time=0.164 ms 64 bytes
> from 10.50.150.146: icmp_seq=2 ttl=64 time=0.087 ms 64 bytes from
> 10.50.150.146: icmp_seq=3 ttl=64 time=0.091 ms
>
> --- 10.50.150.146 ping statistics ---
>
> 3 packets transmitted, 3 received, 0% packet loss, time 2051ms rtt
> min/avg/max/mdev = 0.087/0.114/0.164/0.035 ms"
>
> } }
>
> 参数错误： {
>
> "status":400 }

**4.** **Start** **or** **stop** **packet** **capture** **fiille**
**uplload.**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/diagnostics/packetcapture

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||
||

> 121
>
> <img src="./ymulr110.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> 1: SIP or H245 or H225
>
> 2: RTP
>
> 3: Not RTP\| Yes (start capturing packets)\| Filter type; the filter
> takes effect if the value is 0. \| operation\| string\| start: start
> capturing packets
>
> stop: stop capturing packets
>
> get: retrieve captured packet files\| Yes\| Packet capturing action;
> when stopping or getting, there is no need to carry the above three
> parameters.
>
> Note:
>
> 1\. It is recommended to send the get command every 5 minutes after
> starting the packet capturing to obtain the packet capture file. The
> packet capture files need to be concatenated by yourself (you may get
> empty files because the device side has not yet generated the file at
> this time); if more than 10 minutes have passed without getting, it is
> considered to abandon the most recent packet capture file and stop
> capturing.

2\. When stopping, the device side responds that the most recent file
has not been uploaded. **Return** **Vallue:**

> File:

||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> 122
>
> <img src="./gkggw0h5.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./oq5cei24.png"
> style="width:7.35417in;height:4.80208in" />POST
> /centralcontrol/diagnostics/packetcapture
>
> ⾃定义过滤抓包开始： {
>
> "filter": "tcp", "interface": "wan", "filter-type": 0, "operation":
> "start"
>
> }
>
> 指定过滤条件抓包开始： {
>
> "filter": "", "interface": "wan", "filter-type": 2, "operation":
> "start"
>
> }
>
> 获取抓包⽂件： {
>
> "operation": "get" }
>
> 停⽌抓包： {
>
> "operation": "stop" }
>
> **Response** **Examplle**
>
> When the start operation is successful, the response for capturing
> packets begins:
>
> <img src="./oeycqso2.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, }
>
> When the get/stop operation is performed, the device end has already
> generated the file and sent it.
>
> <img src="./xbbswqid.png"
> style="width:7.35417in;height:0.96875in" />HTTP/1.1 200 OK
>
> Content-Type: application/octet-stream
>
> file

**5.** **Allarm**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/diagnostics/alert

||
||
||

**Request** **Parameters:**

> 123
>
> <img src="./rxyvodad.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Body:**

||
||
||
||

> major: primary
>
> minor: minor
>
> all: all\| No\| If severity is not specified, it defaults to critical.
> \| from-time\| long\| Unit: seconds;
>
> the earliest time point is 7 days ago.\| No\| 1. Respond with a list
> of alarm events between the from-time and the time the command is
> sent.
>
> 2\. If from-time is not specified, default to responding with a list
> of alarm events from the last ten minutes.
>
> 3\. The timestamp refers to the number of seconds elapsed between a
> certain moment and "00:00:00" UTC on January 1, 1970.

**Return** **Vallue:**

||
||
||
||

**allert_lliist**

||
||
||
||

> Update Configuration failure: Configuration file update failed
>
> Update Firmware failure: Firmware upgrade failed
>
> Wireless microphone low battery: Low battery for wireless microphone\|
> Event Name \| severity\| string\| critical: severe
>
> major: primary
>
> minor: minor\| NULL
>
> \| action-time\| long\| Unit: seconds\| Alarm timestamp \| mac\|
> string\| NULL\| device mac address

\| ip\| string\| NULL\| Device IP address **Note**

> **Examplle** **of** **a** **request**
>
> 124
>
> <img src="./xqxtbwfr.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API
>
> <img src="./e1fe5omj.png"
> style="width:7.35417in;height:1.30208in" />GET
> /centralcontrol/diagnostics/alert
>
> {
>
> "severity": "major",
>
> "from-time": 1701138336 }
>
> **Response** **Examplle**
>
> <img src="./43wsmi1a.png"
> style="width:7.35417in;height:4.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8 {
>
> "status":200, "data":
>
> {
>
> "alert-list": \[ {
>
> "name": "Update Configuration failure", "severity": "major",
>
> "action-time": 1701138336, "mac": "00:00:00:00:00:00", "ip":
> "10.50.15.1"
>
> }, {
>
> "name": "Dsk slave disconnect", "severity": "critical",
>
> "action-time": 1701138336, "mac": "00:00:00:00:00:00", "ip":
> "10.50.15.1"
>
> } \]
>
> } }

**Update** **service**

> Update the firmware of the device itself and its peripheral
> accessories.

**1.** **Deviice** **upgrade**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/upgrade/firmware/start

||
||
||

**Request** **Parameters:**

> 125
>
> <img src="./lv4iia5k.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Body:**

||
||
||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./qusksuua.png"
> style="width:7.35417in;height:1.60417in" /><img src="./3qtsr0fy.png" /><img src="./1colbeyz.png" />POST
> /centralcontrol/upgrade/firmware/start
>
> {
>
> "sn":"803032E070000031",
>
> "url":
> "https://packet-nexus.yealink.com/service/rest/repository/browse/repo-packet-release/AllRom/MeetingEye500-rom/
> "time":-1
>
> }
>
> <img src="./g2qop20b.png"
> style="width:7.35417in;height:1.60417in" /><img src="./l2pjmpfz.png" /><img src="./qvc1maqq.png" />POST
> /centralcontrol/upgrade/firmware/start
>
> {
>
> "device":"uvc86",
>
> "url":
> "https://packet-nexus.yealink.com/service/rest/repository/browse/repo-packet-release/AllRom/MeetingEye500-rom/
> "time":-1
>
> }
>
> **Response** **Examplle**
>
> <img src="./5xnzpfa3.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**2.** **Deviice** **upgrade** **cancellllatiion**

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/upgrade/firmware/cancel

> 126
>
> <img src="./a422iube.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./1ca13ovu.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/upgrade/firmware/cancel
>
> {
>
> "sn":"803032E070000031" }
>
> <img src="./ca4rgxgs.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/upgrade/firmware/cancel
>
> {
>
> "deivce":"uvc84" }
>
> **Response** **Examplle**
>
> <img src="./4cmyjqlx.png"
> style="width:7.35417in;height:1.30208in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200 }

**3.** **Obtaiin** **upgrade** **status**

**Basiic** **Informatiion** **Method:** GET

**Path:** /centralcontrol/upgrade/firmware/status

||
||
||

**Request** **Parameters:**

> 127
>
> <img src="./n30zgivt.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

**Body:**

||
||
||
||

**Return** **Vallue:**

||
||
||
||
||

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./qos1xcxc.png"
> style="width:7.35417in;height:1.13542in" />GET
> /centralcontrol/upgrade/firmware/status
>
> {
>
> "sn":"803032E070000031" }
>
> **Response** **Examplle**
>
> <img src="./eapwwbyi.png"
> style="width:7.35417in;height:2.13542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status":200, "data":
>
> {
>
> "status":"upgrading", "progress": 48
>
> } }

**Configuration** **Service**

**1.** **Confiiguratiion** **Fiille** **Update**

> This operation lets you update settings for a range of toggles such as
> Wi-Fi, wireless hotspot, and Bluetooth (Note: Configuration file
> updates are not allowed during a call.)

**Basiic** **Informatiion** **Method:** POST

**Path:** /centralcontrol/config/update

> 128
>
> <img src="./xrg0qobj.png"
> style="width:1.00028in;height:0.20839in" />HTTPS API

||
||
||

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Vallue:** NULL

**Note**

> **Examplle** **of** **a** **request**
>
> <img src="./uwgxsyt5.png"
> style="width:7.35417in;height:1.13542in" />POST
> /centralcontrol/config/update
>
> {
>
> "url": "http://1.1.1.1/test.cfg" }
>
> **Response** **Examplle**
>
> <img src="./5swi0xph.png"
> style="width:7.35417in;height:2.13542in" />HTTP/1.1 200 OK
>
> Content-Type: application/json; charset=utf-8
>
> {
>
> "status": 200 }
>
> 设备繁忙： {
>
> "status": 400 }
>
> 129
