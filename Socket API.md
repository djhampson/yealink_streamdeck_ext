> <img src="./n2wmgpwt.png"
> style="width:1.00028in;height:0.20839in" />Socket API

**Socket** **API**

> **Basic** **Description** **of** **the** **Central** **Control**
> **Environment** **(instructions)**
>
> **1.** **Purpose**
>
> This document provides a detailed explanation of the functionality and
> syntax of the control API commands for the central control module. It
> enables readers to quickly understand the relevant features of the
> central control module and guide developers in their subsequent coding
> work. This guide facilitates the completion of the development of the
> control host for Yealink VCS products' network mode.
>
> **2.** **Introductiion**
>
> **2..1** **Network** **Mode** **Confiiguratiion** **Descriiptiion**
>
> The device supports network mode to control the host device, using TCP
> protocol to establish a connection. The client needs to know the ip
> address and port number of the host to connect to the host side.
>
> The following parameters need to be configured for network mode:
>
> 1\> The control port of the network mode of the center control is
> configured as: 6024 2\> IP address can be viewed according to the
> actual situation
>
> 3\>If the central control system's network mode has enabled password
> authentication, when establishing a TCP connection using the TCP
> protocol, you will need to input a password and authenticate it
> successfully before being able to execute central control commands
> normally. The password format for input is "XXXX\r\n", where XXXX
> represents the correct password.
>
> For example, after establishing a TCP connection, if you receive the
> message "Password:\r\n", it indicates that you need to input the
> authentication password.
>
> If an incorrect password is entered, the connection will return
> "Invalid Password!\r\nPassword:\r\n", prompting you to re-enter the
> password for authentication.
>
> Once you enter the correct password, the connection will respond with
> "welcome yealink central control". This
>
> indicates that the authentication was successful and you can proceed
> with controlling the central system. **2..2** **Seriiall** **Port**
> **Mode** **Confiiguratiion** **Descriiptiion**
>
> Some devices support serial port mode for controlling host devices,
> such as M500 and M900. The client needs to connect to the host device
> using a serial cable, and the host device will recognize the serial
> port connection and establish communication using the serial protocol.
>
> The baud rate, data bits, parity bit, and stop bit of the serial port
> can be configured through the device's web interface.
>
> **3.** **API** **Diirectiives**
>
> **3..1** **APII** **Basiic** **Syntax** **Descriiptiion**
>
> This introduction to the device center control API command description
> file. In order to facilitate the description of the API command
> syntax, the format of the API writing the following statements and
> conventions:
>
> Instruction words are all lowercase
>
> 1
>
> <img src="./kvasdkif.png"
> style="width:1.00028in;height:0.20839in" />Socket API
>
> Command basic structure: command + parameter
>
> Parameter composition: parameter name + parameter value ------
> separated by colon, the command parameter overall with the httpapi
> format, in the form of json string transmission
>
> Note: The 'app' parameter is unique and separate from other
> parameters. It operates independently outside the JSON format during
> transmission. This parameter indicates that the instruction being
> called is specific to the app. If this parameter is not included, the
> default behavior is to execute instructions at the system level.

**3..2** **Descriiptiion** **of** **the** **Basiic** **Packet**
**Format**

> 1\. Description of sending format Use \r\n (carriage return line feed)
> as the end identifier. All API commands must be terminated with the
> delimiter \r\n.
>
> 2\. Description of return format: Adoption of \r\n as end identifier
> All return packets will have the end identifier of \r\n
>
> 3\. Command basic format:
>
> Command + \r\n (no parameter type)
>
> Command + space + json string + \r\n (with parameter type)

Command + space + app:value + space + json string + \r\n (with
parameters and app parameter type) **3..2** **Detaiilled**
**Descriiptiion** **of** **APII** **Commands**

> The currently supported API command list is described below. Please
> refer to the command documentation. For debugging, you can use a tcp
> debugging tool to set up and test API commands, according to the
> environment setup instructions provided above. The commands and
> parameters supported may vary depending on the version and device
> model. Parameters enclosed in "\[\]" are optional.

**System** **Layer**

> Preface: In the following command instructions, the request parameters
> in "\[\]" are all optional. Input parameters for commands must be
> provided in json string format. Fields involving Chinese characters,
> such as names, must use UTF-8 encoding.

**System** **Syntax**

**1..** **Get** **System** **Versiion** **IInformatiion**

> **Return** **Parameters**

||
||
||
||
||
||
||
||
||

> **Descriiptiion**

||
||
||

> 2
>
> <img src="./xba11w3p.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||

**2..** **Obtaiiniing** **System** **Status**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**3..** **Settiing** **the** **System** **Status**

> **Request** **Parameters**

||
||
||
||

> 3
>
> <img src="./skotdgcy.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**4..** **Settiing** **Log** **Sever** **Address**

