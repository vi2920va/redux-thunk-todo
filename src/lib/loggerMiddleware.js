// [미들웨어(MiddleWare)]
// - 액션을 디스패치 되어서 리듀서에서 이를 처리하기 전에 사전에 지정된 작업을 설정.
// - 즉, 미들웨어는 액션과  리듀서 사이의 중간자 이다.

// [store.dispatch VS middleWare(next)]
// - 미들웨어의 next는 store.dispatch와 비슷한 역할을 하는거 같지만 차이점이 존재한다.
// - next(action)을 했을 때에는 바로 리듀서로 넘기거나, 혹은 미들웨어가 더 있다면
//   다음 미들웨어 처리가 되도록 진행된다.
// - store.dispatch의 경우에는 처음부터 다시 액션이 디스패치 되기 때문에 현재 미들웨어를 한 번 더 처리하게 된다.

const loggerMiddleware = (store) => (next) => (action) => {
  // 1. 현재 스토어 상태값 기록
  console.log('현재 상태', store.getState());

  // 2. 액션 기록
  console.log('액션', action);

  // 3. 액션을 다음 미들웨어, 혹은 리듀서로 넘김
  const result = next(action);

  // 4. 액션 처리 후의 스토어 상태 기록
  console.log('다음 상태', store.getState());

  // 여기서 반환 값은 store.dispathch(ACTION_TYPE) 했을때의 결과로 설정.
  return result;
};

export default loggerMiddleware;
