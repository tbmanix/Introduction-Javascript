let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874"
    },
    phone:"1-770-736-8031 x56442",
    website:"hildegard.org"
}

/* Task_a
Ubahlah data  tersebut menggunakan spread operator menjadi:
name: nama anda
email: email anda
hobby: hobi anda
*/
const newdata = {...data, name: "Tubagus manix Hara", email: "tubagusmanixh@gmail.com", hobby: "gaming"}
console.log(newdata)

/*Task_b
Ambilah data “street dan city” tersebut menggunakan destructuring
*/
const {street, city} = data.address
console.log(`street: ${street}, city: ${city}`)

