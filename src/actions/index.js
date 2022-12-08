export const issigned = (payload) => {
    return {
      type: 'SIGNED_IN',
      payload: payload,
    };
  };
  export const issigned1 = () => {
    return {
      type: 'SIGNED_OUT',
    };
  };
  