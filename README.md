### Integration Mockup

A simple React + Tailwind prototype demonstrating integration with the Integration API. This project shows how to send a customer session payload and display both the payload and cart items as visually appealing cards.

#### 📌 Features

-   Sends a static payload to /v2/customer_sessions endpoint (mock/demo).
-   Displays customer session payload in a clean, readable format.
-   Renders each cart item as its own Tailwind card, showing:
    -   Product name
    -   SKU
    -   Quantity
    -   Price and total cost
-   Styled with Tailwind CSS.
-   Can be expanded to show API responses, loyalty points, or applied discounts.

#### 🛠 Tech Stack

-   React – Frontend framework for UI and state management
-   Tailwind CSS – Utility-first styling for rapid UI development
-   TypeScript – Type-safe payload and component props
-   Integration API – Backend service for incentives, loyalty, and promotions

### 🚀 Setup

1. Clone the repository.

    ```
    git clone <repo url>
    cd test-mockup
    ```

2. Install dependencies

    ```
    npm install
    ```

3. Configure API key

    - Copy the `.env.template` file to `.env`
    - Update the values of `VITE_T_API_KEY` with the correct credentials.

    ```
    "Authorization": "ApiKey-v1 YOUR_API_KEY"
    ```

4. Run the development server

    ```
    npm run dev
    ```

5. Open http://localhost:5172 in your browser.

#### 💡 Usage

-   Click the Trigger API Call button to send a static payload.
-   View the raw response or the cards displaying cart items.
-   Each cart item shows name, SKU, quantity, price, and total.
-   Modify the payload in the code to simulate different customer sessions or products.

🧩 Example Payload

```json
{
    "customerSession": {
        "profileId": "customer_123",
        "state": "open",
        "cartItems": [
            {
                "name": "Sneakers",
                "sku": "SHOE-001",
                "quantity": 1,
                "price": 100.0
            },
            {
                "name": "T-Shirt",
                "sku": "TSHIRT-002",
                "quantity": 2,
                "price": 25.0
            }
        ]
    }
}
```
