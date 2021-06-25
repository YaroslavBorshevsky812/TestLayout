const btnDownload = document.querySelectorAll('[data-upload]');
const btnChange = document.querySelectorAll('[data-changePic]');
const inputFileOne = document.querySelectorAll('.uploadFile-inputOne');
const inputFileTwo = document.querySelectorAll('.uploadFile-inputTwo');

btnDownload.forEach(item => {
    item.addEventListener('change', event => {
        let $this = event.currentTarget;
        let uploadId = $this.getAttribute('data-upload')
        let load = document.getElementById(uploadId)
        load.classList.add('done')

        setTimeout(() => {
            load.style.opacity = '1';
        }, 1)
    })
})


btnDownload.forEach(item => {
    item.addEventListener('change', event => {
        let $this = event.currentTarget;
        let uploadId = $this.getAttribute('data-changePic')
        let load = document.getElementById(uploadId)
        load.classList.add('done')
    })
})

inputFileOne.forEach(function(el) {

    let textSelector = document.querySelector('.uploadFile-textOne')
    let fileList;

    el.addEventListener('change', e => {
            fileList = []
            for (let i = 0; i < el.files.length; i++) {
                fileList.push(el.files[i]);
            } 

            // fileList.forEach( file => {
            //     textSelector.textContent = file.name
            // })
    })
})

inputFileTwo.forEach(function(el) {

    let textSelector = document.querySelector('.uploadFile-textTwo')
    let fileList;

    el.addEventListener('change', e => {
            fileList = []
            for (let i = 0; i < el.files.length; i++) {
                fileList.push(el.files[i]);
            } 

            // fileList.forEach( file => {
            //     textSelector.textContent = file.name
            // })
    })
})






