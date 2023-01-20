#/bin/bash
rm -rf "dist/*"
ng build nanowar-visualizer
ng build nanowar-visualizer-app
cp -avr projects/nanowar-visualizer/src/assets dist/nanowar-visualizer-app/
npx http-server dist/nanowar-visualizer-app