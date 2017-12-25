function domainName(url){
if(url.includes('https://')){
	url = url.replace(/https:\/\//g, "")
// 	url = url.replace(/^https?:\/\//,"")
}
if(url.includes('www')){
	url = url.replace(/www./g, "")
}
if(url.includes('http://')){
	url = url.replace(/http:\/\//g, "")
}
url = url.match(/^(.*?)[.]/)[1]
return url
}
