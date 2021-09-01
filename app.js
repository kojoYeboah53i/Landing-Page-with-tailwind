// alert('js file added')

const url = "https://jsonplaceholder.typicode.com/todos/1";

const url2 ="http://www.codjosoft/api/send-mail"

const sendmail = async () => {

fetch(url2)
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err));

}

sendmail();

//axios post request
 axios.post(url2, {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  }
)