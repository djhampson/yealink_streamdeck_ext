// Stream Deck Property Inspector
let websocket: WebSocket | null = null;
let uuid: string = '';
let actionInfo: any = {};
let currentAction: string = '';

// Global settings
let globalSettings: any = {};
let actionSettings: any = {};

/**
 * Connect to Stream Deck
 */
function connectElgatoStreamDeckSocket(
  inPort: string,
  inPropertyInspectorUUID: string,
  inRegisterEvent: string,
  inInfo: string,
  inActionInfo: string
) {
  uuid = inPropertyInspectorUUID;
  actionInfo = JSON.parse(inActionInfo);
  currentAction = actionInfo.action;

  // Create WebSocket
  websocket = new WebSocket(`ws://127.0.0.1:${inPort}`);

  websocket.onopen = () => {
    // Register Property Inspector
    const json = {
      event: inRegisterEvent,
      uuid: inPropertyInspectorUUID,
    };
    websocket!.send(JSON.stringify(json));

    // Request global settings
    requestGlobalSettings();

    // Request action settings
    requestSettings();
  };

  websocket.onmessage = (evt: MessageEvent) => {
    const jsonObj = JSON.parse(evt.data);
    const event = jsonObj.event;

    switch (event) {
      case 'didReceiveGlobalSettings':
        globalSettings = jsonObj.payload.settings || {};
        loadGlobalSettings();
        break;
      case 'didReceiveSettings':
        actionSettings = jsonObj.payload.settings || {};
        loadActionSettings();
        break;
      case 'sendToPropertyInspector':
        handlePluginMessage(jsonObj.payload);
        break;
    }
  };
}

/**
 * Request global settings from plugin
 */
function requestGlobalSettings() {
  if (websocket) {
    const json = {
      event: 'getGlobalSettings',
      context: uuid,
    };
    websocket.send(JSON.stringify(json));
  }
}

/**
 * Request action settings from plugin
 */
function requestSettings() {
  if (websocket) {
    const json = {
      event: 'getSettings',
      context: uuid,
    };
    websocket.send(JSON.stringify(json));
  }
}

/**
 * Save global settings
 */
function saveGlobalSettings(settings: any) {
  globalSettings = { ...globalSettings, ...settings };
  if (websocket) {
    const json = {
      event: 'setGlobalSettings',
      context: uuid,
      payload: globalSettings,
    };
    websocket.send(JSON.stringify(json));
  }
}

/**
 * Save action settings
 */
function saveActionSettings(settings: any) {
  actionSettings = { ...actionSettings, ...settings };
  if (websocket) {
    const json = {
      event: 'setSettings',
      context: uuid,
      payload: actionSettings,
    };
    websocket.send(JSON.stringify(json));
  }
}

/**
 * Send message to plugin
 */
function sendToPlugin(payload: any) {
  if (websocket) {
    const json = {
      event: 'sendToPlugin',
      action: currentAction,
      context: uuid,
      payload,
    };
    websocket.send(JSON.stringify(json));
  }
}

/**
 * Handle messages from plugin
 */
function handlePluginMessage(payload: any) {
  if (payload.event === 'connectionTestResult') {
    showConnectionResult(payload.success, payload.message);
  }
}

/**
 * Load global settings into UI
 */
function loadGlobalSettings() {
  const ipInput = document.getElementById('ipAddress') as HTMLInputElement;
  const usernameInput = document.getElementById('username') as HTMLInputElement;
  const passwordInput = document.getElementById('password') as HTMLInputElement;

  if (ipInput && globalSettings.ipAddress) {
    ipInput.value = globalSettings.ipAddress;
  }
  if (usernameInput && globalSettings.username) {
    usernameInput.value = globalSettings.username;
  }
  if (passwordInput && globalSettings.password) {
    passwordInput.value = globalSettings.password;
  }
}

/**
 * Load action settings into UI
 */
function loadActionSettings() {
  const presetInput = document.getElementById('presetNumber') as HTMLInputElement;

  // Show preset settings only for preset actions
  const isPresetAction =
    currentAction.includes('set-preset') || currentAction.includes('recall-preset');

  const presetElements = document.querySelectorAll('.preset-only');
  presetElements.forEach((el) => {
    (el as HTMLElement).style.display = isPresetAction ? 'block' : 'none';
  });

  if (presetInput && actionSettings.presetNumber) {
    presetInput.value = actionSettings.presetNumber;
  }
}

/**
 * Show connection test result
 */
function showConnectionResult(success: boolean, message: string) {
  const statusDiv = document.getElementById('connectionStatus');
  if (statusDiv) {
    statusDiv.textContent = message;
    statusDiv.className = 'status-message ' + (success ? 'status-success' : 'status-error');
    statusDiv.style.display = 'block';

    // Hide after 5 seconds
    setTimeout(() => {
      statusDiv.style.display = 'none';
    }, 5000);
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // IP Address input
  const ipInput = document.getElementById('ipAddress') as HTMLInputElement;
  if (ipInput) {
    ipInput.addEventListener('change', () => {
      saveGlobalSettings({ ipAddress: ipInput.value });
    });
  }

  // Username input
  const usernameInput = document.getElementById('username') as HTMLInputElement;
  if (usernameInput) {
    usernameInput.addEventListener('change', () => {
      saveGlobalSettings({ username: usernameInput.value });
    });
  }

  // Password input
  const passwordInput = document.getElementById('password') as HTMLInputElement;
  if (passwordInput) {
    passwordInput.addEventListener('change', () => {
      saveGlobalSettings({ password: passwordInput.value });
    });
  }

  // Preset number input
  const presetInput = document.getElementById('presetNumber') as HTMLInputElement;
  if (presetInput) {
    presetInput.addEventListener('change', () => {
      const presetNumber = parseInt(presetInput.value, 10);
      if (presetNumber >= 1 && presetNumber <= 10) {
        saveActionSettings({ presetNumber });
      }
    });
  }

  // Test connection button
  const testButton = document.getElementById('testConnection') as HTMLButtonElement;
  if (testButton) {
    testButton.addEventListener('click', () => {
      // Save current settings first
      saveGlobalSettings({
        ipAddress: (document.getElementById('ipAddress') as HTMLInputElement).value,
        username: (document.getElementById('username') as HTMLInputElement).value,
        password: (document.getElementById('password') as HTMLInputElement).value,
      });

      // Request connection test
      sendToPlugin({ event: 'testConnection' });

      // Show loading state
      showConnectionResult(false, 'Testing connection...');
    });
  }
});

// Stream Deck will call this function
(window as any).connectElgatoStreamDeckSocket = connectElgatoStreamDeckSocket;
