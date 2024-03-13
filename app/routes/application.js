import Route from '@ember/routing/route';
import { getDocument } from 'pdfjs-dist/webpack';

const url = '/fw4.pdf';

export default class ApplicationRoute extends Route {
  async model() {
    const loadingTask = getDocument({ url });
    return await loadingTask.promise;
  }
}
