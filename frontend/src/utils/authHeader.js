const authHeader = (thunkAPI) => {
    window.alert('ss')  
  
  return {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    };
  };
  
  export default authHeader;