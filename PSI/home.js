let showall = () => {
    fetch('https://mtdl.ddns.net/PSI/core.php', {method: 'get'})
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.text();
    })
    .then(restext => {
        console.log(restext);
        let testing = document.querySelector("#test");
        testing.innerHTML = restext;
    })
    .catch(error => {
        console.log(error);
    })
}