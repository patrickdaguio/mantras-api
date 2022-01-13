# MyMantra

MyMantra is a free, open source mantras API. It was originally built to be part of a personal project, [Outset](https://outset-website.vercel.app/).

### Server

| URL                                 | Description           |
| ----------------------------------- | --------------------- |
| my-mantra-api.herokuapp.com/mantras | The public API server |

> App is hosted on a free Heroku server. Please allow 15-30 seconds for it to spin up.

---

### Code Example

```javascript
fetch('https://my-mantra-api.herokuapp.com/mantras')
	.then(response => response.json())
	.then(data {
        // Do something with data given
        console.log(data)
	});
});
```

Code above will return an array object of all the mantras available.

---

### Roadmap

There are plans in place to develop the API further so more users can utilise and contribute to it.

- More mantras
- Different API paths/references
- Query parameters
- More information (e.g. mantra type, id, length)

---

Thanks for checking out the project! Stay tuned for the expansion of the API 😁
