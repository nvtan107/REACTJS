import React, { createContext, useReducer, useContext, useEffect } from "react";

const PRODUCTS = [
  { id: 1, name: "Laptop Gaming", price: 1200 },
  { id: 2, name: "Điện thoại thông minh", price: 800 },
  { id: 3, name: "Tai nghe Bluetooth", price: 150 },
];

const getInitialCart = () => {
  const savedCart = localStorage.getItem("shopping_cart");
  return savedCart ? JSON.parse(savedCart) : [];
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item,
      );
    default:
      return state;
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], getInitialCart);

  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(cart));
  }, [cart]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider value={{ cart, dispatch, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

const ProductList = () => {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <h3>Danh sách sản phẩm</h3>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ${product.price}
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: product })}
            >
              Thêm vào giỏ
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Cart = () => {
  const { cart, dispatch, totalItems, totalPrice } = useContext(CartContext);

  return (
    <div>
      <h3>Giỏ hàng của bạn ({totalItems} sản phẩm)</h3>
      {cart.length === 0 ? (
        <p>Giỏ hàng đang trống.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - ${item.price}
              <br />
              Số lượng:
              <button
                onClick={() =>
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: { id: item.id, quantity: item.quantity - 1 },
                  })
                }
              >
                -
              </button>
              {item.quantity}
              <button
                onClick={() =>
                  dispatch({
                    type: "UPDATE_QUANTITY",
                    payload: { id: item.id, quantity: item.quantity + 1 },
                  })
                }
              >
                +
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: item.id })
                }
              >
                Xóa khỏi giỏ
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2>Tổng tiền thanh toán: ${totalPrice}</h2>
    </div>
  );
};

const ShoppingCartApp = () => {
  return (
    <CartProvider>
      <h1>Cửa hàng trực tuyến</h1>
      <ProductList />
      <hr />
      <Cart />
    </CartProvider>
  );
};

export default ShoppingCartApp;
