function call_for_name(name:string, surname:string = ""):string{
    return `${name} ${surname}`
}

function main():void{
    let my_name: string = call_for_name("Iglésio")

    console.log(`Hi! My name is ${my_name}`)
}

main()