var fs = require("fs");
var path = require("path");

// Config params:
const APP_BASE = 'src';
const ENTRY_FILE = 'index.tsx';
const OUTPUT_DIR = 'build';
const OUTPUT_FILE = 'app.js';
const IS_DEV = false;
const TARGET = 'es2018';

// --------------------------------------------------------------------------------

function build(entryFile, outFile) {
    require('esbuild').build({
        entryPoints: [entryFile],
        outfile: outFile,
        platform: 'node',
        bundle: true,
        define: { "process.env.NODE_ENV": IS_DEV ? "\"development\"" : "\"product\"" },
        target: TARGET,
        external: ['pg-hstore'],
        logLevel: 'silent',
        // built-in loaders: js, jsx, ts, tsx, css, json, text, base64, dataurl, file, binary 
        loader: {
            '.ttf': 'file',
            '.otf': 'file'
        },
        plugins: [scssPlugin, copyPlugin],
        sourcemap: IS_DEV ? true : false
    })
    .then(r => { console.log(`Build ${entryFile} to ${outFile} succeeded.`) })
    .catch((e) => {
        console.log("Error building:", e.message);
        process.exit(1)
    })
}

// TODO: use serve() api:
// https://esbuild.github.io/api/#serve


function mkDirSync(dir){
    if (fs.existsSync(dir)) {
        return;
    }

    try {
        fs.mkdirSync(dir);
    } catch(err){
        if(err.code == 'ENOENT'){
            mkdirSync(path.dirname(dir))
            mkdirSync(dir)
        }
    }
}

let scssPlugin = {
    name: 'scss',
    setup(build) {
        const fs = require('fs');
        const sass = require('node-sass');
        const path = require('path');
        //const aliasImporter = require("node-sass-alias-importer");

        build.onLoad({ filter: /\.(scss)$/ }, async (args) => {
            let filePath = path.resolve(args.path);
            let data = await fs.promises.readFile(filePath, 'utf8')
            let contents = '';
            try {
                if (data) {
                    let result = sass.renderSync({
                        data,
                        //includePaths: [], // todo: dynamically add global imports??
                        sourceComments: true,
                        sourceMap: true,
                        // importer: [
                        //     aliasImporter({
                        //       app: "./src",
                        //       styles: "./src/styles"
                        //     })
                        // ]
                    });
                    contents = result.css;
                }
                return {
                    contents: contents,
                    loader: 'css'
                };
            } catch (e) {
                //throw e;
                throw new Error("\n\nError rendering SCSS file:\n  " + filePath + " => \n\n" + e.formatted);//, { path: filePath });
            }
        })
    }
};

let copyPlugin = {
    name: 'copy',
    setup(build) {
        let fs = require('fs');
        // todo: pull config array of files/directories
        fs.copyFile(`${APP_BASE}/index.html`, `${OUTPUT_DIR}/index.html`, (err) => {
            if (err) throw err;
        });

        // todo: copy src/static folder to build/static... if it differs?
        // fs.copyFile('src/index.html', 'build/index.html', (err) => {
        //     if (err) throw err;
        // });
    }
}

// make sure build directory exists
mkDirSync(OUTPUT_DIR);

// run the build
build(`${APP_BASE}/${ENTRY_FILE}`, `${OUTPUT_DIR}/${OUTPUT_FILE}`);
