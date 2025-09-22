type Effect = {
    campaignId: number;
    effectType: string;
    evaluationGroupID: number | null;
    evaluationGroupMode: string;
    props: {
        name: string;
        value: number;
        scope: string;
        transactionUUID: string;
    };
    ruleIndex: number;
    ruleName: string;
    rulesetId: number;
};

export type Response = {
    type: 'success' | 'error';
    effects: Effect[];
    message: string | null;
};

export class ErrorResponse {
    public message: string;
    constructor(error: Error) {
        this.message = error.message;
    }
}

type CartItem = {
    name: string;
    sku: string;
    quantity: number;
    price: number;
};

type CustomerSession = {
    profileId: string;
    state: 'open' | 'closed'; // from docs, session can be open/closed
    cartItems: CartItem[];
};

export type Payload = {
    customerSession: CustomerSession;
};
