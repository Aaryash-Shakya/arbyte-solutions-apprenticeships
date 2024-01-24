const p = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (1 == 2) {
			resolve("Success");
		} else {
			reject("Failure");
		}
	}, 1000);
});

// p.then(msg => {
// 	console.log(msg);
// }).catch(err => {
// 	console.log(err);
// }).finally(()=>{
//     console.log('the end');
// })

p.then(
	s => {
		console.log(s);
	},
	f => {
		console.log(f);
	}
);

downloadArticle = new Promise((res, rej) => {
	data = findArticle()
    setTimeout(() => {
        if(data)
            res(data);
        else
            rej("Article not found");
    }, 5000);
});

downloadArticle
	.then(article => {
		console.log(article);
	})
	.catch(errMsg => {
		console.log(errMsg);
	})
	.finally(() => {
		console.log("Thanks for visiting");
	});
