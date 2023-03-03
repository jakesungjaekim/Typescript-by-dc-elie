{
  // function: login - suceess, fail

  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state)
  // success -> you are successed
  // fail -> you are failed

  // Way 01
  function printLoginState(state: LoginState): void {
    if ('response' in state) {
      console.log(`you are successed ${state.response.body}`);
    } else {
      console.log(`you are failed ${state.reason}`);
    }
  }
  // Way 02
  function printLoginState(state: LoginState): void {
    if (state.result === 'success') {
      console.log(`you are successed ${state.response.body}`);
    } else {
      console.log(`you are failed ${state.reason}`);
    }
  }
}
