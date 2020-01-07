declare const _default: {
    install: (opts?: {}) => void;
    Editor: {
        install: typeof import("./components/Editor").install;
    };
    JSConsole: {
        install: typeof import("./components/JSConsole").install;
    };
};
export default _default;
