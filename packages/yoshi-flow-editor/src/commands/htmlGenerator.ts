import path from 'path';
import fs from 'fs-extra';
import { STATICS_DIR } from 'yoshi-config/build/paths';
import renderVM from '../server/vm';
import { FlowEditorModel } from '../model';

type vmType = 'editor' | 'settings';

const templatesPath = path.resolve(__dirname, '../server/templates');

const vmPaths: Record<vmType, string> = {
  editor: path.join(templatesPath, './editorApp.vm'),
  settings: path.join(templatesPath, './settingsApp.vm'),
};

const generateHTMLFromVM = (
  destinationDir: string,
  vmPath: string,
  { widgetName }: { widgetName: string },
) => {
  const rendered = renderVM(vmPath, {
    widgetName,
    clientTopology: {
      staticsBaseUrl: '../',
    },
  });
  fs.copyFileSync(vmPath, path.join(destinationDir, `${widgetName}.vm`));
  fs.writeFileSync(path.join(destinationDir, `${widgetName}.html`), rendered);
};

const getOutputFilename = (type: vmType) => {
  return path.resolve(path.join(STATICS_DIR, type));
};

const generateHTML = (type: vmType, widgetName: string) => {
  generateHTMLFromVM(getOutputFilename(type), vmPaths[type], {
    widgetName,
  });
};

const syncHTMLDirectory = (type: vmType) => {
  fs.mkdirpSync(path.join(STATICS_DIR, type));
};

export const generateEditorHTMLFiles = (model: FlowEditorModel) => {
  syncHTMLDirectory('editor');
  syncHTMLDirectory('settings');
  model.components.forEach(component => {
    generateHTML('editor', component.name);
    generateHTML('settings', component.name);
  });
};
