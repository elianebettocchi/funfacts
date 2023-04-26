const initState = { posts: [ 
     {id: '1', title: 'How did Brazil get its name?', body: 'The etymology of the word is obscure. Some defend that it derives from Celtic and Gaelic languages meaning "grandeur" or "beauty", and others maintain that it comes from the Latin brasas meaning "flames". Others say the word evokes an old Irish clan. More so, it is likely to derive from the Pau-Brasil trees from where the portuguese extracted red pigment.'},
     
     {id: '2', title: 'Three things invented in Brazil:', body: 'Caller ID by Nélio José Nicolai; Airplane - first unassisted flight - by Alberto Santos-Dumont; DRE voting machine, the first Direct-Recording Electronic Voting Machine was implemented in Brazil by Judge Carlos Prudêncio in the Southern City of Brusque, back in 1989.'},        
     
     {id: '3', title: 'What is Brazil culture quick facts?', body: 'Brazilian families tend to be tight-knit, warm, and loving. They generally enjoy each others company and prefer spending time together than privately. In Brazilian culture, men are usually allowed more freedom than women. Brazilian girls have less freedom than girls from most European and North American countries. It is one of the most racists places in the world: 54% of the population is black or brown, but less than 10% of this population comprises the economical and political elite.'
}   
]
};

const rootReducer =(state = initState, action) =>{
if(action.type === 'DELETE_POST'){
    let newPosts = state.posts.filter (post =>{
return action.id !== post.id;
    });
    return{
        ...state,
        posts: newPosts
    }
}
    return state;
};

export default rootReducer;