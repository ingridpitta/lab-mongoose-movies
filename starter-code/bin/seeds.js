const Celebrity = require("../models/Celebrity");

const data = [
  {
    name: "Rihanna",
    occupation: "Singer",
    catchPhrase:
      "I stand up for what I believe in, and a lot of the time that can be against people’s opinions."
  },
  {
    name: "Beyoncé",
    occupation: "Singer",
    catchPhrase:
      "I can never be safe; I always try and go against the grain. As soon as I accomplish one thing, I just set a higher goal. That’s how I’ve gotten to where I am."
  },
  {
    name: "Ciara",
    occupation: "Singer",
    catchPhrase:
      "Education is everything - education is your power, education is your way in life for whatever you want to do."
  }
];

Celebrity.create(new Celebrity(data))
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    throw new Error(err);
  });
