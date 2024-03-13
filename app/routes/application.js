import Route from '@ember/routing/route';
import * as pdfjs from 'pdfjs-dist/webpack.mjs';

const url = '/fw4.pdf';

export default class ApplicationRoute extends Route {
  async model() {
    const loadingTask = (await pdfjs.default).getDocument({ url });
    return await loadingTask.promise;
  }
}
