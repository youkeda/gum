import { install as editorInstall } from './components/Editor';
import { install as jsConsoleInstall } from './components/JSConsole';

const componentInstallFn = [editorInstall, jsConsoleInstall];
const install = function(opts = {}) {
  componentInstallFn.map((fn: Function) => {
    fn();
  });
};
export default {
  install,
  editorInstall,
  jsConsoleInstall
};
