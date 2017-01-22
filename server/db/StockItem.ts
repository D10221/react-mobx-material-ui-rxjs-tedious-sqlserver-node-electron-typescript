export interface StockItem {
    id: number;
    Picture: any;
    Supplier: string;
    StockNumber3M: string;
    StockNumberDelta: string;
    Description: string;
    StockStatus: string;
    UnitBox: number;
    BoxesCase: number;
    Qty: number;
    SellingUnit: string;

    /**
     * Percentage
     */
    Discount: number;

    PERCaseRSPExcl: number;
    NetPrice: number;
    PEREachRSPExcl: number;
}