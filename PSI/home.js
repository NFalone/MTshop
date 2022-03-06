let showall = () => {
    fetch('https://mtdl.ddns.net/PSI/core.php', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": "showall"
        })
    })
    .then(response => {
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    })
    .then(restext => {
        console.log(restext);
        let testing = document.querySelector("#test");
        testing.innerHTML = restext[0].year+" "+restext[0].month+" "+restext[0].day+" "+restext[0].sn+" "+restext[0].goods+" "+restext[0].price+" "+restext[0].quantity;
        // testing.innerHTML = restext;
    })
    .catch(error => {
        console.log("Error:" + error);
    })
}