fetch('works.html')
			.then(response => response.text())
			.then(data => {
				document.getElementById('links').innerHTML = data;
			})
			.catch(error => console.error('Error loading works.html:', error));