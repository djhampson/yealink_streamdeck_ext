# Stream Deck Extension for Yealink UC86 Camera - Implementation Plan

## Technology Stack
- **Language:** TypeScript/JavaScript (Stream Deck SDK requirement)
- **API:** Yealink HTTPS REST API with token authentication
- **SDK:** Elgato Stream Deck SDK v2

## Plugin Architecture

```
yealink-streamdeck-plugin/
├── manifest.json              # Plugin configuration
├── package.json               # Node.js dependencies
├── src/
│   ├── plugin/
│   │   ├── index.ts          # Main plugin entry
│   │   ├── yealinkAPI.ts     # API client for camera
│   │   ├── actions/
│   │   │   ├── moveLeft.ts
│   │   │   ├── moveRight.ts
│   │   │   ├── moveUp.ts
│   │   │   ├── moveDown.ts
│   │   │   ├── zoomIn.ts
│   │   │   ├── zoomOut.ts
│   │   │   ├── setPreset.ts
│   │   │   └── recallPreset.ts
│   └── pi/                    # Property Inspector (settings UI)
│       ├── index.html
│       └── inspector.js
└── imgs/                      # Action icons (72x72, 144x144)
```

## Button Actions & API Mappings

| Button | API Endpoint | Method | Parameters |
|--------|-------------|--------|------------|
| **Move Left** | `/centralcontrol/camera/move` | POST | `{"direction": "left"}` |
| **Move Right** | `/centralcontrol/camera/move` | POST | `{"direction": "right"}` |
| **Move Up** | `/centralcontrol/camera/move` | POST | `{"direction": "up"}` |
| **Move Down** | `/centralcontrol/camera/move` | POST | `{"direction": "down"}` |
| **Zoom In** | `/centralcontrol/camera/zoom` | POST | `{"zoom": "in"}` |
| **Zoom Out** | `/centralcontrol/camera/zoom` | POST | `{"zoom": "out"}` |
| **Set Preset** | `/centralcontrol/camera/preset` | POST | `{"index": <preset_number>}` |
| **Recall Preset** | `/centralcontrol/camera/preset/recall` | POST | `{"index": <preset_number>}` |

## Key Features

### 1. Authentication
- Store camera IP and credentials in plugin settings
- Automatic token management (2-hour validity)
- Token refresh on expiry

### 2. Configuration UI (Property Inspector)
- Camera IP address
- Username/Password
- Preset numbers (1-10 configurable per button)
- Test connection button

### 3. Button Behavior
- **Press:** Start movement/zoom
- **Release:** Stop movement/zoom (send stop command)
- **Presets:** Single press to set/recall

### 4. Visual Feedback
- Success: Green indicator
- Error: Red indicator with error message
- Connection status on each button

## API Authentication Flow

```typescript
POST /centralcontrol/authentication
Body: {
  "userName": "admin",
  "passWord": "hashed_password"
}
Response: {
  "code": "0",
  "token": "Bearer_token_string"
}
```

## Development Steps

### Phase 1: Project Setup
- Initialize Stream Deck plugin structure
- Set up TypeScript build system
- Create Yealink API client with authentication

### Phase 2: Core Actions
- Implement 8 button actions
- Handle button press/release events
- Add stop commands on button release

### Phase 3: UI & Configuration
- Build property inspector for settings
- Create action icons
- Add visual feedback states

### Phase 4: Testing & Documentation
- Test with UC86 camera
- Write setup instructions
- Create troubleshooting guide

## API Endpoints Required

Based on the Yealink API documentation:

### Camera Movement
```
POST /centralcontrol/camera/move
Parameters:
- direction: "up" | "down" | "left" | "right" | "stop"
- speed: optional (1-8)
```

### Camera Zoom
```
POST /centralcontrol/camera/zoom
Parameters:
- zoom: "in" | "out" | "stop"
- speed: optional (1-8)
```

### Camera Presets
```
POST /centralcontrol/camera/preset
Body: { "index": <1-10> }

POST /centralcontrol/camera/preset/recall
Body: { "index": <1-10> }
```

### Authentication
```
POST /centralcontrol/authentication
Body: {
  "userName": "admin",
  "passWord": "<password>"
}
Headers: {
  "Content-Type": "application/json"
}
Response: {
  "code": "0",
  "token": "Bearer <token>"
}
```

## Implementation Notes

1. **Token Management:**
   - Tokens are valid for 2 hours
   - Store token with expiry timestamp
   - Auto-refresh before expiry
   - Handle 401 errors with re-authentication

2. **Error Handling:**
   - Network connection failures
   - Invalid credentials
   - Camera not responding
   - Invalid preset numbers

3. **Stream Deck SDK Integration:**
   - Use `keyDown` event to start movement/zoom
   - Use `keyUp` event to stop movement/zoom
   - Use `willAppear` to load settings
   - Use `sendToPlugin` for property inspector communication

4. **Settings Storage:**
   - Use Stream Deck's global settings for:
     - Camera IP address
     - Username (encrypted)
     - Password (encrypted)
   - Use action-specific settings for:
     - Preset numbers

## Future Enhancements (Optional)

- Multi-camera support
- AI mode switching (auto-frame, speaker-tracking, etc.)
- Camera position display
- Preset naming/labeling
- Speed control for movement/zoom
- Macro support (multiple actions in sequence)
