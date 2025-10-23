import { YealinkAPI, YealinkConfig } from './yealinkAPI';

// Stream Deck WebSocket connection
let websocket: any = null;
let pluginUUID: string = '';
let yealinkAPI: YealinkAPI | null = null;

// Global settings
interface GlobalSettings {
  ipAddress?: string;
  username?: string;
  password?: string;
}

let globalSettings: GlobalSettings = {};

// Action UUIDs
const ACTION_UUIDS = {
  MOVE_LEFT: 'com.yealink.uc86-camera-control.move-left',
  MOVE_RIGHT: 'com.yealink.uc86-camera-control.move-right',
  MOVE_UP: 'com.yealink.uc86-camera-control.move-up',
  MOVE_DOWN: 'com.yealink.uc86-camera-control.move-down',
  ZOOM_IN: 'com.yealink.uc86-camera-control.zoom-in',
  ZOOM_OUT: 'com.yealink.uc86-camera-control.zoom-out',
  SET_PRESET: 'com.yealink.uc86-camera-control.set-preset',
  RECALL_PRESET: 'com.yealink.uc86-camera-control.recall-preset',
};

/**
 * Initialize Yealink API with global settings
 */
function initializeAPI(): boolean {
  if (!globalSettings.ipAddress || !globalSettings.username || !globalSettings.password) {
    console.warn('Yealink camera not configured. Please set IP address, username, and password.');
    return false;
  }

  const config: YealinkConfig = {
    ipAddress: globalSettings.ipAddress,
    username: globalSettings.username,
    password: globalSettings.password,
  };

  yealinkAPI = new YealinkAPI(config);
  return true;
}

/**
 * Handle key down event (button pressed)
 */
async function onKeyDown(context: string, settings: any, coordinates: any, userDesiredState: number, action: string) {
  console.log(`Key down: ${action}`);

  if (!yealinkAPI && !initializeAPI()) {
    showAlert(context);
    return;
  }

  try {
    switch (action) {
      case ACTION_UUIDS.MOVE_LEFT:
        await yealinkAPI!.moveCamera('left');
        break;
      case ACTION_UUIDS.MOVE_RIGHT:
        await yealinkAPI!.moveCamera('right');
        break;
      case ACTION_UUIDS.MOVE_UP:
        await yealinkAPI!.moveCamera('up');
        break;
      case ACTION_UUIDS.MOVE_DOWN:
        await yealinkAPI!.moveCamera('down');
        break;
      case ACTION_UUIDS.ZOOM_IN:
        await yealinkAPI!.zoomCamera('in');
        break;
      case ACTION_UUIDS.ZOOM_OUT:
        await yealinkAPI!.zoomCamera('out');
        break;
      case ACTION_UUIDS.SET_PRESET:
        const setPresetIndex = settings.presetNumber || 1;
        await yealinkAPI!.setPreset(setPresetIndex);
        showOk(context);
        break;
      case ACTION_UUIDS.RECALL_PRESET:
        const recallPresetIndex = settings.presetNumber || 1;
        await yealinkAPI!.recallPreset(recallPresetIndex);
        showOk(context);
        break;
    }
  } catch (error) {
    console.error(`Error executing action ${action}:`, error);
    showAlert(context);
  }
}

/**
 * Handle key up event (button released)
 */
async function onKeyUp(context: string, settings: any, coordinates: any, userDesiredState: number, action: string) {
  console.log(`Key up: ${action}`);

  if (!yealinkAPI) {
    return;
  }

  try {
    // Stop camera movement/zoom when button is released
    switch (action) {
      case ACTION_UUIDS.MOVE_LEFT:
      case ACTION_UUIDS.MOVE_RIGHT:
      case ACTION_UUIDS.MOVE_UP:
      case ACTION_UUIDS.MOVE_DOWN:
        await yealinkAPI.moveCamera('stop');
        break;
      case ACTION_UUIDS.ZOOM_IN:
      case ACTION_UUIDS.ZOOM_OUT:
        await yealinkAPI.zoomCamera('stop');
        break;
      // Preset actions don't need a stop command
    }
  } catch (error) {
    console.error(`Error stopping action ${action}:`, error);
  }
}

/**
 * Handle action appearing on Stream Deck
 */
function onWillAppear(context: string, settings: any, coordinates: any, action: string) {
  console.log(`Action appeared: ${action}`);
  // Action appeared on the Stream Deck, can update UI here if needed
}

/**
 * Handle global settings received
 */
function onDidReceiveGlobalSettings(payload: any) {
  console.log('Received global settings:', payload);
  globalSettings = payload.settings || {};
  initializeAPI();
}

