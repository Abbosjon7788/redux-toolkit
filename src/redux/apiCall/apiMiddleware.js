//malumotlarni fetch qilish ishlari bajariladi

const apiMiddleware = ({ dispatch }) => (next) => (action) => {

     if (action.type !== 'counter/data') {
          next(action);
          return;
     }

     next(action);

     // const { url, method, data, onSuccess, onFail, headers } = action.payload;
     // const { } = action.payload; //it should be properties from action payload

}

export default apiMiddleware;