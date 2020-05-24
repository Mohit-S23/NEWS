/*const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=bed0a516026c4076a78b9dad5f68cdf4';
fetch(proxyurl + url)
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
    /*.then(function(response)
    {
        console.log(response.json());
    })*/
var document;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    var myObj = JSON.parse(this.responseText);

    //to access every cell of array.
    for(var i = 0;i<myObj.articles.length;i++)
        {
            var link = document.createElement("a");
            link.setAttribute("href",myObj.articles[i].url);
            link.setAttribute("class","link");
            link.setAttribute("target","_blank");
            document.body.appendChild(link);
            
            //creating division for article with class-name "article"
            var article = document.createElement("div");
            article.setAttribute("class","article");
            document.getElementsByClassName("link")[i].appendChild(article);

            //creating division for article-picture within division "article" with class-name "article_pic"
            var article_pic = document.createElement("div");
            article_pic.setAttribute("class","article_pic");
            document.getElementsByClassName("article")[i].appendChild(article_pic);

            //adding image to division "article_pic"
            var image = document.createElement("img");
            image.setAttribute("src", myObj.articles[i].urlToImage);
            image.style.height = "100%";
            image.style.width = "100%";
            document.getElementsByClassName("article_pic")[i].appendChild(image);
            
             //creating division for article-title with class-name "title"
            var title = document.createElement("div");
            title.setAttribute("class","title");
            document.getElementsByClassName("article")[i].appendChild(title);

            //adding title to division "title"
            var t = document.createElement("p");
            t.innerHTML = myObj.articles[i].title;
            t.style.margin = "0px";
            document.getElementsByClassName("title")[i].appendChild(t);

            //creating division for article-description within division "article" with class-name "article_description"
            var article_description = document.createElement("div");
            article_description.setAttribute("class","article_description");
            document.getElementsByClassName("article")[i].appendChild(article_description);

            //adding description to division "article_description"
            var paragraph = document.createElement("p");
            paragraph.innerHTML = myObj.articles[i].description;
            paragraph.style.margin = "0px";
            paragraph.style.padding = "10px 10px 10px 10px";
            document.getElementsByClassName("article_description")[i].appendChild(paragraph);
            
            //creating overlay effect
            /*var overlay = document.createElement("div");
            overlay.setAttribute("class","overlay");
            document.getElementsByClassName("article")[i].appendChild(overlay);
            
            //adding article-description to overlay
            var text = document.createElement("div");
            text.setAttribute("class","text");
            text.innerHTML = myObj.articles[i].description;
            document.getElementsByClassName("overlay")[i].appendChild(text);*/
        }
  }
};
xmlhttp.open("GET","https://cors-anywhere.herokuapp.com/" +  "http://newsapi.org/v2/top-headlines?country=in&apiKey=bed0a516026c4076a78b9dad5f68cdf4", true);
xmlhttp.send();