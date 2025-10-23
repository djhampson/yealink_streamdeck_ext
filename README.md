# Yealink UC86 Stream Deck Extension

Control your Yealink UC86 camera directly from your Elgato Stream Deck with PTZ controls, zoom, and preset management.

## Features

- **Camera Movement**: Pan left, right, up, and down
- **Zoom Control**: Zoom in and out
- **Preset Management**: Save and recall up to 10 camera presets
- **Visual Feedback**: Success/error indicators on each button
- **Automatic Authentication**: Token-based authentication with auto-refresh

## Supported Actions

| Action | Description |
|--------|-------------|
| Move Left | Pan camera to the left (hold to move, release to stop) |
| Move Right | Pan camera to the right (hold to move, release to stop) |
| Move Up | Tilt camera up (hold to move, release to stop) |
| Move Down | Tilt camera down (hold to move, release to stop) |
| Zoom In | Zoom in (hold to zoom, release to stop) |
| Zoom Out | Zoom out (hold to zoom, release to stop) |
| Set Preset | Save current camera position to a preset (1-10) |
| Recall Preset | Recall a saved camera preset (1-10) |

## Requirements

- Elgato Stream Deck (any model)
- Stream Deck software v5.0 or later
- Yealink UC86 camera (or compatible model)
- Node.js v16 or later (for building from source)
- Network connection to camera

## Installation

### From Release (Recommended)

1. Download the latest `.streamDeckPlugin` file from the [Releases](../../releases) page
2. Double-click the file to install
3. Stream Deck software will automatically install the plugin

### From Source

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/yealink_streamdeck_ext.git
   cd yealink_streamdeck_ext
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the plugin:
   ```bash
   npm run build
   ```

4. Create the plugin package:
   ```bash
   # On macOS/Linux
   ./create-plugin.sh

   # On Windows
   create-plugin.bat
   ```

5. Double-click the generated `.streamDeckPlugin` file to install

## Configuration

### Initial Setup

1. Drag any Yealink camera action to your Stream Deck
2. Click on the action to open the Property Inspector
3. Enter your camera configuration:
   - **Camera IP Address**: The IP address or hostname of your Yealink UC86 camera
   - **Username**: Camera admin username (usually `admin`)
   - **Password**: Camera admin password
4. Click **Test Connection** to verify settings
5. Click away to save

### Preset Configuration

For **Set Preset** and **Recall Preset** actions:

1. Add the action to your Stream Deck
2. In the Property Inspector, choose a **Preset Number** (1-10)
3. Save the settings

### Camera Setup

Ensure your Yealink UC86 camera is configured to allow API access:

1. Access the camera's web interface
2. Enable the HTTPS API (usually enabled by default)
3. Note the camera's IP address
4. Ensure your computer can reach the camera on the network

## Usage

### Movement and Zoom

- **Press and hold** any movement or zoom button to start the action
- **Release** the button to stop movement/zoom

### Presets

- **Set Preset**: Position the camera where you want, then press the button to save
- **Recall Preset**: Press the button to move the camera to the saved position

## Troubleshooting

### Connection Issues

- Verify camera IP address is correct
- Ensure camera is powered on and connected to network
- Check firewall settings (allow HTTPS traffic to camera)
- Verify username and password are correct

### Actions Not Working

- Check connection status (look for alert indicators on buttons)
- Re-enter credentials in Property Inspector
- Test connection using the **Test Connection** button
- Check camera logs for any errors

### Plugin Not Appearing

- Ensure Stream Deck software is v5.0 or later
- Restart Stream Deck software
- Check plugin is installed in the correct location:
  - macOS: `~/Library/Application Support/com.elgato.StreamDeck/Plugins/`
  - Windows: `%appdata%\Elgato\StreamDeck\Plugins\`

## Development

### Project Structure

```
yealink_streamdeck_ext/
├── manifest.json              # Plugin manifest
├── package.json               # Node.js dependencies
├── src/
│   ├── plugin/               # Plugin backend (Node.js)
│   │   ├── index.ts          # Main plugin entry
│   │   ├── yealinkAPI.ts     # Yealink API client
│   └── pi/                   # Property Inspector (UI)
│       ├── index.html        # Settings UI
│       └── inspector.ts      # Settings logic
└── imgs/                     # Action icons
```

### Building

```bash
# Install dependencies
npm install

# Build plugin
npm run build

# Watch for changes (development)
npm run dev
```

### API Documentation

See `IMPLEMENTATION_PLAN.md` for detailed API endpoint information and the included Yealink API documentation file for complete API reference.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Open an issue on [GitHub](../../issues)
- Check the Yealink API documentation in the repository

## Acknowledgments

- Built for the Elgato Stream Deck platform
- Uses the Yealink Central Control HTTPS API
