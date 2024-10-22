export const handleException = (ex: unknown): any => {
	if (ex instanceof Error) {
		console.error(ex.message);
	} else {
		console.error("Неизвестная ошибка: " + ex);
	}
	return null;
};
