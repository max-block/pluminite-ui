import { GOT_SALES, GOT_SALES_POPULATED, CLEAR_STATE, GOT_GEM_ON_SALE } from './types';

export const initialMarketContractState = {
  gemOnSale: null,
  sales: [],
  salesPopulated: [],
};

export const marketContractReducer = (currentState = initialMarketContractState, action) => {
  switch (action.type) {
    case GOT_GEM_ON_SALE:
      return {
        ...currentState,
        gemOnSale: action.payload.gemOnSale,
      };

    case GOT_SALES:
      return {
        ...currentState,
        sales: action.payload.sales,
      };

    case GOT_SALES_POPULATED:
      return {
        ...currentState,
        salesPopulated: action.payload.salesPopulated,
      };

    case CLEAR_STATE:
    default:
      return initialMarketContractState;
  }
};