> **Request** **Parameters**

||
||
||
||

> 4
>
> <img src="./gteene1v.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||

> 5
>
> <img src="./3p2glwco.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

**5..** **Get** **deviice** **lliist**

> **Return** **Parameters**

||
||
||
||

**deviice_iinfo**

||
||
||
||
||
||
||
||
||

> Description

||
||
||
||
||
||

> 6
>
> <img src="./hemp2x2q.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**6..** **Retriieve** **Workiing** **Hours**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**7..** **Retriieve** **CPU** **IInformatiion**

> **Return** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||

> 7
>
> <img src="./n5ncx0lw.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

**8..** **Retriieve** **system** **hardware** **iinformatiion**

> **Return** **Parameters**

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

> **Descriiptiion**

||
||
||
||
||
||
||

**9..** **Read** **usb** **connectiion** **status**

> **Return** **Parameters**

||
||
||

> 8
>
> <img src="./uncbcjf4.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**10..** **Read** **memory** **iinformatiion**

> **Return** **Parameters**

||
||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**11..** **Read** **deviice** **status**

> **Return** **Parameters**

||
||
||

> 9
>
> <img src="./h4uxiw5l.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**12..** **Confiigure** **allert** **notiifiicatiion** **rulles**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

> 10
>
> <img src="./e5bikoyj.png"
> style="width:1.00028in;height:0.20839in" />Socket API

**13..** **Retriieve** **the** **current** **tiime**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**14..** **Retriieve** **Hardware** **IInformatiion**

> **Return** **Parameters**

||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**15..** **Get** **BYOD-EXTENDER** **Status**

> **Return** **Parameters**

||
||
||

> 11
>
> <img src="./g3bn4wyc.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**16..** **Confiigure** **deviice** **llocatiion** **swiitch**

> **Request** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**17..** **Confiigure** **LED** **On/Off** **Swiitch**

> **Request** **Parameters**

||
||
||

> 12
>
> <img src="./v02uqfay.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**18..** **Get** **LED** **swiitch** **status**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**19..** **Set** **the** **LED** **event** **collor**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**
>
> 13
>
> <img src="./n0h1ho2p.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||
||

**20..** **Retriieve** **the** **collor** **of** **the** **LED**
**event**

> **Request** **Parameters**

||
||
||
||

> Return Parameters

||
||
||
||
||

> Description

||
||
||
||
||
||
||

**Button** **Syntax**

**1..** **Remote** **Controll** **Button** **Operatiion**

> **Request** **Parameters**

||
||
||
||

> 14
>
> <img src="./houfppky.png"
> style="width:1.00028in;height:0.20839in" />Socket API
>
> **Descriiptiion**

||
||
||
||
||
||
||

**Camera** **Syntax**

**1..** **Controll** **Camera** **Movement**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||

> 15
>
> <img src="./5ska14lm.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||

**2..** **Controll** **Camera** **Focus**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||

> 16
>
> <img src="./ewwfnckd.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||

**3..** **Obtaiiniing** **the** **Camera** **Posiitiion**

> **Request** **Parameters**

||
||
||
||

> **Return** **Parameters**

||
||
||
||
||

> 17
>
> <img src="./qxbxecnp.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**4..** **Settiing** **the** **Camera** **Posiitiion**

> **Request** **Parameters**

||
||
||
||

> 18
>
> <img src="./1nmhupwc.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 19
>
> <img src="./ffzam2cn.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**5..** **Gettiing** **a** **Liist** **of** **Cameras**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**6..** **Gettiing** **Camera** **Detaiills**

> **Request** **Parameters**

||
||
||
||

> **Return** **Parameters**

||
||
||
||
||
||
||
||

> 20
>
> <img src="./lgzlm5vx.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**7..** **Settiing** **the** **Camera** **AII** **Mode**

> **Request** **Parameters**

||
||
||

> 21
>
> <img src="./xznljzc0.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

> **Descriiptiion**

||
||
||

> 22
>
> <img src="./4fvb5qug.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||

**8..** **Applly** **Camera** **Preset** **Posiitiion** **Request**
**Parameters**

> 23
>
> <img src="./eogk5ibi.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**9..** **Settiing** **Camera** **Preset** **Posiitiion**

> **Request** **Parameters**

||
||
||
||
||

> 24
>
> <img src="./oz4ms4jb.png"
> style="width:1.00028in;height:0.20839in" />Socket API
>
> **Descriiptiion**

||
||
||
||
||
||
||

**10)** **Non-slleep** **mode** **swiitch**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 25
>
> <img src="./xlodtp2q.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**11)** **Viideo** **Fence** **swiitch**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**12)** **Set** **Mulltii-camera** **Trackiing**

> **Request** **Parameters**

