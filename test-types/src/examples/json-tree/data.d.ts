declare const _default: {
    results: ({
        _id: {
            $oid: string;
        };
        accountMobile: string;
        accountName: string;
        companyId: {
            $oid: string;
        };
        gmtCreated: string;
        gmtModified: string;
        profile: {
            schoolName: string;
            faculty: string;
            schoolBeginDate?: undefined;
            schoolEndDate?: undefined;
            qq?: undefined;
        };
        userId: {
            $oid: string;
        };
        oldId?: undefined;
    } | {
        _id: {
            $oid: string;
        };
        accountMobile: string;
        accountName: string;
        companyId: {
            $oid: string;
        };
        gmtCreated: string;
        gmtModified: string;
        oldId: string;
        profile: {
            schoolName: string;
            schoolBeginDate: string;
            schoolEndDate: string;
            qq: string;
            faculty?: undefined;
        };
        userId: {
            $oid: string;
        };
    })[];
    fields: never[];
};
export default _default;
