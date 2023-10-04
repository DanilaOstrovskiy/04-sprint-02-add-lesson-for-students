
function getLastItem<T>(array: T[]): T | undefined {
    if (array.length === 0) {
        return undefined; // Handle empty array case
    }
    return array[array.length - 1];
}

const res1 = getLastItem(["html", "css"]);
const res2 = getLastItem([6, 9]);
console.log(res1);
console.log(res2);