||
||
||

> 26
>
> <img src="./44htincw.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**13..** **Retriieve** **camera** **status**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

> 27
>
> <img src="./zcolkfwf.png"
> style="width:1.00028in;height:0.20839in" />Socket API

**14..** **Get** **the** **AII** **peoplle** **count**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**15..** **Read** **viideo** **parameters**

> **Return** **Parameters**

||
||
||
||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||

> 28
>
> <img src="./voik4ikx.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

**16..** **Retriieve** **Viideo** **Wallll** **Status**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**17..** **Set** **Actiive** **Camera**

> **Request** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**Screen** **Syntax**

> 29
>
> <img src="./fhqstcai.png"
> style="width:1.00028in;height:0.20839in" />Socket API

**1..** **Gettiing** **Screen** **Briightness**

> **Request** **Parameters**

||
||
||
||

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**2..** **Settiing** **Screen** **Briightness**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**3..** **Retriieve** **diispllay** **parameters**

> 30
>
> <img src="./pukdqcib.png"
> style="width:1.00028in;height:0.20839in" />Socket API
>
> **Request** **Parameters**

||
||
||
||

> **Return** **Parameters**

||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**4..** **Retriieve** **collor** **temperature** **iinformatiion**
**lliist**

> **Request** **Parameters**

||
||
||
||

> Return Parameters

||
||
||
||

> color_temperature_list
>
> 31
>
> <img src="./3nbmcptb.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**5..** **Confiigure** **diispllay** **settiings**

> **Request** **Parameters**

||
||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 32
>
> <img src="./yjs0f3wk.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**6..** **Reset** **diispllay** **settiings**

> **Request** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**7..** **Set** **Custom** **Collor** **Temperature**

> **Request** **Parameters**

||
||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 33
>
> <img src="./5muv1z0a.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**8..** **Get** **lliist** **of** **siignall** **sources**

> **Return** **Parameters**

||
||
||
||

**source_lliist**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**9..** **Get** **current** **siignall** **source**

> **Return** **Parameters**

||
||
||

> 34
>
> <img src="./yz4mvotd.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**10..** **Set** **current** **iinput** **source**

> **Request** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 35
>
> <img src="./5c2nodxl.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**11..** **Get** **the** **defaullt** **boot** **iinput** **source**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**12..** **Set** **defaullt** **iinput** **source** **on** **startup**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||

> 36
>
> <img src="./ypio40ks.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||

**app** **syntax**

**1..** **Retriieve** **the** **foreground** **app**

> **Return** **Parameters**

||
||
||
||
||
||

> Description

||
||
||
||
||
||
||

**2..** **Retriieve** **app** **iinformatiion** **lliist..**

> **Return** **Parameters**

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

> 37
>
> <img src="./2mvnasxl.png"
> style="width:1.00028in;height:0.20839in" />Socket API
>
> Description

||
||
||
||
||
||
||

**3)** **Briing** **the** **App** **to** **the** **foretend..**

> **Request** **Parameters**

||
||
||
||

> Description

||
||
||
||
||
||
||

**Audiio** **Syntax**

**1..** **Retriieve** **audiio** **source** **lliist**

> **Return** **Parameters**

||
||
||

> 38
>
> <img src="./r3oqfcqc.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**2..** **Settiing** **the** **Audiio** **IInput** **Source**

> **Request** **Parameters**

||
||
||

> 39
>
> <img src="./1lbnwd1p.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**3..** **Settiing** **the** **Audiio** **Output** **Source**
**Request** **Parameters**

> 40
>
> <img src="./4nks1pwa.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

> AUTO: AUTO
>
> VCP: CP96X device
>
> hdmi: hdmi
>
> LINE: LINE Out
>
> USB_LINE: USB to LINE Output
>
> BUILT_IN: Built-in Speaker
>
> HEADSET: Headset
>
> BT_HEADSET: Bluetooth Headset
>
> WIRED_SPEAKER: Wired Speaker **Descriiptiion**

||
||
||
||
||
||
||

**4..** **Retriieve** **Audiio** **mute** **Status** **(Deprecated,,**
**use** **miic-mute)**

> **Return** **Parameters**

||
||
||
||

> 41
>
> <img src="./ilcxbcd5.png"
> style="width:1.00028in;height:0.20839in" />Socket API
>
> **Descriiptiion**

||
||
||
||
||
||
||

**5..** **Settiing** **the** **Audiio** **Mute** **State（** **MVC）**

> **Request** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||

> Note:
>
> 1\. AP08, AVBridge, CM20, CM50, CS10, CS10-D set mute status for all
> device channels, and are not synchronized with the status fetched/set
> from the single-channel mute API.
>
> \| Send Format\| audio set mute {"status":"off"}\r\n
>
> \| Return Format\| audio set mute {"status":"off"}\r\n \| Example\|
> Send：
>
> audio set mute {"status":"off"} \r\n Return:

