import type { Payload } from './type';

export const CartItems = ({ customerSession }: Payload) => {
    return (
        <div>
            <p className="text-sm text-gray-500">Cart Items</p>
            {customerSession.cartItems.map((item, idx) => (
                <div
                    key={idx}
                    className="bg-white shadow-md rounded-2xl p-5 flex justify-between items-center mb-5"
                >
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                            {item.name}
                        </h2>
                        <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                        <p className="text-sm text-gray-500">
                            Quantity: {item.quantity}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xl font-bold text-gray-800">
                            ${item.price.toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500">
                            Total: ${(item.price * item.quantity).toFixed(2)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
