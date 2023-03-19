const dog =  {
    name:"Gabar",
    activities:['play','eat dog food'],
    dogFriends:[
        {
            name:'Ira',
            activities:['be grumpy','eat bread omlet'],
            weight:8,
            furcolor:'white'
        },
        {
            name:'Snowy',
            activities:['sleep','pre-sleep naps'],
            weight:3
        }
    ]
}
dog.name = 'Gabbar'
dog.height = 15
dog.weight = 2
let total_weight = 0;
let total_activities = 0;
let names = []
let act = [];
for(let i = 0;i<dog.dogFriends.length;i++){
    names.push(dog.dogFriends[i].name)
    act.push(dog.dogFriends[i].activities)
    total_activities += dog.dogFriends[i].activities.length
    total_weight += dog.dogFriends[i].weight
}
console.log(names)
console.log(act)
console.log("No. of activites",total_activities)
console.log("Total weight",total_weight)
