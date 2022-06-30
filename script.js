const tmpl = `
<tr id ="tr\${id}">
<td><img src="\${avatar}"></td>
<td>\${id}</td>
<td>\${name}</td>
<td>\${username}</td>
<td>\${phone}</td>
<td>\${email}</td>
<td>\${company}</td>
<td>\${website}</td>
<td class="action">
<button class="edit btn btn-warning" data-bs-toggle="offcanvas"
data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">edit</button>
<button class="delete btn btn-danger">delete</button>
</td>
</tr>

`
// const deleteRow= ()=>{
//     $('button').on('click')
// }

const creatRow = async () => {
    const data = await getUsers()
    data.map((item) => {
        $.tmpl(tmpl, item).appendTo('tbody')
    })
}

const initializedEventListener = async () => {
    $(".action").on('click', (event) => {
        const form = document.forms[0]
        if (event.target.classList.contains('edit')) {
            const tr = event.target.closest('tr')
            const tds = tr.querySelectorAll('td')
            const profile = document.querySelector('.offcanvas-body > img')
            profile.src = `${tds[0].firstChild.src}`
            Array.from(form.elements).map((item, index) => {
                if (index == form.elements.length - 1) return
                item.value = tds[index + 1].textContent
            })

        } else if (event.target.classList.contains('delete')) {

        }

    })

    $(".confirm").on('click', (event) => {
        const form = document.forms[0]
        const tr = document.querySelector(`#tr${form.id.value}`)
        const tds = tr.querySelectorAll('td')
        Array.from(form.elements).map((item, index) => {
            if (index == form.elements.length - 1) return
            tds[index + 1].textContent =item.value  
        })
    })
}



const main = async () => {
    await creatRow()
    await initializedEventListener()
}

main()



