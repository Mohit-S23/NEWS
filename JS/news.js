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
var index=0;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function()
{
  if (this.readyState == 4 && this.status == 200)
  {
    var myObj = JSON.parse(this.responseText);
      index = myObj.articles.length;

    //to access every cell of array.
    for(var i = 0;i<myObj.articles.length;i++)
        {
            var article = document.createElement("div");
            article.setAttribute("class","article");
            document.body.appendChild(article);
            
            //creating division for article-title with class-name "title"
            var title = document.createElement("div");
            title.setAttribute("class","title");
            document.getElementsByClassName("article")[i].appendChild(title);

            //adding title to division "title"
            var t = document.createElement("p");
            t.setAttribute("class","title_p");
            t.innerHTML = myObj.articles[i].title;
            document.getElementsByClassName("title")[i].appendChild(t);
            
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
            
            //creating division for article-description within division "article" with class-name "article_description"
            var article_description = document.createElement("div");
            article_description.setAttribute("class","article_description");
            document.getElementsByClassName("article")[i].appendChild(article_description);

            //adding description to division "article_description"
            var paragraph = document.createElement("p");
            paragraph.setAttribute("class","article_description_p");
            paragraph.innerHTML = myObj.articles[i].description;
            document.getElementsByClassName("article_description")[i].appendChild(paragraph);
            
            //adding division for link to full article within division "article"
            var full_link = document.createElement("div");
            full_link.setAttribute("class","full_link");
            document.getElementsByClassName("article")[i].appendChild(full_link);
            
            var a = document.createElement("a");
            var link = document.createTextNode("Click Here for Full Article");
            a.appendChild(link);
            a.setAttribute("class","link");
            a.setAttribute("target","_blank");
            a.href = myObj.articles[i].url;
            document.getElementsByClassName("full_link")[i].appendChild(a);
            
            var br = document.createElement("br");
            document.body.appendChild(br);
            
            var br = document.createElement("br");
            document.body.appendChild(br);
            var br = document.createElement("br");
            document.body.appendChild(br);
            
            var hr = document.createElement("hr");
            document.body.appendChild(hr);
            
            var br = document.createElement("br");
            document.body.appendChild(br);
            var br = document.createElement("br");
            document.body.appendChild(br);
            
            
        }
  }
};
xmlhttp.open("GET","https://cors-anywhere.herokuapp.com/" +  "http://newsapi.org/v2/top-headlines?country=in&apiKey=bed0a516026c4076a78b9dad5f68cdf4", true);
xmlhttp.send();
var counter = 0,j;
var hr = document.getElementsByTagName("hr");
function darkModeToggle()
{
    counter++;
    if(counter%2 !== 0)
    {
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
        for(j = 0;j<index;j++)
            {
                hr[j].style.borderColor = "white";
            }
    }
    else
    {
        document.body.style.color = "black";
        document.body.style.backgroundColor = "white";
        for(j = 0;j<index;j++)
            {
                hr[j].style.borderColor = "black";
            }
    }
}
