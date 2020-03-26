/**
 * Tree 的节点模型
 */
export interface NodeItem {
    id: string;
    title: string;
    expanded?: boolean;
    checked?: boolean;
    children?: NodeItem[];
}
