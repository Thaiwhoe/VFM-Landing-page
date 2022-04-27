const btn = document.getElementById("submitButton")
const theInputs = document.querySelector("form")
const theName = document.getElementById('name')
const theEmail = document.getElementById('email')
const theContact = document.getElementById('contact')
const token = "35988258-5a9e-4f21-bfe8-762a00841a4f"

btn.addEventListener('click', ()=>{
    Email.send({
        secureToken: token,
        To : "taiwo@venia-group.com",
        From : theEmail.value,
        Subject : "New Lead From Website",
        Body : theName.value + "<br>" + theEmail.value + "<br>" + theContact.value,
    }).then(msg => alert("Email has been successfully sent"))
})
