const baseUrl = import.meta.env.BASE_URL || '/';

const routes = {
    BaseName: baseUrl,
    Root: '/',
    FromText: '/from-text',
    FromImage: '/from-image',
    FromGIF: '/from-gif',
    Error404: '*',
}

export default routes