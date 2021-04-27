let controlBtns = [...document.querySelectorAll('.add-money__value')];


function changeAmountMoney() {
    if(!controlBtns.length) {

    } else {
        controlBtns.forEach((btn) => {
            btn.addEventListener('click', () => {
                let father = btn.closest('.add-money');
                if (btn.classList.contains('add-money__value--minus')) {
                    father.querySelector('.form-control').value =  Number(father.querySelector('.form-control').value) - 1;
                } else {
                    father.querySelector('.form-control').value =  Number(father.querySelector('.form-control').value) + 1;

                }
            })
        })
    }
}

changeAmountMoney();