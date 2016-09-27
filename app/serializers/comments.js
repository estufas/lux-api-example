import { Serializer } from 'lux-framework';

class CommentsSerializer extends Serializer {
  attributes = [
    'author',
    'content'
  ];
}

export default CommentsSerializer;
