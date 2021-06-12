// return tipe data function

function getName(): string{
  return "Rahmat";
}

console.log(getName());

function number(): number {
  return 123;
}
console.log(number());

function arrayNumber(): number[]{
  return [1, 2, 3];
}
console.log(arrayNumber());

function arrayString(): string[]{
  return ["ini", "budi"];
}
console.log(arrayString());

function any(): any{
  return "ok";
}
console.log("OK");

function arrayAny(): any[]
{
  return ["string", 12];
}
console.log(arrayAny());

function arrayTuples(): [string, number, boolean]
{
  return ["ok", 1, false];
}
console.log(arrayTuples());

function print(): void {
  console.log("OK");
}
print();