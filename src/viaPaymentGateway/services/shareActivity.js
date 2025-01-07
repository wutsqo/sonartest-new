const shareActivity = async () => {
	try {
		if (navigator.share) {
			await navigator.share({
				url: window.location.href,
			});
		} else {
			try {
				await navigator.clipboard.writeText(window.location.href);
				alert('Link berhasil disalin!');
			} catch (error) {
				alert('Gagal menyalin link!');
			}
		}
	} catch (error) {
		alert('Gagal berbagi link!');
	}
}

export default shareActivity