/**
 * Handle settings received for a specific action
 */
function onDidReceiveSettings(context: string, settings: any, action: string) {
  console.log(`Received settings for ${action}:`, settings);
}

/**
 * Handle messages from Property Inspector
 */
function onSendToPlugin(context: string, action: string, payload: any) {
  console.log('Received from PI:', payload);

  if (payload.event === 'testConnection') {
    testConnection(context);
  } else if (payload.event === 'saveSettings') {
    // Save global settings
    if (payload.settings) {
      setGlobalSettings(payload.settings);
    }
  }
}

/**
 * Test connection to Yealink camera
 */
async function testConnection(context: string) {
  if (!yealinkAPI && !initializeAPI()) {
    sendToPropertyInspector(context, {
      event: 'connectionTestResult',
      success: false,
      message: 'Please configure camera settings first',
    });
    return;
  }

  try {
    const success = await yealinkAPI!.testConnection();
    sendToPropertyInspector(context, {
      event: 'connectionTestResult',
      success,
      message: success ? 'Connection successful!' : 'Connection failed. Check credentials.',
    });
  } catch (error: any) {
    sendToPropertyInspector(context, {
      event: 'connectionTestResult',
      success: false,
      message: `Error: ${error.message}`,
    });
  }
}

/**
 * Show OK indicator on button
 */
function showOk(context: string) {
  if (websocket) {
    const json = {
      event: 'showOk',
      context,
    };
    websocket.send(JSON.stringify(json));
  }
}

/**
 * Show alert indicator on button
 */
function showAlert(context: string) {
  if (websocket) {
    const json = {
      event: 'showAlert',
      context,
    };
    websocket.send(JSON.stringify(json));
  }
}

/**
 * Send message to Property Inspector
 */
function sendToPropertyInspector(context: string, payload: any) {
  if (websocket) {
    const json = {
      event: 'sendToPropertyInspector',
      context,
      payload,
    };
    websocket.send(JSON.stringify(json));
  }
}

/**
 * Set global settings
 */
function setGlobalSettings(settings: GlobalSettings) {
  globalSettings = { ...globalSettings, ...settings };
  if (websocket) {
    const json = {
      event: 'setGlobalSettings',
      context: pluginUUID,
      payload: globalSettings,
    };
    websocket.send(JSON.stringify(json));
  }
  initializeAPI();
}

/**
 * Get global settings
 */
function getGlobalSettings() {
  if (websocket) {
    const json = {
      event: 'getGlobalSettings',
      context: pluginUUID,
    };
    websocket.send(JSON.stringify(json));
  }
}

/**
 * Connect to Stream Deck
 */
function connectElgatoStreamDeckSocket(
  inPort: string,
  inPluginUUID: string,
  inRegisterEvent: string,
  inInfo: string
) {
  pluginUUID = inPluginUUID;

  // Create WebSocket connection
  websocket = new (require('ws'))(`ws://127.0.0.1:${inPort}`);

  websocket.on('open', () => {
    console.log('WebSocket connection opened');
    // Register plugin
    const json = {
      event: inRegisterEvent,
      uuid: inPluginUUID,
    };
    websocket.send(JSON.stringify(json));

    // Request global settings
    getGlobalSettings();
  });

  websocket.on('message', (message: string) => {
    const jsonObj = JSON.parse(message);
    const event = jsonObj.event;
    const context = jsonObj.context;
    const action = jsonObj.action;
    const payload = jsonObj.payload;

    console.log(`Received event: ${event}`);

    switch (event) {
      case 'keyDown':
        onKeyDown(context, payload.settings, payload.coordinates, payload.userDesiredState, action);
        break;
      case 'keyUp':
        onKeyUp(context, payload.settings, payload.coordinates, payload.userDesiredState, action);
        break;
      case 'willAppear':
        onWillAppear(context, payload.settings, payload.coordinates, action);
        break;
      case 'didReceiveGlobalSettings':
        onDidReceiveGlobalSettings(payload);
        break;
      case 'didReceiveSettings':
        onDidReceiveSettings(context, payload.settings, action);
        break;
      case 'sendToPlugin':
        onSendToPlugin(context, action, payload);
        break;
    }
  });

  websocket.on('error', (error: any) => {
    console.error('WebSocket error:', error);
  });

  websocket.on('close', () => {
    console.log('WebSocket connection closed');
  });
}

// Entry point - Stream Deck will call this function
const args = process.argv.slice(2);
if (args.length >= 4) {
  connectElgatoStreamDeckSocket(args[3], args[5], args[7], args[9]);
} else {
  console.error('Invalid arguments. This plugin must be launched by Stream Deck.');
}
