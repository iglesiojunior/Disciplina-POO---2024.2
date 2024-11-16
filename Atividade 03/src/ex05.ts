function exibir(...strings: string[]): void {
    strings.forEach(str => console.log(str));
  }
function main():void{
    exibir("a", "b");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");
}
main()