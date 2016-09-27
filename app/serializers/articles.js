import { Serializer } from 'lux-framework';

class ArticlesSerializer extends Serializer {
  attributes = [
    'title',
    'content',
    'published'
  ];
}

export default ArticlesSerializer;
