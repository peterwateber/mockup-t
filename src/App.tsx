import { useState } from 'react';
import './App.css';
import { CartItems } from './CartItems';
import { type Payload, type Response } from './type';

// Example static payload: simulate "customer adds item to cart"
const payload: Payload = {
    customerSession: {
        profileId: 'customer_123',
        state: 'open',
        cartItems: [
            {
                name: 'Sneakers',
                sku: 'SHOE-001',
                quantity: 1,
                price: 100.0,
            },
            {
                name: 'Macbook PRO 2025',
                sku: 'MAC-001',
                quantity: 1,
                price: 4000.0,
            },
        ],
    },
};

export default function Mockup() {
    const [response, setResponse] = useState<Response>();
    const [loading, setLoading] = useState(false);

    const callAPI = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                'https://internal.europe-west1.talon.one/v2/customer_sessions/customer_123',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `ApiKey-v1 ${
                            import.meta.env.VITE_T_API_KEY
                        }`,
                    },
                    body: JSON.stringify(payload),
                }
            );

            const data = await res.json();

            const message = res.ok ? undefined : { message: data.message };

            setResponse({
                ...data,
                ...message,
                type: res.ok ? 'success' : 'error',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen  p-6">
            <h1 className="text-2xl font-bold mb-4"> API Call</h1>
            <CartItems customerSession={payload.customerSession} />
            <button
                onClick={callAPI}
                className="bg-blue-600 text-white  px-6 py-3 rounded-xl shadow-md hover:bg-blue-700"
            >
                {loading ? 'Calling API...' : 'Trigger Call'}
            </button>
            {response?.type === 'success' &&
                response?.effects.map((effect, index) => (
                    <div
                        key={index}
                        className="mt-6 p-4 bg-emerald-950 text-green-400 rounded-xl w-full max-w-2xl overflow-x-auto text-sm"
                    >
                        {effect.props.name}
                    </div>
                ))}
            {response?.type === 'error' && (
                <div className="mt-6 p-4 bg-red-900 text-zinc-50 rounded-xl w-full max-w-2xl overflow-x-auto text-sm">
                    {response.message}
                </div>
            )}
        </div>
    );
}
