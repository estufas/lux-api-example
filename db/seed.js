import faker from 'faker';

import Ad from '../app/models/ad'
import Article from '../app/models/article'
import Comment from '../app/models/comment'

import range from '../app/utils/range';

const {
  name,
  lorem,
  random,
  internet,

  helpers: {
    randomize
  }
} = faker;

export default async function seed() {
  await Promise.all(
    Array.from(range(1, 100)).map(() => Comment.create({
      author: `${name.firstName()} ${name.lastName()}`,
      content: lorem.sentence()
    }))
  );

  await Promise.all(
    Array.from(range(1, 100)).map(() => Ad.create({
      title: `${lorem.word()}`,
      content: lorem.sentence(),
      image: 'http://lorempixel.com/400/200/'
    }))
  );

  await Promise.all(
    Array.from(range(1, 100)).map(() => Article.create({
      title: `${lorem.sentence()}`,
      content: lorem.paragraphs(),
      published: randomize([...range(0, 1)])
    }))
  );
}
