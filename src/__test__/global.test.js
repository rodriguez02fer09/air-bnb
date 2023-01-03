const text = "hola mundo";
const fruits = ["manzana", "melon", "banana"];
test("debe contener un texto", () => {
  expect(text).toMatch(/mundo/);
});

test("debe contener un texto", () => {
  expect(fruits).toContain("banana");
});

test("Mayor que ", () => {
  expect(10).toBeGreaterThan(9);
});

test("verdadero", () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};
test("probar un callback", function () {
  reverseString("hola", (str) => {
    expect(str).toBe("aloh");
  });
});

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error"));
    }
    resolve(str.split('').reverse().join(''));
  });
};  

test("prueba una promesa", () => {
  return reverseString2('hola')
  .then((string) => {
    expect(string).toBe('aloh');
  });
});

test ('probar async/wait',  async() => {
const string = await reverseString2('hola')
expect(string).toBe('aloh')
})

// afterEach(()=> console.log('despues de cada prueba '))
// afterAll(()=> console.log('despues de todas las pruebas'))

// beforeEach(()=> console.log('antes de cada prueba '))
// beforeAll(()=> console.log('antes de todas las pruebas'))