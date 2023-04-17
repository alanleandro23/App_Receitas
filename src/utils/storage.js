import asyncStorage from '@react-native-async-storage/async-storage' 
//Buscar, Salvar e Remover Favoritos

export async function getFavorites(key){
    const favorites = await asyncStorage.getItem(key)
    return JSON.parse(favorites) || [];
}

export async function saveFavorites(key, newItem){
    let myFavorites = await getFavorites(key);
        let hasItem = myFavorites.some(item => item.id === newItem.id )
            if(hasItem){
                console.log("Já está salvo!")
                return;
            }
        myFavorites.push(newItem)
            await asyncStorage.setItem(key, JSON.stringify(myFavorites))
                console.log("Salvo com Sucesso!")
}

export async function removeItem(id){
    let receipes = await getFavorites("@appreceitas")

    let myFavorites = receipes.filter (item => {
        return (item.id !== id)
    })
    await asyncStorage.setItem("@appreceitas", JSON.stringify(myFavorites));
    console.log("Item removido")
    return myFavorites;
}

export async function isFavorite(receipe){
    let myReceipes = await getFavorites("@appreceitas")
    const favorite = myReceipes.find( item => item.id === receipe.id)
    if(favorite){
        return true;
    }
    return false;
}