audio set mute {"status":"off"} \r\n **6..** **Settiing** **the**
**Audiio** **Mute** **State（** **VCS）**

> **Request** **Parameters**

||
||
||
||

> **Descriiptiion**
>
> 42
>
> <img src="./b4kzrwm4.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||
||

**7..** **Gettiing** **the** **Vollume**

> **Request** **Parameters**

||
||
||
||

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||

> 1\. When the UVC40 device calls this API, no parameters are required.
>
> 43
>
> <img src="./rs2s235u.png"
> style="width:1.00028in;height:0.20839in" />Socket API
>
> 2\. For MeetingBoard 65/86/MeetingEye 500, the volume type is
> optional, default is "idle" (in Single Volume Mode, idle and talk
> volumes are synchronized).\*\*
>
> \| Send Format\| audio get volume {\["type":"idle"\]} \r\n \| Return
> Format\| audio get volume {"value":5}\r\n
>
> \| Example\| **Wiith** **type** **siituatiion:** Send：
>
> audio get volume {"type":"idle"} \r\n Return:
>
> audio get volume {"value":5} \r\n **不带type情况：**
>
> Send：
>
> audio get volume \r\n Return:

audio get volume {"value":5} \r\n **8..** **Settiing** **the**
**Vollume**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||

> 1\. For MeetingBoard 65/86/MeetingEye 500, the volume type is
> optional, default is "idle" (in Single Volume Mode, idle and talk
> volumes are synchronized).\*\*
>
> \| Send Format\| audio set volume {"value":5,\["type":"idle"\]} \r\n
>
> \| Return Format\| audio set volume {"value":5,\["type":"idle"\]} \r\n
> \| Example\| **Wiith** **type** **siituatiion:**
>
> Send：
>
> audio set volume {"value":5,"type":"idle"} \r\n Return:
>
> audio get volume {"value":5, type":""} \r\n **Wiithout** **type**
> **siituatiion:**
>
> Send：
>
> audio set volume {"value":5}\r\n Return:

audio set volume {"value":5} \r\n **9)** **Set** **iinput** **audiio**
**noiise** **reductiion..**

> **Request** **Parameters**
>
> 44
>
> <img src="./5tk44mje.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||

> Note:
>
> 1\. Supported models for ai-mode: avhub, uvc84, uvc86
>
> 2\. Supported models for level: avhub, uvc84, uvc86, vcm34, vcm35,
> vcm38, cm20
>
> \| Send Format\| audio input set noise-reduction
> {"sn":"506607D117000009","ai-mode":"on","level":2} \r\n
>
> \| Return Format\| audio input set noise-reduction
> {"sn":"506607D117000009","ai-mode":"on","level":2} \r\n \| Example\|
> Send:
>
> audio input set noise-reduction
> {"sn":"506607D117000009","ai-mode":"on","level":2} \r\n
>
> Return:

audio input set noise-reduction
{"sn":"506607D117000009","ai-mode":"on","level":2} \r\n **10)** **Set**
**iinput** **audiio** **gaiin..**

> **Request** **Parameters**

||
||
||
||
||
||
||
||
||

> **Descriiptiion**
>
> 45
>
> <img src="./etuf443w.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

> Note:
>
> 1\. rca-value and line-value parameters only affect the adjusted
> device if it’s avhub
>
> \| Send Format\| audio input set gain
> {"status":"on","sn":"506011D110000054","gain-value":20,"rca-value":-6,"attenuation-value":20,"line-value":12}
> \r\n
>
> \| Return Format\| audio input set gain
> {"status":"on","sn":"506011D110000054","gain-value":20,"rca-value":-6,"attenuation-value":20,"line-value":12}
> \r\n
>
> \| Example\| Send:
>
> audio input set gain
> {"status":"on","sn":"506011D110000054","gain-value":20,"rca-value":-6,"attenuation-value":20,"line-value":12}
> \r\n
>
> Return:
>
> audio input set gain
> {"status":"on","sn":"506011D110000054","gain-value":20,"rca-value":-6,"attenuation-value":20,"line-value":12}
> \r\n

**11)** **Set** **up** **iinput** **audiio** **echo**
**cancellllatiion..**

> **Request** **Parameters**

||
||
||
||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||

> 46
>
> <img src="./b3u5lnnb.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

**12)** **Set** **iinput** **audiio** **equalliizer**

> **Request** **Parameters**

||
||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 47
>
> <img src="./dnfzruje.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**13)** **Set** **output** **audiio** **gaiin..**

> **Request** **Parameters**

||
||
||
||
||
||
||
||

