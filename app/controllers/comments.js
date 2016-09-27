import { Controller } from 'lux-framework';

class CommentsController extends Controller {
  params = [
    'author',
    'content'
  ];

  sort = [
    'createdAt'
  ];
}

export default CommentsController;
