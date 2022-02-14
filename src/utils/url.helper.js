import parseUrl from 'url-parse';

export const setUrlPath = (url, path) => {
	const parsedUrl = parseUrl(url, true);
	parsedUrl.set('pathname', path);
	return parsedUrl.toString();
};
