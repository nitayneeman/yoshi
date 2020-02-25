import t from './template';

type Opts = Record<
  | 'editorAppWrapperPath'
  | 'componentFileName'
  | 'controllerFileName'
  | 'initAppPath'
  | 'componentName',
  string
>;

export default t<Opts>`
    import React from 'react';
    import ReactDOM from 'react-dom';
    import EditorAppWrapper from '${({ editorAppWrapperPath }) =>
      editorAppWrapperPath}';

    import Component from '${({ componentFileName }) => componentFileName}';
    import createController from '${({ controllerFileName }) =>
      controllerFileName}';
    import initApp from '${({ initAppPath }) => initAppPath}';

    const EditorApp = EditorAppWrapper(Component, createController, initApp, '${({
      componentName,
    }) => componentName}');

    ReactDOM.render(React.createElement(EditorApp, null), document.getElementById('root'));
`;
