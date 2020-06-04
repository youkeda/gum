declare const _default: {
    results: {
        _id: {
            $oid: string;
        };
        name: string;
        nickName: string;
        info: {
            college: string;
            project: string;
        };
        learnedSections: string[];
        sections: {
            _id: string;
            name: string;
        }[];
    }[];
    fields: {
        catalog: string;
        db: string;
        table: string;
        orgTable: string;
        name: string;
        orgName: string;
        charsetNr: number;
        length: number;
        type: number;
        flags: number;
        decimals: number;
        zeroFill: boolean;
        protocol41: boolean;
    }[];
};
export default _default;
