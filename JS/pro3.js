console.log("Project 3");

// Your API key is: 9ba4648e6b4643b9b843cb13f6b6e2b2 
// Initilaize the news api parameters
let apiKey = '9ba4648e6b4643b9b843cb13f6b6e2b2';

// grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// create an ajax get request usicountry
const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

// alert showing 
welcome = document.getElementById('welcome');
        welcome.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Welcome!</strong> To Cover News See Leatest News.
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;

        setTimeout(function () {
            welcome.innerHTML = '';
        }, 5000);

// what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // let news = `<div class="card">
            //                 <div class="card-header" id="heading${index}">
            //                     <h2 class="mb-0">
            //                         <button class="btn btn-link btn-block text-left show" type="button" data-toggle="collapse"
            //                             data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            //                             <strong>Tops News : ${index + 1} - ${element["title"]}</strong>
            //                         </button>
            //                     </h2>
            //                 </div>

            //                 <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
            //                     data-parent="#newsAccordion">
            //                     <div class="card-body">
            //                         Date and Time : ${element["publishedAt"]} <br>
            //                         ${element["content"]} &nbsp;<strong>Read More Content...</strong>
            //                         <a href = ${element['url']} target="_blank"><strong>Click here</strong></a>
            //                     </div>
            //                 </div>
            //             </div>`;

        
           let news= `<p class="lead"><strong style="color:#e20404;">Tops News : ${index + 1} - ${element["title"]}</strong></p>
            <hr class="my-4" >
            <p><div class="card-body">
                    Date and Time : ${element["publishedAt"]} <br><br>
                    ${element["content"]} &nbsp;<strong>Read More Content...</strong>
                </div></p>
            <a class="btn btn-info btn-lg" href = ${element['url']} target="_blank role="button" style="background-color: #ff672f; 
                                    border:2px solid white; border-radius: 1rem;"><strong>Click here</strong></a>
          </div><hr style="background:black;">`; 
          
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;

    } else {
        console.log('some error occured');
    }
}

xhr.send();

