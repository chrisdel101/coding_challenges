var holder = document.getElementById('holder');

var fit = { w: 800, h: 800 };

holder.ondragover = e => {
	e.preventDefault();
	this.className = 'hover';
};
holder.ondragend = e => {
	e.preventDefault();
	this.className = '';
};


const processFile = file => {
	var reader = new FileReader();

	// display the original image
	reader.onload = event => {
		console.log('Dropped file:', file, reader)
		//holder.style.background = 'url(' + event.target.result + ') no-repeat center';

		var img = new Image();

		holder.innerHTML = '';
		holder.appendChild(img);

		img.onload = () => {
			var width = img.naturalWidth;
			var height = img.naturalHeight;
			console.log('IMG SIZE', width, height);

			let holderInfoEl = document.createElement('div');
			holderInfoEl.innerHTML = `${bytesToSize(file.size)} ${width}x${height}`
			holder.appendChild(holderInfoEl);



			var hRatio = fit.w / width;
			var vRatio = fit.h / height;
			var ratio = Math.min( hRatio, vRatio );

			width = Math.round( width * ratio );
			height = Math.round( height * ratio );

			// stretch image to this size
			resize(file, width, height, "image/jpeg", 0.9 , blob => {
				/*
					******************
						Do stuff with the resized blob here,
						like upload to firebase
					******************
				*/
				let a = new FileReader();
				a.onload = e => $('body').append(`<div>
						<img src="${e.target.result}" />
						<div>${bytesToSize(blob.size)} ${width}x${height} Ratio: ${ratio}</div>
					</div>`)
				a.readAsDataURL(blob);
			});
		}
		img.src = event.target.result;
	};
	reader.readAsDataURL(file);
}



holder.ondrop = e => {
	// ON DROP - SHOW THE IMAGE
	this.className = '';
	e.preventDefault();

	var file = e.dataTransfer.files[0];
	//processFile(file);
	let i = 0;
	while(e.dataTransfer.files[i] instanceof File){
		processFile(e.dataTransfer.files[i++]);
	}
};







function blobToDataURL(blob, callback) {
    var a = new FileReader();
    a.onload = function(e){callback(e.target.result);}
    a.readAsDataURL(blob);
}



function dataURItoBlobAsync(dataURI, callback){
    // var dataURI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="

    fetch(dataURI)
        .then(res => res.blob())
        .then(blob => callback(blob))
}

// Thanks http://stackoverflow.com/questions/12168909/blob-from-dataurl
function dataURItoBlob(dataURI) {
	// convert base64 to raw binary data held in a string
	// doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
	var byteString = atob(dataURI.split(',')[1]);

	// separate out the mime component
	var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

	// write the bytes of the string to an ArrayBuffer
	var ab = new ArrayBuffer(byteString.length);
	var ia = new Uint8Array(ab);
	for (var i = 0; i < byteString.length; i++) {
		ia[i] = byteString.charCodeAt(i);
	}

	// write the ArrayBuffer to a blob, and you're done
	var blob = new Blob([ab], {type: mimeString});
	return blob;
}


// Thanks http://stackoverflow.com/questions/15990946/resize-image-before-upload-convert-canvas-to-a-file-object
// and http://stackoverflow.com/questions/17861447/html5-canvas-drawimage-how-to-apply-antialiasing/17862644#17862644
function resize(file, width, height, imageEncoding="image/jpeg", compression_ratio=0.5, callback){
	console.log({ compression_ratio })
	var fileLoader = new FileReader(),
	canvas = document.createElement('canvas'),
	context = null,
	imageObj = new Image(),
	blob = null;

	// create a hidden canvas object we can use to create the new resized image data
	canvas.id = "hiddenCanvas";
	canvas.width	= width;
	canvas.height = height;
	canvas.style.visibility = "hidden";
	canvas.style.display = "none";
	document.body.appendChild(canvas);

	// get the context to use
	context = canvas.getContext('2d');

	// check for an image then
	// trigger the file loader to get the data from the image
	if ( file.type.match('image.*') ) {
		fileLoader.readAsDataURL(file);
	} else {
		console.log('File is not an image');
	}

	// Once the file loader has the data, it passes it to the image object which, once the image has loaded, triggers the images onload function
	fileLoader.onload = function() {
		var data = this.result;
		imageObj.src = data;
	};

	fileLoader.onabort = function() {
		console.log("The upload was aborted.");
	};

	fileLoader.onerror = function() {
		console.log("An error occured while reading the file.");
	};


	// set up the images onload function which clears the hidden canvas context,
	// draws the new image then gets the blob data from it
	imageObj.onload = function() {

		// Check for empty images
		if(this.width == 0 || this.height == 0){
			console.log('Image is empty');
		} else {
			//context.clearRect(0,0,width,height);
			// context.drawImage(imageObj, 0, 0, this.width, this.height, 0, 0, width, height);


			// Thanks http://stackoverflow.com/questions/19262141/resize-image-with-javascript-canvas-smoothly
			var oc = document.createElement('canvas'),
					octx = oc.getContext('2d');
			oc.width = imageObj.width*0.5;
			oc.height = imageObj.height*0.5;
			octx.drawImage(imageObj, 0, 0, oc.width, oc.height);
			octx.drawImage(oc, 0,0, oc.width*0.5, oc.height*0.5);
			context.drawImage(oc, 0,0, oc.width*0.5, oc.height*0.5, 0,0, width, height);



			// dataURItoBlob function available here:
			// http://stackoverflow.com/questions/12168909/blob-from-dataurl
			blob = dataURItoBlob(canvas.toDataURL(imageEncoding, compression_ratio));

			// pass this blob to your upload function
			//upload(blob);
			callback(blob)
		}
	};

	imageObj.onabort = function() {
		console.log("Image load was aborted.");
	};

	imageObj.onerror = function() {
		console.log("An error occured while loading image.");
	};

}

function bytesToSize(bytes) {
   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
   if (bytes == 0) return '0 Byte';
   var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
   return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};
