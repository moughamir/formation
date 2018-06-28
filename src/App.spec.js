import delay from 'redux-saga';


it('Async with callback', done => {
  setTimeout(done, 100);
});


it('Async with Promise', () => {
  return new Promise(
    resolve => setTimeout(resolve, 100));
});

it('Async with await', () => {
  async() => await delay(100)
});
