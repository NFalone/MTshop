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
        let tbody = document.querySelector('#data');
        for (let i=0; i<restext.length; i++){
            let tr = document.createElement('tr');
            tbody.appendChild(tr);
            for (let item in restext[i]){
                let td = document.createElement('td');
                td.innerHTML = restext[i][item];
                td.style.cssText = " border-right: 1px solid black;";
                tr.appendChild(td);
            }
        }
    })
    .catch(error => {
        console.log("Error:" + error);
    })
}

let update = () => {
    console.log("還沒做");
}