import { State, Selector, Action, StateContext } from '@ngxs/store';

export class AppendColor {
  static readonly type = 'Append Car';
  constructor(public color: string) {}
}

// shape of the state data
interface AppState {
  colors: string[];
}

// store = state data + stateful logic

@State<AppState>({
  name: 'app',
  defaults: {
    colors: [ 'red', 'green', 'blue' ]
  }
})
export class AppStore {

  @Selector()
  static colors(appState: AppState): string[] {
    return appState.colors;
  }

  // get the current state, produce a new state using the action data
  // commit the new state using patch state
  // patch updates only the part of the state you specify

  @Action(AppendColor)
  appendColor(ctx: StateContext<AppState>, action: AppendColor): void {
    const state = ctx.getState();
    ctx.patchState({
      colors: state.colors.concat(action.color),
    });
  }

}