> **Descriiptiion**
>
> \| Audio Command\| xml
>
> \<command\>audio output set gain\</command\> {"status":"
> \<value\>","sn":" \<value\>","gain-value":" \<value\>"}
> \|----------\|----------
>
> \| Supported Models\| Yealink RoomConnect Note:
>
> 1\. The rca-value and line-value parameters are only applicable to
> avhub devices for adjustment.
>
> \| Send Format\| audio output set gain
> {"status":"on","sn":"506011D110000054","gain-value":20,"attenuation-value":18,"line-value":10}
> \r\n
>
> \| Return Format\| audio output set gain
> {"status":"on","sn":"506011D110000054","gain-value":20,"attenuation-value":18,"line-value":10}
> \r\n
>
> \| Example\| Send：
>
> audio output: set gain
> {"status":"on","sn":"506011D110000054","gain-value":20,"attenuation-value":18,"line-value":10}
> \r\n
>
> Return:
>
> audio output set gain
> {"status":"on","sn":"506011D110000054","gain-value":20,"attenuation-value":18,"line-
>
> value":10} \r\n

**14)** **Set** **up** **output** **audiio** **equalliizer..**

> **Request** **Parameters**

||
||
||

> 48
>
> <img src="./g52jf3nq.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||

> **Descriiptiion**
>
> \| Audio Command\| xml \<status\>\</status\> \<sn\>\</sn\>
> \<mode\>\</mode\>
>
> \<frequency-range-list\>\</frequency-range-list\>
> \|----------\|----------
>
> \| Supported Models\| Yealink RoomConnect Note:
>
> 1\. The rca-value and line-value parameters are only applicable to
> avhub devices for adjustment.
>
> \| Send Format\| audio output set equalizer
> {"status":"on","sn":"506011D110000054","mode":"custom","frequency-range-list":
> \[12,5,-12,3,6,10,-5,2,0,3,9\]} \r\n
>
> \| Return Format\| audio output set equalizer
> {"status":"on","sn":"506011D110000054","mode":"custom","frequency-range-list":
> \[12,5,-12,3,6,10,-5,2,0,3,9\]}\r\n \| Example\| Send：
>
> audio output: set equalizer
> {"status":"on","sn":"506011D110000054","mode":"custom","frequency-range-list":
> \[12,5,-12,3,6,10,-5,2,0,3,9\]} \r\n
>
> Return:
>
> audio output set equalizer
> {"status":"on","sn":"506011D110000054","mode":"custom","frequency-range-list":

\[12,5,-12,3,6,10,-5,2,0,3,9\]} \r\n **15..** **Get** **miic** **mute**
**status**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||

> 49
>
> <img src="./wj2ceyx5.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||

**16..** **Retriieve** **Speaker** **Mute** **Status**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**17..** **Retriieve** **Audiio** **Fence** **(audiio** **wallll)**
**swiitch** **status**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 50
>
> <img src="./nj1nv5sn.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**18..** **Get** **deviice** **audiio** **channell** **iinformatiion**
**(deprecated;;** **use** **19** **iinstead)**

> **Return** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**19..** **Retriieve** **deviice** **channell** **audiio** **source**
**iinformatiion**

> **Return** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 51
>
> <img src="./d5ibch4s.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**20..** **Get** **deviice** **audiio** **channell** **actiivatiion**
**status** **(deprecated;;** **use** **21** **iinstead)**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**21..** **Retriieve** **deviice** **audiio** **channell**
**actiivatiion** **status**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**22..** **Get** **speaker** **posiitiion** **coordiinates**
**(deprecated;;** **use** **23** **iinstead)** **Return** **Parameters**

> 52
>
> <img src="./fxq4vxjk.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

**doa**

||
||
||
||
||
||
||

**snd_src**

||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**23..** **Retriieve** **speaker** **llocatiion** **coordiinates**

> **Return** **Parameters**

||
||
||
||

**doa**

> 53
>
> <img src="./2aduyxpx.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||
||

**snd_src**

||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**24..** **Get** **audiio** **parameter** **presets** **(deprecated,,**
**use** **25** **iinstead)**

> **Request** **Parameters**

||
||
||
||
||
||

> 54
>
> <img src="./yc5bbzlz.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**25..** **Retriieve** **audiio** **parameter** **presets**

> **Request** **Parameters**

||
||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||

> 55
>
> <img src="./i4hf0dt4.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

**26..** **Confiigure** **audiio** **parameter** **presets**
**(deprecated,,** **use** **27** **iinstead)**

> **Request** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**27..** **Confiigure** **audiio** **parameter** **presets**

> **Request** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 56
>
> <img src="./4og3gnlg.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**28..** **Set** **Gaiin** **(Deprecated,,** **recommended** **to**
**use** **29)**

> **Request** **Parameters**

