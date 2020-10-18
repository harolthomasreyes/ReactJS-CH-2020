0. npm init
1. npm i webpack webpack-cli -D
2. npm i lodash-es
3. component.js => import { join } from "lodash-es"
4. component.js => export
5. index.js => import { component } from './component';
6. package.json => "build": "webpack",
7. npm run webpack
8. index.html => eliminar script y agregar referencia <script src="./dist/main.js"></script>
