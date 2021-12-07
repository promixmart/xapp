export type AddressStackParamList = {
  Address: undefined;
  Home: undefined;
};

export type AppDrawerParamList = {
  Address: AddressStackParamList;
  Categories: MenuAndProductListStackParamList;
  Login: LoginStackParamList;
  ProductList: MenuAndProductListStackParamList;
};

export type HomeBottmTabParamList = {
  Home: undefined;
  Shop: undefined;
  CreatePost: undefined;
  Notification: undefined;
  User: undefined;
};

export type HomeStackParamList = {
  Cart: undefined;
  Category: undefined;
  Home: undefined;
  Product: undefined;
  ProductList: undefined;
  Splashscreen: undefined;
};

export type LoginStackParamList = {
  Login: undefined;
};

export type MenuAndProductListStackParamList = {
  Address: undefined;
  Cart: undefined;
  Category: undefined;
  Product: undefined;
  ProductList: undefined;
};
