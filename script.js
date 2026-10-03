async function loadNews(feedURL) {
    const apiURL =
        "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(feedURL);

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data.items.length);

        for (let i = 0; i < Math.min(data.items.length, 10); i++) {
            let titleId1 = "art" + i + "_title";
            document.getElementById(titleId1).textContent = data.items[i].title;
            let titleId2 = "art" + i + "_img";
            document.getElementById(titleId2).src = data.items[i].thumbnail;
            let titleId3 = "art" + i + "_text";
            document.getElementById(titleId3).textContent = data.items[i].content;
            let titleId4 = "art" + i + "_pub";
            document.getElementById(titleId4).textContent = data.items[i].pubDate;
            document.getElementsByClassName("card")[i].onclick = function () {
                window.open(data.items[i].link, "_blank");
            };
        }

    } catch (error) {
        alert("You have encountered some issues. Reload or try again later.")
        console.error(error);
    }
}

loadNews("https://feeds.bbci.co.uk/news/rss.xml");