||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**29..** **Set** **channell** **gaiin**

> **Request** **Parameters**

||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||

> 57
>
> <img src="./jiku3c5j.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

**30..** **Get** **Current** **Gaiin** **(Deprecated,,** **use** **31**
**iinstead)**

**Request** **Parameters:**

||
||
||
||

**Return** **Parameters**

||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**31..** **Get** **current** **gaiin**

**Request** **Parameters:**

||
||
||
||

**Return** **Parameters**

||
||
||

> 58
>
> <img src="./uqrtk3zq.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**32..** **Confiigure** **externall** **audiio** **iinput** **noiise**
**reductiion**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**
>
> \| Audio Command\| xml \<value\>\</value\> \<value\>\</value\>
>
> \`\`\`audio external-input set noise-reduction {"level":"
> \<value\>\</value\> ","sn":" \<value\>\</value\> "}
> \|----------\|----------
>
> \| Supported Models\| Yealink RoomConnect
>
> \| Send Format\| audio external-input set noise-reduction
> {"level":0,"sn":"506011D110000054"} \r\n
>
> \| Return Format\| audio external-input set noise-reduction
> {"level":0,"sn":"506011D110000054"} \r\n \| Example\| Send：
>
> audio external input noise reduction setting
> {"level":0,"sn":"506011D110000054"} \r\n Return:

audio external-input set noise-reduction
{"level":0,"sn":"506011D110000054"} \r\n **33..** **Set** **channell**
**mute** **status**

> 59
>
> <img src="./axmh3equ.png"
> style="width:1.00028in;height:0.20839in" />Socket API

**Request** **Parameters** **Request** **Parameters:**

**Body:**

||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**34..** **Get** **channell** **mute** **status**

**Request** **Parameters:** **Body:**

||
||
||
||

**Return** **Parameters** **Body:**

||
||
||
||
||
||

> **Descriiptiion**

||
||
||

> 60
>
> <img src="./yk5ii4ek.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||

> \<value\>\</value\> \`\`\`
>
> \`\`\`json
>
> {"channel_mute": \[{"name":" \<value\>","status":\<value\>}\]} \`\`\`
> \`\`\`json
>
> {"channel_mute": \[{"name":" ","status":}\]} \| Example\| Send：
>
> audio get channel mute {"channel_mute":
> \["Pickup-Area-1","Amplifier-Area-1"\]} \r\n Return:
>
> audio get channel mute {"channel_mute":
> \[{"name":"Pickup-Area-1","status":"on"},
> {"name":"Amplifier-Area-1","status":"off"}\]} \r\n

**35..** **Get** **channell** **vollume**

> **Request** **Parameters**

||
||
||
||

> **Return** **Parameters**

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

> **Descriiptiion**

||
||
||
||
||

> 61
>
> <img src="./10ozqjhb.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||

**36..** **Set** **channell** **vollume**

> **Request** **Parameters**

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

> **Descriiptiion**

||
||
||
||
||
||
||

**meetiing-pllatform** **Syntax**

**1..** **Access** **to** **the** **Liist** **of** **Meetiing**
**Pllatforms**

> **Return** **Parameters**

||
||
||

> 62
>
> <img src="./4uggbhje.png"
> style="width:1.00028in;height:0.20839in" />Socket API

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
>
> byod: BYOD mode **Descriiptiion**

||
||
||
||
||
||
||

**2..** **Settiing** **the** **Current** **Conference** **Pllatform**

> **Request** **Parameters**

||
||
||
||

> 63
>
> <img src="./f3zpqlg5.png"
> style="width:1.00028in;height:0.20839in" />Socket API
>
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
> byod: BYOD mode **Descriiptiion**

||
||
||
||
||
||
||

**3..** **Get** **current** **meetiing** **pllatform**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 64
>
> <img src="./jkzaibl4.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**Blluetooth** **Syntax**

**1..** **Confiigure** **Blluetooth** **Swiitch**

> **Request** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**Network** **Syntax**

**1..** **Access** **to** **network** **iinformatiion**

> **Return** **Parameters**

||
||
||
||

**network_iinfo**

||
||
||
||

> 65
>
> <img src="./nmouydko.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||

> 1\. UVC40 only provides wireless LAN information
>
> 2\. MeetingBoard 65/86 supports both Wired LAN 1 and wireless LAN
>
> 3\. SmartVision 40 only supports a wired LAN connection\*\* \| Send
> Format\| network get info\r\n
>
> \| Return Format\| network get info
> {"network-list":\[{"type":0,"port-type":2,"mode":0,"ip":"","mask":"","gateway":"","primary-dns":"","second-dns":""},{"type":0,"port-type":0,"mode":0,"ip":"10.50.67.59","mask":"255.255.255.0","gateway":"10.50.67.254","primary-dns":"10.100.1.10","second-dns":"192.168.1.22"}\]}\r\n
>
> \| Example\| Send： network get info \r\n Return:
>
> network get info
> {"network-list":\[{"type":0,"port-type":2,"mode":0,"ip":"","mask":"","gateway":"","primary-dns":"","second-dns":""},{"type":0,"port-type":0,"mode":0,"ip":"10.50.67.59","mask":"255.255.255.0","gateway":"10.50.67.254","primary-dns":"10.100.1.10","second-dns":"192.168.1.22"}\]}
> \r\n

**camera-llayout** **syntax**

**1..** **Settiing** **the** **camera** **llayout** **state**

> **Request** **Parameters**

||
||
||

> 66
>
> <img src="./14ozruql.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**2..** **Settiing** **the** **camera** **llayout** **type**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||

> 67
>
> <img src="./0eh3ef1w.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||

**3)** **Set** **up** **camera** **llayout** **and** **camera**
**posiitiion..(MVC)**

> **Request** **Parameters**

||
||
||

> 68
>
> <img src="./rdjrib1c.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**4..Settiing** **up** **camera** **llayout** **and** **camera**
**posiitiion（YRC)**

> **Request** **Parameters**

||
||
||
||

> 69
>
> <img src="./2yt0rhhs.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||

> Note:
>
> When configuring fullscreen mode, you need to set the camera layout
> and specify camera position 0 in order to enable fullscreen mode
>
> \| Send Format\| camera-layout set position
> {"sn":"8703018090000132","position":2}\r\n
>
> \| Return Format\| camera-layout set position
> {"sn":"8703018090000132","position":2}\r\n \| Example\| Send：
>
> camera-layout set position {"sn":"8703018090000132","position":2} \r\n
> Return:
>
> camera-layout set position {"sn":"8703018090000132","position":2} \r\n
>
> Layout positions follow left-to-right order, with equal divisions
> based on the maximum quantity of 1+N as a reference:
>
> Equal parts:
>
> 1+N：

**5)** **Obtaiin** **camera** **llayout** **type**

> **Return** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 70
>
> <img src="./yf3ig1hi.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**Upgrade** **Syntax**

**1..** **Deviice** **upgrade**

> **Request** **Parameters**

||
||
||
||
||
||
||

> **Descriiptiion**
>
> \| upgrade Command \| upgrade firmware start {\["sn":" ",\],
> \["device":" "\],path:" ",time:} \| \| -------------- \|
> ------------------------------------------------------------ \| \|
> Supported Models \| MeetingBoard 65/86/65 Pro/75 Pro/86 Pro,
> MeetingDisplay, MeetingEye 500, MeetingBar A10/A40/A50, Yealink
> RoomConnect
>
> 注意：
>
> 1、仅Yealink RoomConnect⽀持传sn和device参数，
> ⾄少填写sn和device其中⼀个参数
> 2、sn与device理论上只填⼀种，同时填写，只⽣效sn参数 \| \| Command
> Format \| upgrade firmware start
> {"sn":"801203F04C600791","url":"https://packet-nexus.yealink.com/repository/repo-packet-develop/AllRom/MeetingBarA40-rom/289.320.254.315/MeetingBarA40-289.320.254.315-mix.rom","time":-1}
> \r\n \| \| 返回格式 \| upgrade firmware start
> {"sn":"801203F04C600791","url":"https://packet-nexus.yealink.com/repository/repo-packet-develop/AllRom/MeetingBarA40-rom/289.320.254.315/MeetingBarA40-289.320.254.315-mix.rom","time":-1}
> \r\n \| \| Example \| **携带sn参数情况**：
>
> Send：upgrade firmware start
> {"sn":"803032E070000031","url":"https://packet-nexus.yealink.com/service/rest/repository/browse/repo-packet-release/AllRom/UVC86-rom/151.0.249.13/UVC86-151.0.249.13.rom","time":-1}
> \r\n
>
> Return: upgrade firmware start
> {"sn":"803032E070000031","url":"https://packet-nexus.yealink.com/service/rest/repository/browse/repo-packet-release/AllRom/UVC86-rom/151.0.249.13/UVC86-151.0.249.13.rom","time":-1}
> \r\n

**Wiith** **deviice** **parameter** ：

> Send： upgrade firmware start
> {"device":"uvc86","url":"https://packet-nexus.yealink.com/service/rest/repository/browse/repo-packet-release/AllRom/UVC86-rom/151.0.249.13/UVC86-151.0.249.13.rom","time":-1}
> \r\n
>
> Return: upgrade firmware start
> {"device":"uvc86","url":"https://packet-nexus.yealink.com/service/rest/repository/browse/repo-packet-release/AllRom/UVC86-rom/151.0.249.13/UVC86-151.0.249.13.rom","time":-1}
> \r\n
>
> 71
>
> <img src="./z1pl0fre.png"
> style="width:1.00028in;height:0.20839in" />Socket API

**2..** **Deviice** **upgrade** **cancellllatiion**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**3..** **Obtaiin** **upgrade** **status**

> **Request** **Parameters**

||
||
||
||

> **Return** **Parameters**

||
||
||
||
||

> **Descriiptiion**
>
> 72
>
> <img src="./kpcoudzz.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||
||
||

**Diiagnostiics** **Syntax**

**1..** **Access** **system** **llogs**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**2..** **Network** **diiagnosiis**

> **Request** **Parameters**

||
||
||
||
||
||

> **Return** **Parameters**

||
||
||

> 73
>
> <img src="./duiik1ho.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**3..** **Start** **or** **stop** **packet** **capture** **fiilles**

> **Request** **Parameters**

||
||
||
||
||
||

> 1: SIP or H245 or H225
>
> 2: RTP
>
> 74
>
> <img src="./cboijqga.png"
> style="width:1.00028in;height:0.20839in" />Socket API

3: Not RTP\| Yes (start capturing packets)\| Filter type; the filter
takes effect if the value is 0. \| operation\| string\| start: start
capturing packets

stop: stop capturing packets

get: retrieve captured packet files\| Yes\| Packet capturing action;
when stopping or getting, there is no need to carry the above three
parameters.

Note:

1\. It is recommended to send the get command every 5 minutes after
starting the packet capturing to obtain the packet capture file. The
packet capture files need to be concatenated by yourself (you may get
empty files because the device side has not yet generated the file at
this time); if more than 10 minutes have passed without getting, it is
considered to abandon the most recent packet capture file and stop
capturing.

2\. When stopping, the device side responds that the most recent file
has not been uploaded. **Return** **Parameters**

||
||
||
||

||
||
||
||

> **Descriiptiion**

||
||
||
||

> 75
>
> <img src="./0xqtzmja.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||

> Return: diagnostics - Packet Capture
> {"operation":"start","interface":"wan","filter":"tcp","filter-type":"0"}
> \r\n start packet capture:
>
> Send: diagnostics packetcapture {"operation":"get"} \r\n Return:
> diagnostics packetcapture/tmp/cc_pcap/cc_merge.pcap Stop packet
> capture:
>
> Send: diagnostics packetcapture {"operation":"stop"}

Return: diagnostics packetcapture/tmp/cc_pcap/cc_merge.pcap **4..**
**Allarm**

> **Request** **Parameters**

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
>
> **Return** **Parameters**
>
> 76
>
> <img src="./swm53j2i.png"
> style="width:1.00028in;height:0.20839in" />Socket API

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
>
> \| ip\| string\| NULL\| Device IP address **Descriiptiion**

||
||
||
||
||
||

> 77
>
> <img src="./1fm5v53f.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**callll** **syntax**

**1..** **Get** **callll** **status**

> **Return** **Parameters**

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

> **Descriiptiion**

||
||
||
||
||
||
||

> 78
>
> <img src="./t5ankhoy.png"
> style="width:1.00028in;height:0.20839in" />Socket API

**splliitroom** **syntax**

**1..** **Settiing** **diiviidablle** **meetiing** **room** **status**

> **Request** **Parameters**

||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**diiviisiion** **syntax**

**1..** **Set** **the** **current** **partiitiion** **status** **of**
**the** **deviice** **(deprecated,,** **use** **2** **iinstead)**

> **Request** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||

> 79
>
> <img src="./m5jd4z3z.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||

**2..** **Set** **the** **current** **partiitiion** **status** **of**
**the** **deviice**

> **Request** **Parameters**

||
||
||
||

> room_info:

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**3..** **Retriieve** **current** **deviice** **splliit** **status**
**(deprecated,,** **use** **method** **4** **iinstead)**

> **Return** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

> 80
>
> <img src="./tjzrhqco.png"
> style="width:1.00028in;height:0.20839in" />Socket API

**4..** **Retriieve** **current** **deviice** **partiitiion** **status**

> **Return** **Parameters**

||
||
||
||

> room_info:

||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

**physiicall-iinterface** **syntax**

**1..** **Retriieve** **physiicall** **iinterface** **lliist**

> **Request** **Parameters**

||
||
||
||

> **Descriiptiion**

||
||
||
||

> 81
>
> <img src="./uaskarvx.png"
> style="width:1.00028in;height:0.20839in" />Socket API

||
||
||
||
||

**2..** **Confiigure** **Physiicall** **IInterface** **Swiitch**

> **Request** **Parameters**

||
||
||
||
||
||

> **Descriiptiion**

||
||
||
||
||
||
||

> 82
