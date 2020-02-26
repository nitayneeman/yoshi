import importFrom from 'import-from';
import { isStylableDependencies } from './utils';

function getStylableWebpackPlugin() {
  if (isStylableDependencies()) {
    // @ts-ignore
    return importFrom('@stylable/webpack-plugin', 'yoshi-stylable-dependencies')
      .StylableWebpackPlugin;
  }

  return require('@stylable/webpack-plugin');
}

export default getStylableWebpackPlugin();
