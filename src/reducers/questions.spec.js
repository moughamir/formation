import { questions } from './questions';

describe('The Questions Reducer', () => {

  it(`Shouldn't modify the state for unrecognized action`, () => {
    const state = ["foo", "bar", "baz"];
    const stateClone = ["foo", "bar", "baz"];
    const newState = questions(state, { type: "UNRECOGNIZED_ACTION" });

    expect(newState).toEqual(stateClone);
    expect(newState).toBe(state)
  });

  it(`Should add new Question`, () => {
    const state = [{ question_id: "Taz" }, { question_id: "Zar" }];
    const newQuestion = { question_id: "Bal" };
    const newState = questions(state, { type: 'FETCHED_QUESTION', question: newQuestion });

    expect(newState).toContain(newQuestion);
    expect(state).not.toContain(newQuestion);
    expect(newState).toHaveLength(3);
  });
});
