describe('Questions list component', () => {

  beforeEach(() => {
    console.log(`Before Each.`);
  });

  beforeAll(() => {
    console.log(`Before All.`);
  });

  afterEach(() => {
    console.log(`After Each`);
  });

  afterAll(() => {
    console.log(`After All`);
  });

  it('Should display a list of items', () => {
    const received = 2 + 2;
    const expected = 4;
    expect(received).toEqual(expected);
  });

  it.skip('Should display Meaning of life', () => {
    const received = "40" + 2;
    const expected = 42;
    expect(received).toEqual(expected);
  });
});
