import * as Figma from 'figma-api';

const figmaAPIToken = ''
const figmaFile = ''
const api = new Figma.Api({ personalAccessToken: figmaAPIToken });
api.getFileStyles({ file_key: figmaFile}).then((file) => {
    // access file data
    console.log({
        file: file.meta.styles
    })
},(error)=>{
    console.log({
        error
    })
});