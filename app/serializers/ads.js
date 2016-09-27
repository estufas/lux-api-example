import { Serializer } from 'lux-framework';

class AdsSerializer extends Serializer {
  attributes = [
    'title',
    'content',
    'image'
  ];
}

export default AdsSerializer;
