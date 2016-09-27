import { Controller } from 'lux-framework';

class ArticlesController extends Controller {
  params = [
    'title',
    'content',
    'published'
  ];
}

export default ArticlesController;
