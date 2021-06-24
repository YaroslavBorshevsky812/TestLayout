const btnDownload = document.querySelectorAll('[data-upload]');

btnDownload.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        let $this = event.currentTarget;
        let uploadId = $this.getAttribute('data-upload')
        let load = document.getElementById(uploadId)
        load.classList.add('done')

        setTimeout(() => {
            load.style.opacity = '1';
        }, 1)
    })
})

const btnChange = document.querySelectorAll('[data-changePic]');

btnDownload.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        let $this = event.currentTarget;
        let uploadId = $this.getAttribute('data-changePic')
        let load = document.getElementById(uploadId)
        load.classList.add('done')
    })
})