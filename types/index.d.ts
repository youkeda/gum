declare const _default: {
    install: (opts?: {}) => void;
    Editor: {
        install: typeof import("./components/Editor").install;
    };
    JSConsole: {
        install: typeof import("./components/JSConsole").install;
    };
    Modal: {
        install: (opts?: {}) => void;
    };
    CenterDrawer: {
        install: (opts?: {}) => void;
    };
    RightDrawer: {
        install: (opts?: {}) => void;
    };
};
export default _default;
