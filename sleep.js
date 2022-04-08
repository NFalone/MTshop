(function()
{
    let times = 0;

    self.addEventListener("message", (e) => {
        let start = new Date().getTime();
        while (true) {
            if ((new Date().getTime() - start) > Number(e.data)){
                break;
            }
        }
        self.postMessage(times);
        times += 1;
    }, false)

}())
