import { Kleur } from "kleur";
import  { prompts } from ".";
import type { Choice, PromptType } from ".";
import type { Key } from "readline";
let customerText ="\n\n Notification Open"

const select:Choice[] = new Array(30).fill(0).map((e, i): Choice =>{
    return {
        title: `Option ${i}`,
        value: String(i)
    }
})
function onrederHandler(kleur: Kleur){
    console.log(customerText)
}
function onCustomHandler(this: ThisType<any>, key: Key, keyname: string){
    if(keyname === 'd'){
        customerText = '\n\nNotification Close'
        this.render()
    }
}

const promptSelectTest =  prompts.autocomplete({
    name: 'hola',
    message: 'testselect',
    customKeyHandler: onCustomHandler,
    onRender: onrederHandler,
    type: 'multiselect',
    choices: select,
})
