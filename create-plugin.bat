@echo off
REM Build and package the Stream Deck plugin for Windows

echo Building Yealink UC86 Camera Control Stream Deck Plugin...

REM Clean previous build
echo 1. Cleaning previous build...
if exist dist rmdir /s /q dist

REM Install dependencies if needed
if not exist node_modules (
    echo 2. Installing dependencies...
    call npm install
) else (
    echo 2. Dependencies already installed
)

REM Build TypeScript
echo 3. Building TypeScript...
call npm run build

REM Copy static files to dist
echo 4. Copying static files...
copy manifest.json dist\
if exist imgs xcopy /E /I /Y imgs dist\imgs

REM Copy Property Inspector HTML
echo 5. Copying Property Inspector...
if not exist dist\pi mkdir dist\pi
copy src\pi\index.html dist\pi\

REM Copy node_modules dependencies needed at runtime
echo 6. Copying runtime dependencies...
if not exist dist\plugin\node_modules mkdir dist\plugin\node_modules
xcopy /E /I /Y node_modules\axios dist\plugin\node_modules\axios
xcopy /E /I /Y node_modules\ws dist\plugin\node_modules\ws
xcopy /E /I /Y node_modules\follow-redirects dist\plugin\node_modules\follow-redirects 2>nul
xcopy /E /I /Y node_modules\form-data dist\plugin\node_modules\form-data 2>nul
xcopy /E /I /Y node_modules\proxy-from-env dist\plugin\node_modules\proxy-from-env 2>nul

REM Create plugin package
set PLUGIN_NAME=com.yealink.uc86-camera-control.streamDeckPlugin
echo 7. Creating plugin package...

REM Remove old package if exists
if exist %PLUGIN_NAME% del %PLUGIN_NAME%

REM Stream Deck plugins are just renamed zip files
cd dist
tar -a -c -f ..\%PLUGIN_NAME% *
cd ..

echo.
echo Plugin built successfully!
echo.
echo Package: %PLUGIN_NAME%
echo.
echo To install:
echo   1. Double-click %PLUGIN_NAME%
echo   2. Stream Deck software will install it automatically
echo.
echo For development:
echo   You can also copy the 'dist' folder directly to:
echo   %%appdata%%\Elgato\StreamDeck\Plugins\
echo.
pause
