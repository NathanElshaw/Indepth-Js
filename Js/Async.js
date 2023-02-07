//Different types of async's
const yourAsyncFunction = async () => {
  // do something asynchronously and return a promise
  return result;
};

anArray.forEach(async (item) => {
  // do something asynchronously for each item in 'anArray'
  // one could also use .map here to return an array of promises to use with 'Promise.all()'
});

server.getPeople().then(async (people) => {
  people.forEach((person) => {
    // do something asynchronously for each person
  });
});
