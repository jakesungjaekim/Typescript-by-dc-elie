{
  // Union Types : OR

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('up');
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login - suceess, fail

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  function login(id: string, password: string): LoginState {
    return {
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
}
