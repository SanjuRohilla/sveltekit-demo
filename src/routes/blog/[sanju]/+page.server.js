// will purely run on server
export async function load({params}){
    
    // const slug = ${params.slug}
    return{
       content: `hello ${params.sanju}`
    }

}

